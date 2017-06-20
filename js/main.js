var timer  = 0;
var timerTwo = 0;

var togglerOne = "false";
var togglerTwo = "false";
var togglerThree = "false";

var audioValue = document.getElementById("AudioOne");
var audioValuev2 = document.getElementById("AudioOnev2");

var audioValue2 = document.getElementById("AudioFive");
var audioValue2v2 = document.getElementById("AudioFivev2");

var audioValue3 = document.getElementById("AudioNine");
var audioValue3v2 = document.getElementById("AudioNinev2");
 
// 'Metronome' Counter to play clicked audio at specific time

setInterval (function () {
  
  // MOBILE JavaScript Code ONLY, fix for looping issues on mobile
  
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
    if (timer === 0 && togglerOne === "true") {      
            audioValue.play(); 
    }
    
     if (timerTwo === 4 && togglerOne === "true") {              
            audioValuev2.play();     
    }
      
    if (timer === 0 && togglerTwo === "true") {   
          audioValue2.play();   
    }
    
     if (timerTwo === 4 && togglerTwo === "true") {             
            audioValue2v2.play();      
    }

    if (timer === 0 && togglerThree === "true") {     
          audioValue3.play();      
    }
    
     if (timerTwo === 4 && togglerThree === "true") {             
            audioValue3v2.play();        
    }
        
  }
  
  else {
    
    if (timer === 0 || timer === 4 && togglerOne === "true") {
          audioValue.currentTime = 0;
          audioValue.play();
    }
      
    if (timer === 0 || timer === 4 && togglerTwo === "true") {
          audioValue2.currentTime = 0;
          audioValue2.play();   
    }

    if (timer === 0 || timer === 4 && togglerThree === "true") {
          audioValue3.currentTime = 0;
          audioValue3.play();      
    }
    
  }
   
  switch (timer) {
    
  case 0:
  case 4:
    document.getElementById("t1").style.backgroundColor = "#479c5c";
    document.getElementById("t4").style.backgroundColor = "#e27f7f"; 
    break;
    
  case 1:
  case 5:
    document.getElementById("t2").style.backgroundColor = "cornflowerblue";
    document.getElementById("t1").style.backgroundColor = "#e27f7f"; 
    break;
    
  case 2:
  case 6:
    document.getElementById("t3").style.backgroundColor = "cornflowerblue";
    document.getElementById("t2").style.backgroundColor = "#e27f7f"; 
    break;
    
  case 3:
  case 7:
    document.getElementById("t4").style.backgroundColor = "cornflowerblue";
    document.getElementById("t3").style.backgroundColor = "#e27f7f"; 
    break;
    
}
 
  timer++;
  timerTwo++;
  
  if (timer === 8) {
  timer = 0; 
} 
  
  if (timerTwo === 8) {
  timerTwo = 0;  
}
    
}, 1090);


// Toggles for buttons and animations and get id of specific audio user wants to play

function toggler (clicked) {
  
  if (togglerOne === "false") {
      togglerOne = "true";
      var value = clicked.getAttribute("id");
      document.getElementById(value).style.animation = "pulse 0.8s infinite";
      audioValue = document.getElementById("Audio" + value);
      audioValuev2 = document.getElementById("Audio" + value + "v2");
    // fix for audio not playing on mobile
      audioValue.play(); 
      audioValue.pause();
      audioValue.currentTime = 0;
      audioValuev2.play(); 
      audioValuev2.pause();
      audioValuev2.currentTime = 0;
    }
  
  else {
     togglerOne = "false";
     var remove =  document.getElementsByClassName("pulseOne");
     for (var i = 0; i < remove.length; i++) {
        remove[i].removeAttribute("style"); 
      }
    }
  
}  // end of function toggler

function togglerSecond (clicked) {
  
  if (togglerTwo === "false") {
      togglerTwo = "true";
      var value = clicked.getAttribute("id");
      document.getElementById(value).style.animation = "pulse2 0.8s infinite";
      audioValue2 = document.getElementById("Audio" + value);
      audioValue2v2 = document.getElementById("Audio" + value + "v2");
    // fix for audio not playing on mobile
      audioValue2.play(); 
      audioValue2.pause();
      audioValue2.currentTime = 0;
      audioValue2v2.play(); 
      audioValue2v2.pause();
      audioValue2v2.currentTime = 0;
  }
  
  else {
    togglerTwo = "false";
    var remove =  document.getElementsByClassName("pulseTwo");
     for (var i = 0; i < remove.length; i++) {
           remove[i].removeAttribute("style"); 
    } 
  }
} //end of function togglerSecond

function togglerThird (clicked) {
  
  if (togglerThree === "false") {
      togglerThree = "true";
      var value = clicked.getAttribute("id");
      document.getElementById(value).style.animation = "pulse3 0.8s infinite";
      audioValue3 = document.getElementById("Audio" + value);
      audioValue3v2 = document.getElementById("Audio" + value + "v2");
    // fix for audio not playing on mobile
      audioValue3.play(); 
      audioValue3.pause();
      audioValue3.currentTime = 0; 
      audioValue3v2.play(); 
      audioValue3v2.pause();
      audioValue3v2.currentTime = 0;
  }
  
  else {
    togglerThree = "false";
    var remove =  document.getElementsByClassName("pulseThree");
     for (var i = 0; i < remove.length; i++) {
        remove[i].removeAttribute("style"); 
     }
  }

} //end  of function togglerThird

// pause and reset audio on false, Innvidiual controls for each toggler
    
setInterval (function () {
  
  if (togglerOne === "false") {
  audioValue.pause();
  audioValue.currentTime = 0;
  //Mobile 
  audioValuev2.pause();
  audioValuev2.currentTime = 0;
}

  if (togglerTwo === "false") {
  audioValue2.pause();
  audioValue2.currentTime = 0;
  //Mobile 
  audioValue2v2.pause();
  audioValue2v2.currentTime = 0;
}

  if (togglerThree === "false") {
  audioValue3.pause();
  audioValue3.currentTime = 0;
  //Mobile
  audioValue3v2.pause();
  audioValue3v2.currentTime = 0;
}
  
}, 1);