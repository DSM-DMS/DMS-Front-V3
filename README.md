# DMS Front-end 입니다.

## REACT, Redux를 기본으로 사용하고 있습니다.

### 배포하기 전 준비사항

- yarn add global javascript-obfuscator 를 통해 obfuscator 설치 후 yarn build 시 난독화된 코드로 빌드파일 생성됨.

### 배포 설명

- aws cli 설치 후
- `aws configure --profile dms-front`로 access키, secret 키 notion에 있는거 입력

- yarn deploy
