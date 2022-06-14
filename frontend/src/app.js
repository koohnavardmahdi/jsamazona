import Homescreen from "./screens/Homescreen.js";

const router = () => {
    const main = document.getElementById('main-container');
    main.innerHTML = Homescreen.render();
};

window.addEventListener('load', router);