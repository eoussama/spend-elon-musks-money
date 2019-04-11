(() => {

    // On page load.
    window.addEventListener('load', () => {

        // Loading the goodies.
        fetch('goodies.json')
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
        });
    });
})();
