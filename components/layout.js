import styled from "styled-components";
import MainWitchLogo from "../images/whitelogo.svg";
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
    font-size: 2.5rem;
    & > li > svg {
      width: 5rem;
      height: auto;
    }
  }
`;
const LayOut = ({ children }) => {
  return (
    <MainLayout>
      <NavWapper>
        <ul>
          <li>
            <MainWitchLogo />
          </li>
          <li>Home</li>
          <li>About me</li>
          <li>Contact me</li>
        </ul>
      </NavWapper>
      {children}
    </MainLayout>
  );
};

export default LayOut;
