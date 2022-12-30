import React from 'react'
import MainNavigation from './MainNavigation';
import MainRouting from './MainRouting';

const RouterInDepth = () => {
    return (
        <>
            <MainNavigation />
            <h1 className='title'><span>Navigation</span></h1>
            <MainRouting />
        </>
    )
}

export default RouterInDepth;