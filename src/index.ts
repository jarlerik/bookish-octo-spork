import component from "./component";
import index from "./index.module.css";
document.body.className = index.main;
document.body.appendChild(component("Hello Webpack live with ts! Woop woop!"));
