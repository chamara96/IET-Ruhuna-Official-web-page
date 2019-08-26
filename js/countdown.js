const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('july 06, 2019 08:30:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      

      document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      // do something later when date is reached
      // if (distance < 0) {
      //  clearInterval(x);
      //  'ITS MY BIRTHDAY!';
      // }

      if (distance < 0) {
        clearInterval(x);
 
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
 
        document.getElementById("p1").innerHTML = "Event Started";
       //  'ITS MY BIRTHDAY!';
       }


    }, second)