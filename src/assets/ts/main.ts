import { Elon } from "./modules/Elon";
import { Goodie } from "./modules/Goodie";
import angular from "angular";

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
        
        // Initializing the app.
        const app = angular.module('elon', []);
    
        app.controller('elon_money', function($scope) {
            $scope.money = Elon.money;
        });
    })();
