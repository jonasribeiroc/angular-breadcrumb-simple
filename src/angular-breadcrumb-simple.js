'use strict';

angular.module('ngBreadcrumb', []).directive('breadcrumb', ['$rootScope', '$state', '$compile', '$location',
    function ($rootScope, $state, $compile, $location) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                function constructHtml(paths) {
                    var html, htmlHead, htmlContent = '', htmlFooter;
                    htmlHead = '<div class="page-bar">' +
                        '<ul class="page-breadcrumb">' +
                        '<li>' +
                        '<a href="#/dashboard"> Home </a>' +
                        '<i class="fa fa-circle"></i>' +
                        '</li> ';

                    for (var i = 0; i < paths.length; i++) {
                        if (i == paths.length - 1) {
                            htmlContent += '<li>' +
                                '<span class="active"> ' + paths[i] + ' </span>' +
                                '</li>';
                        } else {
                            htmlContent += '<li>' +
                                '<a href="#"> ' + paths[i] + ' </a>' +
                                '<i class="fa fa-circle"></i>' +
                                '</li> ';
                        }

                    }

                    htmlFooter = '</ul> </div>';
                    html = htmlHead + htmlContent + htmlFooter;
                    $compile(html)(scope, function (_element, _scope) {
                        element.replaceWith(_element);
                    });
                }

                $rootScope.$on('$stateChangeSuccess', function () {
                    var paths = $location.path().substr(1).split('/');
                    constructHtml(paths);
                });

                constructHtml($location.path().substr(1).split('/'));
            }
        };
    }
]);