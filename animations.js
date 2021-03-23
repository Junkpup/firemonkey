var tID; 

function stopAnimate() {
  clearInterval(tID);
} //end of stopAnimate()


function animate() {

  var position = 256; //start position for the image slicer
  const interval = 100; //100 ms of interval for the setInterval()
  const diff = 256; //diff as a variable for position offset
  
  tID = setInterval(() => {
  
    document.getElementById("image").style.backgroundPosition =
      `-${position}px 0px`;
    
    
    if (position < 1536) {
      position = position + diff;
    }
    //we increment the position by 256 each time
    else {
      position = 256;
    }
    //reset the position to 256px, once position exceeds 1536px
    
  }, interval); //end of setInterval
} //end of animateScript()
