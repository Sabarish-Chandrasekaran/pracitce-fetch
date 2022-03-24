"use strict";
// The Fetch() API

const url = "https://623bf4808e9af58789499ff0.mockapi.io/suman/friends";

// // The Tradational Way to use fetch() API using async & await function

// async function Suman(url) {
//   let data = await fetch(url);
//   if (data.ok) {
//     return data.json();
//   } else {
//     return data.status;
//   }
// }

// let guvi = Suman(url);

// guvi
//   .then(function (value) {
//     console.log(JSON.stringify(value));
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("The fetch() API ran successfully !");
//   });

// // The mordern way to use the fetch() API
let main = document.createElement("div");
document.getElementById("btn").addEventListener("click", function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let table = document.createElement("table");
      table.id = "table";

      let thead = document.createElement("thead");

      let tbody = document.createElement("tbody");

      let tr1 = document.createElement("tr");

      let th1 = document.createElement("th");
      th1.innerHTML = "FIRST NAME";

      let th2 = document.createElement("th");
      th2.innerHTML = "LAST NAME";

      let th3 = document.createElement("th");
      th3.innerHTML = "LOCATION";

      let th4 = document.createElement("th");
      th4.innerHTML = "CREATED AT";

      let th5 = document.createElement("th");
      th5.innerHTML = "IMAGE";

      main.append(table);
      table.append(thead, tbody);
      thead.append(tr1);
      tr1.append(th1, th2, th3, th4, th5);

      for (let i = 0; i < 50; i++) {
        let tr2 = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = data[i].first_name;
        let td2 = document.createElement("td");
        td2.innerHTML = data[i]["last_name"];
        let td3 = document.createElement("td");
        td3.innerHTML = data[i]["location"];
        let td4 = document.createElement("td");
        td4.innerHTML = data[i].created_at;
        let img = document.createElement("img");
        img.className = "img-thumbnail";
        img.src = data[i].image;
        //converting link ,by adding in source to showcase image in table.
        let td5 = document.createElement("td");
        td5.append(img);
        tr2.append(td1, td2, td3, td4, td5);
        tbody.append(tr2);
      }
    });
});
document.body.append(main);
