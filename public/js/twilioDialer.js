const API_URL = 'http://ppbe.ngrok.io';

const phoneButton =  document.getElementById('call-representative');

const getToken = () => {
  return fetch(API_URL + '/twilio/token')
    .then((response) => response.json())
    .then((json) => {
      const setup = Twilio.Device.setup(json.token);
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
      return setup;
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
    if (event.target.id === 'call-representative') {
      const number = event.target.dataset.number;
      if (number) {
        getToken().then(() => {
          if (conn === undefined) {
            event.target.innerHTML = 'Calling...';
            conn = makeCall(number);
          }
          return conn;
        }).then((conn) => {
          event.target.innerHTML = '<i aria-hidden="true" class="remove icon"></i>Hang up';
          if (conn && conn.status() === 'open') {

            const resp = Twilio.Device.disconnectAll();
            event.target.innerHTML = '<i aria-hidden="true" class="call square icon"></i>Call Member';
          }
        });
      }
    }
  });
});
