import styled from "styled-components";
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 50px;
  top: 0;
  font-size: 12px;
  background-color: #fff;
  border-bottom: 2px whitesmoke solid;
  
 & * {
	color:black;
	 text-decoration: none;
	 font-weight: bold;
 }
`;


function Header() {

  return(
	<Nav>
		<Link to="/">
		<div>고객 정보 입력</div>
		</Link>
		<Link to="/">
		<div>유저정보 조회</div>
		</Link>
		<Link to="/">
		<div>문의정보 단일 조회</div>
		</Link>
		<Link to="/">
		<div>문의정보 전체 조회</div>
		</Link>
	</Nav>
  )
}


export default Header