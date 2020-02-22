import React from 'react';

class PiEditor extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {inputText: '', arrow: 0};
        console.log('created a pieditor');
    }

    render()
    {
        const {width, height} = this.props;
        const style           = {width: width, height: height};

        return (<div style = {style} className = 'pi-editor'>
                <input value                        = {
                     this.state.inputText} onChange = { txt => this.update_view(txt) } /></div>);
    }

    update_view(txt)
    {
        console.log('wow we got some text: ')
        console.log(txt.target.value);
        this.setState({inputText: txt.target.value});
    }
}

export default PiEditor;
