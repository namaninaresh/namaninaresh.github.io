var removeActiveClasses = function () {
  document.querySelectorAll(".nav-item").forEach((e) => {
    e.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  removeActiveClasses();
  document.querySelectorAll(".nav-item")[id].classList.add("active");
};

document.querySelectorAll(".nav-item")[0].classList.add("active");
onscroll = function () {
  let scrollPostion = document.documentElement.scrollTop;

  if (scrollPostion === 0 && scrollPostion < 500) addActiveClass(0);
  else if (scrollPostion >= 500 && scrollPostion < 2000) addActiveClass(1);
  else if (scrollPostion > 2000 && scrollPostion < 2500) addActiveClass(2);
  else if (scrollPostion > 2500 && scrollPostion < 4000) addActiveClass(3);
  else if (scrollPostion > 4000) addActiveClass(4);
};
