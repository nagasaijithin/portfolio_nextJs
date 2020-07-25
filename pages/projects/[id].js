import { useRouter } from "next/router";
import styled from "styled-components";

import Footer from "../../components/footer";
/////
// all image
/////
import moviesPoster from "../../images/posters/movieshub.png";
import photohub from "../../images/posters/photohub.png";
import restarunt from "../../images/posters/restarunt.png";
import sayhi from "../../images/posters/sayhi.png";
import wetherapp from "../../images/posters/weatherapp.png";

/////
// all gif
/////
import moviesgif from "../../images/gifs/movies.gif";
import photogif from "../../images/gifs/photo.gif";
import restaruntgif from "../../images/gifs/restarunt.gif";
import sayhigif from "../../images/gifs/sayhi.gif";

/////
// all fulllayout
/////

import moviesFhome from "../../images/fulllayout/moviesFhome.png";
import moviesFOne from "../../images/fulllayout/moviesFOne.png";
import photoFcollection from "../../images/fulllayout/photoFcollection.png";
import photoFhome from "../../images/fulllayout/photoFhome.png";
import photoFone from "../../images/fulllayout/photoFone.png";
import restaruntFhome from "../../images/fulllayout/restaruntFhome.png";
import sayhiFhome from "../../images/fulllayout/sayhiFhome.png";
import sayhiFprofile from "../../images/fulllayout/sayhiFprofile.png";
const projectdata = [
  {
    name: "SayHI",
    info:
      "SayHi, it's like a Social Media Platform That Performs adding Post and Sending Messages..",
    image: sayhi,
    imagegif: sayhigif,
    site: "https://sayhi-dev-5fc85.firebaseapp.com/",
    code: "https://github.com/nagasaijithin/sayhi",
    stack: ["React", "Redux", "styled-components", "firebase"],
    fullimages: [sayhiFhome, sayhiFprofile],
    fullimgcontent: [
      "This a home page of SayHi application, we can check the new post a post show's how many likes and comments when you click the post or comment icon you go to the post page there you can accesses all comments you can also like comment, This Home aloes without reloading content well update and more...",
    ],
    fullcontent:
      "SayHi is Build With React-Redux-firebase, Firebase Providing Awesome Services For A Developer it Provides The Realtime database, firestore, cloud functions, Deployments, That Inspires Me To Build This Web Application Along The Way I learn a lot of things about react, redux, firebase, styled-components, after completed this project that motived me learn more about this awesome tool   ",
  },
  {
    name: "PhotoHub",
    info: "PhotoHub, you can Download Most Beautiful Images And collections...",
    image: photohub,
    imagegif: photogif,
    stack: ["React", "Redux", "styled-components"],
    code: "https://github.com/nagasaijithin/photo",
    site: "https://photohubjithin.netlify.app/",
    fullimages: [photoFhome, photoFone, photoFcollection],
    fullcontent:
      "Photo hub is service to providing high-quality images for a user can see the different types of images and collections and Download images. This build with react,redux and styled-components with 'unsplash' API ",
  },
  {
    name: "Movies",
    info:
      "Movies, We can See Different types of movies and trailers and cast...",
    image: moviesPoster,
    imagegif: moviesgif,
    stack: ["Html", "Sass", "javascript"],
    code: "https://github.com/nagasaijithin/movies.nagasaijithin",
    site: "https://moviesjithin.netlify.app/",
    fullimages: [moviesFhome, moviesFOne],
    fullcontent:
      "Movies application build with HTML, CSS, javascript, and API from Themoviedb it's provided movies information like cast, trailers, movies rating and related movies ",
  },
  {
    name: "Weather App",
    info: "Weather App, You Can Check The Weather And around City Weather...",
    image: wetherapp,
    imagegif: wetherapp,
    stack: ["Html", "Sass", "javascript"],
    code: "https://github.com/nagasaijithin/weathermain.nagasaijithin",
    site: "https://weatherjithin.netlify.app/",
    fullimages: [],
    fullcontent:
      " Weather app build with Html, CSS, javascript and OpenWeather API, This App Detects Your Current Location Then Show About Your Weather And Humidity, Wind And around City Weather,",
  },
  {
    name: "Restaurant",
    info: "Restaurants app, You can Check the Hotels and Reviews...",
    image: restarunt,
    imagegif: restaruntgif,
    stack: ["Html", "Sass", "javascript"],
    site: "https://restaurantsjithin.netlify.app/",
    code: "https://github.com/nagasaijithin/restaurantsapp.nagasaijithin",
    fullimages: [restaruntFhome],
    fullcontent:
      "Restaurant Application Build with HTML, CSS, Javascript, and Zomato API, This App Detects The Current Location And Show  Around The Restaurant's Ratings, Images And More ",
  },
];
const ProjectWapper = styled.div`
  width: 100%;
  color: white;
  padding: 3rem;
  z-index: 5;
`;
const PosterWapper = styled.div`
  margin: 3rem 0;
  & > div {
    & > h1 {
      font-size: 17rem;
      text-align: center;
      margin: 2rem 0;
      -webkit-text-stroke-color: white;
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-fill-color: transparent;
      font-weight: 300;
    }
    & > img {
      box-shadow: 5px 4px 10px rgb(0, 0, 0, 64%);
      width: 100%;
    }
  }
`;
const ContentWapper = styled.div`
  margin: 3rem 0;
  & > div {
    & > h2 {
      margin: 2rem 0;
      font-size: 6rem;
    }
  }
`;
const BackgroundText = styled.h1`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-43%, -43%) rotate(7deg);
  color: #3a3939;
  font-size: 23rem;
  font-weight: 900;
  text-shadow: 10px 4px 9px rgb(0 0 0 / 59%);
`;
const StackWapper = styled.div`
  margin: 5rem 0;

  & > h2 {
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-fill-color: transparent;
    font-weight: 300;
  }
  & > ul {
    width: 70%;
    margin: 2rem auto;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    & > li {
      list-style-type: circle;
    }
  }
`;
const BtnWapper = styled.div`
  font-size: 2.5rem;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2rem 0;
  & > a {
    padding: 1.5rem 1rem;
    color: white;
    text-decoration: none;
    border: 1px solid white;
    border-radius: 20rem;
    position: relative;
    overflow: hidden;

    &:hover {
      &::after {
        height: 100%;
      }
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 0%;
      background-color: white;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.6s ease-in;
    }
    & > p {
      position: relative;
      z-index: 3;
      mix-blend-mode: difference;
    }
  }
`;
const FullimageWapper = styled.div`
  margin: 4rem;

  & > div {
    display: flex;
    align-items: center;
    & > div {
      font-size: 3rem;
      padding: 3rem;
    }
    & > img {
      height: 50%;
      width: 50%;
    }
  }
  & > div:nth-child(even) {
    & > div {
      order: 1;
    }
    & > img {
      order: 2;
    }
  }
`;
const Id = () => {
  const router = useRouter();
  const { id } = router.query;
  const oneproject = projectdata.filter((data, i) => i == id);
  if (oneproject.length >= 1) {
    const {
      name,
      image,
      fullcontent,
      stack,
      site,
      code,
      fullimages,
    } = oneproject[0];

    return (
      <>
        <ProjectWapper>
          <PosterWapper>
            <div>
              <h1>{name}</h1>
            </div>
            <BtnWapper>
              <a href={site} target="_blank">
                <p>View Site</p>
              </a>
              <a href={code} target="_blank">
                <p>Code</p>
              </a>
            </BtnWapper>
            <div>
              <img src={image} alt="ProjectImage" />
            </div>
          </PosterWapper>

          <ContentWapper>
            <div>
              <h2>{fullcontent}</h2>
            </div>
            <StackWapper>
              <h2>Stack</h2>
              <ul>
                {stack.map((data, i) => (
                  <li key={i}>{data}</li>
                ))}
              </ul>
            </StackWapper>
            <FullimageWapper>
              {fullimages.map((data, i) => (
                <div>
                  <img src={data} alt={i} />
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                </div>
              ))}
            </FullimageWapper>
          </ContentWapper>
          <Footer />
        </ProjectWapper>
        <BackgroundText>{name}</BackgroundText>
      </>
    );
  } else {
    return null;
  }
};
export default Id;
