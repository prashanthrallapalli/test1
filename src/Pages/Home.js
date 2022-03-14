import React from 'react'
import { useSelector } from 'react-redux';
import Feed from '../Components/Feed/Feed';
import Header from '../Components/Header/Header';
import Login from '../Components/Login/Login';
import Sidebar from "../Components/Sidebar/Sidebar"
import Widget from '../Components/Widget/Widget';

const Home = () => {
    const user = useSelector((state) =>state.user);
    return (
         <div className='app'>
        {!user ? (
        <Login/> ): (
        
        
        <>
        <Header />
        <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widget />
            </div>
            </>
        )}
    </div> 
    )
        
  };

export default Home;