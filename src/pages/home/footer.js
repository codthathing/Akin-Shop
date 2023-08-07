import React from "react";
import { Layout } from "../layout";

const Footer = () => {
    return (
        <footer id="footer">
            {/* <a href={<Layout/>}>Top</a> */}
            <div id="fotLinks1">
                <a className="fotLink" href="*">HELP CENTER</a>
                <a className="fotLink" href="*">CONTACT US</a>
                <a className="fotLink" href="*">TERMS & CONDITIONS</a>
                <a className="fotLink" href="*">PRIVACY NOTICE</a>
                <a className="fotLink" href="*">COOKIE NOTICE</a>
                <a className="fotLink" href="*">BECOME A SELLER</a>
            </div>
            <div id="fotLinks2">
            <a className="fotLink" href="*">REPORT A PRODUCT</a>
                <a className="fotLink" href="*">SHIP YOUR PACKAGE ANYWHERE IN NIGERIA</a>
                <a className="fotLink" href="*">AKINIA ANNIVERSARY 2023</a>
            </div>
            <div id="rigDiv">
                All Rights Reserved
            </div>
        </footer>
    );
}

export default Footer;