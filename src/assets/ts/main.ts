import { Goodie } from "./modules/Goodie";

(() => {

    // On page load.
    window.addEventListener('load', () => {

        // Loading the goodies.
        fetch('goodies.json')
        .then((res) => res.json())
        .then((data) => {

            const goodies: Goodie[] = [];

            // Creating the goodies.
            data.forEach(goodie => goodies.push(new Goodie(goodie.Name, goodie.Price, goodie.Image)));
        });
    });
})();
