import React, {Component} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './HeaderComponent';
import Studio from './StudioComponent';

class Main extends Component {
    render() {
        const a = 1;
        return (
            <BrowserRouter>
                <Header />
                <Studio />
            </BrowserRouter>
        );
    }
}

export default Main;