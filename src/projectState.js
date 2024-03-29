import React from "react";
//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
//animation
import { motion } from "framer-motion";
import { fadeAnim } from "./animation";

//Import Projects
import pokemonHome from "./img/pokemonHome.png";
import pokemonCards from "./img/pokemonCards.png";
import movie from "./img/movie.png";
import BudgetGif from "./img/BudgetGif.gif";
import workout from "./img/workout.png";
import workout1 from "./img/workout1.png";
import musicPlayerHome from "./img/music1.png";
import musicPlayerLibrary from "./img/music2.png";
import cliffHome from "./img/cliffHome.png";

// import mindump1 from "./img/mindump1.png";
import mindump2 from "./img/mindump2.png";
import mindump3 from "./img/mindump3.png";

import marsHome from "./img/marsHome.gif";
import marsBooking from "./img/marsBooking.gif";
import tech2 from "./img/tech2.png";
import tech3 from "./img/tech3.png";

import eCommerce1 from "./img/eCommerce1.png";
import eCommerce2 from "./img/eCommerce2.png";

import glenn1 from "./img/glenn1.png";

import martin1 from "./img/martin-site.png";
import martin2 from "./img/martin2.png";

import todo1 from "./img/todo1.png";
import todo2 from "./img/todo2.png";

import quoteQuiz from "./img/quote-quiz.png";

export const ProjectState = () => {
  return [
    {
      title: "MTA",
      mainImg: marsHome,
      secondaryImg: marsBooking,
      url: "/work/MTA",
      blurbs: [
        {
          title: "Description",
          description:
            "For the Mars-Travel-Agency application we wanted to think out side of the box as well as have it be useful. We eventually landed on making a travel agency to Mars. This was because of recent news of billionaires using their money to travel to space. With commercial space travel on the horizon, it seemed like a fun idea to mock up a one stop portal to get information on weather, potential launch stations, and to book said info into a ticket.",
        },
        {
          title: "Deployed Application",
          description: (
            <a
              href="https://mars-travel-app.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button variants={fadeAnim}>
                View Application
              </motion.button>
            </a>
          ),
        },
        {
          title: "GitHub repository",
          description: (
            <a
              href="https://github.com/thebadams/mars-travel-agency"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="7x"
                color="#23D997"
              />
            </a>
          ),
        },
      ],
    },
    {
      title: "Todo App",
      mainImg: todo1,
      secondaryImg: todo2,
      url: "/work/todo",
      blurbs: [
        {
          title: "Description",
          description:
            "I made this simple todo app that allows you to add, delete, and mark tasks as complete for a front end developer position with rapptrlabs. This app was built using strictly React, JS, and CSS. Using local storage to save your tasks so that they are not lost when you refresh the page. Login and signup functionality is also included by using an API sent to rapptrlabs in order to login into the app. For now you must use the credentials below to login. Username: test@rapptrlabs.com Password: Test123",
        },
        {
          title: "Deployed Application",
          description: (
            <a
              href="https://singular-paprenjak-896541.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button variants={fadeAnim}>
                View Application
              </motion.button>
            </a>
          ),
        },
        {
          title: "GitHub repository",
          description: (
            <a
              href="https://github.com/CliffordMorin/Todo-app"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="7x"
                color="#23D997"
              />
            </a>
          ),
        },
      ],
    },
    {
      title: "Professional Website",
      mainImg: martin1,
      secondaryImg: martin2,
      url: "/work/martin",
      blurbs: [
        {
          title: "Description",
          description:
            "This application is a functional professional musician website I built for a client. Some of the technologies I used are React, JS, and mainly Material-UI. The goal of this website was to build it from scratch using Material-UI to really understand how to use it effectively.",
        },
        {
          title: "Deployed Application",
          description: (
            <a
              href="https://www.martindiazmusic.com"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button variants={fadeAnim}>
                View Application
              </motion.button>
            </a>
          ),
        },
        {
          title: "GitHub repository",
          description: (
            <a
              href="https://github.com/CliffordMorin/martin-diaz-website"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="7x"
                color="#23D997"
              />
            </a>
          ),
        },
      ],
    },
    {
      title: "Professional Website",
      mainImg: glenn1,
      secondaryImg: glenn1,
      url: "/work/glenn",
      blurbs: [
        {
          title: "Description",
          description:
            "This application is a functional professional musician website I built for a client. Some of the technologies I used are React, JS, and mainly Material-UI. The goal of this website was to build it from scratch using Material-UI to really understand how to use it effectively.",
        },
        {
          title: "Deployed Application",
          description: (
            <a
              href="https://www.glenndongifford.com/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button variants={fadeAnim}>
                View Application
              </motion.button>
            </a>
          ),
        },
        {
          title: "GitHub repository",
          description: (
            <a
              href="https://github.com/CliffordMorin/Glenn-Gifford-Website"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="7x"
                color="#23D997"
              />
            </a>
          ),
        },
      ],
    },
    {
      title: "Music Website",
      mainImg: cliffHome,
      secondaryImg: cliffHome,
      url: "/work/cliff-music",
      blurbs: [
        {
          title: "Description",
          description:
            "This react project is a professional website page with an integrated music player that holds any music the artist would like to post.",
        },
        {
          title: "Deployed Application",
          description: (
            <a
              href="https://www.cliffordmorinmusic.com/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button variants={fadeAnim}>
                View Application
              </motion.button>
            </a>
          ),
        },
        {
          title: "GitHub repository",
          description: (
            <a
              href="https://github.com/CliffordMorin/Clifford-Morin-Music"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="7x"
                color="#23D997"
              />
            </a>
          ),
        },
      ],
    },
    {
      title: "Social Media App",
      mainImg: mindump2,
      secondaryImg: mindump3,
      url: "/work/mindump",
      blurbs: [
        {
          title: "Description",
          description:
            "This Mern Stack application allows a user to sign up for an account with a hashed password and a JSON Web Token, then the user is able to upload posts including pictures and hashtags. The user is also able to like others' posts, update their own posts and delete their own posts.",
        },
        {
          title: "Deployed Application",
          description: (
            <a
              href="https://mindump.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button variants={fadeAnim}>
                View Application
              </motion.button>
            </a>
          ),
        },
        {
          title: "GitHub repository",
          description: (
            <a
              href="https://github.com/CliffordMorin/Mern-Stack-App"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="7x"
                color="#23D997"
              />
            </a>
          ),
        },
      ],
    },
    {
      title: "Pokemon APP",
      mainImg: pokemonCards,
      secondaryImg: pokemonHome,
      url: "/work/pokemon-TCG-app",
      blurbs: [
        {
          title: "Description",
          description:
            "Pokemon TCG APP is an application made Javascript where the user can log in, search for any pokemon card ever made, add that card to there own pokemon deck, can trade cards with other users, and chat with other user's. ”",
        },
        {
          title: "Deployed Application",
          description: (
            <a
              href="https://pokemon-deck-builder.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button variants={fadeAnim}>
                View Application
              </motion.button>
            </a>
          ),
        },
        {
          title: "GitHub repository",
          description: (
            <a
              href="https://github.com/thebadams/Pokemon-TCG-App"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="7x"
                color="#23D997"
              />
            </a>
          ),
        },
      ],
    },
    {
      title: "Music Player",
      mainImg: musicPlayerHome,
      secondaryImg: musicPlayerLibrary,
      url: "/work/music-player-app",
      blurbs: [
        {
          title: "Description",
          description:
            "This application is a Music Player app built with react. The user can listen to all the songs that are located in the app. The play feature can be on click of play button or space bar hit, also skip a track with the right arrow or go back with the left arrow. Enjoy!",
        },
        {
          title: "Deployed Application",
          description: (
            <a
              href="https://cryptic-taiga-39767.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button variants={fadeAnim}>
                View Application
              </motion.button>
            </a>
          ),
        },
        {
          title: "GitHub repository",
          description: (
            <a
              href="https://github.com/CliffordMorin/Music-Player-App#mobile-view"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="7x"
                color="#23D997"
              />
            </a>
          ),
        },
      ],
    },
    {
      title: "MSG App",
      mainImg: movie,
      url: "/work/movie-soundtrack-generator",
      secondaryImg: movie,
      blurbs: [
        {
          title: "Description",
          description:
            "Our application takes a movie search from the user and returns a list of soundtracks that contain similar search terms. After the user selects the desired soundtrack, they can sample the songs on apple music. We accomplish this by using HTML, CSS, Bootstrap, Javascript, and fetching data from IMDb and Apple Music web APIs.",
        },
        {
          title: "Deployed Application",
          description: (
            <a
              href="https://chloeyu17.github.io/movie-soundtrack-generator/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button variants={fadeAnim}>
                View Application
              </motion.button>
            </a>
          ),
        },
        {
          title: "GitHub repository",
          description: (
            <a
              href="https://github.com/chloeyu17/movie-soundtrack-generator"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="7x"
                color="#23D997"
              />
            </a>
          ),
        },
      ],
    },
    {
      title: "Budget Tracker",
      mainImg: BudgetGif,
      url: "/work/budget-tracker",
      secondaryImg: BudgetGif,
      blurbs: [
        {
          title: "Description",
          description:
            "Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success. In this app the user is able to add expenses and deposits to their budget with or without an internet connection. When entering transactions offline, they should populate the total when brought back online.",
        },
        {
          title: "Deployed Application",
          description: (
            <a
              href="https://sleepy-atoll-98623.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button variants={fadeAnim}>
                View Application
              </motion.button>
            </a>
          ),
        },
        {
          title: "GitHub repository",
          description: (
            <a
              href="https://github.com/CliffordMorin/Budget-Tracker"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="7x"
                color="#23D997"
              />
            </a>
          ),
        },
      ],
    },
    {
      title: "Fitness Tracker",
      mainImg: workout1,
      secondaryImg: workout,
      url: "/work/fitness-tracker",
      blurbs: [
        {
          title: "Description",
          description:
            "This project is a fitness and workout tracker. You can create a new workout and the mark off each workout as you finish them. Your statistics are logged in a nice visual graph that help you keep track of your progress.",
        },
        {
          title: "Deployed Application",
          description: (
            <a
              href="https://aqueous-hamlet-70364.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button variants={fadeAnim}>
                View Application
              </motion.button>
            </a>
          ),
        },
        {
          title: "GitHub repository",
          description: (
            <a
              href="https://github.com/CliffordMorin/Fitness-Workout-Tracker"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="7x"
                color="#23D997"
              />
            </a>
          ),
        },
      ],
    },
    {
      title: "Tech Blog",
      mainImg: tech2,
      secondaryImg: tech3,
      url: "/work/tech-blog",
      blurbs: [
        {
          title: "Description",
          description:
            "Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels! Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
        },
        {
          title: "Deployed Application",
          description: (
            <a
              href="https://powerful-waters-18234.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button variants={fadeAnim}>
                View Application
              </motion.button>
            </a>
          ),
        },
        {
          title: "GitHub repository",
          description: (
            <a
              href="https://github.com/CliffordMorin/Tech-blog"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="7x"
                color="#23D997"
              />
            </a>
          ),
        },
      ],
    },
    {
      title: "Quote Quiz",
      mainImg: quoteQuiz,
      secondaryImg: null,
      url: "/work/quote-quiz",
      blurbs: [
        {
          title: "Description",
          description:
            "A React app using a famous quotes api and React Redux to create an interactive game for the user.",
        },
        {
          title: "Deployed Application",
          description: (
            <a
              href="https://quotequiz.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button variants={fadeAnim}>
                View Application
              </motion.button>
            </a>
          ),
        },
        {
          title: "GitHub repository",
          description: (
            <a
              href="https://github.com/zachinjapan/quotes"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="7x"
                color="#23D997"
              />
            </a>
          ),
        },
      ],
    },
    {
      title: "E-Commerce App",
      mainImg: eCommerce1,
      secondaryImg: eCommerce2,
      url: "/work/e-commerce-app",
      blurbs: [
        {
          title: "Description",
          description:
            "This mern stack application is a functional professional e-commerce website that users can browse items, add them to there cart and checkout/purchase those items using stripe.io. Users can also sign in and create an account using auth0, this account then tracks all of your recent purchases. This application uses languages such as next.js, strapi.io, stripe, graphQL, react.js, html, css, styled components, auth0, and more.",
        },
        {
          title: "Deployed Application",
          description: (
            <a
              href="https://e-commerce-site-tawny.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button variants={fadeAnim}>
                View Application
              </motion.button>
            </a>
          ),
        },
        {
          title: "GitHub repository",
          description: (
            <a
              href="https://github.com/CliffordMorin/E-Commerce-Site"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="7x"
                color="#23D997"
              />
            </a>
          ),
        },
      ],
    },
  ];
};
