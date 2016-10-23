var etsyItems = etsyData.results
console.log (etsyItems);




///////====this gets us the names of the items =======
// var names = []
//   for (var i=0; i< etsyItems.length; i++) {
//     names.push(etsyItems[i].title)
//   }
//
//   console.log(names)

// // function saxophones etsyItems.map(saxItems) {
// var saxophones = etsyItems.map(function(etsyItems) {
//     var title = etsyItems.title;
//     var image = etsyItems.Images.url_75x75;
//     var shopName = etsyItems.Shop.shop_name;
//     var shopUrl = etsyItems.Shop.url;
//     var price = etsyItems.price;
//     var url = etsyItems.url;
//
//
//         return title + " costs " + price
// });
//
//   console.log(saxophones)
//
//   var imagebox = document.getElementById("container");
//   imagebox.innerHTML = "Hello" + saxophones;


  var saxophones = etsyItems.map(function(etsyItems) => etsyItems.title)

    console.log(saxophones)
