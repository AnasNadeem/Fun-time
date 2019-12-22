let addRandomNumber = document.getElementById('addRandomNumber');
    addRandomNumber.addEventListener('click', function(e){
      let random = document.getElementById('random');  
      let a;
      a = Math.floor(1 + 6*Math.random());
            random.innerHTML = a;
      
    });

let addRandomCoin = document.getElementById('addRandomCoin');
      addRandomCoin.addEventListener('click', function(){
      let random = document.getElementById('random');
      let c;
      c = Math.floor(1 + 2*Math.random());
        switch(c){
            case 1:
              random.innerHTML = "HEADS";
              break;
            case 2:
              random.innerHTML = "TAILS";
              break;
        }
       console.log(c);
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
   
  
