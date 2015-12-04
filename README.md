# ng-fileDrop
file drop directive for angular

# 试用

```javascript

<script src="./angular.min.js"></script>
<script src="../dist/ng-fileDrop.min.js"></script>

<script>

  window.ondragover = function(e) {
    e.preventDefault();
    return false;
  };
  window.ondrop = function(e) {
    e.preventDefault();
    return false;
  };

  angular.module('app', ['ng-fileDrop']).controller('AppCtrl', function($scope, $log) {

    $scope.ondrop = function(files) {
      $log.debug('ondrop:', files);
    };

  });
</script>

```