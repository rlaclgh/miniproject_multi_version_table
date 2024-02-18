## 설명

게시물 정보를 snapshot으로 관리해 수정 이전의 정보를 보관할 수 있는 프로젝트입니다. 
1. 게시물 테이블을 snapshot으로 관리합니다.
2. 수정 시 테이블을 수정하지 않고 snapshot을 생성하므로 이전 정보를 보관할 수 있습니다.


## 실행결과

1. erd
   <img width="600px" alt="miniproject_multi_version_table_erd" src="https://github.com/rlaclgh/miniproject_multi_version_table/assets/46914232/050708be-be51-483c-806e-edebc2b1993a">   

2. 실행 gif

   <img width="600px" src="https://github.com/rlaclgh/miniproject_multi_version_table/assets/46914232/b2bd7ff4-5ea4-445e-bc18-c3dd1f07b3e6">   

## 실행방법

```

docker compose up -d --build

```

## 기술스택

- client: Nextjs
- server: Spring boot
- db : Postgre
