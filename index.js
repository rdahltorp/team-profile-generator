/* Psudo code outline 

Step 1: Init + Manager questions
- Once app fires, trigger the questions on the Manager.js page. 
- Once answered, responses are pulled and added to a generateHTML.js file.

Step 2: Menu of additional options
- Once manager questions complete render a menu with 3 options: 
---1) Add engineer 
---2) Add intern
---3) Finish team/exit

Step 3a: "Add engineer" selected
- If first option is selected, fire the questions on Engineer.js page. 
- Once answered, responses are pulled and added to the generateHTML.js file.
- Return to menu (step 2)

Step 3b: "Add intern" selected
- If second option is selected, fire the questions on Intern.js page. 
- Once answered, responses are pulled and added to the generateHTML.js file.
- Return to menu (step 2)

Step 3c: "Finish team/exit" selected
- If third option is selected, log a message saying "team roster complete"; fire generateHTML.js file.
- End application.

///////////////////////////////

Page layout: 
-index.js 
---Holds the main code and navigation, along with the menu and exit code

-Manager.js, Intern.js, Engineer.js 
---Holds the questions for each of the specific roles.
---Exports to generateHTML

-generateHTML.js
---Holds the HTML code that will be created in temp literal.
---Writes the new file. 

/////////////////////////////

Remaining questions 
-What does the "employee.test.js" do that was recommened?
-When installing Jest, do we need to install as dependancy or dev dependancy?

*/