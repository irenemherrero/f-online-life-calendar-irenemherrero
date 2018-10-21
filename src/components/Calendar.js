import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Calendar extends Component {
    render() { 
        const dataToPrint = this.props.dataToPrint;
        console.log(dataToPrint);
        return ( 
            <div className="calendar">
                <button className="calendar-button">
                    <Link className="link" to='/'>+</Link>
                </button>
                <div className="calendar-container">
                    {dataToPrint.map(date => {
                        return (<div className={`calendar-face-${date.mood ? 'happy' : 'sad'}`}>{date.mood ? ':)' : ':('}</div>)
                    })}
                    
                </div>
            </div>
         );
    }
}
 
export default Calendar;