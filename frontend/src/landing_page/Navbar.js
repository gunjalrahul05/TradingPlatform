import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary border-bottom fixed-top"
      style={{ backgroundColor: "#d8d8d8ff" }}
    >
      <div class="container px-5 ">
        <img
          src="media/images/logo.svg"
          style={{ width: "10%", marginLeft: "80px" }}
        ></img>

        <form class="d-flex mx-5" role="search">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/product">
                Product
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="support">
                Support
              </Link>
            </li>
          </ul>
        </form>
      </div>
    </nav>
  );
}
