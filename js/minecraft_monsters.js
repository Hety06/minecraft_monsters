function checkIt() {
  // Initializing variables
  var creeper = 0
  var skeleton = 0
  var spider = 0
  var zombie = 0
  var creeperimg = "<img src='img/creeper.png'>"
  var spiderimg = "<img src='img/spider.png'>"
  var skeletonimg = "<img src='img/skeleton.png'>"
  var zombieimg = "<img src='img/zombie.png'>"

  // Get info from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'creeper') {
        creeper++;
      }

      else if (e.value == 'skeleton') {
        skeleton++;
      }

      else if (e.value == 'spider') {
        spider++;
      }

      else if (e.value == 'zombie') {
        zombie++;
      }
    }
  }

  //Build a message
  var counts = "Creeper: " + creeper + ", " +
               "Skeleton: " + skeleton + ", " +
               "Spider: " + spider + ", " +
               "Zombie: " + zombie;

  var max = Math.max(creeper, skeleton, spider, zombie);

  var message;

  if (max == creeper) {
    message0 = "Which Minecraft monster are you?"
    message1 = "YOU ARE A CREEPER!!"
    message2 = "You enjoy hiding behind trees and waiting until a harmless victim comes by to EXPLODE!"
    message3 = creeperimg
  }
  else if (max == skeleton) {
    message0 = "Which Minecraft monster are you?"
    message1 = "OH NO YOU'RE A SKELETON!!"
    message2 = "You like waiting in the dark and hiding behind rocks with your bow and arrow."
    message3 = skeletonimg
  }
  else if (max == spider) {
    message0 = "Which Minecraft monster are you?"
    message1 = "EEK YOU ARE A SPIDER!!"
    message2 = "You climb all over the place and wait until your target is right under you before you STRIKE!"
    message3 = spiderimg
  }
  else if (max == zombie) {
    message0 = "Which Minecraft monster are you?"
    message1 = "YOU'RE A ZOMBIE!!"
    message2 = "You love eating villagers and tasty brains while walking in a deep dark forest."
    message3 = zombieimg
  }

  //DIsplay message
  //document.getElementById('result').innerHTML = counts;
  document.getElementById('result-title').innerHTML = message0;
  document.getElementById('result-heading').innerHTML = message1;
  document.getElementById('result-text').innerHTML = message2;
  document.getElementById('result-img').innerHTML = message3;
}
