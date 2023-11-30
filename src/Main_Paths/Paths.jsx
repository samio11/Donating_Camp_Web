import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Fixed_Page from '../Home/Fixed_Page';
import Home from '../Home/Home';
import Donation from '../Home/Donation';
import Statics from '../Home/Statics';

const myWebRouter = createBrowserRouter([
    {
        path : '/',
        element : <Fixed_Page></Fixed_Page>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/donation',
                element : <Donation></Donation>
            },
            {
                path : '/statistics',
                element : <Statics></Statics>
            }
        ]
    }
])

export default myWebRouter;