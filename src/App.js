import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Login from './components/Login';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`



function App() {
  
  return (
    <MainContainer>
      <BrowserRouter>
      <Routes>
        <Route path="/userInfo" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
