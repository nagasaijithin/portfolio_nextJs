import styled from "styled-components";
import MainWitchLogo from "../images/whitelogo.svg";
import { useRouter } from "next/router";
import Link from "next/link";
const MainLayout = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.blackBackground};
`;
const NavWapper = styled.div`
  flex-basis: 20%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.textColor};
  position: sticky;
  top: 0;
  & > ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    font-size: 3rem;
    & > li {
      cursor: pointer;
      -webkit-text-stroke-color: white;
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-fill-color: transparent;
    }
    & > li > a {
      color: ${({ theme }) => theme.colors.textColor};
      text-decoration: none;
    }
    & > li > svg {
      width: 5rem;
      height: auto;
    }
  }
`;
const HomeLinks = () => (
  <>
    <li onClick={() => document.getElementById("home").scrollIntoView()}>
      Home
    </li>
    <li onClick={() => document.getElementById("aboutme").scrollIntoView()}>
      About me
    </li>
    <li onClick={() => document.getElementById("portfolio").scrollIntoView()}>
      Portfolio
    </li>
    <li onClick={() => document.getElementById("contactme").scrollIntoView()}>
      Contact me
    </li>
  </>
);
const ProjectLinks = () => (
  <li>
    <Link href="/">
      <a>Go Back</a>
    </Link>
  </li>
);
const LayOut = ({ children }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <MainLayout>
      <NavWapper>
        <ul>
          <li>
            <MainWitchLogo />
          </li>
          {id ? <ProjectLinks /> : <HomeLinks />}
        </ul>
      </NavWapper>
      {children}
    </MainLayout>
  );
};

export default LayOut;
