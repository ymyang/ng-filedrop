/**
 * Created by yang on 2015/10/14.
 */
angular.module('ng-fileDrop', []).directive('ngFileDrop', function() {

    return {
        restrict: 'EA',
        replace: false,
        transclude: false,
        require: ['?ondrop', '?dragoverClass'],
        scope: {
            dragoverClass: '@',
            ondrop: '&'
        },
        link: function ($scope, $element, attrs) {

            $element.on('dragover', function(event) {
                event.preventDefault();

                if ($scope.dragoverClass) {
                    $element.addClass($scope.dragoverClass);
                }
            });

            $element.on('drop', function(event) {
                event.preventDefault();

                if ($scope.dragoverClass) {
                    $element.removeClass($scope.dragoverClass);
                }

                if ($scope.ondrop) {

                    var data = event.dataTransfer || event.originalEvent.dataTransfer;

                    var files = [];
                    for (var i = 0; i < data.files.length; i++) {
                        files.push(data.files[i]);
                    }
                    $scope.ondrop({
                        files: files
                    })
                }

            });

            $element.on('dragleave', function(event) {
                event.preventDefault();

                if ($scope.dragoverClass) {
                    $element.removeClass($scope.dragoverClass);
                }
            });

            $element.on('dragenter', function(event) {
                event.preventDefault();

                if ($scope.dragoverClass) {
                    $element.addClass($scope.dragoverClass);
                }
            });

        }
    };
});