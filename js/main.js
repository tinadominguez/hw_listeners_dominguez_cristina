//change header color upon clicking 

var pageHeading = document.getElementbyId('pageHeading');
    pageHeading.addEventListner('click', function(){
    page.Heading.className = 'blue';
    });

//make the paragraph go from purple to black for five seconds on a mouseover

par.addEventListener("mouseover", function() {   
    par.target.style.color = "purple";
    setTimeout(function() {
        par.target.style.color = "black";
        }, 5000);
        }, false);  
  });

