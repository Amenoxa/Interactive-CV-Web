$(function(){
    var slideUp = anime({
      targets: ['.sections_experience_grid_fos', '.sections_experience_grid_name', '.sections_experience_grid_date'],
      translateY: [-200 ,0],
      duration: 300,
      easing: 'easeInCubic',
      autoplay: false 
    });

    document.querySelector('.sections_experience_arrow--up').onclick = slideUp.play;
});

$(function(){
    var slideDown = anime({
      targets: ['.sections_experience_grid_fos', '.sections_experience_grid_name', '.sections_experience_grid_date'],
      translateY: [0 ,-200],
      duration: 300,
      easing: 'easeInCubic',
      autoplay: false 
    });

    document.querySelector('.sections_experience_arrow--down').onclick = slideDown.play;
});



$(function(){
    $('.sections_experience_arrow--down').hover(function() {
      $('.sections_experience_arrow--down').addClass('fa-beat');
    }, function() {
      $('.sections_experience_arrow--down').removeClass('fa-beat');
    })
  })

  $(function(){
    $('.sections_experience_arrow--up').hover(function() {
      $('.sections_experience_arrow--up').addClass('fa-beat');
    }, function() {
      $('.sections_experience_arrow--up').removeClass('fa-beat');
    })
  })