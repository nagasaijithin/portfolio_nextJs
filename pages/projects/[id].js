import { useRouter } from "next/router";
import styled from "styled-components";
import moviesPoster from "../../images/posters/movieshub.png";
import photohub from "../../images/posters/photohub.png";
import restarunt from "../../images/posters/restarunt.png";
import sayhi from "../../images/posters/sayhi.png";
import wetherapp from "../../images/posters/weatherapp.png";

import moviesgif from "../../images/gifs/movies.gif";
import photogif from "../../images/gifs/photo.gif";
import restaruntgif from "../../images/gifs/restarunt.gif";
import sayhigif from "../../images/gifs/sayhi.gif";
const projectdata = [
  {
    name: "SayHI",
    info:
      "SayHi, it's like a Social Media Platform That Performs adding Post and Sending Messages..",
    image: sayhi,
    imagegif: sayhigif,
    fullcontent:
      "SayHi is Build With React-Redux-firebase, Firebase Providing Awesome Services For A Developer it Provides The Realtime database, firestore, cloud functions, Deployments, That Inspires Me To Build This Web Application Along The Way I learn a lot of things about react, redux, firebase, styled-components, after completed this project that motived me learn more about this awesome tool   ",
  },
  {
    name: "PhotoHub",
    info: "PhotoHub, you can Download Most Beautiful Images And collections...",
    image: photohub,
    imagegif: photogif,
    fullcontent:
      "Photo hub is service to providing high-quality images for a user can see the different types of images and collections and Download images. This build with react,redux and styled-components with 'unsplash' API ",
  },
  {
    name: "Movies",
    info:
      "Movies, We can See Different types of movies and trailers and cast...",
    image: moviesPoster,
    imagegif: moviesgif,
    fullcontent:
      "Movies application build with HTML, CSS, javascript, and API from Themoviedb it's provided movies information like cast, trailers, movies rating and related movies ",
  },
  {
    name: "Weather App",
    info: "Weather App, You Can Check The Weather And around City Weather...",
    image: wetherapp,
    imagegif: wetherapp,
    fullcontent:
      "This weather app detects your current location then show about your weather and Humidity, Wind And around City Weather, this app build with Html, CSS, javascript and OpenWeather API",
  },
  {
    name: "Restaurant",
    info: "Restaurants app, You can Check the Hotels and Reviews...",
    image: restarunt,
    imagegif: restaruntgif,
    fullcontent:
      "SayHi is Build With React-Redux-firebase, Firebase Providing Awesome Services For A Developer it provides the realtime database, fire store, cloud functions, deploy, that inspires me to build this web app ",
  },
];
const ProjectWapper = styled.div`
  width: 100%;
  color: white;
  padding: 3rem;
  & > div > div {
    & > h1 {
      font-size: 6rem;
      text-align: center;
      margin: 2rem 0;
    }
    & > img {
      width: 100%;
    }
  }
`;
const Id = () => {
  const router = useRouter();
  const { id } = router.query;
  const oneproject = projectdata.filter((data, i) => i == id);
  if (oneproject.length >= 1) {
    const { name, image, fullcontent } = oneproject[0];

    return (
      <ProjectWapper>
        <div>
          <div>
            <h1>{name}</h1>
          </div>
          <div>
            <img src={image} alt="ProjectImage" />
          </div>
        </div>
        <div>
          <div>
            <h2>{fullcontent}</h2>
          </div>
        </div>
      </ProjectWapper>
    );
  } else {
    return null;
  }
};
export default Id;
