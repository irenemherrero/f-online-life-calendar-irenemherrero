import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Editor extends Component {
    render() {
        const date = this.props.date;
        const {
            showMessageInput,
            saveMessage,
            createSmilie,
            data,
            deletePreview,
        } = this.props;
        return (
            <div className="editor">
                <h1 className="editor-title">Fecha</h1>
                <div className="editor-date-container">
                    <p className="editor-date-date"> {date}</p>
                    <i className="editor-date-icon fas fa-calendar-alt"></i>
                </div>
                <h1 className="editor-title">Estado</h1>
                <div className="editor-status-container">
                    <input type="radio" name="mood" value="happy" onChange={showMessageInput} />
                    <label>:)</label>
                    <input type="radio" name="mood" value="sad" onChange={showMessageInput} />
                    <label>:(</label>
                </div>
                <div 
                className={data[date] && data[date].mood && data[date].mood === true ? 'editor-message-show' : 'editor-message-hidden'}
                >
                    <h1 className="editor-title">Mensaje</h1>
                    <textarea className="editor-message-box" 
                    value ={data[date] && data[date].contentMessage ? data[date].contentMessage : undefined} 
                    onChange={saveMessage} placeholder="¿Por qué es un buen día?" />
                </div>
                <div className="editor-button-container">
                    <button className="editor-button-save">
                        <Link className="link" to='/calendar' onClick={createSmilie}>Guardar</Link>
                    </button>
                    <button className="editor-button-cancel">
                        <Link className="link" to='/calendar' onClick={deletePreview}>Cancelar</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default Editor;