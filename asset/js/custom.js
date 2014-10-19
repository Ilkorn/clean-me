/*------------------------------------------------------------------
Project:    Wolfram
Author:     Yevgeny Simzikov
URL:        http://simpleqode.com/
            https://twitter.com/YevSim
Version:    1.0
Created:        18/08/2014
Last change:    29/08/2014
-------------------------------------------------------------------*/

/*
 * Sidebar
 */

$(".sidebar-btn").on('click', function() {
    $(".sidebar-overlay").toggleClass("show hidden");
    $(".sidebar-menu").toggleClass("show hidden");
    return false;
});

/*
 * Navbar Transparent : Removing and adding on scroll
 */

$('.screen:first').waypoint(function() {
  $(".navbar").toggleClass("navbar-transparent");
}, {
  offset: function() {
    return -$(this).height();
  }
});

/*
 * Backstretch Carousel :: Replace with your images if necessary.
 */

$(".backstretch-carousel").backstretch([
  "asset/image/bg/screen-bg_7.jpg",
  "asset/image/bg/screen-bg_1.jpg",
  "asset/image/bg/screen-bg_2.jpg",
  "asset/image/bg/screen-bg_3.jpg",
  "asset/image/bg/screen-bg_4.jpg",
  "asset/image/bg/screen-bg_5.jpg",
  "asset/image/bg/screen-bg_6.jpg"
], {
    duration: 1000,
    fade: 1000
  });

$(".backstretch-carousel").backstretch("pause");

$('.screen').waypoint(function(direction) {
  if (direction === 'down') {
   $(".backstretch-carousel").backstretch("next");
  }
  if (direction === 'up') {
   $(".backstretch-carousel").backstretch("prev");
  }
}, { offset: '50%' });

/*
 * Smooth Scrolling
 */

$(document).ready(function(){
    $('a[href=#welcome],a[href=#about], a[href=#portfolio], a[href=#pricing], a[href=#team], a[href=#features], a[href=#contact-us]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
    });
   return false;
});