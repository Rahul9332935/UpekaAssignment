function getNews() {
  // Replace YOUR_API_KEY with your NewsAPI key
  const apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a545d5d752e24afbb44ccf801c9cc89e";
  let response = UrlFetchApp.fetch(apiUrl);
  let data = JSON.parse(response.getContentText());

  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Top 5 News");
  sheet.clear();
  sheet.appendRow(["Top 5 News","Description", "URL","Content"]);

  for (var i = 0; i < 5; i++) {
    var title = data.articles[i].title;
    let description= data.articles[i].description;
    var ur = data.articles[i].url;
    var url=('=HYPERLINK("' + ur + '", "Click here")');
    let content= data.articles[i].content;
    sheet.appendRow([title,description, url, content]);
  }
}
