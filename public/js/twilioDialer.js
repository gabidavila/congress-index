const API_URL = 'http://ppbe.ngrok.io';

const phoneButton =  document.getElementById('call-representative');

const getToken = () => {
  return fetch(API_URL + '/twilio/token')
    .then((response) => response.json())
    .then((json) => {
      Twilio.Device.setup(json.token);

      Twilio.Device.ready(function (device) {
        console.log('Twilio.Device Ready!');
      });

      Twilio.Device.error(function (error) {
        console.log('Twilio.Device Error: ' + error.message);
      });

      Twilio.Device.connect(function (conn) {
        console.log('Successfully established call!');
      });

      Twilio.Device.disconnect(function (conn) {
        console.log('Call ended.');
      });
    });
};

const makeCall = (number) => {
  const params = {
    To: number
  };

  console.log('Calling ' + params.To + '...');
  return Twilio.Device.connect(params);
};

let conn;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('root').addEventListener('click', (event) => {
    if (event.target.children[0] && event.target.children[0].id === 'call-representative') {
      const phoneButton = event.target;
      const number = event.target.children[0].innerText;
      if (number) {
        getToken().then(() => {
          if (conn === undefined) {
            conn = makeCall(number);
          }
          return conn;
        }).then((conn) => {
          if (conn && conn.status() === 'open') {
            Twilio.Device.disconnectAll();
          }
        });
      }
    }
  });
});
