import React, { Component } from 'react';
import Editor from './Editor';
import Calendar from './Calendar';
import { Route, Switch } from 'react-router-dom';

let today;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: {},
        dataToPrint:{}
    }
    this.getDay = this.getDay.bind(this);
    this.showMessageInput=this.showMessageInput.bind(this);
    this.saveMessage=this.saveMessage.bind(this);
    this.createSmilie=this.createSmilie.bind(this);
  }
  componentDidMount(){
    this.getDay();
  }
  getDay() {
    today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0
    let yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    this.setState({
      data: {
        ...this.state.data,
        [today]:{
        date: today,
        }
      }
    }, () => console.log(this.state.data))
  }

  showMessageInput(e){
    if(e.target.value === "happy"){
        this.setState({
          data: {
            ...this.state.data,
            [today]:{
            ...this.state.data[today],
            mood:true
            }
          }
        })
    } else {
        this.setState({
          data: {
            ...this.state.data,
            [today]:{
            ...this.state.data[today],
            mood:false,
            contentMessage: '',
            }
          }
        })
    }
  }

  saveMessage(e){
    this.setState({
      data: {
        ...this.state.data,
        [today]:{
        ...this.state.data[today],
        contentMessage: e.target.value,
        }
      }
    })
  }

  createSmilie(){
    if(!JSON.parse(localStorage.getItem('dates'))){
      localStorage.setItem(`dates`, JSON.stringify([this.state.data[today]]));
    } else {
      const dates = JSON.parse(localStorage.getItem('dates'));
      console.log(dates);
      dates.push(this.state.data[today]);
      console.log(dates);
      localStorage.setItem(`dates`, JSON.stringify(dates));
      this.setState({
        dataToPrint: dates,
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Switch>
        <Route 
          exact path='/' 
          render={ () =>  
            <Editor 
              date={today}
              data={this.state.data}
              showMessageInput={this.showMessageInput}
              saveMessage={this.saveMessage} 
              createSmilie={this.createSmilie}
            />
          } 
        />
        <Route 
          path='/calendar' 
          render={ () =>
            <Calendar
              dataToPrint={this.state.dataToPrint}
            />
          }
        />
        </Switch>
      </div>
    );
  }
}

export default App;
