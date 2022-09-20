import "./styles/style.css";
import Model from "./modules/model/mainModel";
import View from "./modules/view/mainView";
import Controller from "./modules/controller/mainController";

const model = new Model();
const view = new View();
const controller = new Controller(model, view);

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}
