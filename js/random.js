let addRandomNumber = document.getElementById('addRandomNumber');
    addRandomNumber.addEventListener('click', function(e){
      let random = document.getElementById('random');  
      let a;
      a = Math.floor(1 + 6*Math.random());
            random.innerHTML = a;
      
    });