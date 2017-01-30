var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; botRegexSalt = /^\/salt/;botRegexPay = /^\/total offense/;
      botRegexAd=/^\/advance/;botRegexMI = /^\/mike/; botFoh = /^\/foh/; botDuck = /^\/duck/;
      botRegexTw = /^\/twitch/i; botRegexYu = /^\/youtube/i; botRegexAnc = /^\/annoucement/; botRegexSetting = /^\/settings/; botRegexPlayerStats = /^\/player stats/; botRegexGuide = /^\/guidelines/;  botRegexSh = /^\/I don't like that shit/; botRegexCC = /^\/respek/; botRegexSr = /^\/trash/; botRegexQu = /^\/stfu/; botRegexPY = /^\/passing leader/;botRegexPR = /^\/rushing leader/;botRegexPC = /^\/receiving leader/;botRegexDT = /^\/tackles leader/;botRegexDS = /^\/sacks leader/;botRegexDI = /^\/Int leader/;
      botRegexPower=/^\/power rankings/; botRegexLuck = /^\/luck/;botRegexPassing = /^\/passing offense/;botRegexRushing = /^\/rushing offense/;botRegexTotalDefense = /^\/total defense/;botRegexDefensePass = /^\/passing defense/;botRegexDefenseRush = /^\/passing offense/; botRegexFumble = /^\/fumble/; botRegexL = /^\/L/;  botRegexCryingg = /^\/cry/;  botRegexRuless = /^\/rules/; botRegexBoot = /^\/boot/; botRegexCommands = /^\/commands/; botRegexTeamStats = /^\/team stats/; botRegexDL = /^\/nwl/; botRegexWeekOne = /^\/week1/;botRegexWeek2 = /^\/week 2/;botRegexWeek3 = /^\/week 3/;botRegexWeek4 = /^\/week 4/;botRegexWeek5 = /^\/week 5/;botRegexWeek6 = /^\/week 6/;botRegexWeek7 = /^\/week 7/;botRegexWeek8 = /^\/week 8/;botRegexWeek9 = /^\/week 9/;botRegexWeek10 = /^\/week 10/;botRegexWeek11 = /^\/week 11/;botRegexWeek12 = /^\/week 12/;botRegexWeek13 = /^\/week 13/;botRegexWeek14 = /^\/week 14/;botRegexWeek15 = /^\/week 15/;botRegexWeek16 = /^\/week 16/;botRegexWeek17 = /^\/week 17/; botRegexCheese = /^\/cheese/
      cheese1 = 'https://pbs.twimg.com/profile_images/494330891/cheese_oh_cheese_400x400.jpg'; cheese2 = 'https://i.ytimg.com/vi/efLRmlILC2I/maxresdefault.jpg'
      cheese3 = 'http://www.packerpalace.com/palace02/maddenwcheese.gif';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/600x600.jpeg.abf553e8c766444ca32cd06ffb450d8c");
    this.res.end();
      } 
  else if(request.text && botRegexAnc.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/500x446.jpeg.6697a5232e4644ec94697f70ee9f2a1e");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/447x106.jpeg.4ae31cd5c77d4e25a00040120ee1ab24");
    this.res.end();
  }
   else if(request.text && botRegexSetting.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/960x960.jpeg.6066b88167774757ab6c01e036accdec");
    this.res.end();
  }
  else if(request.text && botRegexPay.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/nwl/stats/team/category?cat=offense");
    this.res.end();
  } 
  else if(request.text && botRegexMI.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.kinja-img.com/gawker-media/image/upload/mjvi0ol0s5i3c6ikolql.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
    else if(request.text && botRegexYu.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.youtube.com/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexPlayerStats.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/nwl/stats/player");
    this.res.end();
  } 
  else if(request.text && botRegexGuide.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1700x1985.jpeg.2c76f3d6c52c4a088b0f18d41038fc8a");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/300x172.jpeg.c859d032a1dd4010a4d67fb48f043c97");
    this.res.end();
  } 
   else if(request.text && botFoh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/480x360.jpeg.6265fab910a748f9a22cedcc3a6910af");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/400x400.jpeg.9e7bea369900400fb3edb99093bdac91");
    this.res.end();
  }
    else if(request.text && botRegexSr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/78jbQMz.jpg");
    this.res.end();
  }  
    else if(request.text && botRegexQu.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/IHaQCbfUJ26wE/giphy.gif");
    this.res.end();
  }
      else if(request.text && botRegexPY.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/nwl/stats/player/passing");
    this.res.end();
  }
      else if(request.text && botRegexPR.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/nwl/stats/player/rushing");
    this.res.end();
  }
      else if(request.text && botRegexPC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/nwl/stats/player/receiving");
    this.res.end();
  }
      else if(request.text && botRegexDT.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/nwl/stats/player/defense?sortby=tackles");
    this.res.end();
  }
      else if(request.text && botRegexDS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/nwl/stats/player/defense?sortby=sack");
    this.res.end();
  }
      else if(request.text && botRegexDI.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/nwl/stats/player/defense?sortby=int");
    this.res.end();
  }
  else if(request.text && botRegexPower.test(request.text)) {
this.res.writeHead(200);
postMessage("http://daddyleagues.com/nwl/standing/ranking");
this.res.end();
}
  else if(request.text && botRegexLuck.test(request.text)) {
this.res.writeHead(200);
postMessage("http://memecrunch.com/meme/IAWU/you-don-t-always-beat-me-at-madden/image.jpg");
this.res.end();
}  
  else if(request.text && botRegexPassing.test(request.text)) {
this.res.writeHead(200);
postMessage("http://daddyleagues.com/nwl/stats/team/category?cat=passing");
this.res.end();
}  
  else if(request.text && botRegexRushing.test(request.text)) {
this.res.writeHead(200);
postMessage("http://daddyleagues.com/nwl/stats/team/category?cat=rushing");
this.res.end();
}  
  else if(request.text && botRegexTotalDefense.test(request.text)) {
this.res.writeHead(200);
postMessage("http://daddyleagues.com/nwl/stats/team/category?cat=defense");
this.res.end();
}  
  else if(request.text && botRegexDefensePass.test(request.text)) {
this.res.writeHead(200);
postMessage("http://daddyleagues.com/nwl/stats/team/category?cat=passing_allow");
this.res.end();
}  
  else if(request.text && botRegexDefenseRush.test(request.text)) {
this.res.writeHead(200);
postMessage("http://daddyleagues.com/nwl/stats/team/category?cat=rushing_allow");
this.res.end();
}
  else if(request.text && botRegexFumble.test(request.text)) {
this.res.writeHead(200);
postMessage("http://s2.quickmeme.com/img/c5/c5e2527ff84089b25e6cd56810125c38dc008985077b3cf18207be27ae4b232d.jpg");
this.res.end();
}
  else if(request.text && botRegexL.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/400x400.jpeg.77a084fcd5f74c7288518492109d5d5f");
this.res.end();
}
  else if(request.text && botRegexRuless.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/1700x1895.jpeg.7dab3ff8e25544558dc80a8ae87e6380");
this.res.end();
}
  else if(request.text && botRegexCryingg.test(request.text)) {
this.res.writeHead(200);
postMessage("http://cdn3.sbnation.com/imported_assets/1945573/MORENO-TEARS.gif");
this.res.end();
}
  else if(request.text && botRegexBoot.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/240x240.jpeg.0bfcab020fe54f95b9e7712c9b1ceeb3");
this.res.end();
}
  else if(request.text && botRegexCommands.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/192x681.png.7f63b89ccb074771980c6121c4da06a8");
this.res.end();
}
    else if(request.text && botRegexTeamStats.test(request.text)) {
this.res.writeHead(200);
postMessage("http://daddyleagues.com/nwl/stats/team");
this.res.end();
}
      else if(request.text && botRegexDL.test(request.text)) {
this.res.writeHead(200);
postMessage("http://daddyleagues.com/nwl");
this.res.end();
}
        else if(request.text && botRegexWeekOne.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/471x882.png.cca85f209c51499cab5f68aede009842.large");
this.res.end();
}
        else if(request.text && botRegexWeek2.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/467x895.png.b8698282b7604f5aa761e0d7c5c26f9d.large");
this.res.end();
}
        else if(request.text && botRegexWeek3.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/480x885.png.734d6027a5dd4e75b61cc113a756fa99.large");
this.res.end();
}
        else if(request.text && botRegexWeek4.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/466x780.png.3726bb7347f44099b05e421fdaad9b9e.large");
this.res.end();
}
        else if(request.text && botRegexWeek5.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/462x781.png.30690c958fdb402fa319f61e1ccbd219.large");
this.res.end();
}
        else if(request.text && botRegexWeek6.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/479x771.png.82d2df247ad1475da762846e10ef2d4f.large");
this.res.end();
}
        else if(request.text && botRegexWeek7.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/468x792.png.3ccd5c86ef394d91b78a6a9359aea824.large");
this.res.end();
}
        else if(request.text && botRegexWeek8.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/478x713.png.a4956dfa893549c9a70597a749bb419d.large");
this.res.end();
}
        else if(request.text && botRegexWeek9.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/474x740.png.a066b79b92234dc7850ae09ce09d76e2.large");
this.res.end();
}
        else if(request.text && botRegexWeek10.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/473x793.png.85d1215daf21455584d6eded06ed3dbd.large");
this.res.end();
}
        else if(request.text && botRegexWeek11.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/471x913.png.c1e90fa19a66434894b54d3fce20feec.large");
this.res.end();
}
        else if(request.text && botRegexWeek12.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/479x903.png.e584b3cd2766493f93c816e440d141ba.large");
this.res.end();
}
        else if(request.text && botRegexWeek13.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/468x893.png.ac68cfbd09fe43dea3321695ce2f3c05.large");
this.res.end();
}
        else if(request.text && botRegexWeek14.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/473x896.png.352a976d389745a990997ec6885e5ec1.large");
this.res.end();
}
        else if(request.text && botRegexWeek15.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/474x883.png.4d9be995e5714dcfb251e55049770506.large");
this.res.end();
}
        else if(request.text && botRegexWeek16.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/476x903.png.081d07986d78429bb73b83d8adcfcc5c.large");
this.res.end();
}
        else if(request.text && botRegexWeek17.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/480x911.png.f8b03d59999045d2bbd6a9c0c2d12b82.large");
this.res.end();
}
  else if(request.text && botRegexCheese.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(cheese1);
    else if(Math.random() >0.6)
      postMessage(cheese3)
    else
      postMessage(cheese2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
