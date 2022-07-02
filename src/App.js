import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 35px 0;
`

const PhoneForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  padding: 25px 10px;
`

const SubmitButton = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 5%;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border:none;
  background-color: #2f63ba;
  cursor: pointer;

  &:hover{
    background-color: #0c387b;
  }
`
const UserInfoContainer = styled.section`
  width: 20rem;
  height: 40rem;
  background-color: #fff;
  box-shadow: rgb(192, 192, 192) 0px 3px 8px 2px;
  border-radius: 5%;
`

const UserInfoInput = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  padding: 10px;
  width: 100%;
  &:focus {
    outline:none;
    border-bottom: 2px solid grey;
  }
`

const UserInfoCategory = styled.div`
  font-weight: bold;
  text-align: left;
`

const UserInfoErrorMsg = styled.span`
  font-size: 12px;
  color: red;
`

function App() {

  const { register, handleSubmit, formState:{errors}} = useForm();
  let BASE_URL = useSelector((state) => state);
  const dispatch = useDispatch();
  

  const onVaild = async (data) => {
    console.log(data.phoneNumber);
    dispatch({type: "saveUser"})

    // 번호를 받아왔으니 그거를 POST 해야한다.
    try {
      await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "phone" : data.phoneNumber,
          "userName" : data.userName,
        })
      })
    }
    catch(err){
      alert(err);
    }
  }
  return (
    <MainContainer className="App">
      <Title>팩토리 유니콘</Title>
      <UserInfoContainer>

      
      <PhoneForm onSubmit={handleSubmit(onVaild)}>
      <UserInfoCategory>휴대폰 번호</UserInfoCategory>
      <UserInfoInput placeholder='(-)을 포함한 휴대폰번호 입력' name="phoneNumber"
      {...register("phoneNumber", {
        required: "(-)을 포함한 휴대폰번호를 입력해주세요", pattern: {
          value: /^(\d{2,3})-(\d{3,4})-(\d{4})$/,
          message: "(-)을 포함한 올바른 휴대폰 번호를 입력해주세요",
        },
      })}></UserInfoInput>
      <UserInfoErrorMsg>{errors.phoneNumber?.message} </UserInfoErrorMsg>

<UserInfoCategory>이름</UserInfoCategory>
      <UserInfoInput placeholder='이름을 입력해주세요' name="userName"
      {...register("userName", {
        required: "이름을 입력해주세요", pattern: {
          value: /^[가-힣]{2,10}$/ ,
          message: "2~10글자 한글만 입력해주세요",
        },
      })}>

      </UserInfoInput>
      <UserInfoErrorMsg>{errors.userName?.message} </UserInfoErrorMsg>

      <SubmitButton>제출하기</SubmitButton>
      </PhoneForm>
      </UserInfoContainer>
    </MainContainer>
  );
}

export default App;
