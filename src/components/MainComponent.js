import React, {Component} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Studio from './StudioComponent';
import About from './AboutComponent';

class Main extends Component {
    render() {
        const a = 1;
        return (
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/studio" element={<Studio />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Main;