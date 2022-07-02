
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import axios from 'axios';

const InquiryForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  padding: 25px 10px;
`

const InquiryInput = styled.textarea`
  border: none;
  border-bottom: 1px solid grey;
  padding: 10px;
  width: 100%;
  height: 100px;
  word-break: normal;
  resize: none;
  &:focus {
    outline: grey;
    border-bottom: 2px solid grey;
  }
`;

const InquiryCategory = styled.div`
  font-weight: bold;
  text-align: left;
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

const InquiryErrorMsg = styled.span`
  font-size: 12px;
  color: red;
`;


function Inquiry() {

	let BASE_URL = useSelector((state) => state.BASE_URL);
	// 유저 정보를 받아와야한다 
	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm();

	const onVaild = async (data) => {
		await axios.post(BASE_URL + '/saveInquiry', {
			inquiryInfo: data.Inquiry,
			// uid: localStorage.getItem("uid"),
			// phone: localStorage.getItem("phone"),
			// userName: localStorage.getItem("userName"),
			
		}).then((res) => {
			console.log(res.data.userData);
			localStorage.setItem("userName", res.data.userData.inquiryInfo)
			alert("문의가 등록되었습니다");
		}).catch((err) => {
			alert(err);
		})
	
	};

	return(
		<InquiryForm onSubmit={handleSubmit(onVaild)}>
		<InquiryCategory>문의 하기</InquiryCategory>
		<div>고객이름{localStorage.getItem("userName")}</div>
		<div>고객폰번호{localStorage.getItem("phone")}</div>
		<div>고객 uid{localStorage.getItem("uid")}</div>
			<InquiryInput placeholder='문의내용 입력' type={'text'} name="Inquiry" 
			{...register("Inquiry", {
				required: "문의 내용을 입력해주세요",
				maxLength: {
					value: 200,
					message: "200글자 이하로 입력해주세요"
				},
				minLength:{
					value: 2,
					message: "2글자 이상 입력해주세요"
				},
			})} />
			<InquiryErrorMsg>{errors.Inquiry?.message} </InquiryErrorMsg>
			<SubmitButton>문의 등록</SubmitButton>
		</InquiryForm>
	)
}

export default Inquiry