/* @refresh reload */
import { render } from "solid-js/web";
import { setup } from "twind";
setup({ preflight: false });
import("./App").then((App) => {
  render(App.default, document.body);
});
