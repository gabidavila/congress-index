import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class Zipcode extends React.Component {
  state = {
    zipcode: ''
  };

  handleSubmit = () => {
    this.props.search(this.state.zipcode);
  };

  handleChange = (event) => {
    if (event.target.value.length > 5) {
      return;
    }

    this.setState({
      zipcode: event.target.value
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <input placeholder='Zipcode' onChange={this.handleChange} value={this.state.zipcode} name='zipcode'/>
        </Form.Field>
        <Button color='teal' className='customTealBackground' fluid>Lookup</Button>
      </Form>
    );
  }
};

export default Zipcode;
