import React, { Component } from 'react';

class Editor extends Component {
    render() {
        const {
            getDay,
            showMessageInput,
            saveMessage,
            displayMessage,
            contentMessage
        } = this.props;
        return (
            <div className="editor">
                <h1 className="editor-title">Fecha</h1>
                <p> {getDay()}</p>
                <h1 className="editor-title">Estado</h1>
                <input type="radio" name="mood" value="happy" onChange={showMessageInput}/>
                <label>:)</label>
                <input type="radio" name="mood" value="sad" onChange={showMessageInput}/>
                <label>:(</label>
                <div className={!displayMessage ? 'editor-message-hidden' : null}>
                    <h1 className="editor-title">Mensaje</h1>
                    <input type="text" onChange={saveMessage} value={contentMessage}/>
                </div>
            </div>
        );
    }
}

export default Editor;