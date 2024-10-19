// slider items
let sliderItem = Array.from(document.querySelectorAll("img"));
// get number of slide
let itemCount = sliderItem.length;
// set current slide
let currentSlide = 0;
// ==> get from html all element what i need <==
// get slider number
let slideNumber = document.querySelector(".slide-number");
slideNumber.innerText = `slide #${currentSlide + 1}`;
// get previous btn
let previous = document.getElementById("prev");
// get next btn
let next = document.getElementById("next");
// handle Click on previous btn and next btn
next.onclick = nextSlide;
previous.addEventListener("click", prevSlide);

// create main ul element
let ul = document.createElement("ul");
ul.id = "pagination-ul";
// create li of pagination
for (let i = 0; i < itemCount; i++) {
  let li = document.createElement("li");
  li.setAttribute("data-index", i);
  li.append(i + 1);
  ul.append(li);
}
// add the created ul element to the page
document.querySelector(".indicators").append(ul);
// create nextSlide Function
function nextSlide() {
  sliderItem.forEach((ele) => {
    ele.classList.remove("active");
  });
  if (currentSlide < itemCount) {
    if (currentSlide !== itemCount - 1) {
      slideNumber.innerText = `slide #${currentSlide + 2}`;
      previous.classList.remove("disabled");
      currentSlide++;
    } else {
      next.classList.add("disabled");
    }
    sliderItem[currentSlide].classList.add("active");
    lis.forEach((ele) => {
      ele.classList.remove("active");
    });
    for (let i = 0; i < lis.length; i++) {
      lis[currentSlide].classList.add("active");
    }
  }
}
// get array of li
let lis = document.querySelectorAll(".indicators ul li");
lis[0].classList.add("active");
// create prevSlide Function
function prevSlide() {
  sliderItem.forEach((ele) => {
    ele.classList.remove("active");
  });
  if (currentSlide < itemCount && currentSlide >= 0) {
    if (currentSlide !== 0) {
      slideNumber.innerText = `slide #${currentSlide}`;
      currentSlide--;
      next.classList.remove("disabled");
    } else {
      previous.classList.add("disabled");
    }
    sliderItem[currentSlide].classList.add("active");
    lis.forEach((ele) => {
      ele.classList.remove("active");
    });
    for (let i = 0; i < lis.length; i++) {
      lis[currentSlide].classList.add("active");
    }
  }
}
lis.forEach((ele) => {
  ele.onclick = () => {
    lis.forEach((ele) => {
      ele.classList.remove("active");
    });
    ele.classList.add("active");
    currentSlide = +ele.getAttribute("data-index");
    sliderItem.forEach((ele) => {
      ele.classList.remove("active");
    });
    sliderItem[currentSlide].classList.add("active");
    next.classList.remove("disabled");
    previous.classList.remove("disabled");
    slideNumber.innerText = `slide #${currentSlide + 1}`;
  };
});
