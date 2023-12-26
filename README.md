# Astro-Society

Welcome to Astro-Society, a platform that brings together astrology enthusiasts. Follow the instructions below to set up and run the application on your local machine.

<p align="center">
  <img src="https://github.com/PavanGuptaZ/Astro-society/assets/144094802/89912aec-7964-4958-9cfb-01e190d20f4d" width="250">
</p>

## Project 
The project is completed using Redux Toolkit for state management and RTK Query for fetching data.

Feel free to explore and enjoy the Astro-Society platform!

## Installation
Clone the repository to your local machine:

```bash
git clone https://github.com/PavanGuptaZ/Astro-society.git

  ```
## SetUp Environment keys
Create .env files in both the frontend and backend folders:

### In the Backend folder:
add the following variables
- DATABASE_URL (MongoDB connection string)
- PORT (Port number)
- ACCESS_TOKEN
- REFRESH_TOKEN

#### add Frontend origin in - backend/config/allowed origin.js

```javascript
const allowedOrigins = [
    'http://localhost:5173',
    'http://192.168.0.107:5173'
    'ADD REQUIRE ORIGINS'
]

export default allowedOrigins
```
it is going to help on CORS

### In the Frontend folder:
add the following variables
- VITE_BACKEND_LINK (Link to the backend server)

## ToRun
Navigate to the frontend and backend folders in the terminal and to run 

```bash
  cd frontend
  npm install
  npm run dev
```

```bash
  cd backend
  npm install
  npm run dev

```
Check DATABASEURL and VITE_BACKEND_LINK in the respective .env files and update if necessary.


## Usage

The Astro-Society website consists of 6 pages:

`Home Page:` Displays the logo and title "Astro-Society."

`Login Page:` Form to enter email and password for login.

`Register Page:` Form to register with name, gender, email, password, languages, and specialties.

`Page not Found:` Shown for unknown links.

`Admin Page:` Displays a list of registered astrologers using Material UI data grid.

`Profile Page:` Pre-filled form of the logged-in user's details. Allows changes and updates, with options for online, offline, busy, dnd, idle, and working status.


## Registration Form
- Name: 5 to 30 characters, no extra spacing.
- Gender: Male, female, or prefer not to say.
- Email: 3 to 40 characters before '@', total 50 characters.
- Password: 3 to 20 characters, at least one uppercase, one lowercase, one number, and one special character from '@, &, *, #, $, !, ?'.
- Languages: Select at least one from the list.
- Specialties: Select at least one from the list.

## Login Form
- Email: Valid email address.
- Password: Valid password.

## Profile Page
- Displays pre-filled user details.
- Allows changes and updates, except for email and password.
- Allows the addition of a new status (online, offline, busy, dnd,idle, working).

## Admin Page
- The Admin page provides an overview of astrologers registered on the platform.
- Utilizes Material UI data grid for a clear and organized display of astrologer information.
- Information displayed may include astrologer name, contact details, and other relevant data.
- Enables administrators to manage and oversee user registrations effectively.

## Navigation Bar
Includes route links and a mode button to toggle between dark and light modes.


## Contributing for Open Source 

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Bug reports, feature requests, and feedback are also welcome!
