$('.slick-accueil').slick({
  	infinite: true,
  	speed: 300,
  	slidesToShow: 1
});


function carouselTab(){
  $('.tab-carousel li > a').on('click', function(e){
    e.preventDefault();
  });

  $( ".tab-carousel" ).each(function( index ) {
    $(this).addClass('num-' + index);

      //Detecte si le nombre de tab dépasse la taille total du menu
      var totalWidth = 0;
      $(this).find('li a').each(function(){
          totalWidth += parseInt($(this).outerWidth(), 10);
          var width = $(this).outerWidth();
      });
      var containerWidth = $(this).outerWidth(); 
      if(containerWidth > totalWidth ){
        var slideToshow = 99;
      }else{
        var slideToshow = 1;
      }

      $('.tab-carousel.num-' + index).slick({
        slidesToShow: slideToshow,
        focusOnSelect: true,
        arrows:false,
        speed:500,
        asNavFor: '.num-' + index,
        variableWidth: true,
        accessibility: false,
    });
  });

  $( ".tab-content" ).each(function( index ) {
    $(this).addClass('num-' + index);

     $('.tab-content.num-' + index).slick({
        slidesToShow: 1,
        adaptiveHeight: true,
        swipeToSlide: false,
        draggable: false,
        swipe: false,
        arrows:false,
        accessibility: false,
        dots:false,
        asNavFor: '.num-' + index,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              swipeToSlide: true,
              draggable: true,
              swipe: true,
            }
          }
        ]
    });
  });
}

//INIT GALLERY
function gallery() {
  $('.lightgallery').lightGallery({
  	selector: '.gallery-item',
    actualSize: false,
    subHtmlSelectorRelative: true
  });
  $('.video-box').lightGallery({
  	selector: '.gallery-item',
    actualSize: false,
    subHtmlSelectorRelative: true
  });
}

//ACCORDION
function accordion() {
  $('.panel-heading').click(function() {
    var parentSelector = $(this).parent('.panel');
    if (parentSelector.hasClass('no-border')) {
      parentSelector.removeClass('no-border');
    } else {
      $('.panel').removeClass('no-border');
      parentSelector.addClass('no-border');
    }
    var headerHeight = $('#header').outerHeight();
    setTimeout(function() {
      var hrefTarget = $(this).parent();
      $('html, body').animate({
        scrollTop: ($(hrefTarget).offset().top - headerHeight)
      }, 300);
    }.bind(this), 350);
  });
}

//SELECT
function create_custom_dropdowns() {

  $('select').each(function(i, select) {
    $(this).after('<div class="dropdown ' + ($(this).attr('class') || '') + '" tabindex="0"><span class="current"></span><div class="list"><ul></ul></div></div>');
    var dropdown = $(this).next();
    var options = $(select).find('option');
    var selected = $(this).find('option:selected');
    dropdown.find('.current').html(selected.data('display-text') || selected.text());
    options.each(function (j, o) {
        var display = $(o).data('display-text') || '';
        dropdown.find('ul').append('<li class="option ' + ($(o).is(':selected') ? 'selected' : '') + '" data-value="' + $(o).val() + '" data-display-text="' + display + '">' + $(o).text() + '</li>');
    });
  });
}

// Event listeners

// Open/close
$(document).on('click', '.dropdown', function(event) {
  $('.dropdown').not($(this)).removeClass('open');
  $(this).toggleClass('open');
  if ($(this).hasClass('open')) {
    $(this).find('.option').attr('tabindex', 0);
    $(this).find('.selected').focus();
  } else {
    $(this).find('.option').removeAttr('tabindex');
    $(this).focus();
  }
});
// Close when clicking outside
$(document).on({ 'touchstart' : function(event){
  if ($(event.target).closest('.dropdown').length === 0) {
      $('.dropdown').removeClass('open');
      $('.dropdown .option').removeAttr('tabindex');
    }
    event.stopPropagation();
} });

$(document).click(function(event) {
  if ($(event.target).closest('.dropdown').length === 0) {
    $('.dropdown').removeClass('open');
    $('.dropdown .option').removeAttr('tabindex');
  }
  event.stopPropagation();
});

// Option click
$(document).on('click', '.dropdown .option', function(event) {
  $(this).closest('.list').find('.selected').removeClass('selected');
  $(this).addClass('selected');
  var text = $(this).data('display-text') || $(this).text();
  $(this).closest('.dropdown').find('.current').text(text);
  $(this).closest('.dropdown').prev('select').val($(this).data('value')).trigger('change');
});

// Keyboard events
$(document).on('keydown', '.dropdown', function(event) {
  var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
  // Space or Enter
  if (event.keyCode == 32 || event.keyCode == 13) {
    if ($(this).hasClass('open')) {
      focused_option.trigger('click');
    } else {
      $(this).trigger('click');
    }
    return false;
    // Down
  } else if (event.keyCode == 40) {
    if (!$(this).hasClass('open')) {
      $(this).trigger('click');
    } else {
      focused_option.next().focus();
    }
    return false;
    // Up
  } else if (event.keyCode == 38) {
    if (!$(this).hasClass('open')) {
      $(this).trigger('click');
    } else {
      var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
      focused_option.prev().focus();
    }
    return false;
  // Esc
  } else if (event.keyCode == 27) {
    if ($(this).hasClass('open')) {
      $(this).trigger('click');
    }
    return false;
  }
});

$(window).resize(function() {

});

$(window).on('load', function(){

});

$(document).ready(function() {
	carouselTab();
  gallery();
  accordion();
  create_custom_dropdowns();
});


