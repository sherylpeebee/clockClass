$(function(){
  var secsCount = 0;
  setInterval(function(){
    if(secsCount < 360){
      secsCount += 6;
    } else {
      secsCount = 6;
    }
    console.log(secsCount);
    $("div.second_hand").css({transform: 'rotate(' + secsCount + 'deg)' });
  }, 1000);

  var minCount = 0;
  setInterval(function(){
    if(minCount < 360){
      minCount += 6;
    } else {
      minCount = 6;
    }
    console.log("minCount: " + minCount);
    $("div.minute_hand").css({transform: 'rotate(' + minCount + 'deg)' });
  }, 60000);

  function Clock(){
    this.run = function(){
      setInterval(function () {
        var date = new Date();
        var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        var hh = hours.toString().length < 2 ? "0" + hours : hours;
        var mm = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
        var ss = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();

        var hourIncr =  hh < 3 < hh ? (hh - 3) * 30 : 0;

        $("div.hour_hand").css({transform: 'rotate(' + hourIncr + 'deg)' });


        console.log(date);
        console.log(hh + ":" + mm + ":" + ss);
        $(".digital_time").text(hh + ":" + mm + ":" + ss);
      }, 1000);
    };
  }

  var clock = new Clock();
  clock.run();

});

//start all hands at noon.
//get hour time from clock func and increment 30deg for every past noon
//every fifteen minutes, hour increment six degrees (one notch)
