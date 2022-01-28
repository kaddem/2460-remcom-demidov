$(document).ready(function(){

  // let isOpen = false;

  $('.j-burger').on('click', function(){
    $('.j-menu').slideToggle();
    // if (isOpen) {
    //   $('.j-menu').slideUp();
    //   isOpen = false;
    // } else {
    //   $('.j-menu').slideDown();
    //   isOpen = true;
    // }
  });


  // аккордион
  let prevBtn;

  $('.j-accordion-btn').on('click', function(){
    if (this === prevBtn) {
      $(this).next().slideToggle();
      return;
    }

    $('.j-accordion-btn').next().slideUp();
    $(this).next().slideToggle();
    prevBtn = this;
  });

});
