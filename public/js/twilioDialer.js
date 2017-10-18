const API_URL = 'https://api.congresswhois.com';

let tokenCache = null;
const getToken = () => {
  tokenCache = tokenCache || fetch(API_URL + '/twilio/token')
    .then((response) => response.json())
    .then((json) => {
      return new Promise((resolve, reject) => {
        const setup = Twilio.Device.setup(json.token);

        Twilio.Device.ready(function (device) {
          loggingInfo.style.display = 'block';
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

const makeCall = (target) => {
  const params = {
    Member: target.dataset.member,
    Chamber: target.dataset.chamber,
    To: target.dataset.number
  };

  return Twilio.Device.connect(params);
};

let conn;
let loggingInfo;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('root').addEventListener('click', (event) => {
    let targetElement = event.target;
    if (targetElement.id === 'call-representative') {
      loggingInfo = document.getElementById('calling-log');

      if (conn) {
        Twilio.Device.disconnectAll();
        conn = null;
        changeButtonMessage(targetElement, 'call square', 'Call Member, free!');
      } else if (targetElement.dataset.number) {
        getToken().then((setup) => {
          conn = makeCall(targetElement);
          changeButtonMessage(targetElement, 'call square', 'Calling Member');
          return conn;
        }).then(() => {
          changeButtonMessage(targetElement, 'remove', 'Hang up');
        });
      }
    }
  });
});

function changeButtonMessage(button, icon, message) {
  button.innerHTML = `<i class="${icon} icon"></i>${message}`;
}
