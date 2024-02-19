import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className=" navbar navbar-expand-lg text-white bg-secondary">
      <div className="container-fluid ">
        <Link className="nav-link" href="http://localhost:3000/">
          Ecommerce
        </Link>

        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                href="http://127.0.0.1:8000/brand"
              >
                Marcas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                href="http://127.0.0.1:8000/product"
              >
                Productos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
