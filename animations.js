var tID; 

function stopAnimate() {
  clearInterval(tID);
  document.getElementById("image").style.backgroundPosition = '1472px';
} 


function animateScript() {

  var position = 184; 
  const interval = 100; 
  const diff = 184; 
  
  tID = setInterval(() => {
  
    document.getElementById("image").style.backgroundPosition =
      `-${position}px 0px`;
    
    
    if (position < 1472) {
      position = position + diff;
    }
    
    else {
      position = 184;
    }
