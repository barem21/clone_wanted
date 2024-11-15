window.addEventListener("load", () => {
  // 메뉴목록(li)
  const liList = document.querySelectorAll(".header-nav li ");

  function showFocus(_number) {
    console.log("전달된 값 ", _number);
    liList.forEach((item, index, c) => {
      if (_number === index) {
        console.log("빨간색", index);
      } else {
        console.log("검은색", index);
      }
    });
  }

  liList.forEach((item, index, c) => {
    item.addEventListener("mouseenter", () => {
      // 선택된 번호를 전달해서 꾸미기
      showFocus(index);
    });
  });
});
