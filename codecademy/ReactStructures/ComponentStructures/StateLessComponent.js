import React from 'react';
import ReactDOM from 'react-dom';

class StateLess extends React.Component {
  render() {
    return <h1>Hey, my name is React!</h1>;
  }
}

ReactDOM.render(<StateLess />, document.getElementById('app'))
