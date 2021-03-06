import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserTitle = styled.h1`
  font-weight: bold;
  font-size: 20px;
`;
const PhoneForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  padding: 25px 10px;
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

const UserInfoInput = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  padding: 10px;
  width: 100%;
  &:focus {
    outline: none;
    border-bottom: 2px solid grey;
  }
`;

const UserInfoCategory = styled.div`
  font-weight: bold;
  text-align: left;
`;

const UserInfoErrorMsg = styled.span`
  font-size: 12px;
  color: red;
`;

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let BASE_URL = useSelector((state) => state.BASE_URL);

  const onVaild = async (data) => {
    await axios
      .post(BASE_URL + "/saveUser", {
        phone: data.phoneNumber,
        userName: data.userName,
      })
      .then((res) => {
        localStorage.setItem("phone", res.data.userData.phone);
        localStorage.setItem("userName", res.data.userData.userName);
        navigate("/saveInquiry");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <PhoneForm onSubmit={handleSubmit(onVaild)}>
        <UserTitle> 고객정보 입력</UserTitle>
        <UserInfoCategory>휴대폰 번호</UserInfoCategory>
        <UserInfoInput
          placeholder="(-)을 포함한 휴대폰번호 입력"
          name="phoneNumber"
          {...register("phoneNumber", {
            required: "(-)을 포함한 휴대폰번호를 입력해주세요",
            pattern: {
              value: /^(\d{2,3})-(\d{3,4})-(\d{4})$/,
              message: "(-)을 포함한 올바른 휴대폰 번호를 입력해주세요",
            },
          })}
        ></UserInfoInput>
        <UserInfoErrorMsg>{errors.phoneNumber?.message} </UserInfoErrorMsg>

        <UserInfoCategory>이름</UserInfoCategory>
        <UserInfoInput
          placeholder="이름을 입력해주세요"
          name="userName"
          {...register("userName", {
            required: "이름을 입력해주세요",
            pattern: {
              value: /^[가-힣]{2,10}$/,
              message: "2~10글자 한글만 입력해주세요",
            },
          })}
        ></UserInfoInput>
        <UserInfoErrorMsg>{errors.userName?.message} </UserInfoErrorMsg>

        <SubmitButton>제출하기</SubmitButton>
      </PhoneForm>
    </>
  );
}

export default Login;
