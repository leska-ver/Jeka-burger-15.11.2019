document.addEventListener('DOMContentLoaded', () => {

  $(document).ready(function() {
    $('.header__burger').click(function(event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');//Блокируем прокрутку сайта, пока меню открыта. В css body.lock
    });
  });

});