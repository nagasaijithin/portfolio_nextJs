import { useEffect, useState, useRef } from "react";
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
  @media ${({ theme }) => theme.mediaqury.laptopMid} {
    display: none;
  }
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

const MlbNav = styled.nav`
  height: 10vh;
  width: 100%;
  box-shadow: 1px 1px 10px black;
  padding: 2.2rem;
  position: fixed;
  background-color: var(--blackBackgroundColor);
  display: none;
  @media ${({ theme }) => theme.mediaqury.laptopMid} {
    display: block;
    z-index: 20;
  }
  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & > a {
      color: var(--blackTextColor);
      text-decoration: none;
      font-size: 4rem;
    }
    & > div:nth-child(2) {
      & > svg {
        height: auto;
        width: 4rem;
        & > g {
          fill: var(--blackTextColor);
        }
      }
    }
    & > div:nth-child(1) {
      color: var(--blackTextColor);
      font-size: 4rem;
      transform: rotate(90deg);
      cursor: pointer;
    }
    & > div:nth-child(3) {
      & > span {
        position: relative;
        & > input {
          height: 0;
          width: 0;
          visibility: hidden;
          &:checked + label:after {
            left: calc(100% - 5px);
            transform: translateX(-100%);
          }
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
      }
    }
  }
`;

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
function checkBtn(e) {
  e.persist();
  if (e.target.checked) {
    trans();
    document.documentElement.setAttribute("data-mode", "dark");
    localStorage.setItem("_theme", JSON.stringify("dark"));
  } else {
    trans();
    document.documentElement.setAttribute("data-mode", "light");
    localStorage.setItem("_theme", JSON.stringify("light"));
  }
}
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
    <Checkbox id="dstbtn" />
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
    <Checkbox id="dstbtn" />
  </>
);
const Checkbox = ({ id }) => {
  let [state, setState] = useState("");
  useEffect(() => {
    let data = localStorage.getItem("_theme");
    setState(JSON.parse(data));
  });
  let checktheMode = state;
  if (checktheMode === "dark") {
    return (
      <span>
        {
          <input
            type="checkbox"
            id={id}
            name="theme"
            onChange={(e) => {
              let updateCond = checktheMode === "dark" ? "light" : "dark";
              setState(updateCond);
              checkBtn(e);
            }}
            checked={true}
          />
        }
        <label htmlFor={id}></label>
      </span>
    );
  } else {
    return (
      <span>
        {
          <input
            type="checkbox"
            id={id}
            name="theme"
            onChange={(e) => {
              let updateCond = checktheMode === "dark" ? "light" : "dark";
              setState(updateCond);
              checkBtn(e);
            }}
            checked={false}
          />
        }
        <label htmlFor={id}></label>
      </span>
    );
  }
};
const MlbnavShow = styled.div`
  height: 100%;
  width: 40%;
  position: fixed;
  background: white;
  z-index: 30;
  box-shadow: 1px 1px 10px black;
  left: -57%;
  transition: all 1s ease;
  background-color: var(--blackBackgroundColor);
  @media ${({ theme }) => theme.mediaqury.mblMid2} {
    width: 50%;
  }
  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    & > div:nth-child(1) {
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      cursor: pointer;
      color: var(--blackTextColor);
    }
    & > div:nth-child(2) {
      flex: 1;
      display: flex;
      font-size: 4rem;
      align-items: center;
      justify-content: center;
      text-align: center;
      @media ${({ theme }) => theme.mediaqury.tabLarg3} {
        font-size: 3rem;
      }
      @media ${({ theme }) => theme.mediaqury.mblMid2} {
        font-size: 2.7rem;
      }
      & > ul {
        list-style: none;
        & > li {
          padding: 2rem;
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
      }
    }
  }
`;
const LayOut = ({ children }) => {
  const router = useRouter();
  const MblNavref = useRef("");
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
          {id ? (
            <Link href="/">
              <a>{"<-"}</a>
            </Link>
          ) : (
            <div
              onClick={() => {
                MblNavref.current.style.left = "0px";
              }}
            >
              |||
            </div>
          )}
          <div>
            <MainWitchLogo />
          </div>
          <div>
            <Checkbox id="mldBtn" />
          </div>
        </div>
      </MlbNav>
      <MlbnavShow ref={MblNavref}>
        <div>
          <div
            onClick={() => {
              MblNavref.current.style.left = "-57%";
            }}
          >
            <h1>x</h1>
          </div>
          <div>
            <ul>
              <li
                onClick={() => {
                  MblNavref.current.style.left = "-57%";
                  document.getElementById("home").scrollIntoView();
                }}
              >
                <div></div>
                Home
              </li>
              <li
                onClick={() => {
                  MblNavref.current.style.left = "-57%";
                  document.getElementById("aboutme").scrollIntoView();
                }}
              >
                <div></div>
                About me
              </li>
              <li
                onClick={() => {
                  MblNavref.current.style.left = "-57%";
                  document.getElementById("portfolio").scrollIntoView();
                }}
              >
                <div></div>
                Portfolio
              </li>
              <li
                onClick={() => {
                  MblNavref.current.style.left = "-57%";
                  document.getElementById("contactme").scrollIntoView();
                }}
              >
                <div></div>
                Contact me
              </li>
            </ul>
          </div>
        </div>
      </MlbnavShow>
      {children}
    </MainLayout>
  );
};

export default LayOut;
