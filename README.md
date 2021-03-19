# Info City
***

### **Info City** is an app that helps you decide where to live next or even enjoy their next vacation ' users. The recommendation is based on a set of parameters
1. Economy
2. Environmental Quality
3. User location
4. Cost of Living
5. Housing
### The app is based off of the [Teleport](https://developers.teleport.org/) API

**User stories**

#### App users
- User(s) are able to open the app and run city searches
- User(s) view information on specified cities based on defined parameters.
- User(s) can make personal state of affairs after creating an account.
        - Upon selection, users will be given option to re-direct to streaming service company

        
**Technologies used (including APIs)**

- This is a MERN app that fetches data using the [Teleport](https://developers.teleport.org/) API's resources that are provided via Json
- Database - MongoDB.
- Node.js ORM - Mongoose
**MVP goals**
---
- Setup app with fetches to API
- Ability to create user account and login
- Adding user comments about city
**Stretch goals**
---
- Ability to Search for movies
- Email notification - To let users know who wins
- Saving user info to db via user accounts

**Wireframes**
---
![alt text](../erd.png)
![alt text](public/images/box.png)
![alt text](public/images/login.png)
![alt text](public/images/dashboatd.png)
**Database ERD**
---
![alt text](public/images/erdme.png)
**RESTful routing chart**
---
![alt text](public/images/routes.png)
**Installation**
- nodemon index.js