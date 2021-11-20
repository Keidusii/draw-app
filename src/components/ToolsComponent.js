import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { SketchPicker } from 'react-color';

class Tools extends Component {
    state = {
        color: '#000000',
    };

    handleChangeComplete = (color) => {
        this.setState({ color: color.hex });
    };

    handleChange = (color) => {
        this.setState({ color: color.hex });
    }

    render() {
        return (
            <div className="text-center">
                <ButtonGroup className="mt-2">
                    <Button
                        color="danger"
                    >
                        Clear
                    </Button>
                    <Button
                        color="secondary"
                        id="colorBtn"
                    >
                        Color
                    </Button>
                    <Button
                        color="secondary"
                    >
                        Thickness
                    </Button>
                    <Button
                        color="primary"
                    >
                        Download
                    </Button>
                </ButtonGroup>
                <SketchPicker
                    color={this.state.background}
                    onChange={this.handleChange}
                    onChangeComplete={this.handleChangeComplete}
                    id="colorPicker"
                    className=""
                />
            </div>
        );
    }
}
/*
    <SketchPicker
        color={this.state.background}
        onChangeComplete={this.handleChangeComplete}
        id="colorPicker"
        className=""
    />
*/

export default Tools;