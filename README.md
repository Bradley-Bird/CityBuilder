## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

HTML!
.1 create 3 drop down menus.
.2 add three options
.3 img elements for each.
.4 div for stat, for each time a dropdown is changed.
.5 input for slogan input,
.6 display for slogans to be kept in view.

JS!
.1 one pure TDD createCountString(type,count)
.2 one impure displaystats()
ex.
function displayStats() {
const countString = createCountString(climateCounter, architectureCounter);
results.textContent = countString;
}

.3 one impure displaySlogans()
ex.
function displaySlogans() {
sloganList.textContent = '';
for (let slogan of slogans) {
const li = document.createElement('li');
li.textContent = slogan;
sloganList.append(li);
}
}


Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
