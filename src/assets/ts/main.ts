import { Elon } from "./modules/Elon";
import { Goodie } from "./modules/Goodie";
import angular from "angular";
import $ from "jquery";

(() => {

    $(document).ready(function () {


        $(document).on('scroll', function (e) {

            if ($(this).scrollTop() >= 540) {
                $('.balance').addClass('sticky');
            } else {
                $('.balance').removeClass('sticky');
            }
        });
    });

    // Initializing the app.
    const app = angular.module('elon', []);

    app.controller('elon', function ($scope, $http) {

        $http.get('goodies.json')
            .then((response) => response.data)
            .then((data) => {
                const goodies: Goodie[] = [];

                // Creating the goodies.
                data.forEach(goodie => goodies.push(new Goodie(goodie.Name, goodie.Price, goodie.Image)));
                $scope.goodies = goodies;
                $scope.money = Elon.money;
            });
    });

    app.component('goodie', {
        template: `
            <div class="col s12 m6 l3">
                <div class="card">
                    <div class="card-image">
                        <img src="{{ $ctrl.goodie.image }}">
                        <a ng-click="buy($ctrl.goodie)" ng-class="{true: 'green', false: 'red'}[$ctrl.goodie.price <= $parent.$parent.money]" class="btn-floating halfway-fab waves-effect waves-light" title="buy"><i class="material-icons">attach_money</i></a>
                        </div>
                        <div class="card-content">
                        <span class="card-title"><b>{{ $ctrl.goodie.name }}</b></span>
                        <p class="grey-text">{{ $ctrl.goodie.price | currency }}</p>
                    </div>
                </div>
            </div>
        `,
        controller: ($scope) => {

            $scope.buy = (goodie: Goodie) => {

                Elon.buy(goodie);
                $scope.$parent.$parent.money = Elon.money;
            }
        },
        bindings: {
            goodie: '<'
        }
    });
})();
