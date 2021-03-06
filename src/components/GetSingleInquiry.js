import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";


const GetSingleInquiryTitle = styled.h1`
	font-weight: bold;
	font-size: 20px;
`

const GetSingleInquiryForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  padding: 25px 10px;
`;

const GetUserInfoInput = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  padding: 10px;
  width: 100%;
  &:focus {
    outline: none;
    border-bottom: 2px solid grey;
  }
`;

const SubmitButton = styled.button`
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

const UserInfoErrorMsg = styled.span`
  font-size: 12px;
  color: red;
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
  padding: 0 10px;
`;

const SingleDataTitle = styled.div`
	font-size: 16px;
`

const SingleDataCard = styled.div`
	margin-bottom: 15px;
	font-weight: 300;
	padding-bottom: 10px;
	border-bottom: 2px whitesmoke solid;
`

function GetSingleInquiry(){


	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm();
	  let BASE_URL = useSelector((state) => state.BASE_URL);
	  let [inquiryData, setInquiryData] = useState("");
	  let [userID, setUserId] = useState("");
	
	  const onValid = (data) => {
		axios
		  .get(`${BASE_URL}/getSingleInquiry?uid=${data.getSingleInquiry}`)
		  .then((res) => {
			setInquiryData(res.data.message)
			setUserId(res.data.uid);
		  })
		  .catch((err) => {
			setInquiryData("문의 내역이 없거나 고객이 아닙니다.");
		  });
	  };

	return(
		<GetSingleInquiryForm onSubmit={handleSubmit(onValid)}>
		<GetSingleInquiryTitle> 고객 문의정보 단일 조회</GetSingleInquiryTitle>
        <GetUserInfoInput
          placeholder="고객의 ID를 입력하세요"
          name="getSingleInquiry"
          {...register("getSingleInquiry", {
            required: "ID를 입력해주세요",
            minLength: {
              value: 5,
              message: "정확한 ID를 입력해주세요",
            },
          })}
        />
        <UserInfoErrorMsg>{errors.getSingleInquiry?.message} </UserInfoErrorMsg>
        <SubmitButton>입력</SubmitButton>
        <UserInfoData>
		  <SingleDataTitle>유저 ID </SingleDataTitle>
		  <SingleDataCard> {userID} </SingleDataCard>
		  <SingleDataTitle>문의 내역</SingleDataTitle>
          <SingleDataCard>{inquiryData}</SingleDataCard>
        </UserInfoData>
      </GetSingleInquiryForm>
	)
}

export default GetSingleInquiry