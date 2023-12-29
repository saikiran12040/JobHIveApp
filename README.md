# Job Seeker Application

This React application allows users to view job seeker profiles and manage authentication using the context API.

## Installation

To install the necessary dependencies, use:

```bash
npm install

API Details
Get Applicants List
Base URL: https://misty-sunglasses-clam.cyclic.app
Endpoint: /Applicants
Response Data: Array of applicant profiles
Get Applicant Details by ID
Base URL: https://misty-sunglasses-clam.cyclic.app
Endpoint: /Applicants/:id
Routes
/ - Home
/Applicants - Applicants Page
/login - Login Page
/Prospects - Prospects Page
/SingleApplicant - Single Applicant Page
Components
ApplicantsPage
Accepts data property and displays a list of applicants.

ApplicantCard
Component to display individual applicant details.

PrivateRoute
Displays the child component if the user is authenticated, otherwise redirects to the login page.

AuthContext
Manages authentication state (isAuth, token) using context API.

Login Functionality
The login form sends a POST request to reqres.in API. After successful login, the user is redirected to the /Applicants route.
