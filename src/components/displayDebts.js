import React from 'react';

export default class DisplayDebts extends React.Component {

  constructor() {
    super();

    this.state = {

    };


  }


  render() {
    return (
      <select onChange={this.handleOwnerEmail}>
        {this.props.emails.map((email) => <option key={email} value={email} >{email}</option>)}
      </select>
    );
  }
}
