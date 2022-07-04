# ccapdev-madale-web-forum

**This is a partial fullfilment of the requirements needed for the course CCAPDEV (Web Application Development) of DLSU-CCS.** 

---

*---About the Web Application---*

   The present webapp is entitled 'MADALE: Growtopia Forum' is an online forum designed for the players to communicate and share their ideas, experiences, as well as their achievements. Users can ask questions with regards to how they build castles, dungeons, artwork, etc; also about creating unique characters, exploring pixel worlds, and discovering some consumables needed for their GROW! 

   As part of the specification: Users can start accessing this through loggin in to the web application, searching other user accounts, posting questions or ideas, commenting to posts, and navigating posts through the given categories. 
   
   
   
   ---
   

*---Instructions on how to run the project locally---*

How to setup:

1. Download the entire repository
2. Install Node JS if you haven't already
3. Install the MongoDB community version
4. Open MongoDB and connect to localhost:27017
5. Create a new database named "GrowForum" with a collection named "users"
6. In users, select "ADD DATA" and choose "Import File"
	- go to the project directory then misc
	- select users.json and import the data
7. Create another collection within GrowForum named "posts"
8. In posts, select "ADD DATA" and choose "Import File"
	- go to the project directory then misc
	- select posts.json and import the data
9. Create another collection within GrowForum named "comments"
10. In posts, select "ADD DATA" and choose "Import File"
	- go to the project directory then misc
	- select comments.json and import the data
11. Open your command prompt and navigate to the project directory
12. Run the following commands:
	- npm install mongodb
	- npm install mongoose
	- npm install express
	- npm install express-session
	- npm install cookie-parser
	- npm install bcrypt
13. Run "npm init -y" and then "node index.js" to run the app

Additional notes:

Feel free to register a new account in the registration page.
But if you want to test a pre-existing account that we made,
you can go ahead to the misc folder and open ACCOUNTS_TO_USE.
