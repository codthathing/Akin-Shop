import { Link, Outlet } from "react-router-dom";


const ActiveLink = ({ to, children, ...props }) => {
    const path = window.location.pathname;
    return (
        <li>
            <Link to={to} {...props}
              className={path === to ? "active" : "link"}>
                {children}
            </Link>
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
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink to="/cloth">Cloth</ActiveLink>
                        <ActiveLink to="/food">Food</ActiveLink>
                        <ActiveLink to="/shoe">Shoe</ActiveLink>
                        <ActiveLink to="/cart">Cart</ActiveLink>
                    </ul>
                </nav>
            </header>
            <Outlet/>
        </> 
    );
}