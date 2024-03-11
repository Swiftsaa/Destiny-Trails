function chooseOption(option) {
    var storyElement = document.getElementById("story");
    var optionsElement = document.getElementById("options");
  
    if (option === 1) { // left one
      storyElement.innerHTML = "You open the door and walk through the empty corridor and find a door. Do you look around or open the door?";
      optionsElement.innerHTML = "<button onclick='chooseOption(3)'>look around</button><button onclick='chooseOption(4)'>open the door</button>";
    } else if (option === 2) { //right one
      storyElement.innerHTML = `You open the door and walk through the empty corridor and a fellow prisoner, wait, prisoner? Man, you must've hit your head pretty hard. You've been sent to jail for stealing & murder, that prisoner was your partner in crime. "Joe," says your partner "I have spent the past week digging a hole while you were asleep." "Man, you call being out for a week sleep?" You interrupt. "Fine, mini coma, you can come with me and we can escape together." You lean over to take a look at the mini hole your friend has dug over the week. Do you go with him or go solo`;
      optionsElement.innerHTML = "<button onclick='chooseOption(5)'>go with him</button><button onclick='chooseOption(6)'>go solo</button>";
    } else if (option === 3) { // left one - look around
      storyElement.innerHTML = `You look around and find a key, you go back to the door and open it. You see 2 soldiers standing in front of an exit. Do you attack them or sneak past them?`;
      optionsElement.innerHTML   = "<button onclick='chooseOption(7)'>sneak past them</button><button onclick='chooseOption(8)'>attack them</button>";
    } else if (option === 4) { //left one - open the door
      storyElement.innerHTML = `The door's locked, you struggle a bit more to try to open the door but alas, you fail. You decide to look around for something to open the door, but, suddenly a sword comes flying at you. It stabs you in the chest and you fall to the floor. You see a blurry picture of a guy covered in silver picking up the sword before you go back to the darkness.`;
      optionsElement.innerHTML = "<button onclick=location.reload()>Game Over</button>";
    } else if (option === 5) { // right one - go solo
      storyElement.innerHTML = `You push yourself into the tiny hole, the both of you crawl till you hit a dead end. "You didn't dig a way out?!" you ask in anger. "Heheh, no" stuck in a hole, how unfortunate.`;
      optionsElement.innerHTML = "<button onclick=location.reload()>Game over</button>";
    } else if (option === 6) { // right one - go with him
      storyElement.innerHTML = `"Alright fine, go ahead. Hope nothing bad happens to you." You wonder what you stole and who you murdered while walking through the halls. Busy in your thoughts, you bump into a guard. "What have we here? Prisoner 133." He reads your prison tag. "What are you doing out of your cell? Do you have a death wish or something?" You attack him, you steal his sword and stab him. You walk as stealthy as possible, soon finding an exit from the dungeon. You open the door, sadly it is locked. Will you look for the keys (b) or go back and escape with your friend (a)?`;
      optionsElement.innerHTML = "<button onclick='chooseOption(9)'>look for the keys</button><button onclick='chooseOption(10)'>go back and escape with my friend</button>";
    } else if (option == 7) {
        storyElement.innerHTML = `They obviously spot you. These guys aren't in the mood to show you some mercy, they drag you back to your cell. At least you didn't die.`;
        optionsElement.innerHTML = "<button onclick='location.reload(1)'>Game over</button>";
    } else if (option == 8) { // left one - look around - attack them
        storyElement.innerHTML = `You engage them in a battle of intelligence. Now, your question is... How many sides does a trapezium have? Answer with a number.`;
        optionsElement.innerHTML = `<input type="number" id="userInput"><button onclick='checkAnswer()'>Submit</button>`;
    } else if (option == 9) { // right one - go with him  - look for the keys
        storyElement.innerHTML = `You hurriedly look for the keys after hearing footsteps coming from the other side. You successfully open the door. After a few hours, you successfully escape the castle. Now time to go home, oh wait, you don't know where you live. Guess you will just get a job.`;
        optionsElement.innerHTML = `<button onclick=location.reload()>You win!</button>`;
    } else if (option == 10) { // right one - go with him - go back and escape with friend
        storyElement.innerHTML = `You hurriedly run back to your friend's cell, and you bump into 2 guards. Well, you had a good time, now it's time to say goodbye.`;
        optionsElement.innerHTML = `<button onclick='location.reload(1)'>Game Over</button>`;
    } else {
      storyElement.innerHTML = "The end! Thanks for playing.";
      optionsElement.innerHTML = "";
    }
  }

  function checkAnswer() {
    var userInput = document.getElementById("userInput").value;
    if (userInput == 4) {
      // Correct answer, continue the story
      var storyElement = document.getElementById("story");
      var optionsElement = document.getElementById("options");
      storyElement.innerHTML = `The soldiers back off and let you pass. One of them whispers, "If you're trying to escape, that's not the right way." You dismiss what the soldier has to say. You walk forward through the hallway, almost seen by more bigger, tougher soldiers. You use your key to open another door. Oh crap. That's the door to the royal hall. The king sends his guards to capture you. All seems lost.`
      optionsElement.innerHTML = `<button onclick='location.reload(1)'>Game Over</button>`

    } else {
      // Incorrect answer, end the game
      var storyElement = document.getElementById("story");
      var optionsElement = document.getElementById("options");
      storyElement.innerHTML = `"Wrong answer buddy!" says the soldiers as they put you in your place. You resist going back in the prison, but in all of the action one of the guards' swords stabs you. You just killed yourself. LOL`;
      optionsElement.innerHTML = `<button onclick='location.reload(1)'>Game Over</button>`;
    }
  }
  