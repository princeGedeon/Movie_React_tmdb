import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';

const Home = () => {
    return (
        <div className="flex flex-col bg-slate-100">
            <Header/>
            <Form/>
            <Footer/>
            
        </div>
    );
};

export default Home;