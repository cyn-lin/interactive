
var SPREADSHEET_ID = "1pTYscXORfnCZDOyCkO1VC7EwvOz9yxVfXFXwimqf7jE";
var TAB_NAME = "media-tracker";

/* 
These are two variables (containers for data) that you need to replace with your own information.

1. SPREADSHEET_ID: To get your spreadsheet ID, hit Share at the top-right and make sure ANYONE WITH THE LINK CAN VIEW. Then, copy the end of your URL in your address bar after docs.google.com/spreadsheets/d/...
  
  e.g.
https://docs.google.com/spreadsheets/d/1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY/edit#gid=1875797309
  copy
  "1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY" is your spreadsheet ID.
  
  2. TAB_NAME is just the name of your spreadsheet tab. Write it as it is (it's case-sensitive!). 
    –– The default Google Sheet tab is Sheet1.
    –– This also accepts the tab number, in order
  
*/

/* 
   Link to the example spreadsheet: https://docs.google.com/spreadsheets/d/1ndp1b_EgDONxhSEa9rd6N80Y_oEvI57cNbqO9EMUIGQ/edit#gid=0
*/


$(document).ready(function () {
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID + "/" + TAB_NAME, function (data) {
    
    console.log(data); 
    
     // go over everything in data and run the code below
    data.forEach(function (entry, index) {
      
      console.log(entry);

      // Create a link around the title
      var titleLink = entry.link ? `<a href="${entry.link}" target="_blank">${entry.title}</a>` : entry.title;

      $(`<tr> 
            <td>` + entry.musings + `</td>
            <td>` + entry.type + `</td>
            <td>` + titleLink + `</td>
            <td>` + entry.author + `</td>
            <td>` + entry.words + `</td>
         </tr>`)
        .appendTo("table");
  
    });
  });  
});
  


// thank you https://github.com/benborgers/opensheet