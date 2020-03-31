

/**
 * This is the drum kit project
 * You are provided with an images folder which contains drum images. 
 * You are required to attache each drum image to each alphabet in the html file (Watch the video to know which button has which image).
 * 
 * You are also provided with a sounds folder.
 * 
 * You are to attach each sound to the images and button in the html.
 * 
 * When you click on each button it should play the curresponding drum sound. 
 * 
 * Also When the curresponding key is pressed on the key board, the drum sound should be made. 
 * 
 * Key to each drum
 * button w = tom-1.mp3
 * button a = tom-2.mp3
 * button s = tom-3.mp3
 * button d = tom-4.mp3
 * button j = kick-bass.mp3
 * button k = snare.mp3
 * button l = crash.mp3
 * 
 * NOTE
 * Codes must be properly commented. 
 * Use of ES6 Syntax is important. 
 */


 /********Giving buttons background images****** */

    drummer();
    function drummer(){
      let tableRow = document.querySelector('.set');
      let buttons = tableRow.getElementsByTagName('button');
      for(let i=0; i<buttons.length; i++){
       buttons[0].style.backgroundImage = "url('images/tom1.png')";
       buttons[1].style.backgroundImage = "url('images/tom2.png')";
       buttons[2].style.backgroundImage = "url('images/tom3.png')";
       buttons[3].style.backgroundImage = "url('images/tom4.png')";
       buttons[4].style.backgroundImage = "url('images/kick.png')";
       buttons[5].style.backgroundImage = "url('images/snare.png')";
       buttons[6].style.backgroundImage = "url('images/crash.png')";
      }
      //tableRow ;
      //buttons;

        /********enabling buttons to respond to mouse click to produce sound****** */

        //let tableRow = document.querySelector('.set');
        //let buttons = tableRow.getElementsByTagName('button');
   let i;
    for( i=0; i<buttons.length; i++)
    console.log(i);
    buttons[0].addEventListener('click', ()=>{
      buttons.innerHTML = new Audio('sounds/tom-1.mp3').play();
      console.log('a')
     })
    
    
    
    buttons[1].addEventListener('click', ()=>{
      buttons.innerHTML = new Audio('sounds/tom-2.mp3').play();
      console.log('b')
    })
    
    buttons[2].addEventListener('click', ()=>{
      buttons.innerHTML =new Audio('sounds/tom-3.mp3').play();
      console.log('c')
    })
    
    buttons[3].addEventListener('click', ()=>{
      buttons.innerHTML =new Audio('sounds/tom-4.mp3').play();
      console.log('d')
    })
    
    buttons[4].addEventListener('click', ()=>{
      buttons.innerHTML =new Audio('sounds/kick-bass.mp3').play();
      console.log('e')
    })
    
    buttons[5].addEventListener('click', ()=>{
      buttons.innerHTML =new Audio('sounds/snare.mp3').play();
      console.log('f')
    })
    
    buttons[6].addEventListener('click', ()=>{
      buttons.innerHTML =new Audio('sounds/crash.mp3').play();
      console.log('g')
    })
    
    
      
      /********enabling buttons to produce corresponding sounds****** */
  
document.addEventListener('keypress', function(event){
        if(event.key == 'W' || event.key === 'w' ){
        new Audio('sounds/tom-1.mp3').play();
      }else if(event.key == 'A' || event.key === 'a'){
        new Audio('sounds/tom-2.mp3').play();
    }else if(event.key === 'S'  || event.key === 's'){
        new Audio('sounds/tom-3.mp3').play();
    }else if (event.key === 'D' || event.key === 'd' ){
        new Audio('sounds/tom-4.mp3').play();
    }else if(event.key === 'J' || event.key === 'j'){
         new Audio('sounds/kick-bass.mp3').play();
    }else if(event.key === 'K' || event.key == 'k'){
        new Audio('sounds/snare.mp3').play();
    }else if(event.key === 'L'  || event.key === 'l'){
        new Audio('sounds/crash.mp3').play();
    }else{

    }
})
     }
//}
/*const tableRow = document.querySelector('.set');
      const buttons = tableRow.getElementsByTagName('button');
     const iterable = buttons;
     for (const value of iterable){
       console.log(value);

     }*/
    /*************trial n error******************/
    
     const tableRow = document.querySelector('.set');
      const buttons = tableRow.getElementsByTagName('button');
     const btn = Object.keys(buttons)
     //const num = parseInt(btn)
     console.log(btn);

    /* btn.forEach((btn[i]).addEventListener('click', () => {
      if(btn[0]){
                 btn.innerHTML= new Audio('sounds/tom-1.mp3').play();
                 console.log('a');
               }else if(btn[1]){
                btn.innerHTML= new Audio('sounds/tom-2.mp3').play();
                 console.log('b')
               }else if(btn[2]){
                btn.innerHTML = new Audio('sounds/tom-3.mp3').play();
                 console.log('c')
               }else if(btn[3] ){
                btn.innerHTML = new Audio('sounds/tom-4.mp3').play();
                 console.log('d')
               }else if(btn[4]){
                btn.innerHTML = new Audio('sounds/kick-bass.mp3').play();
                 console.log('e')
               }else if(btn[5]){
                btn.innerHTML = new Audio('sounds/snare.mp3').play();
                 console.log('f')
               }else if(btn[6]){
                btn.innerHTML = new Audio('sounds/crash.mp3').play();
                 console.log('g')
               }else{
    
               }
     }
    
     )
     )*/
    

    /* for(let i=0; i<btn.length; i++){
        let tableRow = document.querySelector('.set');
      let buttons = tableRow.getElementsByTagName('button');
        buttons[i].addEventListener('click', () => {
         // buttons[i].click = function (){
          console.log[i]
            if(buttons[0]){
                buttons.innerHTML = new Audio('sounds/tom-1.mp3').play();
                console.log('a')
              }else if(buttons[1]){
                buttons.innerHTML = new Audio('sounds/tom-2.mp3').play();
                console.log('b')
              }else if(buttons[2]){
                buttons.innerHTML = new Audio('sounds/tom-3.mp3').play();
                console.log('c')
              }else if(buttons[3] ){
                buttons.innerHTML = new Audio('sounds/tom-4.mp3').play();
                console.log('d')
              }else if(buttons[4]){
                buttons.innerHTML = new Audio('sounds/kick-bass.mp3').play();
                console.log('e')
              }else if(buttons[5]){
                buttons.innerHTML = new Audio('sounds/snare.mp3').play();
                console.log('f')
              }else if(buttons[6]){
                buttons.innerHTML = new Audio('sounds/crash.mp3').play();
                console.log('g')
              }else{
    
              }
}
  
        // })
        )}//)}*/


     

    /********Assigning mouse clicks((click event) to each button*************/

    

   

    













