var app = angular.module('app', ['ngPhotoSwipe']);

app.controller('imageController', ['$scope', '$window', function($scope, $window) {
	$scope.images = [];
	
	$scope.getImages = function () {
		var sizes = [
			{w: 400, h: 300},
			{w: 480, h: 360},
			{w: 640, h: 480},
			{w: 800, h: 600},
			{w: 480, h: 360}
		];
		
		for (var i = 1; i <= 5; i++) {
			$scope.images.push({ 
				src: 'http://lorempixel.com/' + sizes[i - 1].w + '/' + sizes[i - 1].h + '/cats',
				safeSrc: 'http://lorempixel.com/' + sizes[i - 1].w + '/' + sizes[i - 1].h + '/cats',
				thumb: 'http://lorempixel.com/' + sizes[i - 1].w + '/' + sizes[i - 1].h + '/cats',
				caption: 'Lorem Ipsum Dolor',
				size: screenSize(sizes[i - 1].w, sizes[i - 1].h),
				type: 'image'
			});
		}
	};
	
	var screenSize = function (width, height) {
		var x = width ? width : $window.innerWidth;
		var y = height ? height : $window.innerHeight;
		
		return x + 'x' + y;
	}; 
	
	$scope.getImages();
}]);