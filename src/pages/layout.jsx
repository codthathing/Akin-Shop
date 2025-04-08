import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Layout() {
    const location = useLocation().pathname;

    const routePaths = [
        { id: 0, text: "home", path: "/" },
        { id: 1, text: "cloth", path: "/cloth" },
        { id: 2, text: "food", path: "/food" },
        { id: 3, text: "shoe", path: "/shoe" },
        { id: 4, text: "cart", path: "/cart" }
    ];

    return (
        <>
            <header id="header">
                <h1>Akin Shop</h1>
                <nav id="nav">
                    {routePaths.map(({ id, text, path }) => <Link key={id} className="link" id={location === path ? "active" : ""} to={path}>{text}</Link>)}
                </nav>
            </header>
            <Outlet />
        </>
    );
}