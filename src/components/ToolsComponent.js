import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { SketchPicker } from 'react-color';
import { Slider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faEraser, faDownload, faPalette } from '@fortawesome/free-solid-svg-icons';

class Tools extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#000000',
            tempColor: '',
            lineWidth: 1,
            lineWidthToggle: false,
            showColorPicker: false
        };
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.toggleColorPicker = this.toggleColorPicker.bind(this);
    }

    // Function that updates the color when the user stops dragging
    handleChangeComplete = (color) => {
        this.setState({ color: color.hex }, () => {
            this.handleColorChange();
        });
    };

    handleColorChange = () => {
        this.props.handleColorChange(this.state.color);
    }

    toggleColorPicker = () => {
        this.setState({
            color: this.state.tempColor,
            showColorPicker: !this.state.showColorPicker
        }, () => {
            this.handleColorChange();
        });
    }

    handleLineWidthChange = (e) => {
        this.setState({
            lineWidth: e.target.value
        }, () => {
            this.props.handleLineWidthChange(this.state.lineWidth);
        })
    }

    eraser = () => {
        this.setState({
            tempColor: this.state.color
        }, () => {
            this.setState({
                color: "white"
            }, () => {
                this.handleColorChange();
            });
        });
        
    }

    download = () => {
        const link = document.createElement('a');
        link.download = `${this.props.title}.png`;
        link.href = this.props.canvasRef.getDataURL("image/png", false, "white")
        link.click();
    }

    render() {
        return (
            <div className="row mx-auto container">
                <div className="row mt-2 px-2">
                    <h5 className="col-12 text-center mb-0">Line / Eraser Size</h5>
                    <Slider
                        aria-label="Line Width"
                        defaultValue={1}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={1}
                        max={15}
                        onChange={(e, value) => this.handleLineWidthChange(e, value)}
                        className="col-12 mx-auto my-auto line-slider"
                    />
                </div>
                <div className="row mt-2">
                    <ButtonGroup className="tools">
                        <Button
                            color="danger"
                            className="col tool-btn"
                            onClick={() => this.props.canvasRef.eraseAll()}
                        >
                            Clear
                        </Button>
                        <Button
                            color="secondary"
                            className="col tool-btn"
                            onClick={() => this.props.canvasRef.undo()}
                        >
                            <FontAwesomeIcon icon={faUndo} />
                        </Button>
                        <Button
                            color="secondary"
                            className="col tool-btn"
                            onClick={this.toggleColorPicker}
                        >
                            <FontAwesomeIcon icon={faPalette} />
                        </Button>
                        <Button
                            color="secondary"
                            className="col tool-btn"
                            onClick={this.eraser}
                        >
                            <FontAwesomeIcon icon={faEraser} />
                        </Button>
                        <Button
                            color="primary"
                            className="col tool-btn"
                            onClick={this.download}
                        >
                            <FontAwesomeIcon icon={faDownload} />
                        </Button>
                    </ButtonGroup>
                </div>
                <div className="row">
                    {this.state.showColorPicker &&
                        <SketchPicker
                            color={this.state.color}
                            onChangeComplete={this.handleChangeComplete}
                            id="colorPicker"
                            className="col-3 mx-auto mt-2 mb-2"
                        />
                    }
                </div>
            </div>
        );
    }
}

export default Tools;