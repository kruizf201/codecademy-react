import React from 'react';
import ReactDOM from 'react-dom';

class StateFull extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'React' };
  }
  render() {
    return <div>{this.state.name}</div>;
  }
}

ReactDOM.render(<StateFull />, document.getElementById('app'))
