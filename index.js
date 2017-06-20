const express = require('express');
const fs = require('fs');
let request = require('request');
const cheerio = require('cheerio');
const app = express();
const parser = require('rss-parser');
// const axios = require('axios');
// const Xray = require('x-ray');
// const x = Xray();


const url = 'https://www.lotterypost.com/news';

const options = {
  customFields: {
    feed: ['title', 'link', 'pubDate', 'description'],
  }
}

parser.parseURL('http://feeds.lotterypost.com/LotteryNews/.rss', function(err, parsed) {
  console.log(parsed.feed.title);
  parsed.feed.entries.forEach(function(entry) {
    console.log(entry.title + ': ' + entry.link + '</n>' + entry.pubDate + " " + entry.description);
  })
});
//div.pod.fortext - 1 result
// div#adLayout - 1 result
// #mainColumn - 1 result
// table#mainframework - 1 result
// div#mainColumn - 1 result
// x('https://www.lotterypost.com/news', 'div', [{
//   header: 'h1.title.sprite-bgx.sprite-bgx-title-30',
//   date: 'h2.section',
//   title_link: 'a@href',
//   title: 'strong',
//   snippet: 'div.tblrowodd',
// }]).write('results.json')

// x('feeds.lotterypost.com/LotteryNews', 'ul', [{
//   header: 'h1.title.sprite-bgx.sprite-bgx-title-30',
//   date: 'h5.itemposttime',
//   title_link: 'a@href',
//   title: 'h4.itemtitle',
//   snippet: 'div.itemcontent',
// }]).write('results.json')


// app.get('/scrape', (req, res) => {
//   let base_url = 'http://ww w.bca.co.id/id/Individu/Sarana/Kurs-dan-Suku-Bunga/Kurs-dan-Kalkulator';
//   const url = 'https://www.lotterypost.com/news';

//   const articles = {
//     headline: "",
//     date: "",
//     content: ""
//   }



  // axios.get(url).then((response) => {
  //   let $ = cheerio.load(response.data);
  //   let articles = [];
  //   const json = { date: "", headline: "", content: "" };

  //   // $('a', '.tblrowodd').filter(() => {
  //   //   const data = $(this);
  //   //   articles.push({
  //   //      headline: data.children().first().text()      
  //   //   });
  //   // });
  //   let header = "";
  //   $('div', '.pod.fortext').each((i, elm) => {
  //      header = $('#mainColumn > div > h1');
  //     articles.push({
  //       // date: $(elm).first().text(),
  //       // content: $(elm).first().text()
  //       // header: $(elm).first().text(),
  //       // date: '#mainColumn > div > h2:nth-child(2)',
  //       // title_link: '#mainColumn > div > div:nth-child(17) > div > a',
  //       // title: '#mainColumn > div > div:nth-child(19) > div > a > strong',
  //       // snippet: '//*[@id="mainColumn"]/div/div[9]/div/text()[2]',
  //     });
  //   }, console.log(header));


  //   return (articles);
  // }).then((articles) => {
    
  // });
// });


// request = (url, (error, res, html) => {
//   if(!error) {
//     res.send('Hello from not error');
//     const $ = cheerio.load(html);
//     const date = "", headline= "", content = "";
//     const json = { date: "", headline: "", content: ""};

//     $('.tblrowodd').filter(() => {

//       const data = $(this);
//       headline = data.children().first().text();
//       console.log("Article headline: " + headline);
//       json.title = headline;
//     });
//   }
//   else {
//     console.log("Error: " + error);
//   }
// });

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

exports = module.exports = app;
