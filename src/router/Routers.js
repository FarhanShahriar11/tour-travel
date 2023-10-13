import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './../pages/Home'
import Tours from './../pages/Tours'
import TourDetails from './../pages/TourDetails'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
const Routers = () => {
    return (
        <div>
          <Routes>
            <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/tours' element={<Tours></Tours>}></Route>
            <Route path='/tours/:id' element={<TourDetails></TourDetails>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/tours/search' element={<SearchResultList></SearchResultList>}></Route>
          </Routes>
        </div>
    );
};

export default Routers;