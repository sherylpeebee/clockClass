$(function(){
  function Clock(){
    this.run = function(){

      var date = new Date();
      var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
      var hh, mm, ss;

      (function getTime(){
        hh = hours.toString().length < 2 ? "0" + hours : hours;
        mm = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
        ss = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();
      })();

      setInterval(function () {
        hh = hours.toString().length < 2 ? "0" + hours : hours;
        mm = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
        ss = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();
        $(".digital_time").text(hh + ":" + mm + ":" + ss);
      }, 1000);


        var hourIncr =  hh < 3 < hh ? (hh - 3) * 30 : 0;
        $("div.hour_hand").css({transform: 'rotate(' + hourIncr + 'deg)' });

        var minIncr = mm < 15 < mm ? (mm - 15) * 6 : 0;
        $("div.minute_hand").css({transform: 'rotate(' + minIncr + 'deg)' });

        var secsCount = 0;
        setInterval(function(){
          if(secsCount < 360){
            secsCount += 6;
          } else {
            secsCount = 6;
          }
          // console.log(secsCount);
          $("div.second_hand").css({transform: 'rotate(' + secsCount + 'deg)' });
        }, 1000);

        var minCount = 0;
        setInterval(function(){
          if(minCount < 360){
            minCount += 6;
          } else {
            minCount = 6;
          }
          // console.log("minCount: " + minCount);
          $("div.minute_hand").css({transform: 'rotate(' + minCount + 'deg)' });
        }, 60000);

        // var hourCount = 0;
        // setInterval(function(){
        //   if(hourCount < 360){
        //     hourCount += 6;
        //   } else {
        //     hourCount = 6;
        //   }
        //   console.log("minCount: " + hourCount);
        //   $("div.hour_hand").css({transform: 'rotate(' + hourCount + 'deg)' });
        // }, 60000);

    };
  }

  var clock = new Clock();
  clock.run();

});

//start all hands at noon.
//get hour time from clock func and increment 30deg for every past noon
//every fifteen minutes, hour increment six degrees (one notch)
