//document.addEventListener("DOMContentLoaded", function () {
    //const slider = document.querySelector(".video-slider");//
   // let isSliding = false;//
  
   // function nextSlide() {
      //if (!isSliding) {//
       // isSliding = true;//
       // slider.style.transform = "translateX(-100%)";//
       // setTimeout(() => {///
       //   const firstSlide = slider.firstElementChild;//
       //   slider.appendChild(firstSlide);
       //   slider.style.transform = "translateX(0)";//
       //   isSliding = false;//
       // }, 500);//
     // }
   // }//
  
  //  setInterval(nextSlide, 2000); // Change slide every 5 seconds
 // });//
  //


  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".video-slider");
    let isSliding = false;

    function nextSlide() {
        if (!isSliding) {
            isSliding = true;
            slider.style.transform = "translateX(-100%)";
            setTimeout(() => {
                const firstSlide = slider.firstElementChild;
                slider.appendChild(firstSlide);
                slider.style.transform = "translateX(0)";
                isSliding = false;
            }, 500);
        }
    }

    setInterval(nextSlide, 2000); // Change slide every 5 seconds
});
