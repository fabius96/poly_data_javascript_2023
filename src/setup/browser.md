---
layout: home
---

# 브라우저에 자바스크립트 코드 삽입
HTML 문서에 자바스크립트 코드를 삽입하여 실행을 합니다.

## 내부 스크립트
`<script></script>`테그를 통하여 자바스크립트 코드를 삽입합니다.

## 외부파일로 삽입하기
`<script>`테그의 src 속성을 통하여 외부의 스크립트 파일을 삽입합니다. 

### 자바스크립트 코드의 재사용
자바스크립트 코드를 외부로 작성해 두면, 여러 페이지에서도 동일한 코드를 삽입하여 사용을 할 수 있습니다.

### 네트워크 연결
외부의 자바스크립트는 HTML 문서가 로드가 될때 추가로 HTTP연결을 통하여 스크립트 리소스를 다운로드 받게 됩니다. 추가의 네트워크 연결이 발생이 되며, 스크립트 파일이 다운로드 되는 시간 지연이 발생합니다.  
