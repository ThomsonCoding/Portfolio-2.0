const backToTopButton = document.querySelector(".backToTop");

console.log("Back to top button");

function scrollFunction() {
    if (window.pageYOffset > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
  }

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.addEventListener('scroll', scrollFunction);
backToTopButton.addEventListener('click', topFunction);