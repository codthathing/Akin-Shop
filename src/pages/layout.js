import { Outlet } from "react-router-dom";

export default function Layout() {
    return <>
        <header id="header">
            <h1>Logo</h1>
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
    
}

function ActiveLink({ href, children, ...props }) {
    const path = window.location.pathname

    return (
        <li>
            <a href={href} {...props} 
              className={path === href ? "active" : ""}>
                {children}
            </a>
        </li>
    );
}