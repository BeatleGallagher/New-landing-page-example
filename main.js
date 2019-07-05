const date = new Date();
const year = date.getFullYear(),
dayNumber = date.getDay(),
dateNumber = date.getDate(),
monthNumber = date.getMonth(),
hourNumber = date.getHours();

let daySpan,dateSpan,monthSpan,greetMessage;
greetMessage = document.getElementById("greetMessage");
daySpan = document.getElementById("day");
dateSpan = document.getElementById("date");
monthSpan = document.getElementById("month");
yearSpan = document.getElementById("year");


dateSpan.innerHTML = dateNumber;
monthSpan.innerHTML = monthNumber;
yearSpan.innerHTML = year;

//FUNCTION TO INDICATE WHAT TIME OF DAY IT IS EX:MORNING,AFTERNOON,EVENING
function checkTimeOfDay(hourNumber){
	if(hourNumber >= 1 && hourNumber <= 11){
		greetMessage.innerHTML = "Good Morning !";
	} else if(hourNumber >= 12 && hourNumber <= 17){
		greetMessage.innerHTML = "Good Afternoon";
	} else if(hourNumber >= 18 ){
		greetMessage.innerHTML = "Good Evening";
	} else {
		greetMessage.innerHTML = "Hello !";
	}
}
checkTimeOfDay(hourNumber);

//SWITCH CASE FOR THE DAY OF THE WEEK
switch(dayNumber){
	case 0:
		daySpan.innerHTML = "Sunday,";
		break;
	case 1:
		daySpan.innerHTML = "Monday,";
		break;
	case 2:
		daySpan.innerHTML = "Tuesday,";
		break;
	case 3:
		daySpan.innerHTML = "Wednesday,";
		break;
	case 4:
		daySpan.innerHTML = "Thursday,";
		break;
	case 5:
		daySpan.innerHTML = "Friday,";
		break;
	case 6:
		daySpan.innerHTML = "Saturday,";
		break;	
	default:
		daySpan.innerHTML = "a great day!";
}
//SWITCH CASE FOR THE MONTH OF THE YEAR
switch(monthNumber){
	case 0:
		monthSpan.innerHTML = "January,";
		break;
	case 1:
		monthSpan.innerHTML = "February,";
		break;
	case 2:
		monthSpan.innerHTML = "March,";
		break;
	case 3:
		monthSpan.innerHTML = "April,";
		break;
	case 4:
		monthSpan.innerHTML = "May,";
		break;
	case 5:
		monthSpan.innerHTML = "June,";
		break;
	case 6:
		monthSpan.innerHTML = "July,";
		break;
	case 7:
		monthSpan.innerHTML = "August,";
		break;
	case 8:
		monthSpan.innerHTML = "September,";
		break;
	case 9:
		monthSpan.innerHTML = "October,";
		break;
	case 10:
		monthSpan.innerHTML = "November,";
		break;
	case 11:
		monthSpan.innerHTML = "December,";
		break;
	default:
		monthSpan.innerHTML = "/ " + (monthNumber + 1) + " / ";
		break;
}


//THE EDITABLE THINGS TO DO LIST 
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");

//ADD EVENT LISTENERS TO LIST ITEMS
first.addEventListener('keypress',changedThingsToDoList);
first.addEventListener('blur',changedThingsToDoList);

second.addEventListener('keypress',changedThingsToDoList);
second.addEventListener('blur',changedThingsToDoList);

third.addEventListener('keypress',changedThingsToDoList);
third.addEventListener('blur',changedThingsToDoList);

fourth.addEventListener('keypress',changedThingsToDoList);
fourth.addEventListener('blur',changedThingsToDoList);

fifth.addEventListener('keypress',changedThingsToDoList);
fifth.addEventListener('blur',changedThingsToDoList);

function thingsToDoList(){
	if(localStorage.getItem('first') === null){
		first.textContent = "First thing to do";
	} else {
		first.textContent = localStorage.getItem('first');
	}

	if(localStorage.getItem('second') === null){
		second.textContent = "Second thing to do";
	} else {
		second.textContent = localStorage.getItem('second');
	}

	if(localStorage.getItem('third') === null){
		third.textContent = "Third thing to do";
	} else {
		third.textContent = localStorage.getItem('third');
	}

	if(localStorage.getItem('fourth') === null){
		fourth.textContent = "fourth thing to do";
	} else {
		fourth.textContent = localStorage.getItem('fourth');
	}

	if(localStorage.getItem('fifth') === null){
		fifth.textContent = "fifth thing to do";
	} else {
		fifth.textContent = localStorage.getItem('fifth');
	}
}
thingsToDoList();

function changedThingsToDoList(e){
	if(e.type == 'keypress'){
		if(e.which == 13 || e.keyCode == 13){
			if(e.target.id == 'first'){
				first.blur();
				localStorage.setItem('first',e.target.innerText);
			} 

			if(e.target.id == 'second'){
				second.blur();
				localStorage.setItem('second',e.target.innerText);
			}

			if(e.target.id == 'third'){
				third.blur();
				localStorage.setItem('third',e.target.innerText);
			}

			if(e.target.id == 'fourth'){
				fourth.blur();
				localStorage.setItem('fourth',e.target.innerText);
			}

			if(e.target.id == 'fifth'){
				fifth.blur();
				localStorage.setItem('fifth',e.target.innerText);
			}	
		} 
	} else if (e.type == 'blur') {
		if(e.target.id == 'first'){
				first.blur();
				localStorage.setItem('first',e.target.innerText);
			} 

			if(e.target.id == 'second'){
				second.blur();
				localStorage.setItem('second',e.target.innerText);
			}

			if(e.target.id == 'third'){
				third.blur();
				localStorage.setItem('third',e.target.innerText);
			}

			if(e.target.id == 'fourth'){
				fourth.blur();
				localStorage.setItem('fourth',e.target.innerText);
			}

			if(e.target.id == 'fifth'){
				fifth.blur();
				localStorage.setItem('fifth',e.target.innerText);
			}	
	}
}

