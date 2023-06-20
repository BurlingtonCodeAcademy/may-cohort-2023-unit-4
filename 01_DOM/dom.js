/* 
!   DOM
    - Document Object Model
    - Only through the browser

    Frame:
        - Document: HTML page
            - Is a global variable
        - Object: Elements and comments (nodes)
        - Model: Arrangement

    - Data representation of objects that comprise the structure and content of a document on the web.

    Basic Structure:
        - HTML
            - Head
                - Meta
                - Links
                - Title
            - Body
                - Nav
                - Header
                - Divs, etc.

!   BOM
        - Browser Object Model
        - Window variable that we can access
        - various methods available.
*/

function askForStuff() {
    prompt();
}

// askForStuff();
// console.log(document);
// console.log(document.URL);
// console.log(document.location);
// console.log(document.title);
document.title = "DOM Lesson Updated"

//* Creating Elements
let h1 = document.createElement('h1');
// console.log(h1);
/* 
    Our variable now has access to our various properties (within the H1 element)
        - innerHTML: can inject a block of HTML
        - innerText: returns the visible text contained in a node (element)
        - textContent: returns the full text
            ex:
                <p>Hello <b>World</b></p>
                ~ innerText would return just "Hello"
                ~ textContent would return "Hello World"
*/

h1.innerText = "Creating my first DOM element";
// console.log(h1);
/* 
*   Chain of Events:
    1. Create our element (or check if exists)
    2. Apply our value
    3. Place our element
*/

//* Append Child
// console.log(document.body);
document.body.appendChild(h1);
// console.log(document.body.children[2]);
h1.style.color = 'blue';
// console.log(document.body.children);
h1.style.textAlign = 'center';
h1.style = `
    color: blue;
    text-align: center;
    text-shadow: 2px 2px 2px yellow;
    `;
h1.className = "h1-class-name"; // JS requires camelCasing as "class" is a keyword within JavaScript.
h1.id = 'set-id';
console.log(h1);

//* Finding Elements
/* 
! HTMLCollection
    - An array-like object
    - Allows access to index, properties, and methods to help navigate and modify.
    - Does NOT allow to modify a group of elements.
    - Can loop through it.
    - Can use .length property to get the size of the list.

    How to Get an Element
    - use array notation

    Access Multiple Element requires these methods:
    - getElementsByTagName()
    - querySelectorAll()
    - getElementsByClassName()
*/

let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[0]);
let bathroom = li[0];
bathroom.style.color = 'red';

// li.style.color = 'green'; // doesn't work
for(i of li) {
    console.log(i);
    i.style.color = 'green';
}