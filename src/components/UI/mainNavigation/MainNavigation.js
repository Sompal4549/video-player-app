import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <div className={classes.navContainer}>
      <nav>
        <div className={classes.logo}>
          <Link to="/">Meetup App</Link>
        </div>
        <ul className={classes.navList}>
          <li className={classes.link}>
            <Link to="/">All Meetup</Link>
          </li>
          <li className={classes.link}>
            <Link to="/addnewmeetup">Add New Meetup</Link>
          </li>
          <li className={classes.link}>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default MainNavigation;
