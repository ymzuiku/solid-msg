/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";
import { defineUxConfig, setup } from "./tw";

setup(defineUxConfig({ preflight: {} }));

render(App, document.body);
