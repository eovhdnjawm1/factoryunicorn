import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";


const GetAllInquiryTitle = styled.h1`
	font-weight: bold;
	font-size: 20px;
`

const GetAllInquiryForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  padding: 25px 10px;
`;

const CheckButton = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 5%;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  background-color: #2f63ba;
  cursor: pointer;

  &:hover {
    background-color: #0c387b;
  }
`;


const UserInfoData = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: flex-start;
  margin-left: 10px;
  width: 100%;
  font-weight: bold;
  font-size: 12px;
`;



function GetAllInquiryData(){
	  let BASE_URL = useSelector((state) => state.BASE_URL);
	  let [inquiryData, setInquiryData] = useState("");
	
	  const allSearch = () => {
		axios
		  .get(`${BASE_URL}/getEntireInquiry`)
		  .then((res) => {
			// setInquiryData(res.data.inquiryInfo)
			// 이름, 번호, id, 문의내역 state 만들고 공개하기
			// 500번대 에러로 json이 반영이 안되니 확인불가
			console.log(res)
		  })
		  .catch((err) => {
			console.log("실패")
		  });
	  };


	return(
		<GetAllInquiryForm>
		<GetAllInquiryTitle> 고객 문의정보 전체 조회</GetAllInquiryTitle>
        <CheckButton onClick={allSearch()}>조회</CheckButton>
        <UserInfoData>
          <div>문의 내용  </div>
          <div>{inquiryData}</div>
        </UserInfoData>
      </GetAllInquiryForm>
	)
}

export default GetAllInquiryData;