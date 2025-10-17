import { $currentPosition } from "../dom.js";

export const geoLocalization = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = (position) => {
    let coords = position.coords;

    $currentPosition.innerHTML = `<p>Tu locacion es:</p>
        <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Precision: <b>${coords.accuracy}</b></li></ul>
        <iframe
        src="https://www.google.com/maps?q=${coords.latitude},${coords.longitude}&z=15&output=embed"
        width="800"
        height="300"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>`;
  };

  const error = (err) => {
    $currentPosition.innerHTML = `<p>Error ${err.code}: ${err.message}</p>`;
    console.log(`Error ${err.code}: ${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
};
