# Nwitter (트위터 클론)

Nwitter는 React와 Firebase를 사용하여 만든 트위터 클론 프로젝트입니다. 실시간 업데이트, 인증, 이미지 업로드 등의 기능을 제공합니다.

## 주요 기능

- 🔐 인증 시스템 (이메일/비밀번호, 구글, 깃허브)
- ✍️ Nweet(트윗) 작성 및 게시
- 🖼️ 이미지 업로드 지원
- 🔄 실시간 업데이트
- 👤 사용자 프로필
- 🎨 반응형 디자인

## 기술 스택

- React
- Firebase
  - Authentication
  - Firestore Database
  - Cloud Storage
- React Router
- Font Awesome Icons

## 시작하기

### 필수 요구사항

- Node.js
- npm 또는 yarn
- Firebase 계정

### 설치 방법

1. 저장소 클론
```bash
git clone https://github.com/sdcomms4227/nwitter.git
cd nwitter
```

2. 의존성 패키지 설치
```bash
npm install
```

3. Firebase 프로젝트 설정
- 루트 디렉토리에 `.env` 파일 생성
- Firebase 설정 정보 추가:
```
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
```

4. 개발 서버 실행
```bash
npm start
```

## 배포

GitHub Pages로 배포가 가능합니다:

```bash
npm run deploy
```

## 프로젝트 구조

```
src/
├── components/     # 재사용 가능한 컴포넌트
├── routes/        # 페이지 컴포넌트
├── fbase.js       # Firebase 설정
└── App.js         # 메인 애플리케이션 컴포넌트
```

## 기여 방법

1. 저장소를 포크합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치를 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다. 자세한 내용은 LICENSE 파일을 참조하세요.

## 감사의 말

- Thanks To 니꼬.