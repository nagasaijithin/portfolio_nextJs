import styled from "styled-components";
import Link from "next/link";
import moviesPoster from "../images/posters/movieshub.png";
import photohub from "../images/posters/photohub.png";
import restarunt from "../images/posters/restarunt.png";
import sayhi from "../images/posters/sayhi.png";
import wetherapp from "../images/posters/weatherapp.png";

import moviesgif from "../images/gifs/movies.gif";
import photogif from "../images/gifs/photo.gif";
import restaruntgif from "../images/gifs/restarunt.gif";
import sayhigif from "../images/gifs/sayhi.gif";
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

const AllprojectsWapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  padding: 2rem;
  grid-gap: 3rem;
  & > div > div {
    width: 80%;
    margin: 0 auto;
    & > h1,
    h2,
    a {
      margin: 1rem 0;
    }
  }
`;
const Cardimg = styled.div`
  height: 30rem;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    background-image: url(${({ imagegif }) => imagegif});
  }
`;

const Allprojects = () => {
  return (
    <AllprojectsWapper>
      {projectdata.map(({ info, name, image, imagegif }, i) => (
        <div key={i}>
          <div>
            <Cardimg image={image} imagegif={imagegif}></Cardimg>
            <h2>{name}</h2>
            <p>{info}</p>
            <Link href="projects/[id]" as={`projects/${i}`}>
              <a>View Project</a>
            </Link>
          </div>
        </div>
      ))}
    </AllprojectsWapper>
  );
};

export default Allprojects;
