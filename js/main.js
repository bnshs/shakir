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

  $('.header__burger, .overlay').on('click', function (e){
    e.preventDefault()
    $('.header__top').toggleClass('header__top--opened')
    $('.overlay').toggleClass('overlay--show')
    $('.header__burger').toggleClass('header__burger--opened')
  })

  $('.menu__list-item').on('click', function (e){
    e.preventDefault()
    if ($(this).hasClass('menu__list-item--active')) {
      $(this).removeClass('menu__list-item--active')
      $(this).children('.submenu').slideUp()
    } else{
      $('.menu__list-item').removeClass('menu__list-item--active')
      $('.submenu').slideUp()
      $(this).addClass('menu__list-item--active')
      $(this).children('.submenu').slideDown()
    }
  })

  // $('.header__burger, .overlay').on('click', function (e){
  //   e.preventDefault()
  //   $('.header__top').toggleClass('header__top--opened')
  //   $('.overlay').toggleClass('overlay--show')
  //   $('.header__burger').toggleClass('header__burger--opened')
  // })