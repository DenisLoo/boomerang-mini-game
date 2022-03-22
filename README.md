# Boomerang!

Let me show you my solo project as intern at Elbrus Bootcamp.

Use the `npm start` command to start the game.
During the game, use "q", "w" to move left and right, "e" to throw a boomerang.
The hero wins the game when he reaches the end of the path (🖱🖱🖱🖱🖱🖱).
The hero dies if the enemy catches him.

Enjoy!

Original task text:

## Introduction

What will the game look like? The game will have the main character (it will be you). Choose an emoji for yourself :) There will also be enemies in the game. First, make sure that there is only one enemy. Find emoji for him too. You might already know what is gonna happen next, huh? Fight your enemy! There is a distance between you two. You have a boomerang that you can throw and it returns to you. The enemy has nothing but if it touches you, then you instantly lose. Can you picture the game? You can further develop it!

### Release 0. Оh! What are these files?
Yes, you already have some project structure, template classes and methods. The fact is that really long time ago, in his school years, your old friend (the same farmer Fedor :tractor:), already made such a game but no one taught him how to use `git`. Therefore we asked him to, at least, remember the basic structure of the project and this is what came out of it. You are not required to use the proposed structure but we recommend that you go through it anyway. What if it gives you something to think about?

- `run.js` - script to start the game. All the game settings will be imported here.
- `src/Game.js` - main class of the game. It is a kind of a Controller that binds all the classes. It also checks the current state of the game, calls `View` for rendering.
- `src/View.js` - do you remember about `MVC`? So then this is `V`. This class is responsible for displaying the game in the console.
- `src/keyboard.js` - script that is not yet linked to other project files but can be very useful. It will help you set up controls and learn how to work with keypress events.
- `src/game-models/Hero.js` - this is your hero class. Here you should have all the movement logic, throwing a boomerang and so on.
- `src/game-models/Enemy.js` - this is your enemy class.
- `src/game-models/Boomerang.js` - this is a boomerang class. Instead of boomerang, you can come up with something different, you can make a few kinds of weapons. Don't forget to pass the weapon to your charachter.

### Release 1. Shall we model the logic of the game?

Think about the logic of the game. First, think about what you want to get in the [MVP]. You don't need to write any code for this! Get together with your team and just brainstorm! Write down all the ideas on a piece of paper, draw pictures and diagrams! Think about what you want to get by the end of the working day.

- How will you draw yourself and the enemy?
- How will the boomerang fly?
- What happens when the character touches the enemy?
- Will you separate logic and display in the code? (What if you are later asked to rewrite everything to the web version: how to organize the code initially so that moving the game to the web is not so painful?)
- What additional functionality would you like to implement?

This list of questions that you should think about should be long enough. Keep going!
