# What is a Bucket List?

A Bucket List is a list of experiences or achievements that a person hopes top have or accomplish during their lifetime. 

# What is a PERN-Bucket list?

PERN-Full Stack

(P) PostgreSQL

(E) Express

(R) React

(N) Node.js

The PERN-Stack allows us to use all of these technologies to build an application that serves a website that a user can interact with. The user can use **CRUD** operations to **(C)** reate, **(R)** ead, **(U)** pdate, and **(D)** elete bucket list items from the WebGui. 

# Dependencies / Technologies

Throughout the project we had to install a variety of different dependencies, including the main three express, node, and react. Using react-router-dom for the frontend enabled dynamic routing to different components like a page for the create, edit, and delete forms. Which for the most part make fetch calls to the express routes in order to create read update and delete data. Our SQL database is hosted through Supabase, our main site is hosted through Render a hosting service, and the project uses custom styling with React-Bootstrap. 

Express
Node
React
React-Router-Dom
React-Bootstrap
Cors
DotEnv
PG
PG-Hstore
Sequelize

# How to use

1)  Load the website https://whatsyourbucketlist.onrender.com/
2)  Agree to the terms and conditions and enter the website 

Once on the homepage, you will have a couple of options to view from.

## Home
You can view all the current bucket-list items. From here, when selecting on a bucket list item, you will be able to edit the bucket list item. 


## Create
Within the Create tab, you will be able to create new bucket list items that will then be available for the whole world to see.


## Leader Boards / Rank
Want to see who the most daring people are? Head to the leader boards! People who complete the most BucketList items will get a spot on our LeaderBoard page!

**Can you be #1?**

# Technologies Used

**Git** - Used for version control of our code

**Github** - Used to host our code and allowed us be able to Push, Pull and Merge our code.

**Render** -  We used Render to deploy our code. It is what gives us the ability to have the following website active.
https://whatsyourbucketlist.onrender.com/

**Supabase** - This site is what hosts our BucketList data online. This website allows us to push and pull data to and from our Azure web app. 

**VSCode** -  This is a code editor that we used to build, edit and test code. VSCode comes with additional extensions like nodemon that allow us to test code. It also comes with a spell code for code as well, which is super useful with identifying bugs.


# Routes

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
 
| GET | `/` | Returns all of our Bucket List Items |
| GET | `/:id` | Returns on bucket list item for the edit page |
| POST | `/create` | Create a new bucket activity |
| PUT | `/:id` | Make changes to existing bucket activity |
| DELETE | `/:id` | Delete a bucket activity  |

|      | `/` | Intro Page |
|      | `/home` | Home page that displays all buckets  |
|      | `/create` | Allows users to create bucket list items |
|      | `/leaderboard` | Rank page dispalys the top users of the site |

# Database

**places** 

| Field | Type |
| ---------- | ------------ |
| bucket_id | INTEGER |
| item | STRING |
| difficulty | INTEGER |
| author | STRING |
| description | STRING |



## Credit

Credit to Web Dev Simplified at https://www.youtube.com/watch?v=SLfhMt5OUPI

Credit to Skull Image https://www.freeiconspng.com/img/5244

Credit to Background texture https://easyimages.net/?utm_content=18.06.21-18:00-pop&q=Dot%20clipart%20texture%20vector&land=1&from_stock=webstockreview_net&format=undefined&keyword=Dot%20clipart%20texture%20vector&utm_content=18.06.21-18:00-pop&from_url=https://webstockreview.net/explore/dot-clipart-texture-vector/

Credit for Importing images https://betterprogramming.pub/how-to-display-images-in-react-dfe22a66d5e7

Credit for Responsive Element https://css-tricks.com/turning-a-fixed-size-object-into-a-responsive-element/

# Authors  - Work done!

Alexis Delgado - I was initally working on the backend. I built all the code needed and was integrating it, however I kept having issues. I also built the Azure web app services. Luckily, Jake was able to solve a handful of my issues. To make sure I continued to contribute to the project, I moved to helping to build the tables and layout of the site. Yara had started the Readme File, but I added the layouts and the information. I also pivoted the project to use Render as opposed to Azure and managed the deployment as we had issues with Azure running the proper commands on deployment. 


Jake Brown - The first thing i worked on was stubbing out the front end pages just getting a good foundation for the forms later on. After helping with debugging and error catching. I eventually swapped out the supabase client form control for normal fetch requests to the backend. 


Yara Alfaro-Sullivan - I worked on front end styling, forms and readme.  I designed the icons that is displayed throughout the page. I worked on transferring inline styling to the CSS. Added the responsive web design. We all worked together to decide color scheme which I worked on.  I liked researching the different ways to design and resize the website.


# Wish List Items

One major task we would have loved to implement would be an authentication service that would allow us to track users and their activities, and make it so only the user that posted the bucketlist could modify it. This would prove beneficial for not only the people browsing the website, but to the WebAdmins that monitor the site as well. 

We did not implement this due to time restrictions. 

We also werent able to resize the text on the page to make it more Mobile Compliant 

# Hear from the Authors

## Jake

I felt pretty good about this project, Im glad there was a chance to work with others and experience learning new tech for each component of the project. 

Most of the inspiration was thought of by other people when we were still deciding groups. For me personally I didn't really mind what the topic was just how well we could execute it as a team

## Alex

This was an amazing project to work on with the team that we built. Everyone worked together on this project. I signed myself up for the backend, but had a handful of issues that Jake helped with. Thank you Jake!

Initially I started the deployment on Azure, but after issues, we ended up pivoting to Render and the deployment was so much easier. 


## Yara

I was super exited to work on this project. I learned a lot from Jake and Alex. I appreciate them dedicating time and energy inside and outside of class. We divided up the sections to focus on and we helped each other out. Even when some of questions were silly, we felt comfortable asking each other for guidance. 
 
We wanted to create a bucket list that was fun! We were inspired to make it comic book style and a homage to the movie "Dude, Where's my Car?".