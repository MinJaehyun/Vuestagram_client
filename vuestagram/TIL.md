# Today's Improvements

## ToDoList
    1. 로그인 기능 만들기
    2. 검색 기능 
      - 검색 하면 관련 내용을 posting   
    3. 하트 클릭 시, 모든 하트에 적용되는 문제점 해결하기 
    4. vue 를 찾아서 vuex 로 만들기
      - 적용할 대상 있는지 찾아보고 구현하기
    5. 컴포넌트 구조 그리기
    6. 모바일에서 업로드 후, 햄버거 메뉴 깨진다
    7. 게시물 공유 컴포넌트도 반응형 웹 적용하기
    8. 현재 tensorflow 의 이미지 분류 기능을 사용하여 태그가 자동으로 등록 되는데, 
    이 후 상세 페이지 만들어서 이동 시, 해당 게시물의 추천 게시물을 하단에 나타내게 기능 구현하기.
    9. 우선 - development, production 용 URL 구현하기

### 2022/04/09
    1. [v] SignupForm.vue - css 적용하기
        - bootstrap .btn 와 common.css 의 .btn 충돌 해결하기
        - 임시로 .btn 을 .signupBtn 으로 변경 
    2. [] 

### 2022/04/08
    1. [v] components, views 구조로 변경하여 코드를 분리
    2. [v] client: 회원가입 api 요청 로직 작성하기
        - [v] signup form page 작성
        - [v] api/signup 생성 및 작성
        - [] css 로 꾸미기

### 2022/04/07
    1. [v] eslint, prettier, vscode-eslint-Validate-settings.json 설정
    2. [v] 절대 경로 설정
    3. [] 회원 가입 완성하기
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