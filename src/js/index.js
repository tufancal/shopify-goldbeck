"use strict";

import "../style.css";
import ThemeToggle from "./theme-toggle";

const dark = document.querySelector("[data-dark]");
const light = document.querySelector("[data-light]");
const toggle = document.querySelector(".js-theme-toggle");

new ThemeToggle({ dark, light, toggle });
