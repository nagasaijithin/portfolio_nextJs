import styled from "styled-components";
import Link from "next/link";

/////
// all images
/////
import moviesPoster from "../images/posters/movieshub.png";
import photohub from "../images/posters/photohub.png";
import restarunt from "../images/posters/restarunt.png";
import sayhi from "../images/posters/sayhi.png";
import wetherapp from "../images/posters/weatherapp.png";
import kvrcommunications from "../images/posters/kvrcommunications.png";
import myglobaliq from "../images/posters/myglobaliq.png";
import sripadmavathienterprises from "../images/posters/sripadmavathienterprises.png";
import tearoomfranchise from "../images/posters/tearoomfranchise.png";

/////
// all gif
/////
import moviesgif from "../images/gifs/movies.gif";
import photogif from "../images/gifs/photo.gif";
import restaruntgif from "../images/gifs/restarunt.gif";
import sayhigif from "../images/gifs/sayhi.gif";
import sripgif from "../images/gifs/srip.gif";
import kvrgif from "../images/gifs/kvr.gif";
import myglobaliqgif from "../images/gifs/myglobaliq.gif";
import tearomgif from "../images/gifs/tearom.gif";

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
    name: "My globaliq",
    info:
      "My Globaliq Project is One of my client project for their Requirement ",
    image: myglobaliq,
    imagegif: myglobaliqgif,
  },
  {
    name: "Sri padmavathienterprises",
    info:
      "Sri padmavathienterprises Project is One of my client project for their Requirement ",
    image: sripadmavathienterprises,
    imagegif: sripgif,
  },
  {
    name: "Tearoom franchise",
    info:
      "Tearoom franchise Project is One of my client project for their Requirement ",
    image: tearoomfranchise,
    imagegif: tearomgif,
  },
  {
    name: "Kvr communications",
    info:
      "Kvr communications Project is One of my client project for their Requirement ",
    image: kvrcommunications,
    imagegif: kvrgif,
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
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 2rem;
  grid-gap: 3rem;
  @media ${({ theme }) => theme.mediaqury.laptopLarg} {
    grid-gap: 10rem;
  }
  @media ${({ theme }) => theme.mediaqury.tabLarg} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 4rem;
  }
  @media ${({ theme }) => theme.mediaqury.mblsmall} {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 4rem;
  }
  & > div > div {
    width: 80%;
    margin: 0 auto;
    @media ${({ theme }) => theme.mediaqury.tabLarg} {
      width: 90%;
    }
    & > h2 {
      margin: 2rem 0;
    }
    & > p {
      margin: 2rem 0;
    }
    & > a {
      margin: 2rem 0;
      color: var(--blackTextColor);
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
            <Link href="projects/[id]" as={`projects/${i}`}>
              <Cardimg image={image} imagegif={imagegif}></Cardimg>
            </Link>
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
