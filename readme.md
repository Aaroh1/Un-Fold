<h1 align="center">UnFold your thoughs with Un-Fold ✉️</h1>

> Un-Fold : Connecting People, Ideas and Products worldwide !
## Project Description

Blogging website for webkriti. 

* Users can create their un-fold account or can directly sign in if they already have the account made .
* Then the user will be directed to home page , and he/she can see all the latest blogs , and all the blogs by the users he/user follow and can bookmark the blog which he can refer later from his profile.
* Other user can search the blog by its title or tag , and also the user by his/her name . 
* The user can open the blog , read it , like and give review on the blog .
* In the same page , he/she can see otherblogs by the same user .
* User can open other users profile and can FOLLOW or UNFOLLOW him/her , can see whom he/she is following and his/her followers .
* In the same page , he can see all his/her blogs .
* User can compose his/her blog where and choose on which category he/she wants to write . The blog can be formatted with various tools present in the text-editor , links , images can also be added to the blog. Later the blogs can also be edited .
* User can also edit his/her profile whenever he wants to.

# Screen shots
<img src="./client/assets/assets/unfold1.png"></img>
<img src="./client/assets/assets/unfo.png"></img>
<img src="./client/assets/assets/unfold3.png"></img>
<img src="./client/assets/assets/unfold4.png"></img>
<img src="./client/assets/assets/unfold5.png"></img>
<img src="./client/assets/assets/edit.png"></img>
<img src="./client/assets/assets/last.png"></img>

### ✨ [Deployed site](https://65.0.100.50/)

# Features Implemented

## Front-end
1. Sign in and sign up page :
* All the checks have been made on the frontend side for email and password.
* A user friendly prompts appear if there is any error while filling the input values.
2. Home Page :
* Once the user is signed in, a token is generated, saved in local storage, which helps maintain session activity. This token is verified every time the user visits any page. 
* Users can here view all the blogs that can has been posted by the user , can bookmark them . It also has a section of categories which includes all the genres of the blogs.
* Then it has a 3rd section of the blogs by the user whom the logged in user follows.
3. Blog Page :
* In the blog page , it has the record of the person by whom the blog is posted.
* Then the logged in user can also like or unlike (if he has already liked) an comment on the blog.
* Then it has a section of other blogs by the same user who has posted that particular blog.
4. Blog edit page
* Users can edit their blogs .
5. Profile Page :
* Users can see the number of followers , following and the blogs .
* Can also follow/unfollow the user.
* See all the bookmarked blogs here.
* Can also see whom are they following and by whom they are being followed.
6. Edit Profile Page :
* Users can make changes to their profile like their profile image, bio, description etc., and all this information is sent to the back-end and then further stored in the database.
7. Edit profile Page
* Users can edit their profile details from here.
8. Category Page
* It has all the blogs that belong to the category
9. EXTRA FEATURES THAT ARE IMPLEMENTED
* User can add tags to their blogs to mention the genre of his/her blog.
* User can bookmark the blogs and can view them later.
* User can follow/unfollow any other user

#### Future Ideas
* One-on-One chat feature 

## Back-end
1. Routes for authentication purpose
* We have setup basic authentication & also implemented google & facebook passport strategy 
* Currently facebook auth is working locally but giving issues on deployed website
```
/auth/signin
/auth/signup
/auth/google
/auth/facebook
```
2. Details route to get, update, view or search other profiles
```
/details/getdetails
/profile/:userid
/search
```
3. Feedback route to send mail to us using node mailer
```
/feedback/sendmail
```
4. Posts route to create a new post, get all posts, update / dislike post, update / delete post
* We are verifying token as middleware for every post, put, update or delete request
```
/posts/createnewpost
/posts/getallposts
/posts/updatelike/:postid
/posts/updateddislike/:postid
/posts/updatepost/:postid
/posts/deletepost/:postid
/posts/profile/:username
/posts/getpics
```
5. Rooms
* By this user can join room by verify token & to send name, userid to socket connection
```
/rooms/joinroom
```
# Technologies/Libraries/Packages Used
| Packages | README |
| ------ | ------ |
| bcrypt | To store hashed password in database  |
| dotenv | To keep db connection string, client id, client secret key safe  |
| image-to-base64 | To convert images of posts or image url to base 64 & storing in database  |
| jsonwebtoken | To store users session encrypted and verify them as middleware in posts/details/feedback api request  |
| moment-timezone | To handle time zone and send in socket connection  |
| nodemailer | To send feedback to our mail  |
| nodemon | To run application in dev mode  |
| passport-facebook | Facebook authentication  |
| passport-google-oauth20 | Google authentication  |
| pg | To Connect to AWS RDS  |
| socket.io | To enables realtime, bi-directional communication between web clients and servers.  |

## Local Setup
1.  To run the server in dev mode use
    ```sh
    npm run dev
    ```
2.  To run the server in production mode
    ```sh 
    npm start 
    ```
3.  Note that you have to create an env file taking reference from .env.example file to run the server .




### Built With
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" style="max-width:100%;"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" style="max-width:100%;"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" style="max-width:100%;"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" style="max-width:100%;"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" style="max-width:100%;"><a href="https://expressjs.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="express" height="40"/> </a>


## Contact

👤 **Aaroh Srivastava, Anshu Joshi, HariOm Sharma**

### Sohan Bandary (2020IMG-016)
* Github: [@sohan2410](https://github.com/sohan2410)
* LinkedIn: [@sohan-bandary](https://linkedin.com/in/sohan-bandary)
* Gmail: [mail](mailto:bandarysohan24@gmail.com)
* Instagram: [@sohan24.py](https://www.instagram.com/sohan24.py/)

### Swahim Namdev (2020IMG-063)
* Github: [@swahim](https://github.com/swahim)
* LinkedIn: [@swahimnamdev](https://www.linkedin.com/in/swahimnamdev/)
* Gmail: [mail](mailto:swahimn@gmail.com)
* Instagram: [@swahim_n](https://www.instagram.com/swahim_n/)

### Ranjith Jupaka (2020IMT-042)
* Github: [@ranjithcoder](https://github.com/ranjithcoder)
* LinkedIn: [@jupaka-ranjith-998675164](https://www.linkedin.com/in/jupaka-ranjith-998675164/)
* Instagram: [@ranjithjupaka_1](https://www.instagram.com/ranjithjupaka_1/)


## Show your support

Give a ⭐️ if this project helped you!
