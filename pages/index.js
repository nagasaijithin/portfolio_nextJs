import styled from "styled-components";
import Allprojects from "../components/allproject";
import Footer from "../components/footer";

const HomeWapper = styled.main`
  width: 100%;
  scroll-behavior: smooth;
`;
const PosterWapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  scroll-behavior: smooth;

  & > div {
    font-size: 6rem;
    color: ${({ theme }) => theme.colors.textColor};
    margin: 5rem;
    line-height: 1.4;
  }
`;
const AboutMeWapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 4rem;
  font-size: 2.5rem;

  text-align: center;
  color: white;
  line-height: 1.5;
  scroll-behavior: smooth;

  & > div > h2 {
    font-weight: 200;
  }
`;
const PortfolioWapper = styled.section`
  font-size: 2.5rem;

  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: smooth;

  & > h2,
  h1 {
    margin: 1rem;
  }
  & > h2 {
    font-weight: 200;
  }
`;

const Home = () => {
  return (
    <HomeWapper>
      <PosterWapper id="home">
        <div>
          <div>
            <p>Hi There!</p>
          </div>
          <div>
            <p>I'm Nagasai Jithin</p>
          </div>
          <div>
            <p>Front End Web Developer</p>
          </div>
          <div>
            <p>Alway's Student</p>
          </div>
        </div>
      </PosterWapper>
      <AboutMeWapper id="aboutme">
        <div>
          <h1>About Me</h1>
        </div>
        <div>
          <h2>
            i'm nagasai jithin, 21-years-old frontend web developer from India
          </h2>
        </div>
        <div>
          <p>
            4 years back i'm a electrical student and i got intershipe in
            goverment thermal power station in Andhra Pradesh after 6 month of
            intership i wasn't happy as a electrical student so, I decided to
            take the risk and quit my deploma. becase i'm intrsted computer youn
            age that inspire my take coures on Bachelor computer Application
            (B.C.A) so i decide to join ,then real scene come on screen the
            "programming" , my line of code i'm happy so i decided continue the
            codeing one day i got notification from youtube how learn code, then
            i see the video and i searched more related videos, then i started
            learning code in internet almost every thing free so that time i got
            love with javascript then, on my free time watched countless youtube
            videos about Javascript. During time, I took online courses like
            "The Web Developer Bootcamp" every one know the best way to learn is
            to practice practice practice so my free time to apply these
            concepts to real-world scenarios. then did some of personal projects
            i describe one of them projects here
          </p>
        </div>
      </AboutMeWapper>
      <PortfolioWapper id="portfolio">
        <h1>Portfolio</h1>
        <h2>What I've been working on</h2>
        <Allprojects />
      </PortfolioWapper>
      <Footer />
    </HomeWapper>
  );
};

export default Home;
