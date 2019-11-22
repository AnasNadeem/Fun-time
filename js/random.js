let addRandomNumber = document.getElementById('addRandomNumber');
    addRandomNumber.addEventListener('click', function(e){
      let random = document.getElementById('random');  
      let a;
      a = Math.floor(1 + 6*Math.random());
            random.innerHTML = a;
      
    });

let createRandom = document.getElementById('createRandomNumber');
    createRandom.addEventListener('click', func1);
    function func1(){
      let random = document.getElementById('random');  
      let fromRandom = document.getElementById('fromrandom');
      let toRandom = document.getElementById('torandom');
      let b;
      b = Math.floor(Number(fromRandom.value) + (toRandom.value - fromRandom.value + 1)*Math.random());
        random.innerHTML = b;
          }
   
  
