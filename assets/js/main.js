var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

var prevBtn_event = document.getElementById('prevBtn_event');
var nextBtn_event = document.getElementById('nextBtn_event');

var prevBtn_top = document.getElementById('prevBtn_top');
var nextBtn_top = document.getElementById('nextBtn_top');

var App = {
  sliderTable: function() {
    jQuery('.slidertable').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
      prevArrow: prevBtn, // Set custom previous button
      nextArrow: nextBtn, // Set custom next button
    });
  },

  backGroundSlide: function() {
    jQuery('.background-slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      prevArrow: false,
      nextArrow: false,
    });
  },

  sliderGrid: function () {
    jQuery('.slider-grid').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:false,
      autoplaySpeed: 2500,
      prevArrow: prevBtn_event,
      nextArrow: nextBtn_event,
    })
  },

  sliderNews: function () {
    jQuery('.sliderNews').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:false,
      autoplaySpeed: 2500,
      prevArrow: prevBtn_top,
      nextArrow: nextBtn_top,
    })
  },

}

document.addEventListener('DOMContentLoaded', function() {
  App.sliderTable();
  App.backGroundSlide();
  App.sliderGrid();
  App.sliderNews();

  const showMoreButtons = document.querySelectorAll('.show-more');
  showMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      const content = button.parentNode.querySelector('.hidden-content');
      const buttonText = button.innerText.trim();

      if (content.style.display === 'none') {
        content.style.display = 'block';
        button.innerText = 'Ẩn Bớt';
      } else {
        content.style.display = 'none';
        button.innerText = 'Xem Thêm';
      }
    });
  });
});