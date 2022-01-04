# Assignment
  My name is Piyush Gupta and I have completed the assignment as it was required. The details of the files in the repo are as follows:
  There are two folders named server and Reactjs.The server folder contains all the backend part including database.The Reactjs contains all the frontend part.
  The elements of the frontend are done using bootstrap.You can see the dependencies used in package.json file in both server and Reactjs folder.
  The backend is running at localhost:5000 whereas the frontend is running at localhost:3000. The frontend and backend are connected by adding 
  "proxy": "http://localhost:5000/" in package.json file of Reactjs folder.
  
  Contents in Server folder:
  1: db: The db folder contains conn.js which is used to connect to local mongoDB server.
  2: middleware: The middleware folder contains authenticate.js which ensures that the user cannot visit aboutus page unless he is signed in using jsonwebtokens(jwt).
  3: model: The model folder contains userSchema.js which defines the schema of the database.Password hashing and assigning jwt token is also done here.
  4: router: The router folder contains auth.js which handles all the routings.
  5: app.js: The backend server runs through app.js at post 5000.
  
  Contents in Reactjs folder: 
  1: public: The public folder mainly contains index.html which only contains the one div element.
  2: src:
    components: The components folder contains all the pages used such as Home page,user profile(about) page,contact page,sign in page,sign out page,error page,etc.
                Bootstrap is used to design all the pages and react hooks are used to route the pages.
    images: All the images used in the project are stored here.
    app.js: The user is rerouted to the page he requested in app.js
    index.js: The contents of app.js are rendered to index.html using index.js
    
