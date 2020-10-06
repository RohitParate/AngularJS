(function(){
 'use strict';

angular.module('NameCalculator',[])

.controller('NameCalculatorController',function($scope){
	$scope.name = '';
	$scope.totalvalue = 0;
	$scope.displayNumeric = function(){
		var totalNameValue = CalculateNumericForString($scope.name); 
		$scope.totalvalue=totalNameValue;
	};
	function CalculateNumericForString(string){
			var totalStringValue = 0;
			for(var i=0;i<string.length;i++){
				totalStringValue = totalStringValue+string.charCodeAt(i);
			}
			return totalStringValue;
	}
});

})();
