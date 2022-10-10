import { button } from "./module/elements.js";
import handleClick from "./module/handleClick.js";
(async () => {
    button.addEventListener("click", handleClick);
})();
