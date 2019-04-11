(() => {

    // On page load.
    window.addEventListener('load', () => {

        // Loading the goodies.
        fetch('../data/goodies.json')
        .then((res) => res.json())
        .then((data) => {

            console.log(data);
        });
        console.log('Hello, world');
    });
})();
