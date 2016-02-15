// (function() {    
//     var columnElems = $(".columns");
//     var columnDescElems = $(".columns-description");
//     var columnTitleElems = $(".columns-title");

//     Array.prototype.forEach.call(columnElems, function(columnElem, index) {
//         console.log(columnElem);
//         var columnEl = $(columnElem);
//         columnEl.mouseover(function(){
//             console.log("hey");
//             $(columnDescElems[index]).hide();
//             $(columnTitleElems[index]).show();
//         });
//         columnEl.mouseleave(function(){
//             $(columnDescElems[index]).show();
//             $(columnTitleElems[index]).hide();
//         });
//     });


// })();