import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-light navbar-light justify-content-center">
        <a class="navbar-brand" href="https://kodarit.com/fi/">
            <img src="https://kodarit.com/wp-content/uploads/2016/06/kodarit_logo_pienempi-e1464765596326.png" alt="Avatar Logo" class="logo"></img>
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
