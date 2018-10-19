import React, { Component } from 'react';
import Editor from './Editor';
import Calendar from './Calendar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        displayMessage: false,
        contentMessage:'',
    }
    this.getDay = this.getDay.bind(this);
    this.showMessageInput=this.showMessageInput.bind(this);
    this.saveMessage=this.saveMessage.bind(this);
  }
  getDay() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0
    let yyyy = today.getFullYear();
    // if(dd < 10) {
    //   dd = '0'+ dd
    // }
    // if(mm < 10) {
    //   mm = '0'+ mm
    // }
    return today = dd + '/' + mm + '/' + yyyy;
  }

  showMessageInput(e){
    console.log(e.target.value);
    if(e.target.value === "happy"){
        this.setState({
            displayMessage: true,
        })
    } else {
        this.setState({
            displayMessage: false,
        })
    }
  }

  saveMessage(e){
    this.setState({
        contentMessage: e.target.value,
    })
  }
  render() {
    return (
      <div className="App">
        <Editor 
          displayMessage={this.state.displayMessage}
          contentMessage={this.state.contentMessage}
          getDay={this.getDay}
          showMessageInput={this.showMessageInput}
          saveMessage={this.saveMessage}/>
        <Calendar/>
      </div>
    );
  }
}

export default App;
