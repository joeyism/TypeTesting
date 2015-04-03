'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the websiteApp
 */

 angular.module('websiteApp')
 .controller('MainCtrl', function ($scope,sentenceList) {
 	var enteredChar,
 	enteredKeyCode,
 	sentenceNo=0,
 	started=false,
 	beginTime,
 	endTime;

 	$scope.totalElapsed = [];
	$scope.totalError= [];
 	$scope.showTotal = false;
 	$scope.count=0;
 	$scope.letterCount = 0;
 	$scope.realSentence = sentenceList[sentenceNo];
 	$scope.realArray = $scope.realSentence.split("");
 	$scope.pressedKey = function($event){
 		enteredKeyCode = $event.keyCode;
 		if ($event.keyCode ===8){
 			if ($scope.letterCount > 0){
 				$scope.letterCount--;
 			} else{
 				$scope.letterCount = 0;
 			}
 		}
 	};

 	$scope.letterTyped = function($event){
 		if (!started){
 			beginTime = (new Date()).getTime();
			started = true;
			 		}
 		enteredChar = String.fromCharCode($event.keyCode);
 		$scope.letterCount++;
 	};

 	$scope.onChange = function(){
 		var idNo  = $scope.letterCount-1;
 		if ($scope.realArray[$scope.word.length-1] !== enteredChar && enteredKeyCode !==8){
 			document.getElementById('letter_'+idNo).style.backgroundColor='pink';
			$scope.count= $scope.count +1;
 		} else{
 			document.getElementById('letter_'+idNo).style.backgroundColor='lightgreen';	
 		}
 		checkIfFinished();
 	};

 	var checkIfFinished = function(){
 		if ($scope.word.length === $scope.realSentence.length){ // finished this word
 			started = false;
 			endTime = (new Date()).getTime();
 			$scope.timeElapsed = endTime - beginTime;
 			$scope.totalElapsed.push($scope.timeElapsed);
			$scope.totalError.push($scope.count);
			$scope.count= 0;
 			for (var i = 0; i < $scope.word.length; i++){
 				document.getElementById('letter_'+i).style.backgroundColor='';
 			}

 			if (sentenceNo < sentenceList.length-1){ //there are still more words
 				newWord();
 			} else{ // there are no more words
 				$scope.showTotal = true;
 				window.alert('done!');
 			}
 		}
 	};

 	var newWord = function(){
 		$scope.word="";
 		sentenceNo++;
 		$scope.letterCount = 0;
 		$scope.realSentence = sentenceList[sentenceNo];
 		$scope.realArray = $scope.realSentence.split("");
 	};
 });
