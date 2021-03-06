import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Header from './components/Header';
import Inquiry from './components/Inquiry';
import Login from "./components/Login";
import GetUserData from './components/GetUser';
import GetSingleInquiry from './components/GetSingleInquiry';
import GetAllInquiryData from './components/GetAllInquiry';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-top: 65px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Container = styled.div`
  margin-top: 65px;
  width: 20rem;
  height: 40rem;
  background-color: #fff;
  box-shadow: rgb(192, 192, 192) 0px 3px 8px 2px;
  border-radius: 5%;
`;

function App() {
  return (
    <>
      <MainContainer>
        <BrowserRouter basename='/factoryunicorn'>
        <Header/>
        <Title>팩토리 유니콘</Title>
          <Container>
            <Routes>
              <Route path="/saveInquiry" element={<Inquiry />} />
              <Route path="/getUser" element={<GetUserData />} />
              <Route path="/getSingleInquiry" element={<GetSingleInquiry />} />
              <Route path="/getEntireInquiry" element={<GetAllInquiryData />} />
              <Route path="/" element={<Login />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </MainContainer>
    </>
  );
}

export default App;
