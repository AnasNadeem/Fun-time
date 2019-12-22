
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addDate = document.getElementById('addDate');
    let getUserDate = new Date(addDate.value);
    let getDayBirth = document.getElementById('day');
    let createElem = document.createElement('p');
    if(addDate.value){
		// GETTING THE DAY USER BORN
    let a;
    a = getUserDate.getDay();
    switch (a) {
        case 0:
                createElem.innerText = 'Sunday';
            break;
        case 1:
                createElem.innerText = 'Monday';
            break;
        case 2:
                createElem.innerText ='Tuesday';
            break;
        case 3:
                createElem.innerText ='Wednesday';
            break;
        case 4:
                createElem.innerText ='Thursday';
            break;
        case 5:
                createElem.innerText = 'Friday';
              
            break;
        case 6:
                createElem.innerText ='Saturday';
            break;
    }
	// GETTING THE TIME
    let b;
    b = getUserDate.getTime();
	// GETTING THE CURRENT DATE  
    let todaysTotalTime = new Date();
	// GETTING THE USER BIRTH TIME IN MILLISECONDS
    let timeMillisec = todaysTotalTime.getTime();
	// CALCULATING THE TOTAL DAYS OF USER LIFE
    let calcTotDay = Math.floor((timeMillisec - b)/(1000*60*60*24));
    let resultCalcTotDay = "Total Day on earth: "+ calcTotDay;
	// CALCULATING THE TOTAL HOURS OF USER LIFE
    let calcTotHours =  Math.floor((timeMillisec - b)/(1000*60*60));
    let resultCalcTotHours = "Also Total Hours: " + calcTotHours;
	// CALCULATING THE TOTAL HOURS OF USER LIFE
	let calcTotMin = Math.floor((timeMillisec - b)/(1000*60));
	let resultCalcTotMin = " Total Minutes: " + calcTotMin;
    getDayBirth.innerHTML =  "First cry: " + createElem.innerText+ "<br>" + resultCalcTotDay + "<br>" + resultCalcTotHours + "<br>" + resultCalcTotMin; 
    addDate.value =''; 
    }else{
       getDayBirth.innerText = "Please write your date of birth to know the details.";
    }  
});
