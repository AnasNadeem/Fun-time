
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addDate = document.getElementById('addDate');
    let getUserDate = new Date(addDate.value);
    let getDayBirth = document.getElementById('day');
    let createElem = document.createElement('p');
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
    getDayBirth.appendChild(createElem);
    addDate.value =''; 
        
});
