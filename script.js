window.onload = function(){

    const bar = document.querySelector(".highlight-bar");

    bar.style.opacity = "0";
    bar.style.transform = "translateY(30px)";

    setTimeout(() => {

        bar.style.transition = "all 0.8s ease";

        bar.style.opacity = "1";

        bar.style.transform = "translateY(0)";

    }, 300);

};
