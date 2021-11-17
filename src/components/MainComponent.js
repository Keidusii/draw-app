import React, {Component} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './HeaderComponent';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
    }
}

export default Main;