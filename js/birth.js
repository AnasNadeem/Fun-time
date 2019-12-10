
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addDate = document.getElementById('addDate');
    let getUserDate = new Date(addDate.value);
    let getDayBirth = document.getElementById('day');
    let createElem = document.createElement('p');
    if(addDate.value){
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
    let b;
    b = getUserDate.getTime();
    let todaysTotalTime = new Date();
    let timeMillisec = todaysTotalTime.getTime();
    let calcTotDay = Math.floor((timeMillisec - b)/(1000*60*60*24));
    let resultCalcTotDay = "Total Day on earth: "+ calcTotDay;
    let calcTotHours =  Math.floor((timeMillisec - b)/(1000*60*60));
    let resultCalcTotHours = "Also Total Hours: " + calcTotHours;
    getDayBirth.innerHTML =  "First cry: " + createElem.innerText+ "<br>" + resultCalcTotDay + "<br>" + resultCalcTotHours; 
    addDate.value =''; 
    }else{
       getDayBirth.innerText = "Please write your date of birth to know the details.";
    }  
});
