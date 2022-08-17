# Today's Improvements

## ToDoList 
    1. FIXME: 하트 클릭 시, 모든 하트에 적용된다 
    2. TODO: post 검색 
    3. TODO: vue 찾아서 vuex 로 개선하기
    
    * 각각의 기능 추가 후, 기존의 기능들 매번 테스트 하기 - 번거로워지면 테스트케이스 작성하기
    * 현재 Tensorflow.js 이미지 분류 기능 사용하여 태그 자동 등록 되는데, 
    추 후, post 상세 페이지 이동 시, 게시물을 하단에 추천하는 posts 를 나타내게 구현하기
    * 로그인 하지 않은 user 라도 학습 노트 간단하게 제목, 내용 볼 수 있게 한다면? (...기능)

### 2022/08/17
    1. [v] SignupForm.vue, LoginForm.vue
      - email 형식에 맞게 입력하면 오류 문구 제거되도록 기능 구현
    2. [v] $ npm audit fix 
    3. [v] 비밀번호 암호화(*)하여 나타내기
    4. [v] 동일 id로 회원가입 시, 무한로딩 오류 수정 및 불필요한 css 제거
    5. [v] 회원가입 성공 후, 로그인 실패 시, 회원가입 성공메시지와 로그인 실패 메시지를 출력하는 오류 수정 

### 2022/04/22
    1. [v] 시간에 필터 적용

### 2022/04/19
    1. [v] 로딩스피너 적용 - 학습 노트, 회원가입, 로그인
    2. [v] post - get, put

### 2022/04/18
    1. [v] posts - create, delete
    2. css 1차 정리
    3. [v] api/index - auth, posts 로 분류

### 2022/04/17
    1. [v] 새로고침 시, 로그인 풀림
      - 브라우저 저장소 활용하여 새로고침 시 로그인 풀림 방지
      - 로그아웃 시, 브라우저 저장소에 데이터 삭제하여 로그인 풀림

### 2022/04/16
    1. [v] 컴포넌트 구조 변경
    2. [v] 인증된 user 만 post 를 사용할 수 있게 authenticateUser 미들웨어 적용
    3. [v] posts - read api 요청 기능 (특정 user 의 전체 post 를 조회 한다)
      - UI 개선
    4. [v] posts page 로딩 시, spinner 기능 구현
      - 로딩 
    5. 개선
      - 로그인 한 user 만 학습 노트를 작성하실 수 있게 한다
      - 로그아웃 시 TIL 기록 볼 수 있는점을 개선
      - 더보기 수정
      - 테스트: 게시물 공유 컴포넌트 반응형 구현

### 2022/04/15
    1. [v] Main Page 만들기
        - vuestagram, til(testing) 박스 만들고, 링크 구현

### 2022/04/14
    1. [v] 로그인 한 이메일 주소의 @ 앞 단어를 로그인 한 username 으로 지정하여 navbar 에 설정
    2. [v] logout 구현

### 2022/04/13
    1. 로그인 후 메인페이지로 이동 시, navbar 가 중복 출력되는 component 구조를 개선하기
      - [v] UI 개선, CSS 변경
      - [v] Section component 의 navbar 와 post 를 분리
      - [v] navbar 동작 확인
      - [v] post 동작 확인
      - 이 전: navbar 와 post 를 하나의 컴포넌트에 구현
      - 이 후: NOTE: navbar 의 각각의 요소를 컴포넌트로 구현하며 router-view 적용했고, 
        페이지별로 딱 그 컴포넌트만 가져올 수 있게 설정할 수 있었다.
    2. [v] main page(post page) 적용하기
      - [v] router
    3. [v] 회원가입 후 로그인 화면으로 이동 시, 회원가입 성공 메시지를 로그인 화면에서 출력
      
### 2022/04/12
    1. [v] 회원가입 기능 개선
      - 에러 메시지 받을 수 있게 개선하고 처리
    2. [v] 로그인 기능 구현
      - [v] username 을 email 형식에 맞게 validate 처리
      - [v] id && password 미입력 시, 로그인 버튼 disabled
    3. [v] 회원가입 기능 추가
      - [v] username 을 email 형식에 맞게 validate 처리
      - [v] id && password 미입력 시, 회원가입 버튼 disabled

### 2022/04/11
    1. [v] 로그인 구조 생성
      - client: api 요청 -> router 설정 -> views/ -> loginPage component

### 2022/04/10
    1. [v] 회원가입 로직 처리
      - 분기처리(빈입력값 / 동일id / 성공)하여 메시지를 출력
    2. [v] 회원가입 시, 필수 요소에 *required 마킹
    3. [v] api 최적화
    4. [v] .env, .env.development, .env.production 분리하여 적용

### 2022/04/09
    1. [v] SignupForm.vue - css 적용하기
        - bootstrap .btn 와 common.css 의 .btn 충돌 해결하기
        - 임시로 .btn 을 .signupBtn 으로 변경 

### 2022/04/08
    1. [v] components, views 구조로 변경하여 코드를 분리
    2. [v] client: 회원가입 api 요청 로직 작성하기
        - [v] signup form page 작성
        - [v] api/signup 생성 및 작성
        - [v] css 로 꾸미기

### 2022/04/07
    1. [v] eslint, prettier, vscode-eslint-Validate-settings.json 설정
    2. [v] 절대 경로 설정
    3. [v] 회원 가입 완성하기
      - [v] client: 회원가입 UI 완성
      - [v] server: 회원가입 api 생성
      - [v] client: 회원가입, 로그인 router 설정

### 2022/04/04
    1. [v] 반응형 웹 만들기
    2. [v] 버거 만들기(로고 / 홈, 업로드, 검색 버튼 / 로그인, 회원 가입)

### 2022/04/03
    1. [v] 코드 정리 
    2. [v] navbar 구조 변경
    3. [v] fortawesome 설정

### 2022/04/02
    1. [v] 기능 업데이트를 위한 준비
      - home icon
      - search icon
    2. [v] 이모티콘 위치 변경하기
      - step 1 의 그림 안에 있는 cancel, back, forward 버튼을 상단으로 옮기기
    3. [v] upload 시, 대기 시간을 나타내기 위한 로딩 기능
      - spinner

### 2022/04/01
    1. [v] 기존 이미지로 된 로고를 폰트로 변경
    2. [v] 태그 내용에 그라데이션 적용하기
    3. [v] 게시물 태두리에 padding 작업하여 가시성 높이기
    4. [v] + 버튼 이동하기 
      - 환영 글에 설명 우측에 표시하기

### 2022/03/30
    1. [v] 게시물에 좋아요 클릭 시, 하트 / 빈하트로 나타내는 기능 구현
      - [] 하트 클릭 시, 모든 하트에 적용되는 문제점 해결하기
    2. [v] ionicons 으로 이모티콘 개선

### 2022/03/27
    1. [v] 공유 페이지 백그라운드 cursor 추가

### 2022/03/24
    1. [v] 배포 사이트 업로드 안되는 문제점 해결
    2. [v] 업로드 시, 잠깐 나타나는 이미지를 나타나지 않게 display: none 또는 hidden 처리.
    3. [v] 게시물 공유 페이지를 전체 페이지를 덮도록 수정

### 2022/03/23
    1. [v] 태그 기능 추가
      - [v] 업로드 한 이미지를 Tensorflow.js 적용하여 가장 높은 확률의 name 을 태그로 등록한다.
    
    2. Section 의 post.image 기능 수정
      - [v] local 에서는 이미지가 적용이 되는데, 실 서버에서는 이미지가 잘못 등록되는 에러 해결하기   

### 2022/03/22
    1. [v] 하단 더보기 버튼 vue3 bootstrap 설정하여 스타일 변경
      - [v] 게시물 10개 늘리고, 더보기 클릭 시, 3개씩 게시물 가져오기. 
      - [v] content 수정

    2. [v] 상단 Vuestagram logo 넣기
    3. [v] Header 만들기
