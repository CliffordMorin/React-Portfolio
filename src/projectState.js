import React from "react";
//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
//style
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeAnim } from "./animation";

//Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

//Import Projects
import pokemonGif from "./img/pokemonGif.gif";
import pokemonHome from "./img/pokemonHome.png";
import pokemonCards from "./img/pokemonCards.png";

export const ProjectState = () => {
  return [
    {
      title: "Pokemon TCG APP",
      mainImg: pokemonCards,
      secondaryImg: pokemonHome,
      url: "/work/the-athlete",
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
      title: "Good Times",
      mainImg: goodtimes,
      url: "/work/good-times",
      secondaryImg: goodtimes2,
      blurbs: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      url: "/work/the-racer",
      secondaryImg: theracer2,
      blurbs: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
