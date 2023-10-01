pages = ['index.html', 'portfolio.html'];

function initNavRects() {
    let mainNavList = document.querySelector(".main-nav ul")
    mainNavList = Array.from(mainNavList.childNodes).filter((e) => {
        if(e.nodeType != Node.TEXT_NODE) return e;
    });
    
    // mainNavList.childNodes.forEach((e) => {
    //     if(e.nodeType != Node.TEXT_NODE) {
    //         // console.log(e)
    //         var rect = e.getBoundingClientRect();
    //         navItemRects.push(rect)
    //         // console.log(window.location.toString().endsWith('portfolio.html'))
    //     }
    //     // console.log(e)
    // })
}

function setNavIndicator(rect) {
    let navIndicator = document.getElementById("nav-indicator");
    navIndicator.style.width = rect.width/1.5 + 'px'
    navIndicator.style.height = rect.height/2 + 'px'
    navIndicator.style.left = rect.left + rect.width/3 + 'px'
    navIndicator.style.top = rect.top + rect.height/2 +'px'
}

window.addEventListener('load', () => {
    console.log(window.location)
    let mainNavList = document.querySelector(".main-nav ul")
    let navItemRects = Array.from(mainNavList.childNodes).filter((e) => {
        if(e.nodeType != Node.TEXT_NODE) return e;
    });

    let html = window.location.toString().split('/').pop();
    let idx = pages.indexOf(html)
    console.log(html)
    if(idx == -1) return;
    let rect = navItemRects[idx].getBoundingClientRect()
    console.log(rect)
    setNavIndicator(rect)
})
