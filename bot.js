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
postMessage("");
this.res.end();
}
        else if(request.text && botRegexWeek2.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/650x1215.png.319843b697fe4385bcfa342a3895e73f.large");
this.res.end();
}
        else if(request.text && botRegexWeek3.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/653x1229.png.8d7d3338a2514a5bbb62b5c44b06006f.large");
this.res.end();
}
        else if(request.text && botRegexWeek4.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/649x1152.png.9c0b92f4ff8d41669f8482a8a59804be.large");
this.res.end();
}
        else if(request.text && botRegexWeek5.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/652x1075.png.088fd31dae434075bc5d148c3cc55b48.large");
this.res.end();
}
        else if(request.text && botRegexWeek6.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/654x1138.png.15db040ad66c49c3b26625a4f73265d0.large");
this.res.end();
}
        else if(request.text && botRegexWeek7.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/650x1153.png.60418546b6574e598bae698ccb14c5d1.large");
this.res.end();
}
        else if(request.text && botRegexWeek8.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/1317x2015.png.facb3b0e37594e3ab387a7525ca44cf5.large");
this.res.end();
}
        else if(request.text && botRegexWeek9.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/1308x1997.png.2f34b67fcb984b37a5b5c968d7fd2ff3.large");
this.res.end();
}
        else if(request.text && botRegexWeek10.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/649x1074.png.538a7182dc29471d941f779888e00c92.large");
this.res.end();
}
        else if(request.text && botRegexWeek11.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/659x1073.png.d995dd29960c463a92c8a2933e4b7643.large");
this.res.end();
}
        else if(request.text && botRegexWeek12.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/659x1236.png.3182d7d284f54281bdb4748315615933.large");
this.res.end();
}
        else if(request.text && botRegexWeek13.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/652x1147.png.1b39de548cbd46d9b6761dc14c896657.large");
this.res.end();
}
        else if(request.text && botRegexWeek14.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/657x1234.png.26e6cceae7424212aacd891c9289f2c9.large");
this.res.end();
}
        else if(request.text && botRegexWeek15.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/660x1221.png.ac50c2d5e34f48859ed94e25630ab172.large");
this.res.end();
}
        else if(request.text && botRegexWeek16.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/659x1230.png.90fc52a1323349fda3ac302f7967ebec.large");
this.res.end();
}
        else if(request.text && botRegexWeek17.test(request.text)) {
this.res.writeHead(200);
postMessage("https://i.groupme.com/662x1238.png.e014f638986f4c07af2348cc1cff1755.large");
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
