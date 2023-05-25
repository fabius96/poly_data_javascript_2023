---
layout: home
---

# 개발 환경 설정
자바스크립트 프로그램을 실행하는 환경을 준비 합니다.

## 브라우저
사실 자바스크립트를 실행하기 위한 별도의 환경은 존재하지 않습니다. 컴퓨터에 브라우저만 설치되어 있다면, 브라우저는 자체적으로 자바스크립트를 해석하기 때문 입니다.

### 웹 브라우저 콘솔
크롬과 같은 최신의 브라우저는 자체적으로 개발자 도구를 가지고 있습니다. 개발자도구의 콘솔에서 직접 자바스크립트 코드를 작성하여 실행할 수 있습니다.

* [console 활성화](/setup/console)

### HTML 문서 삽입
HTML 문서에서 `<script></script>`테그 안에 코드를 삽입하여 실행할 수 있습니다. 

* [내부 스크립트](/setup/browser)
* [외부파일로 삽입하기](/setup/browser)


## nodejs로 직접 실행행
브라우저 외에 직접 자바스크립트 코드를 해석하고 실행을 할 수 있는 Nodejs가 등장 했습니다. 이를 통하여 자바스크립트도 서버에서 동작하는 백엔드 프로그래밍이 가능하게 되었습니다.

* [nodejs 대화형 모드](/setup/nodejs)
* [스크립트 실행](/setup/nodejs)


## 코드 작성
자바스크립트를 코드를 작성하는 방법에 대해서 알아 봅니다.

### 텍스트 편집기
대부분의 프로그래밍 언어는 텍스트 언어를 기반으로 하기 때문에, 문서를 작성할 수 있는 메모장이나 편집기가 필요로 합니다.  
최신에는 vscode를 많이 사용합니다.


### 문자셋
자바스크럽트 프로그램은 유니코드 문자로 작성합니다.

> 유니코드란? 유니코드는 알파벳. 숫자, 기호는 물론 한국어, 일본어 같은 전 섀계의 문지를 포함한 문자 제계입니다.

### 대문자와 소문자
자바스크립트 프로그램은 알파벳 대문자와 소문지를 구별합니다. 

### 토큰과 공백 문자
프로그래밍 언어는 코드를 실행하기 위해서 파싱이라는 어휘를 분석합니다. 파싱을 하기위하서는 분리 토큰이 필요 합니다.

### 코딩 스타일
코드 가독성을 높이는 방법으로 코딩 스타일을 준수 합니다.

### 문장
자바스크립트 문장은 세미콜론(;)으로 끝납니다.  

세미콜론을 생략할때도 있지만,  자바스크럽트 엔진이 자동으로 세미콜론을 추가합니다.

### 코드블럭
문장 여러 개를 중괄호(`{}`)로 감싼 코드를 복합문 또는 블록문이라고 합니다.

복합문 끝에는 세미콜론을 붙이지 않습니다.
복합문의 중괄호 안에 포함된 문장은 중괄호를 기준으로 들여쓰기를 할 수 있습니다.