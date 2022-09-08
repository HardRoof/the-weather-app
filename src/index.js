import "./modules/style/style.css";
import Model from "./modules/model/mainModel";
import View from "./modules/view/mainView";
import Controller from "./modules/controller/mainController";

const model = new Model();
const view = new View();
// eslint-disable-next-line no-unused-vars
const controller = new Controller(model, view);

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}
