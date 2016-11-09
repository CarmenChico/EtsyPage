

var etsyItems = etsyData.results
console.log (etsyItems);

// var imageSizing =etsyItems.filter(function(getImages){
//   return (getImages.Images[0].url_);
// });
//
// console.log(imageSizing)





//======this gets us the names of the items =======
// var names = []
//   for (var i=0; i< etsyItems.length; i++) {
//     names.push(etsyItems[i].title)
//   }
//
//   console.log(names)

// function saxophones etsyItems.map(saxItems) {
// var saxophones = etsyItems.map(function(etsyItems) {
//     var title = etsyItems.title;
//     var image = etsyItems.Images.url_75x75;
//     var shopName = etsyItems.Shop.shop_name;
//     var shopUrl = etsyItems.Shop.url;
//     var price = etsyItems.price;
//     var url = etsyItems.url;
//
//
//         return title + " cost\n " + price
// });
//
//   console.log(saxophones)
//
//   var imagebox = document.getElementById("container");
//   imagebox.innerHTML = "Hello\n" + saxophones;
var gameOT = etsyItems.map(function(etsyItems) {
    var title = etsyItems.title;
    var image = etsyItems.Images[0].url_170x135;
    var shopName = etsyItems.Shop.shop_name;
    var shopUrl = etsyItems.Shop.url;
    var price = etsyItems.price;
    var url = etsyItems.url;

        return `
              <div class="iSquare">
                  <a href="${url}">
                    <div class="hoverItems hidden">
                      <img class="icon" src="Image/heart.png">
                      <img class="icon" src="Image/hamburger.png">
                    </div>
                    <div class="tile"><img class="tiles" src="${image}"title="${title}"/></div>

                    <div class="itemDescriptBox">
                        <div class="imageTitle">${title}></div>
                        <div class="itemPrice"><span>$</span>${price}</div>
                        <div class="shopName">${shopName}</div>

                    </div>
                  </a>
              </div>
          `;
  });

var grid = $(".grid");

grid.append(gameOT);
  // console.log(gameOT)

  // <div class="icons">
  //     <img class="icon" src="Image/heart.png">
  //     <img class="icon" src="Image/hamburger.png">
  // </div>

  // <button class="hoverIcons"><img class="icon" src="Image/heart.png"></button>
  // <button class="hoverIcons"><img class="icon" src="Image/hamburger.png"></button>


  //
  // var imagebox = document.getElementById("container");
  // imagebox.innerHTML = "Hello\n" + gameOT;
