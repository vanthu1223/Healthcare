const searchInput = document.getElementById("searchInput");
const suggestionList = document.getElementById("suggestionList");
const searchButton = document.getElementById("searchButton");
// const productContainer = document.getElementById("FacialCare");
searchButton.onclick = (e) => {
    const searchValue = searchInput.value.toLowerCase().trim();
    e.preventDefault(); // Ngăn chặn sự kiện submit mặc định của button
    console.log(searchProductByName(searchValue))
    renderItem(searchProductByName(searchValue), "searchResult");
    document.getElementById("suggestionList").style.display = "none";
    document.getElementById("serviceContainer").style.display = "none";
    document.getElementById("searchResultContainer").style.display = "block"
}

function searchProductByName(searchInput) {
    const listServices = JSON.parse(localStorage.getItem("services")) || []
    const searchResult = listServices.filter(e => e.name.toLowerCase().includes(searchInput))
    return searchResult;
}

function displaySuggestions(suggestions) {
    suggestionList.innerHTML = "";
    suggestions.forEach(function (suggestion) {
        const listItem = document.createElement("li");
        listItem.textContent = suggestion.name;
        listItem.addEventListener("click", function () {
            searchInput.value = suggestion.name;
            suggestionList.innerHTML = "";
            document.getElementById("suggestionList").style.display = "block";
        });
        suggestionList.appendChild(listItem);
    });
}
// Xóa dữ liệu khi input rỗng
searchInput.addEventListener("input", function () {
    if (searchInput.value === "") {
        suggestionList.innerHTML = "";
        document.getElementById("suggestionList").style.display = "none";
        productContainer.innerHTML = "";
    }
});