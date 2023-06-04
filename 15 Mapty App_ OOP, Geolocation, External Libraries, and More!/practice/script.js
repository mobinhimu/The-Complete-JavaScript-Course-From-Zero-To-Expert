navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(latitude, longitude);
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    console.log(position);

    var map = L.map("map").setView([51.505, -0.09], 17);

    L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup("A pretty CSS popup.<br> Easily customizable.")
      .openPopup();
  },
  () => {
    alert("Location Not Found");
  }
);
