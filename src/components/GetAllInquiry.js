import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";

const GetAllInquiryTitle = styled.h1`
  font-weight: bold;
  font-size: 20px;
`;

const GetAllInquiryForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  padding: 25px 10px;
  height: 100%;
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
  height: 100%;
  font-weight: bold;
  font-size: 12px;
  overflow-y: auto;
`;

const SingleUserDataCard = styled.div`
	border-bottom: 1px whitesmoke solid;
	padding: 10px 0;
`

const SingleUserData = styled.div`
  font-weight: 300;
  padding-right: 10px;
  margin-bottom: 10px;
`;


function GetAllInquiryData() {
  let BASE_URL = useSelector((state) => state.BASE_URL);
  let [inquiryData, setInquiryData] = useState({});

  function allSearch() {
    axios
      .get(`${BASE_URL}/getEntireInquiry`)
      .then((res) => {
        setInquiryData(res.data);
      })
      .catch((err) => {
        alert("통신에 실패하였습니다")
      });
  }
  const inquiryCards = Object.keys(inquiryData).map((key) => (
    <InquiryCard key={key} inquiryData={inquiryData[key]} />
  ));
  return (
    <GetAllInquiryForm>
      <GetAllInquiryTitle> 고객 문의정보 전체 조회</GetAllInquiryTitle>
      <CheckButton onClick={allSearch}>조회</CheckButton>
      <UserInfoData>
        <div>문의 내용 </div>
        {inquiryCards}
      </UserInfoData>
    </GetAllInquiryForm>
  );
}

function InquiryCard({ inquiryData }) {
	
	return (
	  <SingleUserDataCard>
		<SingleUserData>UID : {inquiryData.uid}</SingleUserData>
		<SingleUserData>문의사항 : {inquiryData.message}</SingleUserData>
	  </SingleUserDataCard>
	);
  }

export default GetAllInquiryData;
