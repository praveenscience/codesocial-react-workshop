import React, { Component } from "react";
import TextForm from "./TextForm";

class App extends Component {
  state = {
    UserText: "Hello"
  };
  handleTextChange = e => {
    this.setState({ UserText: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Code Social React</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>The user text is {this.state.UserText}.</p>
              <pre className="border rounded p-1 bg-light my-3">
                {JSON.stringify(
                  { State: this.state, Props: this.props },
                  null,
                  2
                )}
              </pre>
            </div>
            <div className="col-6">
              <form>
                <TextForm
                  Label="First"
                  Text={this.state.UserText}
                  handleChange={this.handleTextChange}
                />
                <TextForm
                  Label="Second"
                  Text={this.state.UserText}
                  handleChange={this.handleTextChange}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
