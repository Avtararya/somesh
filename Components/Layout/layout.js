import Footer from './Footer'
import Navbar from "./Navbar"
import React from "react";

export default function layout({ children }) {
    return (
        <div>
            {/* <Navbar /> */}
            {children}
            <Footer />


        </div>
    )
}
