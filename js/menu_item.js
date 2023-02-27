$(document).ready(function () {
  const menu = document.querySelectorAll(".menu_nav ul li");

  for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", run);
    let num = i;
    function run() {
      for (let j = 0; j < menu.length; j++) {
        menu[j].removeAttribute("class", "after");
        menu[j].style.color = "#cdcdcd";
      }
      this.setAttribute("class", "first");
      this.style.color = "#794310";
      hide_page(num);
    }
  }

  function hide_page(num) {
    for (let i = 0; i < 5; i++) {
      $(`#item_main_idx_${i}`).hide();
    }
    $(`#item_main_idx_${num}`).show();
  } // 페이지 전체 감추고 위에서 클릭한 메뉴의 페이지를 다시 보여줌

  //------------------------- 메뉴 이동
  let num = 0;
  let best_img = "";

  let src = [
    "/img/coffee/",
    "/img/latte/",
    "/img/frappe/",
    "/img/tea/",
    "/img/dessert/",
  ];

  for (let i = 0; i < 33; i++) {
    const rand = Math.floor(Math.random() * 10) + 1;
    let img_src = "";
    if (i < 6) {
      num = 0;
      img_src = src[0];
    } else if (i < 12) {
      num = 1;
      img_src = src[1];
    } else if (i < 19) {
      num = 2;
      img_src = src[2];
    } else if (i < 24) {
      num = 3;
      img_src = src[3];
    } else {
      num = 4;
      img_src = src[4];
    }
    // 페이지 스위치

    if (rand < 6) {
      best_img = "/img/other/best.png";
    } else {
      best_img = "";
    }
    // best 랜덤 출력 1~5

    if (num == 0 || num == 1 || num == 3) {
      let list = `<li class="menu_item">
          <div class="menu_item_cover" id="${i}"></div>
          <ul class="menu_item_ul" id="item_idx_${i}">
            <li><img src="${
              img_src + temp_menu[i] + ".jpg"
            }" class="menu_item_img"></li>
            <li style="font-size: 30px">${temp_menu[i]}</li>
            <li class="menu_item_price">
              <ul>
                <li>
                  <img src="${best_img}" class="menu_item_best_icon" />
                  <img src="/img/other/hot.png" class="hot_cold_icon" />
                  <p>${temp_price[i].toLocaleString("ko-KR") + "원"}</p>
                </li>
                <li>
                  <img src="/img/other/ice.png" class="hot_cold_icon" />
                  <p>
                    ${(temp_price[i] + 500).toLocaleString("ko-KR") + "원"}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </li>`;
      $("#menu_ul_idx_" + num).append(list);
    } else {
      let list = `<li class="menu_item">
          <div class="menu_item_cover" id="${i}"></div>
          <ul class="menu_item_ul" id="item_idx_${i}">
            <li><img src="${
              img_src + temp_menu[i] + ".jpg"
            }" class="menu_item_img"></li>
            <li style="font-size: 30px">${temp_menu[i]}</li>
            <li class="menu_item_price">
              <ul>
                <li>
                  <img
                    src="${best_img}"
                    class="menu_item_best_icon"
                    style="left: -63.5%"
                  />
                  <p>${temp_price[i].toLocaleString("ko-KR") + "원"}</p>
                </li>
              </ul>
            </li>
          </ul>
        </li>`;
      $("#menu_ul_idx_" + num).append(list);
    }
  }
  //---------------- 끝
});
