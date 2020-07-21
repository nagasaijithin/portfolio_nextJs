import styled from "styled-components";

const HomeWapper = styled.h1`
  width: 100%;
`;
const ContentWapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    font-size: 3.5rem;
    color: white;
    margin: 0 0 0 5rem;
    padding: 0 0 0 5rem;
    line-height: 1.4;
  }
`;

const Home = () => {
  return (
    <HomeWapper>
      <ContentWapper>
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
      </ContentWapper>
    </HomeWapper>
  );
};

export default Home;
