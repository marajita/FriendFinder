# FriendFinder

This app will help to find the best match for a friend with an individual that is in our network after filling out a quick survey.

To use this app, go to the homepage and take the survey. Immediately after submitting the survey, the best friend will pop up. You can access the API of the users and their personalized information.

# Technologies Used

- HTML
- Bootstrap
- JavaScript
- jQuery
- node.js
- Express.js

# Getting started

- The server.js file sets up the Express server, specifying the port number, the npm packages that need to be loaded and the routes
- There are 2 separate HTML files (home.html and survey.html) which is the front-end, they determine what the user sees (the homepage and the survey, which will also show the resulting best match)
- The routing files (htmlRoutes.js and apiRoutes.js) determine the back-end (based on the request being made and sending response to the browser)
- Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object
- A modal is then showned, displaying the the best match to the user who took the survey. This will also store the friends information.
  Friends are stored as such:
  {
  userName: "Daenerys",
  userPhoto:
  "https://www.hardwoodandhollywood.com/wp-content/uploads/2017/09/706-Dragonstone-Daenerys-2-1024x682.jpg",
  scores: [5, 4, 5, 3, 2, 4, 2, 5, 3, 5]
  },
  {
