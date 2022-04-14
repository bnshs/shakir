$('.questions__link-box').on('click', function (e){
    e.preventDefault()
    if ($(this).hasClass('questions__link-box--active')) {
      $(this).removeClass('questions__link-box--active')
      $(this).children('.questions__item-text').slideUp()
    } else{
      $('.questions__link-box').removeClass('questions__link-box--active')
      $('.questions__item-text').slideUp()
      $(this).addClass('questions__link-box--active')
      $(this).children('.questions__item-text').slideDown()
    }
  })

  $('.header__burger').on('click', function (e){
    e.preventDefault()
    $('.header__top').toggleClass('header__top--opened')
    $('.header__burger').toggleClass('header__burger--opened')
  })