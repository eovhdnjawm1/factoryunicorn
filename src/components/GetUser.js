import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";


const GetUserTitlte = styled.h1`
	font-weight: bold;
	font-size: 20px;

`

const GetUserForm = styled.form`
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
`;

function GetUserData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let BASE_URL = useSelector((state) => state.BASE_URL);

  let [userName, setUserName] = useState("");
  let [userID, setUserID] = useState("");
  let [userPhoneNumber, setUserPhoneNumber] = useState("");

  const onValid = (data) => {
    console.log("검색");
    axios
      .get(`${BASE_URL}/getUser?phone=${data.getInput}`)
      .then((res) => {
        setUserName(res.data.userName);
        setUserID(res.data.uid);
        setUserPhoneNumber(res.data.phone);
      })
      .catch((err) => {
        setUserName("해당 고객은 없습니다");
        setUserID("");
        setUserPhoneNumber("");
      });
  };

  return (
    <>
      <GetUserForm onSubmit={handleSubmit(onValid)}>
		<GetUserTitlte> 유저 정보 조회</GetUserTitlte>
        <GetUserInfoInput
          placeholder="고객의 휴대폰번호를 입력하세요"
          name="getInput"
          {...register("getInput", {
            required: "(-)을 포함한 휴대폰번호를 입력해주세요",
            pattern: {
              value: /^(\d{2,3})-(\d{3,4})-(\d{4})$/,
              message: "(-)을 포함한 올바른 휴대폰 번호를 입력해주세요",
            },
          })}
        />
        <UserInfoErrorMsg>{errors.getInput?.message} </UserInfoErrorMsg>
        <SubmitButton>입력</SubmitButton>
        <UserInfoData>
          <div>고객 이름 : {userName} </div>
          <div>고객 ID : {userID}</div>
          <div>고객 번호 : {userPhoneNumber}</div>
        </UserInfoData>
      </GetUserForm>
    </>
  );
}

export default GetUserData;
