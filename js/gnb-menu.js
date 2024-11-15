window.addEventListener("load", () => {
  // 메뉴목록(li)
  const liList = document.querySelectorAll(".header-nav li ");

  function showFocus(_number) {
    liList.forEach((item, index, c) => {
      if (_number !== index) {
        //console.log("빨간색", index);
        item.classList.add("nonActive");
      } else {
        //console.log("검은색", index);
        item.classList.remove("nonActive");
      }
    });
  }

  function outFocus() {
    liList.forEach((item, index, c) => {
      item.classList.remove("nonActive");
    });
  }

  liList.forEach((item, index, c) => {
    //마우스 오버
    item.addEventListener("mouseenter", () => {
      // 선택된 번호를 전달해서 꾸미기
      showFocus(index);
    });

    //마우스 아웃
    item.addEventListener("mouseleave", () => {
      outFocus();
    });
  });
});
