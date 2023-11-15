/**
 * This file allows you to run your package directly without using the BeyondJS workspace.
 * If you want to take advantage of the BeyondJS ecosystem, you can use the workspace instead.
 * You can access the workspace from https://workspace.beyondjs.com
 *
 */
import bee from "@beyond-js/bee";
(async () => {
    try {
        bimport("/start").catch((e) => console.log(e.stack));
    } catch (e) {
        console.error(e);
    }
})();
