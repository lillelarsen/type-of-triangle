# Type Of Triangle - Calculator 

## Technologies
I chose to use HTML and Vanilla JavaScript and bootstrap for design. The reason is that the webapp is very small, and using frameworks and libraries would be an overkill.

## Structure

My HTML consist of one file: **index.html** this shows the whole site. My inputs are set to numbers.

The design is simple and user friendly, and i added images for better understanding. These are located in the folder **images**

The folder **js** contains my Javascript files. 

My functions is splitted into three files.
**formEvent.js** runs when i submit my form with inputs, it checks for the type of number. And returns messages to users.

**triangleCalculator.js** holds the function that returns which type the triangle is. If anything goes wrong, it returns a message to try again.

**countEquals.js** consist of functions that determine if none, two or all three values is the same. And checks if there is three parameters send along at all. These functions can be used to check for other things than numbers, therefore i took them out and put them in their own file.

## Conclusion
Overall i use functional programming, it's very easy to implement new functions and to remove unwanted features. I focus on using semantic elements in my HTML, as the browser and search-engines understands the site alot better. This is a small application, but in a big project it is better to keep files under 300 lines. And they become easy to maintain.






 
