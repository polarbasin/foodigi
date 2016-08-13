/* global navigator, window */
import GC from 'great-circle';
import GyroNorm from '../../../node_modules/gyronorm/dist/gyronorm.complete.min.js';

const helpers = {
  getGeolocation: () => {
    if (!('geolocation' in navigator)) {
      // geolocation not available
      console.log('geolocation required.');
      return {};
    }
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position, err) => {
        if (err) {
          reject(err);
        } else {
          resolve(position.coords);
        }
      });
    });
  },

  watchGeolocation: (callback) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition
    if (!('geolocation' in navigator)) {
      callback({
        message: 'geolocation required.',
        err: 'Geolocation not supported',
      });
    } else {
      const id = navigator.geolocation.watchPosition((position) => {
        // need to cancel id at some point
        callback(null, position, id);
      }, (err) => {
        callback({
          message: 'Error getting location',
          err,
        });
      }, {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: 500,
      });
    }
  },
  getCompassHeading: (callback) => {
    if (!window.DeviceOrientationEvent) {
      callback({ message: 'device not supported.' });
    } else {
      window.addEventListener('deviceorientation', (event) => {
        let compassHeading;
        if (event.webkitCompassHeading) {
          // iOS compass Heading
          compassHeading = event.webkitCompassHeading;
        } else {
          // everything else
          compassHeading = event.alpha;
        }
        callback(null, compassHeading);
      });
    }
  },
  getDeviceHeading: (callback) => {
    const gn = new GyroNorm();
    gn.init().then(() => {
      gn.start((data) => {
        callback(null, 360 - data.do.alpha);
      });
    });
  },
  calculateBearing: (origin, dest) => (
    GC.bearing(origin.latitude, origin.longitude, dest.latitude, dest.longitude)
  ),
  calculateDist: (origin, dest, unitType = 'FT') => (
    // KM - kilometers
    // MI - miles
    // NM - nautical miles
    // YD - yards
    // FT - feet
    GC.distance(origin.latitude, origin.longitude, dest.latitude, dest.longitude, unitType)
  ),
};

export default helpers;
