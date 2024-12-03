import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer id="footer">
            {/* <a href={<Layout/>}>Top</a> */}
            <div id="fotLinks1">
                <Link className="fotLink" to="*">HELP CENTER</Link>
                <Link className="fotLink" to="*">CONTACT US</Link>
                <Link className="fotLink" to="*">TERMS & CONDITIONS</Link>
                <Link className="fotLink" to="*">PRIVACY NOTICE</Link>
                <Link className="fotLink" to="*">COOKIE NOTICE</Link>
                <Link className="fotLink" to="*">BECOME A SELLER</Link>
            </div>
            <div id="fotLinks2">
            <Link className="fotLink" to="*">REPORT A PRODUCT</Link>
                <Link className="fotLink" to="*">SHIP YOUR PACKAGE ANYWHERE IN NIGERIA</Link>
                <Link className="fotLink" to="*">AKINIA ANNIVERSARY 2023</Link>
            </div>
            <div id="rigDiv">
                All Rights Reserved
            </div> 
        </footer>
    );
};

export default Footer;