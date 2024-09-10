pages = ['index.html', 'portfolio.html'];

function setNavIndicator(rect) {
    let navIndicator = document.getElementById("nav-indicator");
    navIndicator.style.width = rect.width/1.5 + 'px'
    navIndicator.style.height = rect.height/2 + 'px'
    navIndicator.style.left = rect.left + rect.width/3 + 'px'
    navIndicator.style.top = rect.top + rect.height/2 +'px'
}

window.addEventListener('load', () => {
    let mainNavList = document.querySelector(".main-nav ul")
    let navItemRects = Array.from(mainNavList.childNodes).filter((e) => {
        if(e.nodeType != Node.TEXT_NODE) return e;
    });

    let html_page_url = window.location.toString().split('/').pop();
    let idx = pages.indexOf(html_page_url)
    if(idx == -1) return;
    let rect = navItemRects[idx].getBoundingClientRect()
    setNavIndicator(rect)
})

let counters = []

const projects = document.querySelectorAll(".img-slider-container")
console.log(projects)
projects.forEach((project, index) => {
    prepSlides(project, index)
})

function prepSlides(project, index) {
    const slides = project.querySelectorAll(".slide")
    slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
    });

    const nextBtn = project.querySelector(".next-btn");
    const prevBtn = project.querySelector(".prev-btn");
    counters.push(0)
    if (nextBtn == null || prevBtn == null) return;
    nextBtn.addEventListener("click", function () {
    counters[index]++;
    carousel(slides, counters[index], nextBtn, prevBtn);
    });

    prevBtn.addEventListener("click", function () {
    counters[index]--;
    carousel(slides, counters[index], nextBtn, prevBtn);
    });
    prevBtn.style.opacity = 0;
    prevBtn.style.pointerEvents = "none"
}

function carousel(slides, counter, nextBtn, prevBtn) {

  if (counter < slides.length - 1) {
    nextBtn.style.opacity = 1;
    nextBtn.style.pointerEvents = "auto"
  } else {
    nextBtn.style.opacity = 0;
    nextBtn.style.pointerEvents = "none"
  }
  if (counter > 0) {
    prevBtn.style.opacity = 1;
    prevBtn.style.pointerEvents = "auto"
  } else {
    prevBtn.style.opacity = 0;
    prevBtn.style.pointerEvents = "none"
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}