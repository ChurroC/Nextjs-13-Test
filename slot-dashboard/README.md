The goal of this is two have 2 parallel routes that each have their own error loading and stuff.
Also going to switch to bun for this for the first time.

Modal are interesitn in the fact that each one has it's own routing. Like when I was do the itnercepting route modal. I made the modal only show when you are the url /batman. Which was pretty interesting. This means switchign for one page to another you can only chaneg the page but also the modal spefcifcially

Finally understand slots. Basically there are 3 props modal1 modal2 and children. The test1 folder I have is basically inside a @children slot folder.
For each slot they have their own links kinda. If I got to /test2 then every prop that has a /test2 swaps to that page. So only @modal2 which swaps but leaves the rest of the slots there.
If I were to then go reload the whole page or send the link to someone it would keep the pages that have a specific /test2 but use the defualt file for the rest.

Another example is I go from dash to test1. But if I try to go from test1 to test2 only @modal2 has a test2 so only that changes.
