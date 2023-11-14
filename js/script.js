window.onscroll = function() {
    myFunction()
  };

  var header = document.getElementById("head");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }




  var menuitem = document.getElementById("menuitem");
  menuitem.style.maxHeight = "0px";

  function menutoggle() {
    if (menuitem.style.maxHeight == '0px') {
      menuitem.style.maxHeight = "200px"
    } else {
      menuitem.style.maxHeight = "0px"
    }
  }



// slider


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});