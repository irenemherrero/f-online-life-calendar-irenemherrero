import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Calendar extends Component {
    render() { 
        const {
            handleFaceClick,
            itemToPrint
        } = this.props;
        const dates = JSON.parse(localStorage.getItem('dates'))
        return ( 
            <div className="calendar">
                <button className="calendar-button">
                    <Link className="link" to='/'>+</Link>
                </button>
                <div className="calendar-container">
                    {dates.map((date, index) => {
                        return (
                            <div className={`calendar-face-${date.mood ? 'happy' : 'sad'}`} onClick={handleFaceClick} id={index}>{date.mood ? ':)' : ':('}
                            </div>
                        );
                    })}
                </div>
                <div className={itemToPrint !== null ? 'calendar-face-data' : 'calendar-face-data-hidden'}>
                    <p className="calendar-face-data-text">{itemToPrint ? dates[itemToPrint].date : null}</p>
                    <p className="calendar-face-data-text">{itemToPrint ? dates[itemToPrint].contentMessage : null}</p>
                </div>
            </div>
         );
    }
}
 
export default Calendar;