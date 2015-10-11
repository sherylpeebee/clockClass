//javascript class practice

$(function(){
  var count = 0;
  setInterval(function(){
    if(count < 360){
      count += 6;
    } else {
      count = 6;
    }
    console.log(count);
    $("div.second_hand").css({transform: 'rotate(' + count + 'deg)' });
  }, 1000);

  function Clock(){
    this.run = function(){
      setInterval(function () {
        var date = new Date();
        var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        var hh = hours.toString().length < 2 ? "0" + hours : hours;
        var mm = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes();
        var ss = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds();
        console.log(date);
        console.log(hh + ":" + mm + ":" + ss);
        $(".digital_time").text(hh + ":" + mm + ":" + ss);
      }, 1000);
    };
  }

  var clock = new Clock();
  clock.run();

});
