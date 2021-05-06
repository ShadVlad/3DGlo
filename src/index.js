"use strict";

import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import togglePopUp from "./modules/togglePopUp";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import commands from "./modules/commands";
import calculator from "./modules/calculator";
import connect from "./modules/connect";
import sendForm from "./modules/sendForm";

countTimer("30 july 2021");
// menu
toggleMenu();
// popup window
togglePopUp();
//tabs
tabs();
//slider
slider();
// command
commands();
//calculator
calculator(100);
//connect
connect();
// send ajax form
for (let i = 1; i < 4; i++) {
  let form = document.getElementById("form" + i);
  sendForm(form);
}
