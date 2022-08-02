let header = document.querySelector('header');
let nav = document.querySelector('nav');
let currentScroll;
let oldScroll = 0;

$('.toggle-icon').click(() => {
  $('nav').slideToggle();
  document.querySelector('header .toggle-icon').classList.toggle('open');
	if (window.pageYOffset <= 0) {
		if (header.style.background == 'var(--main-color)') {
			header.style.background = 'transparent';
		} else {
			header.style.background = 'var(--main-color)';
		}
	}
});

window.setInterval(() => {
  homeBgs = ['../images/home/bg_1.png', '../images/home/bg_2.png', '../images/home/bg_3.png'];
  homeBgNum = Math.floor(Math.random() * homeBgs.length);
  $('.home').css('background', 'url(\'' + homeBgs[homeBgNum] + '\')');
}, 1000);


// Yasreb
// 4*KO2 + 2*CO2 = 2*K2CO3 + 3*O2
// Variables
// currentCarbonRationInAir = prompt(); // The current carbon vakue in the air that will get from the sensor
function calc (currentCarbonRationInAir) {
  normalCardonRationInAir = 50; // The Normal Carbon Ration On The Air
  unnormalCarbonRatioInAir = currentCarbonRationInAir - normalCardonRationInAir; // The carbon ration that more than the normal carbon ration on the air
  ko2Ratio = unnormalCarbonRatioInAir * 2; // The KO2 ratio
  console.log('KO2 Ration is: ' + ko2Ratio); // Final value
}


window.onscroll = (e) => {
  currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    header.style.background = 'transparent';
  } else {
    header.style.background = 'var(--main-color)';
  }
	if (oldScroll < currentScroll) {
    // console.log("Up");
		header.style.position = 'static';
		nav.style.display = 'none';
  } else if (oldScroll > currentScroll) {
		// console.log("Down");
		header.style.position = 'fixed';
  }
	if (nav.style.display == 'none') {
		document.querySelector('header .toggle-icon').classList.remove('open');
	} else {
		document.querySelector('header .toggle-icon').classList.add('open');
	}
  oldScroll = currentScroll;
  // console.log(window.pageYOffset);
}