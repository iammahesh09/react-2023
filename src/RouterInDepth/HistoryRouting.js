import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HistoryOne from './Pages/HistoryOne';
import HistoryTwo from './Pages/HistoryTwo';

const HistoryRouting = () => {
    return (
        <>
            <Route path='history-1' element={<HistoryOne />} />
            <Route path='history-2' element={<HistoryTwo />} />
        </>
    )
}

export default HistoryRouting;