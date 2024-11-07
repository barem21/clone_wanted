/* 모두가 주목하고 있어요! */
window.addEventListener("load", function () {
  let perView = 5;
  const windowSize = window.innerWidth;
  //console.log(windowSize);

  if (windowSize < 768) {
    perView = 2.6;
  } else if (windowSize < 960) {
    perView = 3;
  } else if (windowSize < 1600) {
    perView = 4;
  } else {
    perView = 5;
  }

  const hotSwiper = new Swiper(".list-favorite", {
    slidesPerView: perView,
    spaceBetween: 20,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });
});

window.addEventListener("resize", function () {
  let perView = 5;
  const windowSize = window.innerWidth;
  //console.log(windowSize);

  if (windowSize < 768) {
    perView = 2.6;
  } else if (windowSize < 960) {
    perView = 3;
  } else if (windowSize < 1600) {
    perView = 4;
  } else {
    perView = 5;
  }

  const hotSwiper = new Swiper(".list-favorite", {
    slidesPerView: perView,
    spaceBetween: 20,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });
});

/*
###################################################

###################################################
*/

/* 지금 주목할 소식 */
window.addEventListener("load", function () {
  let perViewHot = 3;
  const windowSize = window.innerWidth;
  //console.log(windowSize);

  if (windowSize < 768) {
    perViewHot = 1.7;
  } else if (windowSize < 960) {
    perViewHot = 1.8;
  } else if (windowSize < 1600) {
    perViewHot = 2.4;
  } else {
    perViewHot = 3;
  }

  const hotSwiper = new Swiper(".list-nowhot", {
    slidesPerView: perViewHot,
    spaceBetween: 20,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });
});

window.addEventListener("resize", function () {
  let perViewHot = 3;
  const windowSize = window.innerWidth;
  //console.log(windowSize);

  if (windowSize < 768) {
    perViewHot = 1.7;
  } else if (windowSize < 960) {
    perViewHot = 1.8;
  } else if (windowSize < 1600) {
    perViewHot = 2.4;
  } else {
    perViewHot = 3;
  }

  const hotSwiper = new Swiper(".list-nowhot", {
    slidesPerView: perViewHot,
    spaceBetween: 20,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });
});

/*
###################################################

###################################################
*/

/* 테마로 살펴보는 회사/포지션 */
window.addEventListener("load", function () {
  let perViewTheme = 4;
  const windowSize = window.innerWidth;
  //console.log(windowSize);

  if (windowSize < 768) {
    perViewTheme = 2;
  } else if (windowSize < 960) {
    perViewTheme = 3;
  } else if (windowSize < 1600) {
    perViewTheme = 4;
  } else {
    perViewTheme = 4;
  }

  const hotSwiper = new Swiper(".list-theme", {
    slidesPerView: perViewTheme,
    spaceBetween: 20,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });
});

window.addEventListener("resize", function () {
  let perViewTheme = 4;
  const windowSize = window.innerWidth;
  //console.log(windowSize);

  if (windowSize < 768) {
    perViewTheme = 2;
  } else if (windowSize < 960) {
    perViewTheme = 3;
  } else if (windowSize < 1600) {
    perViewTheme = 4;
  } else {
    perViewTheme = 4;
  }

  const hotSwiper = new Swiper(".list-theme", {
    slidesPerView: perViewTheme,
    spaceBetween: 20,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });
});
/*
###################################################

###################################################
*/

/* 요즘 뜨는 포지션 */
window.addEventListener("load", function () {
  let perViewPosition = 5;
  const windowSize = window.innerWidth;
  //console.log(windowSize);

  if (windowSize < 768) {
    perViewPosition = 2.6;
  } else if (windowSize < 960) {
    perViewPosition = 3;
  } else if (windowSize < 1600) {
    perViewPosition = 4;
  } else {
    perViewPosition = 5;
  }
  const hotSwiper = new Swiper(".list-position", {
    slidesPerView: perViewPosition,
    spaceBetween: 20,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });
});

window.addEventListener("resize", function () {
  let perViewPosition = 5;
  const windowSize = window.innerWidth;
  //console.log(windowSize);

  if (windowSize < 768) {
    perViewPosition = 2.6;
  } else if (windowSize < 960) {
    perViewPosition = 3;
  } else if (windowSize < 1600) {
    perViewPosition = 4;
  } else {
    perViewPosition = 5;
  }
  const hotSwiper = new Swiper(".list-position", {
    slidesPerView: perViewPosition,
    spaceBetween: 20,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });
});
