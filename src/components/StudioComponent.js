import React, {Component} from 'react';
import Canvas from './CanvasComponent';
import Tools from './ToolsComponent';

class Studio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#000000',
            lineWidth: 1
        }
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
                <Tools 
                    handleColorChange={this.handleColorChange} 
                    handleLineWidthChange={this.handleLineWidthChange}
                    color={this.state.color}
                    lineWidth={this.state.lineWidth}
                    />
                <Canvas 
                    color={this.state.color}
                    lineWidth={this.state.lineWidth}
                />
            </div>
        );
    }
}

export default Studio;