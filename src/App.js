import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Header from './components/Header';
import Inquiry from './components/Inquiry';
import Login from "./components/Login";

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
  margin: 65px 0;
`;

const Container = styled.div`
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
        <BrowserRouter>
        <Header/>
        <Title>팩토리 유니콘</Title>
          <Container>
            <Routes>
              <Route path="/saveInquiry" element={<Inquiry />} />
              <Route path="/" element={<Login />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </MainContainer>
    </>
  );
}

export default App;
