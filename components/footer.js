import styled from "styled-components";
import FacebookIcon from "../images/facebookIcon.svg";
import GithubIcon from "../images/githubicon.svg";
import InstagramIcon from "../images/instagramicon.svg";
const FooterWapper = styled.footer`
  height: 40vh;
  color: var(--blackTextColor);
  font-size: 1.5rem;
  width: 80%;
  margin: 5rem auto 0;
  text-align: center;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
  @media ${({ theme }) => theme.mediaqury.tabLarg} {
    width: 90%;
    margin: 3rem auto 0;
  }
  & > h2 {
    font-weight: 200;
    width: 70%;
    margin: 0 auto;
  }
`;

const IconsWapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
