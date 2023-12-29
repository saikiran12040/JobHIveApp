# JobHIveApp
Description
1)This is normal job seeker app which displays some applicants profile
2)User can prospects them based on skills 

Home

it contains links to other routes
login, and Applicants routes
Login
user should be able to login from here
use reqres.in api for logging in
you need to maintain the user auth state in a context API
Applicants
user should be able to see profiles fetched from API

on clicking profile here you should be able to be redirected to the /Applicants/<id> page
SingleApplicantPage
you need to use dynamic routing to fetch the id and fetch from details from API again
AllRoutes
all the routes are present here


Components
Applicants Page
accept data property and has a list of applicants
ApplicantCard

PrivateRoute
it should show the child component if user is authenticated
otherwise move the user to login page
AuthContext
manage auth context here
both user token, and login state


Installation 
npm install

API details
GET :Applicants list
base-url: https://misty-sunglasses-clam.cyclic.app
url: https://misty-sunglasses-clam.cyclic.app/Applicants
response
data: array of products

GET - get products by id
base-url: https://misty-sunglasses-clam.cyclic.app/Applicants/:id

All Routes
"/"-Home
"/Applicants"-Applicants Page
"/login"-Login Page
"/Prospects"-Prospects Page
"SingleApplicant"-Single Applicant page


Login.jsx
A user should be able to login from here
There is a form already made for you
You need to complete it with by using the following api
POST
https://reqres.in/api/login
DOCS: https://reqres.in/
You need to maintain the authentication state in context API
isAuth, and token
token - should be null by default
isAuth - should be false by default
once logged in, a user is redirected to /Applicants route
