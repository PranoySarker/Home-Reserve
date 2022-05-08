import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import NewArrival from '../NewArrival/NewArrival';
import Room from '../Room/Room';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <NewArrival></NewArrival>
            <Room></Room>
            <Footer></Footer>
        </div>
    );
};

export default Home;