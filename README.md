Create a Blog API with Author and Post Relationships

Objective
The objective of this project is to build a RESTful API for a simple blog platform that manages authors and their corresponding posts.
The project focuses on implementing a one-to-many relationship between authors and posts using a relational database, enforcing foreign key constraints,
and providing clean API endpoints to manage related data.

Tech Stack:-
=>Node.js
=>Express.js
=>Sequelize ORM
=>MySQL
=>Postman

Project Structure:-
Create a Blog API with Author and Post Relationships
├── config
│   └── db.js
├── models
│   ├── author.js
│   ├── post.js
│   └── index.js
├── routes
│   ├── authorRoutes.js
│   └── postRoutes.js
├── index.js
├── package.json
├── postman_collection.json
└── README.md

Database Design:-
Author Table:-

=>id (Primary Key)
=>Name
=>email (Unique)

Post Table:-
=>id (Primary Key)
=>title
=>content
=>author_id (Foreign Key referencing Author.id)

Relationship:-
=>One Author can have many Posts
=>One Post belongs to one Author
=>Cascade delete is enabled so deleting an author deletes all related posts

API Endpoints:-

Author Endpoints:-

=>POST /authors – Create a new author
=>GET /authors – Get all authors
=>GET /authors/:id – Get author by ID
=>PUT /authors/:id – Update author by ID
=>DELETE /authors/:id – Delete author by ID
=>GET /authors/:id/posts – Get all posts for a specific author

Post Endpoints:-

=>POST /posts – Create a new post
=>GET /posts – Get all posts
=>GET /posts?author_id=ID – Get posts by author
=>GET /posts/:id – Get post by ID
=>PUT /posts/:id – Update post by ID
=>DELETE /posts/:id – Delete post by ID

API Behavior:-

=>Posts can only be created for existing authors
=>Requests for non-existent resources return 404 Not Found
=>Successful requests return 200 OK or 201 Created
=>GET requests do not require a request body
=>POST and PUT requests accept JSON data

Postman Collection:-
All API endpoints were tested using Postman.
The complete Postman collection is included in this project as:
postman_collection.json
It contains all 12 endpoints with correct HTTP methods, URLs, and sample request bodies.

How to Run the Project:-

1.Install dependencies
npm install

2.Configure database credentials in
config/db.js

3.Start the server
npm run dev

4.Server runs at
http://localhost:3000

Project Status:-

=>All required endpoints implemented
=>One-to-many relationship correctly handled
=>Database constraints enforced
=>APIs tested using Postman
=>Ready for submission


Conclusion:-

This project successfully implements a RESTful Blog API with proper author–post relationships, 
clean API design, and reliable database integration. It meets all the requirements specified in the project objective and is ready for evaluation.
