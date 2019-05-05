import React from 'react';
import {Form, Button, Label, Icon } from 'semantic-ui-react';

const Twilio = window.Twilio;

class CallButton extends React.Component {
  state = {
    isOnCall: false,
    buttonText: 'Call Member, free!',
    logText: null,
    token: null,
    twilioSetup: null
  };

  getToken = () => {
    if (this.state.token !== null) {
      return this.setupTwilio();
    }
    return fetch(process.env.REACT_APP_BASE_TWILIO + '/twilio/token?number=' + this.props.member.phone)
      .then((response) => response.json())
      .then((tokenJson) => {
        this.setState({token: tokenJson.token}, () => this.setupTwilio());
      });
  };

  handleCall = () => {
    if (this.state.twilioSetup) {
      Twilio.Device.disconnectAll();
    }

    this.getToken().then(() => {
      this.makeCall();
    });
  };

  makeCall = () => {
    const params = {
      Member: this.props.member['full-name'],
      Chamber: this.props.member['congress-type'],
      To: this.props.member['phone']
    };

    return Twilio.Device.connect(params);
  };

  setupTwilio = () => {
    return new Promise((resolve, reject) => {
      const setup = Twilio.Device.setup(this.state.token);
      this.setState({twilioSetup: setup});

      Twilio.Device.ready(function (device) {
        this.setState({
          isOnCall: true,
          logText: 'Trying to connect...'
        }, () => resolve(setup));
      }.bind(this));

      Twilio.Device.error(function (error) {
        this.setState({
          isOnCall: true,
          buttonText: 'Call Member, free!',
          logText: 'An error occurred.'
        }, () => {
          console.log(error.message);
          reject(error.message);
        });
      }.bind(this));

      Twilio.Device.connect(function (conn) {
        this.setState({
          isOnCall: true,
          buttonText: 'End the call.',
          logText: 'Connection established.'
        });
      }.bind(this));

      Twilio.Device.disconnect(function (conn) {
        this.setState({
          isOnCall: false,
          buttonText: 'Call Member, free!',
          logText: 'Call ended.'
        });
      }.bind(this));
    });
  };

  render() {
    return (
      <Form>
        <Button size='large' color='green' onClick={this.handleCall} className='remove-radius' floated='right'>
          <Icon name='call square'/>{this.state.buttonText}</Button>
        {this.state.isOnCall ? <Label basic color='grey' style={{ float: 'right', fontSize: '18px' }}>{this.state.logText}</Label> : null}
      </Form>
    );
  };
}

export default CallButton;
