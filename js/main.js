$('.toggle-icon').click(() => {
  $('nav').slideToggle();
  document.querySelector('.toggle-icon').classList.toggle('open');
});

window.setInterval(() => {
  homeBgs = ['../images/home/bg_1.png', '../images/home/bg_2.png', '../images/home/bg_3.png'];
  homeBgNum = Math.floor(Math.random() * homeBgs.length);
  $('.home').css('background', 'url(\'' + homeBgs[homeBgNum] + '\')');
}, 1000);


// Yasreb
// 4*KO2 + 2*CO2 = 2*K2CO3 + 3*O2
// Variables
currentCarbonRationInAir = prompt(); // The current carbon vakue in the air that will get from the sensor
normalCardonRationInAir = 50; // The Normal Carbon Ration On The Air
unnormalCarbonRatioInAir = currentCarbonRationInAir - normalCardonRationInAir; // The carbon ration that more than the normal carbon ration on the air
ko2Ratio = unnormalCarbonRatioInAir * 2; // The KO2 ratio
console.log('KO2 Ration is: ' + ko2Ratio);