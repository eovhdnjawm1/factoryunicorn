import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
`

const PhoneForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`



function App() {

  const { register, handleSubmit, formState:{errors}} = useForm();
  const onVaild = (data) => {
    console.log(data.phoneNumber);
    // 번호를 받아왔으니 그거를 POST 해야한다.
  }
  return (
    <div className="App">
      <Title>로그인 페이지</Title>
      <PhoneForm onSubmit={handleSubmit(onVaild)}>
      <input placeholder='(-)을 제외한 휴대폰번호 입력' name="phoneNumber"
      {...register("phoneNumber", {
        required: "(-)를 제외한 휴대폰번호를 입력해주세요", pattern: {
          value: /^(\d{2,3})(\d{3,4})(\d{4})$/,
          message: "올바른 휴대폰 번호를 입력해주세요",
        },
      })}></input>
      <span>{errors.phoneNumber?.message} </span>

      <button>제출하기</button>
      </PhoneForm>
    </div>
  );
}

export default App;
