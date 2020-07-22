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
  },
  {
    name: "PhotoHub",
    info: "PhotoHub, you can Download Most Beautiful Images And collections...",
    image: photohub,
    imagegif: photogif,
  },
  {
    name: "Movies",
    info:
      "Movies, We can See Different types of movies and trailers and cast...",
    image: moviesPoster,
    imagegif: moviesgif,
  },
  {
    name: "Weather App",
    info: "Weather App, You Can Check The Weather And around City Weather...",
    image: wetherapp,
    imagegif: wetherapp,
  },
  {
    name: "Restaurant",
    info: "Restaurants app, You can Check the Hotels and Reviews...",
    image: restarunt,
    imagegif: restaruntgif,
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
      &::after {
        content: "";
      }
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
    const { name, info, image, imagegif } = oneproject[0];

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
      </ProjectWapper>
    );
  } else {
    return null;
  }
};
export default Id;
