# icon-carousel
A simple vanilla JS script for an interactive rotating icon carousel.  

![icon-carousel-gif](https://github.com/nexusboyko/icon-carousel/assets/71574111/c5b9c617-a0de-4ac1-958d-3c45032cc37c)

*My first time sharing, so any feedback is appreciated! Leave a star if you found it useful!* :)

#### Some things to note:
- The current version of the carousel works with icons from the `iconify-icon` [library](https://icon-sets.iconify.design/).  
- Most (if not all) aspects of the carousel are customizable, but may need some tweaking to work properly.
  * Check out the built-in features below!

[I want this in my project!](#adding-this-to-your-project)

### Icon scaling & blurring

![icon-carousel-gif-scale-blur](https://github.com/nexusboyko/icon-carousel/assets/71574111/545e9cc3-4bfb-416d-9ea9-df95c2dbf997)

### Click & drag with cursor

![icon-carousel-gif-draggable](https://github.com/nexusboyko/icon-carousel/assets/71574111/d959548d-6533-46a4-a868-5d05bd8ee845)

## Adding this to your project

Everything you need for the carousel is available in the three (`.js`, `.html`, `.css`) source files.  

1. **Get started by inserting the carousel div element wherever you need it.**  
Inside `index.html`, you'll find it as `<div class="carousel-wrapper"></div>` (it adjust the "window" within which the carousel is visible).  
Within the wrapper is the actual `<div class="carousel"></div` element which contains all of the icons in the carousel.  
You can add as many icons as you want, but the carousel gets more crowded the more icons there are!
###
2. **Try changing the icons to whatever you want them to be.**  
As noted previously, the carousel *currently* uses `iconify-icons` for its icons, and includes a small caption under each one, but you *should* be able to use almost any other element so long as you wrap it within the `class="icon"` div.  
If you do decide to swap out the iconify icons for something else, don't forget to also remove the script element that imports the library from the HTML file!
###
3. **For the carousel to work and look the way it does, make sure to add the Javascript code and CSS styling!**  
All the functionality is inside of `index.js` (you can comment out/remove any of the above features).  
The necessary styling (which is also customizable!) includes: `.carousel`, `.icon`, and `.carousel .icon` (also `.icon > small`, which is for the caption text).

### Questions? Suggestions? Let me know! 
