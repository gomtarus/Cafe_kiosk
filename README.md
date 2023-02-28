# 카페 키오스크
● HTML, CSS, JavaScrit, jQuery로 구현한 웹 사이트 입니다.<br>
● 메뉴 선택, 추가, 삭제, 주문 금액, 주문 개수 계산 등 키오스크의 핵심 기능을 구현하였습니다.<br>
● 가로형 키오스크 시스템으로 16:9 해상도를 기준으로 제작되었습니다.<br>
# 화면 설명 #
![Layer 10](https://user-images.githubusercontent.com/118651919/221744979-80691d78-121e-4d8a-829c-064a7db63524.png)

### 메인 <br>

1. 메뉴 탭<br>
   - 각 메뉴 탭에 따라 메뉴가 바뀝니다.<br><br> 
2. 메뉴 카드<br>
   - 메뉴의 정보(이름, 가격)가 담겨있습니다.
   - 메뉴 클릭 시 옵션 페이지가 열립니다.<br><br> 
3. 주문 초기화<br>
   - 현재 주문 리스트에 있는 모든 아이템이 삭제됩니다.<br><br>
4. 주문 리스트<br>
   - 메뉴를 클릭하여 최종적으로 옵션선택 시 리스트에 추가됩니다.
   - 메뉴 리스트에서는 추가된 메뉴의 개수 및 가격, 옵션 여부를 확인 할 수 있습니다.
   - 추가된 아이템을 추가, 삭제 할 수 있습니다.
   - 리스트에 추가된 메뉴의 개수 및 금액은 동적으로 계산되어 결과가 나옵니다.
   - 메뉴 추가 시 4개 이상이면 스크롤이 생성되며 scrolltop을 통해 자동으로 최종추가된 메뉴로 스크롤이 이동합니다.<br><br>
   
![Layer 4](https://user-images.githubusercontent.com/118651919/221746205-fca94888-43c1-4f6c-adbd-9c736182c22a.png)<br><br>
![Layer 11](https://user-images.githubusercontent.com/118651919/221745895-b2bd6535-ffb0-4a8b-b417-65f100b46c16.png)<br>

### 옵션 페이지 <br>

1. 메뉴 정보<br>
   - 이름 및 금액, 개수가 표시됩니다.
   - -, + 버튼을 통해 아이템을 추가 할 수 있습니다.
   - 옵션 선택과 연동되며 종류에 따라 최종 가격이 동적으로 변경됩니다.<br>
     ex). 원본가걱 4000, 4개 - > 얼음 +500, 사이즈 M +300 -> 4800 * 4 = 19200<br> 
     원본가걱 4000, 4개 - > 얼음 +500, 사이즈 L +500 -> 5000 * 4 = 20000<br>
     
2. 옵션 선택<br>
   - 종류(핫, 아이스), 사이즈, 장소 선택이 가능합니다.
   - 옵션에 따라 가격이 변동됩니다.<br><br>
   
3. 선택 여부
   - 핫, 아이스 메뉴는 커피, 라떼, 티만 가능합니다.<br>
   - 프라페는 종류 선택 불가, 디저트는 종류 및 사이즈 선택 불가로 옵션 페이지에서 비 활성화 되어 선택이 금지됩니다.<br><br>

### 🌍 [카페 키오스크](https://gomtarus.github.io/Cafe_kiosk/main.html)
