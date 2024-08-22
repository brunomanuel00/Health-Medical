import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar/NavBar'
import React, { useState, useEffect } from 'react';

export default function Layout() {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Navbar />

            {/* <div>
                <p>Anchura de la ventana: {windowSize.width}px</p>
                <p>Altura de la ventana: {windowSize.height}px</p>
            </div> */}
            <main>
                <Outlet />
            </main>


        </>
    )
};
