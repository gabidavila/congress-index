import React from 'react';
import CompareSearch from './compare/Search';

class CompareContainer extends React.Component {
  render() {
    return (
      <div>
        <CompareSearch chamber='house'/>
      </div>
    );
  }
}

export default CompareContainer;
