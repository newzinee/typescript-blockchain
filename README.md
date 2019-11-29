# typescript-blockchain
노마드코더의 Typescript로 블록체인 만들기

https://academy.nomadcoders.co/

## 1,2 

준비 

> yarn init 

typescript 설치

> yarn add typescript 

tsconfig.json을 만들고, index.ts만들고 아래 명령어 실행 

명령어

> tsc 

위 명령어는 ts파일(현재는 index.ts만 있음)에 있는 코드를 컴파일해서 index.js, index.js.map을 만들어줌. 

만약 내가 yarn start 명령어로 index.ts 컴파일을 하고싶다면, package.json에 가서 script에 넣어줘
yarn start를 입력하면 node에서 index.js가 실행됨.
하지만 먼저, ts파일을 컴파일 해야해. (node는 typescript 이해 불가)
그래서 "prestart"에 "tsc"추가 

잘 되는지 실행

> yarn start 


## 3
생성한 함수 매개변수에 ? 를 추가하므로써, 선택적 변수라는 것을 표시할 수 있음. 


## 4
함수의 매개변수, 리턴값에 타입을 지정해줄 수 있음. 

tsc-watch 사용하기 

계속 yarn start 반복하기 귀찮으니까 소스코드가 수정되었을때 알아서 컴파일해줬으면 좋겠음. 

tsc-watch 설치
> yarn add tsc-watch --dev

package.json에 dependencies 추가되었는지 확인하고, scrips 수정 

tsc-watch: 실행, --onSuccess: 컴파일 잘 되면, 뒤에 있는 내용 실행

src, dist 폴더 생성

src: 소스 파일 저장할 폴더

dist: 컴파일된 파일 저장할 폴더


tsconfig.json

include를 src\\**\\*로 수정 (window. 맥은 src/\*\*/\*) .ts소스를 src로 이동.

compilerOption에 outDir추가해서 dist로 해줌. 이렇게 하면 컴파일된 파일이 dist로 들어감. 컴파일된 파일(index.js, index.js.map) 삭제하고 시작 yarn start 

(이때 만약에 에러난다면 $ yarn add typescript 한 다음 다시 시도)