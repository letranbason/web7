var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');

App = {
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
};

jQuery(document).ready(function() {
  App.sliderTable();
});