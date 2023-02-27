//커피, 라뗴, 프라페, 티, 디저트

const coffee_name = [
  "에스프레소",
  "아메리카노",
  "카페라떼",
  "카푸치노",
  "카라멜마끼야또",
  "카페모카",
];

const coffee_price = [3500, 3800, 3800, 4000, 4000, 4000];

const latte_name = [
  "그린티라떼",
  "블랙티라떼",
  "오곡라떼",
  "팥라떼",
  "고구마라떼",
  "바닐라라떼",
];

const latte_price = [5000, 5000, 5000, 5000, 5000, 5000];

const frappe_name = [
  "그린티프라페",
  "오레오프라페",
  "초콜릿프라페",
  "카라멜프라페",
  "딸기프라페",
  "망고프라페",
  "모카프라페",
];

const frappe_price = [5000, 5000, 5000, 5000, 5000, 5000, 5000];

const tea_name = ["그린티", "허브티", "밀크티", "아이스티", "페퍼민트티"];

const tea_price = [4000, 4000, 4000, 4000, 4000];

const dessert_name = [
  "케이크",
  "허니 브레드",
  "머핀",
  "프렌치토스트",
  "타라미수",
  "마카롱",
  "허니볼",
  "베이글",
  "파니니",
];

const dessert_price = [5000, 5000, 3500, 4000, 5000, 3000, 3000, 4500, 4000];

//-------------------------
let temp_menu = [
  ...coffee_name,
  ...latte_name,
  ...frappe_name,
  ...tea_name,
  ...dessert_name,
];

let temp_price = [
  ...coffee_price,
  ...latte_price,
  ...frappe_price,
  ...tea_price,
  ...dessert_price,
];
//-------------------------
