import React from "react";
import MainNavigation from "../MainNavigation";
import classes from "./MainUI.module.css";
function MainUi(props) {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
}
export default MainUi;
