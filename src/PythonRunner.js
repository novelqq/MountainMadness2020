import React from 'react'
import {PythonShell} from 'python-shell'

class AsciiDisplay extends React.Component {
    render() {
        const style = {
            background: rgb(255, 255, 255),
            border: 1,
            float: left,
            fontSize: 24,
            fontWeight: bold,
            lineHeight: 34,
            height: 34,
            marginRight: -1,
            marginTop: -1,
            padding: 0,
            textAlign: center,
            width: 34
        };
        return (
            <button
                style={style}
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
             </button>
        )
    }
}
class PythonRunner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTriplet : "",
            fullString : "",
            pythonOutput : []
        };
    }

    handleClick(i) {
        if(i == 1){
            fullString += String.fromCharCode(parseInt(this.state.inputTriplet, 10));
        }
        if(i == 2){
            this.runPythonLine();
        }
    }

    renderDisplay() {
        return (
            <AsciiDisplay
                value={String.fromCharCode(parseInt(this.state.inputTriplet, 10))}
                onClick={() => this.handleClick(1)}
            />
        );
    }

    renderRunButton() {
        return (
            <AsciiDisplay
                value= {this.fullString}
                onClick={() => this.handleClick(2)}
            />
        );
    }

    runPythonLine() {
        PythonShell.runString(fullString, null, function (err, results) {
            if (err) throw err;
            this.pythonOutput = results;
        })
    }
    render() {
        <div>
            <div>
                {this.renderDisplay()}
            </div>
            <div>
                {this.renderRunButton()}
            </div>
        </div>
    };
}