let searchInput = document.getElementById("searchInput");
let searchTerm = "";
let searchResultsList = document.getElementById("searchResultsList");
function displayData(jsonData) {
    let results = jsonData.query.search;
    searchResultsList.innerHTML = ""; // Clear previous results
    for(let i of results){
        let title = i.title;
        let link = `https://en.wikipedia.org/wiki/${i.pageid}`;
        let description = i.snippet;

        let unOrderList = document.createElement("ul");
        let listItem1 = document.createElement("li");

        let anchor = document.createElement("a");
        anchor.href = link;
        anchor.target = "_blank";
        anchor.textContent = title;
        listItem1.appendChild(anchor);
        unOrderList.appendChild(listItem1);

        let listItem2 = document.createElement("li");
        let para = document.createElement("p");
        para.textContent = description
        listItem2.appendChild(para);
        unOrderList.appendChild(listItem2);

        searchResultsList.appendChild(unOrderList);
    }
}
searchInput.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        searchTerm = searchInput.value;
        if(searchTerm.trim() === ""){
            alert("Please Enter Something to Search");
        }
        else{
            let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&format=json&origin=*`;
            fetch(url)
            .then(function(response){
                return response.json()
            })
            .then(function(jsonData){
                displayData(jsonData);
            });
        }
    }
    else{
        searchTerm += e.key;
    }
});