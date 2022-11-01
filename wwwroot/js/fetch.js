let loadMoreBtn = document.getElementById("loadMore")
let productLists = document.getElementById("productList")

loadMoreBtn.addEventListener("click", function () {
    console.log("salam")

    fetch("https://localhost:7298/Product")
        .then(response => response.text())
        .then(data => {
            productLists.innerHtml = data;
        })
});