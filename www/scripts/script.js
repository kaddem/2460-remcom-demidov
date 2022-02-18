$(document).ready(function(){

  // let isOpen = false;

  $('.j-burger').on('click', function(){
    $(this).toggleClass('is-open');
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
  $('.j-tabs-link').on('click', function(event){
    event.preventDefault();

    const index = $(this).index('.j-tabs-link');

    $('.j-tabs-link').removeClass('active');
    $(this).addClass('active');

    $('.j-tabs-content').removeClass('active');
    $('.j-tabs-content').eq(index).addClass('active');
  });


  // Фильтр портфолио
  $('.j-filter-link').on('click', function(event){
    event.preventDefault();

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
  if ( $('.j-slider').length ) {
    $('.j-slider').slick({
      dots: true,
    });
  }


  // Подгрузка отзывов

  $('.j-reviews-btn').on('click', function() {

    $.ajax({
      type: 'POST',
      url: '/jsons/reviews.json',
      data: 'count=2&shown=4',
      success: function(res) {
        let htmlString = getHtmlString(res.review);
        printToPage(htmlString);
      }
    });
  });

  function getHtmlString(reviewsArray) {
    let htmlItem = '';

    reviewsArray.forEach(function(review) {
      htmlItem = htmlItem + `<div class="reviews-item">
        <div class="review-card">
          <div class="review-ava">
            <img src="${review.url}" alt="" class="review-pic">
          </div>
          <div class="review-text">
            <strong class="review-name">${review.name}</strong>
            <blockquote class="review-quote">
              “${review.quote}”
            </blockquote>
          </div>
        </div>
      </div>`;
    });

    return htmlItem;

  }

  function printToPage(string) {
    $('.j-reviews-list').append(string);
  }

});
