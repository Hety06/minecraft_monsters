function checkIt() {
  // Initializing variables
  var oreo = 0
  var ninja = 0
  var grass = 0
  var jesus = 0
  var oreoimg = "<img src='img2/oreo.png'>"
  var ninjaimg = "<img src='img2/ninja.png'>"
  var grassimg = "<img src='img2/grass.png'>"
  var jesusimg = "<img src='img2/jesus.png'>"

  // Get info from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'oreo') {
        oreo++;
      }

      else if (e.value == 'ninja') {
        ninja++;
      }

      else if (e.value == 'grass') {
        grass++;
      }

      else if (e.value == 'jesus') {
        jesus++;
      }
    }
  }

  //Build a message
  var counts = "oreo: " + oreo + ", " +
               "ninja: " + ninja + ", " +
               "grass: " + grass + ", " +
               "jesus: " + jesus;

  var max = Math.max(oreo, ninja, grass, jesus);

  var message;

  if (max == oreo) {
    message0 = "Which Fidget Spinner Best Fits you?"
    message1 = "OREO SPINNER!!"
    message2 = "You are an amazing person with great opinions and thoughts!"
    message3 = oreoimg
  }
  else if (max == ninja) {
    message0 = "Which Fidget Spinner Best Fits you?"
    message1 = "NINJA SPINNER!!"
    message2 = "You're super sneaky and your choices are cunning and crazy."
    message3 = ninjaimg
  }
  else if (max == grass) {
    message0 = "Which Fidget Spinner Best Fits you?"
    message1 = "APRIL 20TH SPINNER!!"
    message2 = "You love hanging out with the boys (or gals) and you always have a great time!"
    message3 = grassimg
  }
  else if (max == jesus) {
    message0 = "Which Fidget Spinner Best Fits you?"
    message1 = "JESUS SPINNER!!"
    message2 = "You are so in tune with the lord and you hate wacky tabacky!"
    message3 = jesusimg
  }

  //DIsplay message
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result-title').innerHTML = message0;
  document.getElementById('result-heading').innerHTML = message1;
  document.getElementById('result-text').innerHTML = message2;
  document.getElementById('result-img').innerHTML = message3;
}
