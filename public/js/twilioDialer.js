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
          loggingInfo.style.display = 'block';
          loaderInfo.style.display = 'none';
          loggingInfo.innerHTML = 'Starting connection.';
          resolve(setup);
        });

        Twilio.Device.error(function (error) {
          loggingInfo.innerHTML = 'An error occurred.';
          console.log(error.message);
          reject(error.message);
        });

        Twilio.Device.connect(function (conn) {
          loggingInfo.innerHTML = 'Connection established.';
        });

        Twilio.Device.disconnect(function (conn) {
          loggingInfo.innerHTML = 'Call ended.';
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
let loggingInfo;
let loaderInfo;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('root').addEventListener('click', (event) => {
    let targetElement = event.target;
    if (targetElement.id === 'call-representative') {
      const number = event.target.dataset.number;
      loggingInfo = document.getElementById('calling-log');
      loaderInfo = document.getElementById('calling-loader');
      loaderInfo.style.display = 'block';

      if (conn) {
        Twilio.Device.disconnectAll();
        conn = null;
        changeButtonMessage(targetElement, 'call square', 'Call Member, free!');
      } else if (number) {
        getToken().then((setup) => {
          conn = makeCall(number);
          changeButtonMessage(targetElement, 'call square', 'Calling Member');
          return conn;
        }).then((conn) => {
          changeButtonMessage(targetElement, 'remove', 'Hang up');
        });
      }
    }
  });
});

function changeButtonMessage(button, icon, message) {
  button.innerHTML = `<i class="${icon} icon"></i>${message}`;
}
