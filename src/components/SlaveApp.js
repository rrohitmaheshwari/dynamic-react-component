import React, { Component } from 'react';
import '../css/SlaveApp.css';

class SlaveApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let button_style=JSON.parse(this.props.inputValue);
        console.log("data-");
        console.log(button_style);


        return (
            <div className="SlaveApp">
                <p>
                    Slave App
                </p>

                <p>
                    <button style={button_style}>Slave App Button</button>

                </p>

            </div>
        );
    }
}

export default SlaveApp;
