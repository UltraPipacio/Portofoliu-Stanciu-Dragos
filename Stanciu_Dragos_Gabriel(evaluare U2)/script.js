let   currentSlide = 1;   
let slideshowTimer   = null;    
let  slideDuration = 3000;   



document.addEventListener('DOMContentLoaded', function () {

  showImage(  currentSlide );   

    let button   = document.getElementById( 'toggle-slideshow'  );
   if ( button ) {
    button.addEventListener( 'click',   toggleSlideshow );
  }

});



function showImage( n ) {

  let images = document.querySelectorAll( '.poze-img'  ); // Corrected from .resource-img  

    if ( images.length === 0 ) {
      return;   
   }



       if ( n > images.length ) {
          currentSlide = 1;    
  }


    if ( n < 1 ) {
           currentSlide = images.length;   
  }




        for ( let i = 0; i < images.length; i++ ) {
       images[i].style.display = 'none';    
  }

     images[ currentSlide - 1 ].style.display = 'block';   

}




 function startSlideshow( ) {

     let images = document.querySelectorAll('.poze-img');



    if ( images.length <= 1 ) {
        return;
  }



   if ( slideshowTimer !== null ) {
    return;    
  }




  slideshowTimer = setInterval( function () {

    currentSlide++;    
     showImage( currentSlide );   

  },   slideDuration );




    let button = document.getElementById( 'toggle-slideshow' );
     if ( button ) {
        button.textContent = 'STOP';  
         button.style.backgroundColor = '#d9534f';   
         button.style.boxShadow = '0 0 8px #d9534f';    
  }

}




function stopSlideshow() {

  clearInterval( slideshowTimer );   
   slideshowTimer = null;    


     let button = document.getElementById( 'toggle-slideshow' );
   if ( button ) {
     button.textContent = 'START';   
     button.style.backgroundColor = '#800020';
    button.style.boxShadow = '0 0 5px rgba(255, 0, 0, 0.4)';
  }

}




function toggleSlideshow( ) {

    if ( slideshowTimer === null ) {
      startSlideshow();    
    } else {
      stopSlideshow();   
    }

  }