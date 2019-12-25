$(document).ready(function () {

    // Load JSON file
    let openingAnimWindow = document.querySelector('#openingLottie');
    let openingAnimData = {
      container: openingAnimWindow,
      animType: 'svg',
      loop: true,
      prerender: true,
      autoplay: true,
      // path: 'json/download-icon.json'
      path: 'https://assets9.lottiefiles.com/packages/lf20_bj26TH.json'
    };
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);
  
  });