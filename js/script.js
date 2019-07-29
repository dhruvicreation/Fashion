$(function(){
  $("#menu-trigger").click(function(){
    $(".header").toggleClass('mobimenu');
    mobiMenu();
  });
});

function sizeContent() {
  var windowWidth = $(window).width();
  if (windowWidth > 767) {
    $(".header").removeClass('mobimenu');
    $(".menu > li" ).find( "ul" ).removeAttr("style");
  };
};
$(document).ready(sizeContent);
$(window).resize(sizeContent);

$(window).scroll(function() {
  if ($(window).scrollTop() >=  $(".banner").offset().top) {
    $('body').addClass('fixed');
  } else {
    $('body').removeClass('fixed');
  };
});

function mobiMenu() {
  $(".mobimenu .menu > li" ).find( "ul" ).parent("li").addClass("color" );
  $(".mobimenu .menu li.color > a").append('<span class="arrow"></span>');
  $('.mobimenu .menu li.color > a .arrow').closest('li').removeClass("open" );
  $('.mobimenu .menu li.color > a .arrow').click(function(e) {
    e.preventDefault();
    $(this).closest('li').toggleClass("open" ).siblings().removeClass("open" );
    $(this).closest('.menu').siblings().find('li').removeClass("open" );
    $(this).closest('li').siblings().find('> ul').slideUp(300);
    $(this).closest('.menu').siblings().find('li > ul').slideUp(300);
    $(this).closest('li').find('> ul').slideToggle(300);
  })
};

$(document).ready(function(){
  mobiMenu();
  $("[data-fancybox]").fancybox();

  $('#nav-menu > li').each(function (index, value) {
    var submenusize = $(this).find('ul>li').length;
    //console.log(facultypic);
    if (submenusize >= 5) {
      $(this).addClass('mega-menu');
    }
  });

  $('#nav-menu')
    .find('li')
    .has('ul')
    .attr({ 'aria-haspopup': 'true', 'role': 'menuitem' })
    .find('ul')
    .attr({ 'aria-hidden': 'true', 'role': 'menu' });

  $(".nav a").filter(function(){
    return this.href == location.href.replace(/#.*/, "");
  }).attr("aria-current", "true");

 $('.homebanner').slick({
      autoplay: true,
      speed:2000,
      autoplaySpeed:8000,
      arrows:false,
      dots: true,
      fade: true
      });

});