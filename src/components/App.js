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
        itemToPrint: null
    }
    this.getDay = this.getDay.bind(this);
    this.showMessageInput=this.showMessageInput.bind(this);
    this.saveMessage=this.saveMessage.bind(this);
    this.createSmilie=this.createSmilie.bind(this);
    this.handleFaceClick=this.handleFaceClick.bind(this);
    this.deletePreview=this.deletePreview.bind(this);
  }

  componentDidMount(){
    this.getDay();
  }

  //Genera la fecha de hoy y la guarda en el estado para pasársela al editor.

  getDay() {
    today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    this.setState({
      data: {
        ...this.state.data,
        [today]:{
        date: today,
        }
      }
    });
  }

  //Guarda en el estado si el usuario ha marcado la opción feliz o triste.

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
        });
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
        });
    }
  }

  // Guarda en el estado el mensaje que escribe el usuario.

  saveMessage(e){
    this.setState({
      data: {
        ...this.state.data,
        [today]:{
        ...this.state.data[today],
        contentMessage: e.target.value,
        }
      }
    });
  }

  //Cuando pinchas guardar: guarda en LocalStorage los datos del día actual.

  createSmilie(){
    if(!JSON.parse(localStorage.getItem('dates'))){
      localStorage.setItem(`dates`, JSON.stringify([this.state.data[today]]));
    } else {
      const dates = JSON.parse(localStorage.getItem('dates'));
      dates.push(this.state.data[today]);
      localStorage.setItem(`dates`, JSON.stringify(dates));
      this.deletePreview();
    }
  }

  //Borra los datos del cuadro de la información que se muestra cuando pinchas en una carita en el calendario.

  deletePreview(){
    this.setState({
      itemToPrint: null
    });
  }

  // Cuando pinchas en la carita: guarda en el estado de App el id del día para luego imprimir los datos de ese día en el cuadro de detalle.

  handleFaceClick(e){
    this.setState({
      itemToPrint: e.target.id,
    });
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
              deletePreview={this.deletePreview}
            />
          } 
        />
        <Route 
          path='/calendar' 
          render={ () =>
            <Calendar
              handleFaceClick={this.handleFaceClick}
              itemToPrint={this.state.itemToPrint}
            />
          }
        />
        </Switch>
      </div>
    );
  }
}

export default App;
