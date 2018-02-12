## Synopsis

This project is a three person paired project for the Turing School of Software and Design, using React.js, React-Router and Redux. The project spec is found at this [GitHub Repo](https://github.com/turingschool-examples/movie-tracker). The project required working with two databases, one online [the MovieDB API](https://www.themoviedb.org/documentation/api) and the other a backend created by the Turing staff using POSTGRESQL and deployed with Node, located at the Github repo provided above. 

## Code Example

The website we created pulls movies from the MovieDB API and displays them for users to scroll through to discover new movies. The user can create an account and log in and sign out with an email, name and password. The user can also favorite movies, which they can view in the favorites tab on the website. The backend database stores everything related to the user including their favorites and is accessed when the user logs in to display their information. The MovieDB API requires using a key, which we have in a gitignore, so in order to use the project, you must create an account at the website and retreive a key yourself.

## Installation

Clone the backend repo [here](https://github.com/turingschool-examples/movie-tracker)
Clone the frontend repo [here](https://github.com/JordanPQuinn/movie-tracker)

For the backend:
  npm install
  If you don't have postgresSQl, scroll down to Setup Postgresql and follow those steps.
  Then run npm run build
  Lastly run npm start - visit /api/users - should see a json response
  npm run - make sure to run the backend server at localhost:3000
  
Setup Postgresql:
  Install Homebrew. Homebrew is a package manager for MacOS.
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)

  Install Postgresql
    brew install postgresql
  
For the frontend:
  npm install
  npm run - make sure to run the frontend server at localhost:3001

## Tests

Tests were made using Jest and Enzyme and can be run using the command: npm test

## Contributors

Jordan Quinn: lead contributer
Casey Dallavalle: lead contributer
Matt Renn: lead contributer
