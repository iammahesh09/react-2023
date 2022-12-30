import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import History from './Pages/History';
import HistoryOne from './Pages/HistoryOne';
import HistoryTwo from './Pages/HistoryTwo';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

const MainRouting = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='history' element={<History />} >
                <Route path='history-1' element={<HistoryOne />} />
                <Route path='history-2' element={<HistoryTwo />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
export default MainRouting;