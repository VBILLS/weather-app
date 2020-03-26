window.addEventListener('load', () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.long;
      lat = position.lat;

      const api = `https://api.darksky.net/forecast/64ba8a3916e562da1c3038e0e454a0e8/${lat}, ${long}`;
    });
    fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
  }
});
