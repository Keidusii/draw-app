import React, { Component } from 'react';
import Canvas from './CanvasComponent';
import Tools from './ToolsComponent';

class Studio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black',
            lineWidth: 1
        }
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleLineWidthChange = this.handleLineWidthChange.bind(this);
    }
    
    handleColorChange(c) {
        this.setState({
            color: c
        });
    }

    handleLineWidthChange(lw) {
        this.setState({
            lineWidth: lw
        });
    }

    render() {
        return (
            <div className="container">
                <Canvas 
                    color={this.state.color}
                    lineWidth={this.state.lineWidth}
                />
                <Tools 
                    handleColorChange={this.handleColorChange} 
                    handleLineWidthChange={this.handleLineWidthChange}
                    color={this.state.color}
                    lineWidth={this.state.lineWidth}
                />
            </div>
        );
    }
}

export default Studio;