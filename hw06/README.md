# HOMEWORK 5: MANIPULATING TWITTER DATA WITH FUNCTIONS
> * Due date: Midnight on Wednesday, 10/11 (1 week)
> * Part I: Using Github because no pain, no gain
> * Part II: Homework
> * To submit: See Part III, Step 4

## Preamble
This homework will require some googling. As a software engineer, a lot of what you'll need to do is express what you're TRYING to do, and then read code and documentation in order to achieve it. Remember: StackOverflow and Mozilla Developer Network (MDN) are your friend!

## Part I: Setting Up Your GitHub
1. Using the Terminal, navigate to your git repository: `$ cd /path/to/mmart-168-fall2017`
2. Check out the master branch: `$ git checkout master`
3. Pull the most recent changes from the upstream repository: `$ git pull --rebase upstream master`
4. Create a new branch to do Homework 6: `$ git branch homework06`
5. Checkout your new branch: `$ git checkout homework06`
6. Verify that you are now on the new branch: `$ git branch` (check that your new branch has an asterisk next to it).

## PART II: Reading response
https://developer.mozilla.org/en-US/docs/Learn/WebGL/By_example/Detect_WebGL
"In this first example we are going to check whether the browser supports WebGL. To that end we will try to obtain the WebGL rendering context from a canvas element. The WebGL rendering context is an interface, through which you can set and query the state of the graphics machine, send data to the WebGL, and execute draw commands."

In this example of how to check to see if the browser supports WebGL I was immediately confused by where to put the code sample they offered to see if the browser would read it since the button example which states to press it to see if the code works...does not work nor does anything happen in codepen. It may be to do do with the internet connection I am working on but it thwarts ones confidence when you are not getting anywhere.


## Part III: JavaScript Homework

Twitter used to have a star to show that users had "favorited" a tweet. They changed it to a heart at some point, but, honestly, it's easier to make a star in Illustrator, so we're making our Twitter with stars.

Hearts and stars aside, this is an important feature of tweets - either the tweet is "liked" or it isn't - and, when it's clicked, that state will switch. It's like a light switch (on/off) or a door (open/closed). We can write a `toggle` function to help us switch between those two states in Javascript, and use CSS to show the user what the current state is.

At the end of this exercise, we should have a clickable star. By default, it's grey. If we click it, it should turn gold. If we click it again, it should go back to grey.

### Toggle the Like Button
> Open the following 2 files in Atom:
>  
>  * hw06/index.html
>  * hw06/scripts/toggle.js

Complete the following 2 tasks:

1. Write an arrow function called `toggleLike`. It takes no parameters. `toggleLike` should find the DOM element with the id `like`. Now, write a conditional statement. It should check to see if the classList of the element contains the `active` class. If it does, remove the 'active' class. If it doesn't, add the 'active' class.

> HINT: You will find the [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) documentation very useful for this homework

2. Write an arrow function called `toggle` that takes no parameters. It should find a DOM element with the id `like`. without writing a conditional statement, use the classList to toggle the `active` class.

#### Extra Credit
There's a wonderful world of CSS animations out there. Using only CSS, can you animate the transition of the star element? For example, maybe it could grow before settling back to regular size, or spin when it's clicked. (:


### Step 3: Submit Your Homework via GitHub + Moodle
This week, you're going to submit your homework using GitHub. To do so:

1. Just as in Step three, open your Terminal and type: `$ git status`. It should tell you which files you've changed.
2. To "commit" all of your changes, type: ` $ git commit -am 'Complete homework 6'`
3. To "push" your change to up to your github account, type: `$ git push origin <branch-name>`
4. Finally, verify that your changes are up on GitHub by logging into your GitHub account and taking a look.
5. **Submit your homework by pasting a link to your branch into the Moodle.**
