# Vue the shops 🗺

![version](https://img.shields.io/badge/version-1.0.0-blue.svg)

A project made with love and so much passion built over [Vue js](https://github.com/vuejs/vue) and [Express.js](https://github.com/expressjs/express). 

Managing Nearby shops, the website present all the near shop from the database that are near the current localisation of the user. After login in, a user can like or dislike a shop, remove a shop from the liked ones and hide a shop from the homepage for 2 hours.

## 📑The User stories covered

    As a User, I can sign up using my email & password ✔️
    As a User, I can sign in using my email & password ✔️
    As a User, I can display the list of shops sorted by distance ✔️
    As a User, I can like a shop, so it can be added to my preferred shops ✔️
        Acceptance criteria: liked shops shouldn’t be displayed on the main page ✔️

Bonus point:

    [BONUS] As a User, I can dislike a shop, so it won’t be displayed within “Nearby Shops” list during the next 2 hours ✔️
    [BONUS] As a User, I can display the list of preferred shops ✔️
    [BONUS] As a User, I can remove a shop from my preferred shops list ✔️

## 🎥Demo
### Heroku
The following link present a live demo of the work [DEMO](https://morning-garden-71217.herokuapp.com) 

To test the diffrent parts of the project you can use the following account :
> Email : test@gmail.com    
> Password : 123

## 🃏Requirements

 - [Node js](https://nodejs.org/en/)
 - [MongoDB](https://github.com/mongodb/mongo)
 - [Vue CLI](https://github.com/vuejs/vue-cli)

## 🌓FrontEnd part
[Link to the frontend repository](https://github.com/kaolaa/Shops_Client) 

#### Built with 
- [Vue](https://github.com/vuejs/vue) 
- [Vue CLI](https://github.com/vuejs/vue-cli)
- [Vuex](https://github.com/vuejs/vuex) 
- [Vue router](https://github.com/vuejs/vue-router)

## 🌗BackEnd part (API)

#### Built with 
- [Nodejs](https://nodejs.org/en/)
- [Express.js](https://github.com/expressjs/express)
- [MongoDB](https://github.com/mongodb/mongo)

## ⚡Deploy
#### First part
- Open the terminal
- run "git clone https://github.com/kaolaa/Shops_REST.git"
- Navigate to the project
- Run `npm install` or `yarn install` if you use [Yarn](https://yarnpkg.com/en/)
- And `npm start`

📣 After running the commands the server will be alive on http://localhost:2000.

✨ The file '/server/test url' ,containt  some exemples to test the api.
✨ The folder '/server/public' is the front end part for production, created to publish the full project too heroku, however it's the exact same code as [the frontend project](https://github.com/kaolaa/Shops_Client) 

           

#### Second part
In a new project or folder terminal :
- Run `git clone https://github.com/kaolaa/Shops_Client.git` 
- Run `npm install` or `yarn install` if you use [Yarn](https://yarnpkg.com/en/)
- And finaly  `npm run serve`

📣 The friendly interface will show up on http://localhost:8080.

#### 🚨Note 
You need to have the server still runing to be able to test the front part .

#### The Database (mongodb)
The database is stored in [mlab](https://mlab.com/), there's a direct link inside the project to get access to all the data used to run the project




## 📐Template
I've used parts of [Vuemmerce](https://github.com/ivanlori/Vuemmerce) template to gain some time on the UX/UI part.



## 📜Licensing
- Copyright 2018 kaola
