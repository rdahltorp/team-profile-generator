# Team Profile Generator

## Description

This application allows users to create a structured and styled HTML page that contains members of their team. The HTML doc is constructed through the consile but running index.js in Node and then following the console prompts. Once answered a new team HTML doc will populate with the provided information in specific employee cards. 

Developing this application helped give me better insight into how tests work and how to use various classes and extensions of those classes to create objects in the backend.

## Installation

To use this code, clone the repo down to your machine and open it via your console or in your code editor and run the index.js through node. 

## Usage

Once a user has access to the code, they are able to create team profile charts that are easy to read and contain key information.

Below is a demo of the process. For the full video please follow this link: UPDATE WITH NEW LINK!!!

////UPDATE DEMO BELOW WITH NEW DEMO
![Demo of read me generator.](./assets/images/readme-gen-demo-gif.gif)


## Credits

- Styling for generated HTML pages comes from Bootstrap.

- Testing functionality comes from Jest 

## Tests

This application uses Jest to test the classes that are used when creaing the inputed objects. There is a suite of tests for each employee class type (manager, engineer, intern) as well as a base "employee" class which extends to each of the other employee class types. 

## Features

- The application in run entirely through the console. 
- The application dynamically creates engineer and intern employee sections so users can add an unlimited number of employees to their HTML page.
- The employees are color coded for easy viewing (blue card = Manager, teal card = Engineer, yellow card = Intern).
- Each employee category (manager, engineer, intern) is built off the same employee class, but updated to conatin specific questions for that role. 
- When clicking on the email section of each card, your selected email client will open with the clicked email address in the 'to:' address bar of a new email. 
- When clicking the GitHub username of an Engineer, a new window will appear with that links to the engineer's GitHub profile.