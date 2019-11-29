# typescript-blockchain
노마드코더의 Typescript로 블록체인 만들기

https://academy.nomadcoders.co/

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
하지만 먼저, ts파일을 컴파일 해야해. 
그래서 "prestart"에 "tsc"추가 

잘 되는지 실행

> yarn start 

