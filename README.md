# ALU Alumni Association website

## Project Description

The objective of this project is to develop a website that will showcase the life of ALU alumni after graduation. The website will share alumni stories on their different journeys towards their missions and their impact in Africa and beyond. Through the website, users can get information about different programs run by alumni. Moreover, users will be able to engage with the alumni by accessing their profiles and contact information.

## How to run the project

- Clone the repository
- Run npm install
- Run “npx json-server --watch src/data/news.json --port 3001” to load news content on the home page.
- Run “npx json-server --watch src/data/upcomingEvents.json --port 3002”  to load upcoming events on the home page.
- Run npm start

## Structure

`public/images`: images used on the website

`src/asstes`: images and videos used on the website

`src/components`: smaller components of the website

`src/data`: JSON files containing sample data used on the news and upcoming events page.

`src/pages`: website pages i.e: home, programs, get involved(Groups), login, news & events

`src/app.js`: page routing

## Dependencies

| Project      | Home Page                                                                        |
|--------------|----------------------------------------------------------------------------------|
| React        | <[https://expressjs.com/](https://reactjs.org/)>                                 |
| Taiwind css  | <[https://reactjs.org/](https://tailwindcss.com/ )>                              |
| Sass         | <[https://helmetjs.github.io/](https://sass-lang.com/ )>                         |
| Postcss      | <[https://github.com/markdown-it/markdown-it](https://postcss.org/)>             |
| Autoprefixer | <[https://highlightjs.org/](https://autoprefixer.github.io/ )>                   |
| Formik       | <[https://lunrjs.com/](https://formik.org/)>                                     |
| Node-scss    | <[https://github.com/dylang/node-rss](https://www.npmjs.com/package/node-scss)>  |

### To contribute,
- clone the dev branch 
- checkout to your working branch feature-xxxxx
- make your changes
- test them locally
- commit your changes
- merge remote dev before pushing to avoid any conflicts
- create a pull request merging into dev branch and assign a reviewer
