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


  // Табы в контактах
  $('.j-tabs-link').on('click', function(){
    const index = $(this).index('.j-tabs-link');

    $('.j-tabs-link').removeClass('active');
    $(this).addClass('active');

    $('.j-tabs-content').removeClass('active');
    $('.j-tabs-content').eq(index).addClass('active');
  });


  // Фильтр портфолио
  $('.j-filter-link').on('click', function(){

    const filterType = $(this).data('filter');

    $('.j-filter-link').removeClass('active');
    $(this).addClass('active');

    if(filterType === 'all') {
      $('.j-case').show();
      return;
    }

    $('.j-case').each(function() {
      const caseType = $(this).data('type');

      if (filterType === caseType) {
        $(this).show();
        return;
      }

      $(this).hide();
    });
  });


  // Slider

  $('.j-slider').slick({
    dots: true,
  });

});
