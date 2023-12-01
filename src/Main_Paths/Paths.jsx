import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Fixed_Page from '../Home/Fixed_Page';
import Home from '../Home/Home';
import Donation from '../Home/Donation';
import Statics from '../Home/Statics';
import Err from '../Home/Err';
import View_element from '../Home/View_element';

const myWebRouter = createBrowserRouter([
    {
        path : '/',
        element : <Fixed_Page></Fixed_Page>,
        errorElement : <Err></Err>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : ()=> fetch('./Data.json')
            },
            {
                path : '/donation',
                element : <Donation></Donation>
            },
            {
                path : '/statistics',
                element : <Statics></Statics>
            },
            {
                path : '/:id',
                element : <View_element></View_element>,
                loader : () => fetch('./Data.json')
                
            }
        ]
    }
])

export default myWebRouter;