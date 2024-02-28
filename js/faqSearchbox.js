document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("searchBox");

    searchBox.addEventListener("input", function () {
        const keyword = searchBox.value.toLowerCase();

        const accordionItems = document.querySelectorAll(".accordion-item");

        accordionItems.forEach(function (item) {
            const h3Text = item.querySelector("h3").innerText.toLowerCase();
            const pText = item.querySelector(".answer p").innerText.toLowerCase();

            if (h3Text.includes(keyword) || pText.includes(keyword)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});