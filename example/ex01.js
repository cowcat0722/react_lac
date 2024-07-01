

// 1. 추가하기
let a = [1,2,3]; // 변수
let a1 = [...a,4];
console.log("이전",a);
console.log("이후",a1);

// 2. 추가하기 (특이한 것 - update)
let user = { name: "홍길동", age: 20};

let user1 = {...user, age:21};
console.log(user1);

// 3. 삭제하기
const b = [4,5,6]; // 상수 이 친구는 불변이다(주소가 불변이라는 것임)
let b1 = b.filter((item) => item !== 5); // 불변 이기 떄문에 remove를 하는 것이 아니라 filter로 복사하면서 삭제하는 것임
console.log(b1);

// 4. 검색하기
let userList = [
    { id: 1, name: "홍길동", age: 20 },
    { id: 2, name: "홍길동2", age: 21 },
    { id: 3, name: "홍길동3", age: 22 },
  ];
  let search = userList.filter((item) => item.age > 21);
  console.log(search);

// 5. 가공하기
let postList = [
    { id: 1, title: "제목1", content: "내용1"},
    { id: 2, title: "제목2", content: "내용2"},
    { id: 3, title: "제목3", content: "내용3"},
];

let post = postList.map((item) => ({
    ...item,
    content: "내용 변경" ,
}));
console.log(post);