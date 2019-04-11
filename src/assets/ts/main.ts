import { Elon } from "./modules/Elon";
import { Goodie } from "./modules/Goodie";
import angular from "angular";

(() => {

    // Initializing the app.
    const app = angular.module('elon', []);

    app.controller('elon_money', function ($scope) {
        $scope.money = Elon.money;
    });

    app.controller('goodies', function ($scope, $http) {

        $http.get('goodies.json')
            .then((response) => response.data)
            .then((data) => {
                const goodies: Goodie[] = [];

                // Creating the goodies.
                data.forEach(goodie => goodies.push(new Goodie(goodie.Name, goodie.Price, goodie.Image)));
                $scope.goodies = goodies;
            });
    });

    app.component('goodie', {
        template: `
            <div class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="{{ $ctrl.goodie.image }}">
                        <a class="btn-floating halfway-fab waves-effect waves-light green" title="buy"><i class="material-icons">attach_money</i></a>
                    </div>
                    <div class="card-content">
                        <span class="card-title"><b>{{ $ctrl.goodie.name }}</b></span>
                        <p class="grey-text">{{ $ctrl.goodie.price | currency }}</p>
                    </div>
                </div>
            </div>
        `,
        bindings: {
            goodie: '<'
        }
    });
})();
