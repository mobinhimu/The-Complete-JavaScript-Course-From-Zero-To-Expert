'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = Date.now() + ''.slice(-10);
  workoutCount = 0;

  constructor(distance, duration, cords) {
    this.distance = distance; //in km
    this.duration = duration; // in min
    this.cords = cords; //[lat , lag]
    this._description();
  }

  _description() {
    this.description = `${this.type && this.type[0].toUpperCase()}${
      this.type && this.type.slice(1)
    } on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }

  click() {
    this.workoutCount++;
  }
}

class Running extends Workout {
  constructor(distance, duration, cords, cadence, type) {
    super(distance, duration, cords);
    this.cadence = cadence;
    this.type = type;

    this.clcPeace();
    this._description();
  }

  clcPeace() {
    this.peace = this.duration / this.distance;

    return this.peace;
  }
}

class Cycling extends Workout {
  constructor(distance, duration, cords, elevationGain, type) {
    super(distance, duration, cords);
    this.elevationGain = elevationGain;
    this.type = type;

    this.clcSpeed();
    this._description();
  }

  clcSpeed() {
    this.peace = this.distance / (this.duration / 60);

    return this.peace;
  }
}

const run1 = new Running(5.2, 24, [39, -12], 178);
const cycling1 = new Cycling(27, 95, [39, -12], 523);

// application  architecture
class App {
  #workoutZoomLabel = 15;
  #map;
  #mapEvent;
  #works = [];

  constructor() {
    this._getPosition();

    this._getLocalStorage();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () => {
      alert('Location Not Found');
    });
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const cords = [latitude, longitude];

    this.#map = L.map('map').setView(cords, this.#workoutZoomLabel);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    this.#works.forEach(work => {
      this._renderWorkOutMarker(work);
      // this._renderWorkout(work);
    });
  }

  _showForm(eve) {
    this.#mapEvent = eve;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');

    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(eve) {
    eve.preventDefault();

    const inputValidation = (...inputs) =>
      inputs.every(input => Number.isFinite(input));

    const negativeInput = (...inputs) => inputs.every(input => input > 0);

    // get data from input
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // running object
    if (type === 'running') {
      const cadence = +inputCadence.value;

      // valid form
      if (
        !inputValidation(distance, duration, cadence) ||
        !negativeInput(distance, duration, cadence)
      )
        return alert('Input Should Be Valid Numbers!');

      workout = new Running(distance, duration, [lat, lng], cadence, type);
    }

    // cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      if (
        !inputValidation(distance, duration, elevation) ||
        !negativeInput(distance, duration)
      )
        return alert('Input Should Be Valid Numbers!');

      workout = new Cycling(distance, duration, [lat, lng], elevation, type);
    }

    this.#works.push(workout);

    this._renderWorkOutMarker(workout);

    this._renderWorkout(workout);

    this._hideForm();

    this._setLocalStorage();
  }

  _renderWorkOutMarker(workout) {
    L.marker(workout.cords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 350,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
          content: `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${
            workout.description
          }`,
        })
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;

    if (workout.type === 'running') {
      html += `

      <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.peace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence.toFixed(1)}</span>
            <span class="workout__unit">spm</span>
       </div>
      
      `;
    }

    if (workout.type === 'cycling') {
      html += `

      <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.peace.toFixed(1)}</span>
      <span class="workout__unit">km/h</span>
    </div>

    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${workout.elevationGain.toFixed(1)}</span>
      <span class="workout__unit">m</span>
    </div>
      `;
    }

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(eve) {
    const workoutEl = eve.target.closest('.workout');

    if (!workoutEl) return;

    const workout = this.#works.find(work => work.id === workoutEl.dataset.id);

    this.#map.setView(workout.cords, this.#workoutZoomLabel, {
      animation: true,
      pan: {
        duration: 1,
      },
    });

    workout.click();
  }

  _setLocalStorage() {
    //   if (localStorage.getItem('workout')) {
    //     this.#works.push(JSON.parse(localStorage.getItem('workout')));
    //   } else {
    //     // console.log(false);
    localStorage.setItem('workout', JSON.stringify(this.#works));
    //   }

    //   localStorage.setItem('workout', JSON.stringify(this.#works));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workout'));

    if (!data) return;

    this.#works = data;

    this.#works.forEach(work => {
      // this._renderWorkOutMarker(work);
      this._renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem('workout');
    location.reload();
  }
}

const app = new App();
