- gh-pages 를 사용한 웹페이지 생성
- Link : https://eovhdnjawm1.github.io/factoryunicorn/

---

1. GlobalStyled Components 사용

2. styled components 사용

3. React Router 사용

- Route, Link 등 사용하여 페이지 구분

4.  Redux 사용

- BASE_URL을 state로 사용
- 추가 URL을 dispatch 받아 사용하려고 했으나 통신 우선순위가 밀려 사용 철회
- user의 상태값을 저장 및 추가 기능 생성 ( API 통신이 아닌 localStorage 사용 가능 )

5. react hook form 사용

- 각 화면 Input, form에 사용하여 에러 핸들링 및 관리

---

## 그 외

- 고객정보 입력 시 문의 하기 탭으로 자동 이동
- 기존 문의 입력 시 모든 글자 개별적으로 오브젝트를 생성하고 있어 message Object로 변경
- 문의정보 저장 request 파라미터가 문자열로 지정되어야만 post 작동

## 건의사항

- 고객정보와 문의정보를 따로 보관하기 보다 하나로 통합하는 것이 좋아보입니다.
- 현재 문의 정보에서 문의를 등록하면 API 통신과 uid를 생성하는 작업이 진행되는데 유저의 이름과 번호는 다른 url에 있어 문제가 발생할 여지가 있습니다.

- 고객정보와 문의정보 API를 통합한 후 고객의 문의 사항을 확인할때 uid가 아닌 휴대폰 번호로 데이터를 불러올 수 있다면 사용자 경험에서도 굉장히 편할 것 같습니다.
