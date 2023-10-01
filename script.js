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
    let idx = pages.indexOf(html)
    if(idx == -1) return;
    let rect = navItemRects[idx].getBoundingClientRect()
    setNavIndicator(rect)
})
