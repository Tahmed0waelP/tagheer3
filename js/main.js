$('.toggle-icon').click(() => {
  $('nav').slideToggle();
});

window.setInterval(() => {
  homeBgs = ['red', 'green', 'blue'];
  homeBgNum = Math.floor(Math.random() * homeBgs.length);
  $('.home').css('background', homeBgs[homeBgNum]);
}, 1000);
