import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { SketchPicker } from 'react-color';
import { Slider } from '@mui/material'

class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#000000',
            lineWidth: 1,
            lineWidthToggle: false
        };
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }


    handleChangeComplete = (color) => {
        this.setState({ color: color.hex }, () => {
            this.handleColorChange();
        });
    };

    handleColorChange = () => {
        this.props.handleColorChange(this.state.color);
    }

    handleLineWidthChange = (lw) => {
        this.setState({
            lineWidth: lw
        }, () => {
            this.props.handleLineWidthChange(this.state.lineWidth);
        })
    }

    render() {
        return (
            <div className="row text-center container">
                <SketchPicker
                    color={this.state.color}
                    onChange={this.handleChange}
                    onChangeComplete={this.handleChangeComplete}
                    id="colorPicker"
                    className="col-3 mx-auto mt-2 mb-2"
                />
                <div className="col">
                    <div className="row mt-2">
                        <ButtonGroup className="tools">
                            <Button
                                color="danger"
                                className="col"
                            >
                                Clear
                            </Button>
                            <Button
                                color="primary"
                                className="col"
                            >
                                Download
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="row mt-2 px-2">
                        <h5 className="col-4 my-auto line-width-title">Line Width</h5>
                        <Slider
                            aria-label="Line Width"
                            defaultValue={1}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={15}
                            onChange={() => this.handleLineWidthChange(50)}
                            className="col line-slider"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Tools;