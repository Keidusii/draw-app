import React, {Component} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Studio from './StudioComponent';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/studio" element={<Studio />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Main;