import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <>
                <div className="container jumbotron py-5 align-middle">
                    <h1 className="display-1 fw-bolder text-center">Welcome to SketchMaster</h1>
                    <h6 className="display-6 text-center">Put your awesome art skills
                    (or terrible art skills) to practice</h6>
                    <h6 className="display-6 pt-2 text-center">Click below to get started!</h6>
                    <Button color="success" size="lg" className="fw-bold my-3 d-block mx-auto">
                        <Link className="studio-btn fw-bold" to="/studio">Lets Draw!</Link>
                    </Button>
                </div>

                <div className="container row mx-auto features-events">
                    <div className="col features">
                        <h4 className="text-center">Features</h4>
                        <ul className="features">
                            <li>Draw the way you want to using our free form lines.</li>
                            <li>Simple UI that is easy to understand.</li>
                            <li>Single slider that adjusts both the line and eraser width.</li>
                            <li>Beautiful color picker that allows you to select the exact color you're looking for.</li>
                            <li>Clear and undo buttons that allow you to clear the canvas or fix your mistakes</li>
                            <li>Title for the picture that can be edited. This title will be the name for the download file.</li>
                            <li>Downloadable to png format so that you can upload it as your profile picture (or just share with friends or family).</li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;