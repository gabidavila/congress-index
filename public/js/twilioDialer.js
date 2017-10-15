const API_URL = 'http://ppbe.ngrok.io';

const phoneButton =  document.getElementById('call-representative');
let tokenCache = null;
const getToken = (targetLog) => {
  tokenCache = tokenCache || fetch(API_URL + '/twilio/token')
    .then((response) => response.json())
    .then((json) => {
      return new Promise((resolve, reject) => {
        const setup = Twilio.Device.setup(json.token);

        Twilio.Device.ready(function (device) {
          console.log('Twilio.Device Ready!');
          resolve(setup);
        });

        Twilio.Device.error(function (error) {
          console.log('Twilio.Device Error: ' + error.message);
          reject(error.message);
        });

        Twilio.Device.connect(function (conn) {
          console.log('Successfully established call!');
        });

        Twilio.Device.disconnect(function (conn) {
          console.log('Call ended.');
        });
      });
    });
  return tokenCache;
};

const makeCall = (number) => {
  const params = {
    To: number
  };

  return Twilio.Device.connect(params);
};

let conn;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('root').addEventListener('click', (event) => {
    if (event.target.id === 'call-representative') {
      const number = event.target.dataset.number;
      if (conn) {
        Twilio.Device.disconnectAll();
        conn = null;
        event.target.innerHTML = '<i aria-hidden="true" class="call square icon"></i>Call Member';
      } else if (number) {
        getToken().then((setup) => {
          conn = makeCall(number);
          return conn;
        }).then((conn) => {
          event.target.innerHTML = '<i aria-hidden="true" class="remove icon"></i>Hang up';
        });
      }
    }
  });
});
