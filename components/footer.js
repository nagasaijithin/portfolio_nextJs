import styled from "styled-components";
import FacebookIcon from "../images/facebookIcon.svg";
import GithubIcon from "../images/githubicon.svg";
import InstagramIcon from "../images/instagramicon.svg";
const FooterWapper = styled.footer`
  height: 30vh;
  color: white;
  font-size: 1.5rem;
  width: 80%;
  margin: 5rem auto 0;

  text-align: center;
  scroll-behavior: smooth;

  & > h2,
  h1 {
    margin: 1rem;
  }
  & > h2 {
    font-weight: 200;
    width: 70%;
    margin: 1rem auto;
  }
`;

const IconsWapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 2rem 0;

  & > a > svg {
    height: 5rem;
  }
`;
const Footer = () => {
  return (
    <FooterWapper id="contactme">
      <h1>Contact Me</h1>
      <h2>
        Let's Build Something Together Feel free to reach out if you're looking
        for a Front end web developer,
      </h2>
      <IconsWapper>
        <a href="https://www.facebook.com/pasupuleti.jithin/" target="_blank">
          <FacebookIcon />
        </a>
        <a href="https://github.com/nagasaijithin" target="_blank">
          <GithubIcon />
        </a>
        <a
          href="https://www.instagram.com/nagasaijithin_pasupuleti/"
          target="_blank"
        >
          <InstagramIcon />
        </a>
      </IconsWapper>
    </FooterWapper>
  );
};

export default Footer;
