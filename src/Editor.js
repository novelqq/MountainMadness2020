import React from 'react';
import PiScroller from './Scroller'
import './Editor.css';

class PiEditor extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                inputText: '',
                arrow: 0
            };
        }

        render() {
            const style = {
                color: 'blue',
                width: '100%',
                height: '100%',
                backgroundColor: 'blue',
            };

            return ( < div className = 'pi-editor'
                style = {
                    style
                } > < div style = {
                    style
                }
                className = 'edit-view' >
                <
                input style = {
                    style
                }
                value = {
                    this.state.inputText
                }
                onChange = {
                    txt => this.update_view(txt)
                }
                /></div > < PiScroller / > < /div>);
            }

            update_view(txt) {
                console.log(txt.target.value);
                this.setState({
                    inputText: txt.target.value
                });
            }
        }

        export default PiEditor;
