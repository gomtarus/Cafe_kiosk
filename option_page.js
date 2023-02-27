$(document).ready(function () {
  let selcet_item_price = 0; //가격
  let selcet_item_idx = 0; //id
  let selcet_item_count = 1; //개수

  let not_option_count = 0;
  //옵션 선택불가

  let src = [
    "./img/coffee/",
    "./img/latte/",
    "./img/frappe/",
    "./img/tea/",
    "./img/dessert/",
  ];

  $(".menu_item").on("click", (e) => {
    let num = e.target.id; //id
    selcet_item_name = temp_menu[num];
    selcet_item_price = temp_price[num];
    selcet_item_idx = num;

    if (num < 6) {
      img_src = src[0];
    } else if (num < 12) {
      img_src = src[1];
    } else if (num < 19) {
      img_src = src[2];
    } else if (num < 24) {
      img_src = src[3];
    } else {
      img_src = src[4];
    }

    $(".option_item_img").attr("src", img_src + temp_menu[num] + ".jpg");

    if (num < 12) {
      not_option_count = 0;
    } else if (num < 19) {
      not_option_count = 1;
    } else if (num < 24) {
      not_option_count = 0;
    } else {
      not_option_count = 2;
    } // 디저트 판별

    //-------------------------------------------
    if (not_option_count == 1 || not_option_count == 2) {
      $("div[class=get_id_wrap]").each(function () {
        let id = $(this).attr("id");
        if ($(this).attr("id") < 5) {
          $(this).addClass("not_option");
        }
      }); // 디저트 또는 프라페일 때

      //-----------------------------------------------
      $("#item_btn_idx_0").removeClass("active_click");
      $("#item_btn_idx_0").css("pointer-events", "none");
      $("#item_btn_idx_1").css("pointer-events", "none");
      //-----------------------------------------------
      $("#item_btn_idx_2").removeClass("active_click");
      $("#item_btn_idx_2").css("pointer-events", "none");
      $("#item_btn_idx_3").css("pointer-events", "none");
      $("#item_btn_idx_4").css("pointer-events", "none");
    }

    //-------------------------------------------
    $("#option_item_name").text(temp_menu[num]);
    $("#option_item_price").text(
      temp_price[num].toLocaleString("ko-KR") + "원"
    );
    $("#option_item_count").text("1");
    //아이템 개수
    $(".option_page_wrap").show();
  });

  // 선택된 아이템으로 옵션 창 열기
  //-----------------------------------------------------------
  let place_chk = 0; // 장소 선택 여부

  let order_item_list = []; //리스트에 들어간 주문목록

  let option_arr = [0, 500, 0, 300, 500];
  let option = [0, 0];
  let option_total = 0;
  // 옵션 가격

  let option_chk = [0, 0, 0];
  //옵션 리스트에 넣을 값

  let list_count = 0;
  let type = 0; //뜨거운지 차가운지

  let temp_count = 0; // 중복 실행 방지

  $(".get_id_wrap").on("click", (e) => {
    let num = e.target.id;
    //--------------------------------------------------
    if (num == 0 || num == 1) {
      for (let i = 0; i < 2; i++) {
        $(`#item_btn_idx_${i}`).removeClass("active_click");
      }
      $(`#item_btn_idx_${num}`).toggleClass("active_click");
      //-------------------------------------------------
      if (num == 0) {
        type = 0;
        option_chk[0] = "HOT + 0원";
      } else {
        type = 1;
        option_chk[0] = "ICE + 500원";
      }
      option[0] = option_arr[num];
      //-------------------------------------------------
    } else if (num == 2 || num == 3 || num == 4) {
      for (let i = 2; i < 5; i++) {
        $(`#item_btn_idx_${i}`).removeClass("active_click");
        $(`#cup_img_${i}`).attr("src", "./img/other/cup.png");
        $(`#cup_size_${i}`).removeClass("active_cup_size");
      }
      $(`#item_btn_idx_${num}`).toggleClass("active_click");
      $(`#cup_img_${num}`).attr("src", "./img/other/cup_2.png");
      $(`#cup_size_${num}`).toggleClass("active_cup_size");

      //-------------------------------------------------
      if (num == 2) {
        option_chk[1] = "S + 0원";
      } else if (num == 3) {
        option_chk[1] = "M + 300원";
      } else {
        option_chk[1] = "L + 500원";
      }
      option[1] = option_arr[num];

      //-------------------------------------------------
    } else {
      for (let i = 5; i < 7; i++) {
        $(`#item_btn_idx_${i}`).removeClass("active_click");
        place_chk = 0;
      }
      $(`#item_btn_idx_${num}`).toggleClass("active_click");
      place_chk = 1;
    }

    //--------------------------------------------------
    if (num == 5) {
      option_chk[2] = "매장";
    } else {
      option_chk[2] = "포장";
    }

    //--------------------------------------------------
    option_total = option[0] + option[1];
    option_clac();

    //--------------------------------------------------
  });

  $(`#option_minus`).on("click", function () {
    if (selcet_item_count > 1) {
      selcet_item_count--;
      option_clac();
    }
  }); //빼기

  $(`#option_plus`).on("click", function () {
    selcet_item_count++;
    option_clac();
  }); //더하기

  let scroll_arr = []; //스크롤 배열
  let scroll = 0; // 처음은 0

  $("#order_add_btn").on("click", function () {
    if (place_chk == 0) {
      alert("장소를 선택해주세요.");
    } else {
      let num = selcet_item_idx;
      order_item_list.push(
        order_item_add(
          temp_menu[num],
          temp_price[num],
          selcet_item_count,
          option_total,
          total
        )
      );

      //------------------------------------------------
      if (list_count < 4) {
        scroll_arr.push(0);
      } else {
        scroll += 160;
        scroll_arr.push(scroll);
      }

      $("#order_list_main").animate({ scrollTop: scroll_arr[list_count] }, 100); // 스크롤 이동

      //------------------------------------------------
      $(".option_page_wrap").hide();
      order_list_add_item(num); // 주문 정보
      order_result(); // 주문개수, 주문금액
      order_info_add(list_count); // 옵션
      list_count++;
      clear_option_page();

      //------------------------------------------------
      $(".order_item_cal_btn_1").on("click", (e) => {
        if (temp_count == 0) {
          temp_count = 1;
          let id = e.target.id;
          let count = order_item_list[id].pcs;
          let price = order_item_list[id].price;
          let option = order_item_list[id].option_total;
          let total = order_item_list[id].total;
          //------------------------------------------
          order_item_list[id].pcs = count += 1;
          //------------------------------------------
          total = (price + option) * count;
          order_item_list[id].total = total;
          //------------------------------------------
          $(`#order_item_pcs_${id}`).text(count); //개수
          $(`#order_item_price_${id}`).text(
            total.toLocaleString("ko-KR") + "원"
          ); //금액
          //------------------------------------------
          order_result();
          //------------------------------------------
          setTimeout(() => {
            temp_count = 0;
          }, 100);
        }
      }); // 더하기

      $(".order_item_cal_btn").on("click", (e) => {
        if (temp_count == 0) {
          temp_count = 1;
          let id = e.target.id;
          let count = order_item_list[id].pcs;
          let price = order_item_list[id].price;
          let option = order_item_list[id].option_total;
          let total = order_item_list[id].total;
          $(`#order_item_idx_${id}`).remove();
          if (count > 1) {
            //------------------------------------------
            order_item_list[id].pcs = count -= 1;
            //------------------------------------------
            total = (price + option) * count;
            order_item_list[id].total = total;
            //------------------------------------------
            $(`#order_item_pcs_${id}`).text(count); //개수
            $(`#order_item_price_${id}`).text(
              total.toLocaleString("ko-KR") + "원"
            ); //금액
            //------------------------------------------
          } else {
            $(`#order_item_list_${id}`).remove();
            order_item_list[id].pcs = 0;
            order_item_list[id].total = 0;
          }
          order_result();
          //------------------------------------------
          setTimeout(() => {
            temp_count = 0;
          }, 100);
        }
      }); //빼기
      //----------------------------------------------

      $(".order_item_del_btn").on("click", (e) => {
        if (temp_count == 0) {
          temp_count = 1;
          let id = e.target.id;
          console.log(id);
          //------------------------------------------
          if (confirm(order_item_list[id].name + "을(를) 삭제합니다.")) {
            $(`#order_item_list_${id}`).remove();
            order_item_list[id].pcs = 0;
            order_item_list[id].total = 0;
          }
          order_result();
          //------------------------------------------
          setTimeout(() => {
            temp_count = 0;
          }, 100);
        }
      });
    }
  });

  function option_clac() {
    total =
      selcet_item_price * selcet_item_count + option_total * selcet_item_count;
    // 전체 가격
    $("#option_item_price").text(total.toLocaleString("ko-KR") + "원");
    $("#option_item_count").text(selcet_item_count);
  } // 옵션 안에서 +, - 버튼으로 계산

  function order_result() {
    let count = 0;
    let price = 0;
    for (let i = 0; i < order_item_list.length; i++) {
      count += order_item_list[i].pcs;
      price += order_item_list[i].total;
    }
    $("#item_count").text(count + "개");
    $("#total_price").text(price.toLocaleString("ko-KR") + "원");
  }

  $("#order_cancel_btn").on("click", function () {
    if (confirm("주문을 취소하시겠습니까?")) {
      $(".option_page_wrap").hide();
      clear_option_page();
    }
  });

  function order_item_add(name, price, pcs, option_total, total) {
    let item = {
      name: name,
      price: price,
      pcs: pcs,
      option_total: option_total,
      total: total,
    };
    return item;
  } //이름, 가격, 개수, 옵션금액, 전체금액

  function clear_option_page() {
    selcet_item_count = 1; // 개수
    place_chk = 0;
    type = 0;
    total = 0;
    option = [0, 0];
    option_total = 0;
    option_chk = [0, 0, 0];
    //-------------------------------------
    for (let i = 0; i < 7; i++) {
      if (i < 3) {
        $(`#item_btn_idx_${i}`).removeClass("active_click");
      } else if (i < 6) {
        $(`#item_btn_idx_${i}`).removeClass("active_click");
        $(`#cup_img_${i}`).attr("src", "./img/other/cup.png");
        $(`#cup_size_${i}`).removeClass("active_cup_size");
      } else {
        $(`#item_btn_idx_${i}`).removeClass("active_click");
      }
    }
    //--------------------------------------------------
    $("#item_btn_idx_0").addClass("active_click");
    $(".get_id_wrap").removeClass("not_option");

    $("#item_btn_idx_0").css("pointer-events", "auto");
    $("#item_btn_idx_1").css("pointer-events", "auto");
    $("#item_btn_idx_2").css("pointer-events", "auto");
    $("#item_btn_idx_3").css("pointer-events", "auto");
    $("#item_btn_idx_4").css("pointer-events", "auto");

    $(`#item_btn_idx_2`).addClass("active_click");
    $(`#cup_img_2`).attr("src", "./img/other/cup_2.png");
    $(`#cup_size_2`).addClass("active_cup_size");

    //-------------------------------------------------*/
  } //옵션 페이지 초기화

  function order_list_add_item(idx) {
    let num = idx;
    let type_icon = "";

    if (num < 6) {
      img_src = src[0];
    } else if (num < 12) {
      img_src = src[1];
    } else if (num < 19) {
      img_src = src[2];
    } else if (num < 24) {
      img_src = src[3];
    } else {
      img_src = src[4];
    }

    if (not_option_count == 0) {
      if (type == 0) {
        type_icon = "./img/other/hot.png";
      } else {
        type_icon = "./img/other/ice.png";
      }
    } else if (not_option_count == 1) {
      type_icon = "./img/other/ice.png";
    } else {
      type_icon = "./img/other/cookies.png";
    }

    //--------------------------------------------
    let list = `<li id="order_item_list_${list_count}">
    <div class="order_info_main">
      <div class="order_info_box" style="width: 120px">
        <img src="${
          img_src + temp_menu[num] + ".jpg"
        }" class="order_item_img" />
      </div>
      <div class="order_info_box" style="width: 300px">
        <p class="order_item_name">${temp_menu[num]}</p>
        <div class="price_wrap">
          <img src="${type_icon}" class="order_item_type" />
          <p class="order_item_price" id="order_item_price_${list_count}">${
      total.toLocaleString("ko-KR") + "원"
    }</p>
        </div>
      </div>
      <div
        class="order_info_box"
        style="width: calc(100% - (120px + 300px))"
      >
        <img
          src="./img/other/delete.png"
          class="order_item_del_btn"
          id="${list_count}"
        />
        <div class="order_cal_wrap">
          <img
            src="./img/other/minus.png"
            class="order_item_cal_btn"
            style="float: left"
            id ="${list_count}"
          />
          <p class="order_pcs" id="order_item_pcs_${list_count}">${selcet_item_count}</p>
          <img
            src="./img/other/plus.png"
            class="order_item_cal_btn_1"
            style="float: right"
            id ="${list_count}"
          />
        </div>
      </div>
    </div>
    <div class="order_option_info">
      <ul id="option_list_${list_count}"></ul>
    </div>
  </li>`;
    $("#order_list_ul").append(list);
    //--------------------------------
  }
  //--------------------------------------------------

  function order_info_add(num) {
    for (let i = 0; i < 3; i++) {
      if (option_chk[i] != 0) {
        let list = `<li>${option_chk[i]}</li>`;
        $(`#option_list_${num}`).append(list);
      }
    }
  }

  $("#reset_order_list_btn").on("click", function () {
    if (confirm("모든 주문이 초기화됩니다.")) {
      $("#order_list_ul").children().remove();
      clear_option_page();
      order_result();
    }
  });

  //------------------------------------------------- 스크립트 끝
});
