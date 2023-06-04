'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
function getCountry(data, neighbourClass = '') {
  const [currencies] = Object.values(data.currencies);
  const html = `
    <article class="country ${neighbourClass}">
        <img class="country__img" src="${data.flags.png}" alt="${
    data.flags.alt
  }" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.ben}</p>
            <p class="country__row"><span>💰</span> ${currencies.name}</p>
        </div>
    </article>
  
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

const renderError = function (err) {
  countriesContainer.insertAdjacentText('beforeend', 'Hello bnagladesh');
};
// const getBesideCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     getCountry(data);

//     //beside country
//     const beside = data?.borders[0];
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${beside}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       getCountry(data2, 'neighbour');
//     });
//   });
// };

// getBesideCountry('spain');

const getBesideCountry = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => {
      if (!res.ok)
        throw new Error(`Country Is Not Found  )D : Code : ${res.status}`);
      return res.json();
    })
    .then(data => {
      getCountry(data[0]);

      const beside = data[0].borders[0];

      return fetch(`https://restcountries.com/v3asd.1/alpha/${beside}`);
    })
    .then(res => {
      if (!res.ok)
        throw new Error(
          `Neghbour Country Is Not Found  )D : Code : ${res.status}`
        );
      res.json();
    })
    .then(data => getCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(err);
      renderError(err);
    });
};

btn.addEventListener('click', function () {
  getBesideCountry('bangladesh');
});
