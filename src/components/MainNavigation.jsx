import { Form, NavLink } from "react-router-dom";

import "../App.css";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              id="nav-link"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              id="nav-link"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <Form action="/logout" method="post">
              <button className="logout-button">Logout</button>
            </Form>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
