import { button } from "./elements.js";
import handleClick from "./handleClick.js";
(async () => {
    button.addEventListener("click", handleClick);
})();
