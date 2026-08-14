import {Routes,Rotes,Link,Outlet,Roter} from "react-router";
import Home from"./pages/Home";
import About from"./pages/About";
import Contact from"./pages/Contact";
import "./App.css";
 
function Layout() {
return(
    <div className="app-shell">
            <a className="brand" href="/">TAKIYASHI</a>
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <main>
            <Outlet />
        </main>
    </div>
)
}

<page></page>

