$('.toggle-icon').click(() => {
  $('nav').slideToggle();
});

window.setInterval(() => {
  homeBgs = ['../images/home/bg_1.png', '../images/home/bg_2.png', '../images/home/bg_3.png'];
  homeBgNum = Math.floor(Math.random() * homeBgs.length);
  $('.home').css('background', 'url(\'' + homeBgs[homeBgNum] + '\')');
}, 1000);
