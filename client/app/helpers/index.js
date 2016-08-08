/* global navigator */
const helpers = {
  getGeolocation: () => {
    if (!('geolocation' in navigator)) {
      // geolocation not available
      console.log('geolocation required.');
      return {};
    }
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        if (!position) {
          reject(position);
        } else {
          resolve(position.coords);
        }
      });
    });
  },
};

export default helpers;
