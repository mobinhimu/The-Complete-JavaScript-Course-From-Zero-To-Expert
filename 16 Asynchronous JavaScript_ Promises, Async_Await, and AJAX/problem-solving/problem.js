// Asynchronous JavaScript
// console.log("Hello Bangladesh");

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const images = document.querySelector(".images");

function getCountry(data, neighbourClass = "") {
  console.log(data);
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

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
}

// 1.
// const whereAmI = function (lat, lng) {
//   //   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//   //   fetch(`https://geocode.maps.co/reverse?lat={${lat}}&lon={${lng}}`)

//   fetch(
//     `https://geocode.xyz/${lat},${lng}?json=1&auth=531543343559958800142x28520`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       return ({ city, country } = data);
//       // console.log(`You are in ${city}, ${country}`);
//     })
//     .then(({ city, country }) => {
//       return fetch(`https://restcountries.com/v3.1/name/${country}`);
//     })
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(
//           "This API allows you to make only 1 requests per second 🔥🔥🔥🔥 "
//         );
//       }

//       return res.json();
//     })
//     .then((data) => {
//       const [country] = data;

//       getCountry(country);
//     });
// };

// converting to async await

// const whereAmI = async function (lat, lng) {
//   const res = await fetch(
//     `https://geocode.xyz/${lat},${lng}?json=1&auth=531543343559958800142x28520`
//   );
//   const data = await res.json();
//   const { city, country } = data;
//   console.log(city, country);
//   getCountry(data);
// };

// whereAmI(52.508, 13.381);

const wait = function (time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time * 1000);
  });
};

// wait(1)
//   .then(() => {
//     whereAmI(52.508, 13.381);
//     return wait(1.5);
//   })
//   .then(() => {
//     whereAmI(19.037, 72.873);
//     return wait(1.5);
//   })
//   .then(() => whereAmI(-33.933, 18.474));

// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {}, 1000);
//   }, 1000);
// }, 1000);

// PART 2
// navigator.geolocation.getCurrentPosition((location) => {
//   const { latitude, longitude } = location.coords;
//   whereAmI(latitude, longitude);
// });

// const wait = function (time) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, time * 1000);
//   });
// };

// const createImage = function (imgPath) {
//   return new Promise((resolve, reject) => {
//     const image = document.createElement("img");
//     image.setAttribute("src", imgPath);

//     image.addEventListener("load", () => {
//       images.appendChild(image);
//       resolve(image);
//     });

//     image.addEventListener("error", () => {
//       reject(new Error("Image Not Found"));
//     });
//   });
// };

// let loadedImage;
// createImage("../starter/img/img-1.jpg")
//   .then((img) => {
//     loadedImage = img;
//     console.log("Image 1 is loaded");
//     return wait(2);
//   })
//   .then(() => {
//     loadedImage.style.display = "none";
//     return createImage("../starter/img/img-2.jpg");
//   })
//   .then((img) => {
//     loadedImage = img;
//     console.log("Image 2 is loaded");
//     return wait(2);
//   })
//   .then(() => (loadedImage.style.display = "none"))
//   .catch((err) => console.error(err));

// (async function () {
//   await createImage("../starter/img/img-1.jpg");
//   await img;
//   console.log("Image 1 is loaded");
//   return wait(2);
// })();

// const whereAmI = async function (lat, lng) {
//   const res = await fetch(
//     `https://geocode.xyz/51.50354,-0.12768?geoit=json&auth=531543343559958800142x28520`
//   );

//   const data = res.json();
//   console.log(data);

//   // const data = await res.json();
//   // console.log(data);
// };

// whereAmI(52.508, 13.381);

// const data = async function () {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
//     if (!res.ok) throw new Error("Something Went Wrong 🔥");
//     const data = await res.json();
//     console.log(res);
//     console.log(data);

//     return data.title;
//   } catch (error) {
//     console.error(error);

//     // throw error;
//   }
// };
// console.log("Execution First 1 ");
// data()
//   .then((res) => console.log(`${res} Execution 2`))
//   .catch((err) => console.log(`${err} Execution 2🔥`))
//   .finally(() => console.log("Execution First 3"));

// (async function () {
//   console.log("Execution First 1 ");
//   try {
//     const res = await data();
//     console.log(`${res} Execution 2`);
//   } catch (error) {
//     console.log(`${error} Execution 2🔥`);
//   } finally {
//     console.log("Execution First 3");
//   }
// })();

// fetch(`https://jsonplaceholder.typicode.com/todos`)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// const reqData = function (lat, lng) {
//   const request = new XMLHttpRequest();
//   request.open(
//     "GET",
//     `https://geocode.xyz/${lat},${lng}?json=1&auth=531543343559958800142x28520`
//   );
//   request.onload = () => {
//     const data = JSON.parse(request.responseText);
//     console.log(data);
//     console.log(request.responseText);
//   };
//   request.send();
// };

// reqData(52.508, 13.381);

// const getJson = async function (url) {
//   const res = await fetch(url);
//   const data = res.json();
//   return data;
// };

const data = async function (c1, c2, c3) {
  try {
    // const [country1] = await getJson(
    //   `https://restcountries.com/v3.1/name/${c1}`
    // );
    // const [country2] = await getJson(
    //   `https://restcountries.com/v3.1/name/${c2}`
    // );
    // const [country3] = await getJson(
    //   `https://restcountries.com/v3.1/name/${c3}`
    // );

    // console.log([
    //   country1.capital[0],
    //   country2.capital[0],
    //   country3.capital[0],
    // ]);

    // const data = await Promise.all([
    //   getJson(`https://restcountries.com/v3.1/name/${c1}`),
    //   getJson(`https://restcountries.com/v3.1/name/${c2}`),
    //   getJson(`https://restcountries.com/v3.1/name/${c3}`),
    // ]);

    // const data = await Promise.race([
    //   getJson(`https://restcountries.com/v3.1/name/${c1}`),
    //   getJson(`https://restcountries.com/v3.1/name/${c2}`),
    //   getJson(`https://restcountries.com/v3.1/name/${c3}`),
    // ]);

    // const capital = data.map((d) => d[0].capital[0]);

    // console.log(capital);
    console.log(data[0]);
  } catch (error) {
    console.error("Something went wrong 🔥");
  }
};

// data("bangladesh", "india", "japan");

// (async function (params) {
//   const data = await Promise.race([
//     getJson(`https://restcountries.com/v3.1/name/america`),
//     getJson(`https://restcountries.com/v3.1/name/india`),
//     getJson(`https://restcountries.com/v3.1/name/japan`),
//   ]);

//   console.log(data[0]);
// })();

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const image = document.createElement("img");
    image.setAttribute("src", imgPath);

    image.addEventListener("load", () => {
      images.appendChild(image);
      resolve(image);
    });

    image.addEventListener("error", () => {
      reject(new Error("Image Not Found"));
    });
  });
};

// createImage("../starter/img/img-1.jpg")
//   .then((img) => {
//     loadedImage = img;
//     console.log("Image 1 is loaded");
//     return wait(2);
//   })
//   .then(() => {
//     loadedImage.style.display = "none";
//     return createImage("../starter/img/img-2.jpg");
//   })
//   .then((img) => {
//     loadedImage = img;
//     console.log("Image 2 is loaded");
//     return wait(2);
//   })
//   .then(() => (loadedImage.style.display = "none"))
//   .catch((err) => console.error(err));

// (async function () {
//   await createImage("../starter/img/img-1.jpg");
//   await img;
//   console.log("Image 1 is loaded");
//   return wait(2);
// })();

let loadedImage;
const loadNPause = async function () {
  try {
    const img = await createImage("../starter/img/img-1.jpg");
    loadedImage = img;
    await wait(3);
    console.log("Image One Is Loaded");
    loadedImage.style.display = "none";
    const img2 = await createImage("../starter/img/img-2.jpg");

    loadedImage = img2;
    await wait(3);
    console.log("Image Two Is Loaded");
    loadedImage.style.display = "none";
  } catch (error) {
    console.error(error);
  }
};
// loadNPause();
const imgArr = [
  "../starter/img/img-1.jpg",
  "../starter/img/img-2.jpg",
  "../starter/img/img-3.jpg",
];

const loadAll = async function (imgArr) {
  try {
    const imgs = await imgArr.map(async (img) => await createImage(img));

    const imgEl = await Promise.all(imgs);
    imgEl.forEach((img) => img.classList.add("parallel"));
  } catch (error) {
    console.error(error);
  }
};

loadAll(imgArr);
