import React from 'react';

export default class AddUser extends React.Component {

  constructor() {
    super();

    this.state = {

    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {

  }

  render() {
    return (
      <form>
        <input type="button" value="Submit" onClick={this.handleSubmit}/>
      </form>
    );
  }
}
