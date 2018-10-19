import React, { Component } from 'react';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    this.getDay=this.getDay.bind(this);
    }
    getDay(){
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0
        let yyyy = today.getFullYear();
        // if(dd < 10) {
        //   dd = '0'+ dd
        // }
        // if(mm < 10) {
        //   mm = '0'+ mm
        // }
        return today = dd + '/' + mm + '/' + yyyy;
      }
    render() { 
        return ( 
            <p> {this.getDay()}</p>
         );
    }
}
 
export default Editor;