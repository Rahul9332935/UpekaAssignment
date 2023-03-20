function telegram() {
  let token = "5776754741:AAGihGV6GeFgUfRp2sjvav3FGi3pgrxU4hM";
  let channel = "@Top10NewsDaily";
  //api to fetch live news
  const apiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a545d5d752e24afbb44ccf801c9cc89e";
  let response = UrlFetchApp.fetch(apiUrl);
  let data = JSON.parse(response.getContentText());
  
  let message = "*Top 10 News for Today*\n\n";
  
  for (var i = 0; i < 10; i++) {
    let title = data.articles[i].title;
    let source= data.articles[i].url;
    message +=i+1 +". "+ title+"\n"+"source: "+ source +"\n\n";
  }
  console.log(message);
  
  let payload = {
    "method": "sendMessage",
    "chat_id": channel,
    "parse_mode": "Markdown",
    "text": message
  };
  
  let options = {
    "method": "post",
    "payload": payload
  };
  
  UrlFetchApp.fetch("https://api.telegram.org/bot" + token + "/", options);
}
