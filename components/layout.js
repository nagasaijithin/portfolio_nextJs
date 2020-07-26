import styled from "styled-components";
import MainWitchLogo from "../images/whitelogo.svg";
import { useRouter } from "next/router";
import Link from "next/link";
const MainLayout = styled.div`
  display: flex;
  background-color: var(--blackBackgroundColor);
`;
const NavWapper = styled.div`
  flex-basis: 20%;
  height: 100vh;
  color: var(--blackTextColor);
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
      -webkit-text-stroke-color: var(--blackTextColor);
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-fill-color: transparent;
      position: relative;
      &:hover {
        & > div {
          width: 100%;
        }
      }
      & > div {
        width: 0%;
        height: 0.2rem;
        background: var(--blackTextColor);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.6s ease-in;
      }
    }
    & > span {
      position: relative;

      & > input {
        height: 0;
        width: 0;
        visibility: hidden;
      }

      input:checked + label {
        background: #76a4da;
      }

      input:checked + label:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
      }

      label:active:after {
        width: 31px;
      }
      & > label {
        width: 8rem;
        height: 4rem;
        background: gray;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        border-radius: 100px;
        &:after {
          content: "";
          width: 3rem;
          height: 3rem;
          background: white;
          position: absolute;
          border-radius: 50%;
          top: 12%;
          left: 6%;
          transition: 0.3s;
        }
      }
    }
    & > li > a {
      color: var(--blackTextColor);
      text-decoration: none;
    }
    & > li > svg {
      width: 5rem;
      height: auto;
      & > g {
        fill: var(--blackTextColor);
      }
    }
  }
`;
const HomeLinks = () => (
  <>
    <li onClick={() => document.getElementById("home").scrollIntoView()}>
      <div></div>
      Home
    </li>
    <li onClick={() => document.getElementById("aboutme").scrollIntoView()}>
      <div></div>
      About me
    </li>
    <li onClick={() => document.getElementById("portfolio").scrollIntoView()}>
      <div></div>
      Portfolio
    </li>
    <li onClick={() => document.getElementById("contactme").scrollIntoView()}>
      <div></div>
      Contact me
    </li>
    <span>
      <input type="checkbox" id="switch" name="theme" />

      <label htmlFor="switch"></label>
    </span>
  </>
);
const ProjectLinks = () => (
  <>
    <li>
      <div></div>
      <Link href="/">
        <a>Go Back</a>
      </Link>
    </li>
    <span>
      <input type="checkbox" id="switch" name="theme" />
      <label htmlFor="switch"></label>
    </span>
  </>
);
const MlbNav = styled.nav`
  height: 10vh;
  width: 100%;
  box-shadow: 1px 1px 10px black;
  padding: 2.2rem;
  position: fixed;
  background-color: var(--blackBackgroundColor);
  display: none;
  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > div:nth-child(1) {
      & > svg {
        height: auto;
        width: 4rem;
        & > g {
          fill: var(--blackTextColor);
        }
      }
    }
    & > div:nth-child(2) {
      color: var(--blackTextColor);
      font-size: 3rem;
      transform: rotate(90deg);
    }
  }
`;
const LayOut = ({ children }) => {
  const router = useRouter();
  const { id } = router.query;
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
      <MlbNav>
        <div>
          <div>
            <MainWitchLogo />
          </div>
          <div>|||</div>
        </div>
      </MlbNav>
      {children}
    </MainLayout>
  );
};

export default LayOut;
