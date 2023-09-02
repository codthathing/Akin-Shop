import { Link, Outlet } from "react-router-dom";


const ActiveLink = ({ href, children, ...props }) => {
    const path = window.location.pathname;
    return (
        <li>
            <a href={href} {...props} className="link" 
              id={path === href ? "active" : ""}>
                {children}
            </a>
        </li>
    );
};


export default function Layout() {
    return (
       <>
            <header id="header">
                <h1>Akinia</h1>
                <nav>
                    <ul id="nav">
                        <ActiveLink href="/">Home</ActiveLink>
                        <ActiveLink href="/cloth">Cloth</ActiveLink>
                        <ActiveLink href="/food">Food</ActiveLink>
                        <ActiveLink href="/shoe">Shoe</ActiveLink>
                        <ActiveLink href="/cart">Cart</ActiveLink>
                    </ul>
                </nav>
            </header>
            <Outlet/>
        </> 
    );
}