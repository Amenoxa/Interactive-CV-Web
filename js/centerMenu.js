var buttonEl = document.querySelectorAll('.center_menu');

function animateButton(el, scale, duration, elasticity) {
  anime.remove(el);
  anime({
    targets: el,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
}

function enterButton(el) {
  animateButton(el, 1.4, 800, 400)
};

function leaveButton(el) {
  animateButton(el, 1.0, 600, 300)
};

for (var i = 0; i < buttonEl.length; i++) {
  buttonEl[i].addEventListener('mouseenter', function(e) {
    enterButton(e.target);
  }, false);
  
  buttonEl[i].addEventListener('mouseleave', function(e) {
    leaveButton(e.target)
  }, false);  
}


anime({
    targets: '.center_name',
    translateX: [-500, 0],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: 8000
  });

  $(function(){
    $('.center_menu--aboutMe').hover(function() {
      $('.center_overflowWrapper_text--aboutMe').addClass('visiable');
    }, function() {
      $('.center_overflowWrapper_text--aboutMe').removeClass('visiable');
    })
  })

  $(function(){
    $('.center_menu--contacts').hover(function() {
      $('.center_overflowWrapper_text--contacts').addClass('visiable');
    }, function() {
      $('.center_overflowWrapper_text--contacts').removeClass('visiable');
    })
  })

  $(function(){
    $('.center_menu--experience').hover(function() {
      $('.center_overflowWrapper_text--experience').addClass('visiable');
    }, function() {
      $('.center_overflowWrapper_text--experience').removeClass('visiable');
    })
  })

  $(function(){
    $('.center_menu--skills').hover(function() {
      $('.center_overflowWrapper_text--skills').addClass('visiable');
    }, function() {
      $('.center_overflowWrapper_text--skills').removeClass('visiable');
    })
  })

  $(function(){
    $('.center_menu--education').hover(function() {
      $('.center_overflowWrapper_text--education').addClass('visiable');
    }, function() {
      $('.center_overflowWrapper_text--education').removeClass('visiable');
    })
  })

  $(function(){
    $('.center_menu--contacts').click(function() {
      $('.sections_contacts').addClass('visiable').removeClass('invisiable');
      $('.sections_aboutMe').removeClass('visiable').addClass('invisiable');
      $('.sections_experience').removeClass('visiable').addClass('invisiable');
      $('.sections_education').removeClass('visiable').addClass('invisiable');
      $('.sections_skills').removeClass('visiable').addClass('invisiable');
    })
  })
  $(function(){
    $('.center_menu--aboutMe').click(function() {
      $('.sections_aboutMe').addClass('visiable').removeClass('invisiable');
      $('.sections_contacts').removeClass('visiable').addClass('invisiable');
      $('.sections_experience').removeClass('visiable').addClass('invisiable');
      $('.sections_education').removeClass('visiable').addClass('invisiable');
      $('.sections_skills').removeClass('visiable').addClass('invisiable');
    })
  })
  $(function(){
    $('.center_menu--experience').click(function() {
      $('.sections_experience').addClass('visiable').removeClass('invisiable');
      $('.sections_contacts').removeClass('visiable').addClass('invisiable');
      $('.sections_aboutMe').removeClass('visiable').addClass('invisiable');
      $('.sections_education').removeClass('visiable').addClass('invisiable');
      $('.sections_skills').removeClass('visiable').addClass('invisiable');
    })
  })
  $(function(){
    $('.center_menu--skills').click(function() {
      $('.sections_skills').addClass('visiable').removeClass('invisiable');
      $('.sections_contacts').removeClass('visiable').addClass('invisiable');
      $('.sections_experience').removeClass('visiable').addClass('invisiable');
      $('.sections_education').removeClass('visiable').addClass('invisiable');
      $('.sections_aboutMe').removeClass('visiable').addClass('invisiable');
    })
  })
  $(function(){
    $('.center_menu--education').click(function() {
      $('.sections_education').addClass('visiable').removeClass('invisiable');
      $('.sections_contacts').removeClass('visiable').addClass('invisiable');
      $('.sections_experience').removeClass('visiable').addClass('invisiable');
      $('.sections_aboutMe').removeClass('visiable').addClass('invisiable');
      $('.sections_skills').removeClass('visiable').addClass('invisiable');
    })
  })

 