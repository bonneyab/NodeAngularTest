'use strict';

//Clearly I need to sort out this service stuff because this controller is out of control.
angular.module('frontEndStuffApp')
.controller('birthdays', function ($scope, $http) {
	$http({method: 'GET', url: 'http://ec2-54-187-108-88.us-west-2.compute.amazonaws.com:3000/birthdays'}).
		success(function(data, status, headers, config) {
      var computeValue = function(i){ return parseInt(i.day) + parseInt(i.month) * 100 }
      var daysBetween = function(a, b){
        // The number of milliseconds in one day
        var ONE_DAY = 1000 * 60 * 60 * 24

        // Convert both dates to milliseconds
        var date1_ms = a.getTime()
        var date2_ms = b.getTime()

        // Calculate the difference in milliseconds
        var difference_ms = Math.abs(date1_ms - date2_ms)

        // Convert back to days and return
        return Math.round(difference_ms/ONE_DAY)
      }
		  data.sort(function(a, b){return (computeValue(a) - computeValue(b))});
		  
		  $scope.birthdays = data;
		  
		  var d = new Date();
      var today = computeValue({ day: d.getDate(), month: d.getMonth() + 1})
      console.log('today: ' + today)
      
      var nextBirthday = data[0];
      var found = false;
      angular.forEach(data, function(item){
        //alert('Hello')
        var current = computeValue(item);
        if(current > today && !found){
          nextBirthday = item;
          found = true;
        }
      })
      
      if(nextBirthday.month < d.getMonth() + 1){
        var next = new Date(d.getYear + 1, nextBirthday.month - 1, nextBirthday.day)
        $scope.daysToGo = daysBetween(next, d)
        console.log('nextBirthday: ' + nextBirthday)
      }
      else{
        var next = new Date(d.getFullYear(), nextBirthday.month - 1, 7 )//nextBirthday.month, nextBirthday.day)
        $scope.daysToGo = daysBetween(next, d)
        console.log('nextBirthday: ' + nextBirthday)
      }
		  $scope.nextBirthday = nextBirthday;
		}).
		error(function(data, status, headers, config) {
		
		  // called asynchronously if an error occurs
		  // or server returns response with an error status.
		});
  });
