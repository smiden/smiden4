'use strict';
window.onload = function() {
	var min1    	= document.getElementById('min1');
	var min2    	= document.getElementById('min2');
	var hours1  	= document.getElementById('hours1');
	var hours2  	= document.getElementById('hours2');
	var days1   	= document.getElementById('days1');
	var days2   	= document.getElementById('days2');


function time() { 
	var timeReal = new Date(); // реальная дата
	var timeEnd  = new Date(2018, 12, 19, 0, 0, 0, 0); // дата на которой будет нуль
	var counter  = (timeEnd.getTime() -  timeReal.getTime()) ; // вычисляем разницу между реальной датой и нужной
	var days     = ~~(counter / 1000 / 60 /  60 / 24);
	var hour     = counter / 1000 / 60 / 60 % 24;
	var min      = counter / 1000 / 60 % 60;

	if (days == 0  && min == 0 && hous  == 0) {
		clearInterval();
	} else  {
	min1.innerHTML   = numberOne(min);	
	min2.innerHTML   = numberTwo(min);
	hours1.innerHTML = numberOne(hour);
	hours2.innerHTML = numberTwo(hour);
	days1.innerHTML  = numberOne(days);
	days2.innerHTML  = numberTwo(days);
	} 
};


setInterval(time, 1000);


function numberOne(a) { // убирает первую цифру перед запятой
	return ~~(a * 0.1);
};

function numberTwo(a) {// оставляет только первую цифру перед запятой
	return ~~(((a * 0.1) - ~~(a * 0.1)) * 10)
};
}; 


