import React, {Component} from 'react';
import '../css/App.css';
import SlaveApp from './SlaveApp.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: '{ "color":"black"}',
            childValue: '{ "color":"black"}'
        }
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p>
                    Master App
                </p>

                <p>
                    <textarea className="App-input" onChange={this.handleChange} value={this.state.value}>
                    </textarea>
                </p>

                <p>
                    <button onClick={() => {
                        console.log("Render Clicked");
                        this.setState({childValue: this.state.value});
                    }}>
                        Render
                    </button>
                </p>
                <p>
      -------------------------------
                </p>


                <SlaveApp inputValue={this.state.childValue}/>

            </div>
        );
    }
}

export default App;
