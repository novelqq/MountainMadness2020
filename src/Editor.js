import React from 'react';
import './Editor.css';

class PiEditor extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {inputText: '', arrow: 0};
    }

    render()
    {
        const style = {
            color: 'blue',
            width: '100%',
            height: '100%',
            backgroundColor: 'blue',
        };

        return (<div style = {style} className = 'pi-editor'>
                <input value                        = {
                     this.state.inputText} onChange = { txt => this.update_view(txt) } /></div>);
    }

    update_view(txt)
    {
        console.log(txt.target.value);
        this.setState({inputText: txt.target.value});
    }
}

export default PiEditor;
