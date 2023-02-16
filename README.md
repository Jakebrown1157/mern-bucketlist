# What is a Bucket List?

A Bucket List is a list of experiences or achievements that a person hopes top have or accomplish during their lifetime. 

# What is a PERN-Bucket list?

PERN-Full Stack

(P) PostgreSQL

(E) Express

(R) React

(N) Node.js

The PERN-Stack allows us to use all of these technologies to build an application that serves a website that a user can interact with. The user can use **CRUD** operations to **(C)** reate, **(R)** ead, **(U)** pdate, and **(D)** elete bucket list items from the WebGui. 

# How to use

1)  Load the website https://whatsyourbucketlist.azurewebsites.net/
2)  Agree to the terms and conditions and enter the website 

Once on the homepage, you will have a couple of options to view from.

## Home
You can view all the current bucket-list items. From here, when selecting on a bucket list item, you will be able to edit the bucket list item. 


## Create
Within the Create tab, you will be able to create new bucket list items that will then be available for the whole world to see.


## Leader Boards
Want to see who the most daring people are? Head to the leader boards! People who complete the most BucketList items will get a spot on our LeaderBoard page!

**Can you be #1?**

# Technologies Used

**Git** - Used for version control of our code

**Github** - Used to host our code and allowed us be able to Push, Pull and Merge our code.

**Azure** -  We used Azure Web Services to deploy our code. It is what gives us the ability to have the following website active.
https://whatsyourbucketlist.azurewebsites.net/

**Supabase** - This site is what hosts our BucketList data online. This website allows us to push and pull data to and from our Azure web app. 

**VSCode** -  This is a code editor that we used to build, edit and test code. VSCode comes with additional extensions like nodemon that allow us to test code. It also comes with a spell code for code as well, which is super useful with identifying bugs.


# Routes

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The intro page |
| GET | `/home` | Index page listing all bucket activities |
| GET | `/Create` | New form to create an activity |
| POST | `/Edit/:id` | Create a new bucket activity |
| DELETE | `/EDIT/:id` | Delete a bucket activity  |
| POST | `/Create` | Add rant to a bucket activity |

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

# Authors  

Alexis Delgado

Jake Brown

Yara Alfaro-Sullivan

# Wish List Items

One major task we would have loved to implement would be an authentication service that would allow us to track users and their activities, and make it so only the user that posted the bucketlist could modify it. This would prove beneficial for not only the people browsing the website, but to the WebAdmins that monitor the site as well. 

We did not implement this due to time restrictions. 


# Hear from the Authors

## Jake

I felt pretty good about this project, Im glad there was a chance to work with others and experience learning new tech for each component of the project. 

Most of the inspiration was thought of by other people when we were still deciding groups. For me personally I didn't really mind what the topic was just how well we could execute it as a team

# Alex

This was an amazing project to work on with the team that we built. Everyone worked together on this project. I signed myself up for the backend, but had a handful of issues that Jake helped with. Thank you Jake!


# Yara

I was super exited to work on this project. I learned a lot from Jake and Alex. I appreciate them dedicating time and energy inside and outside of class. We divided up the sections to focus on and we helped each other out. Even when some of questions were silly, we felt comfortable asking each other for guidance. 
 
We wanted to create a bucket list that was fun! We were inspired to make it comic book style and a homage to the movie "Dude, Where's my Car?".