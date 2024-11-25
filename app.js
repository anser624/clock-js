function clock() {
  var clockVar = document.getElementById("clock");

  var time = new Date();

  var hour = time.getHours();

  if (hour > 12 || hour === 13) {
      hour = hour -12 ;
  } 

  var mint = time.getMinutes();

  var Seconds = time.getSeconds();

  clockVar.innerText = `${hour.toString().padStart(2,0)} : ${mint.toString().padStart(2,0)} : ${Seconds.toString().padStart(2,0)}`;

}

setInterval(clock, 1000);

function date(){


  var datediv = document.getElementById('date');

  var date  = new Date();

  var day = date.getDay();
  
  var dayNames = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
   dayNames = dayNames[day]

  var month = date.getMonth();
  
  var monthname = ["JANUARY","FEBURARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"]
  
  monthname = monthname[month];

  var year = date.getFullYear();

  datediv.innerText = `${dayNames} / ${monthname} / ${year}`;

  console.log(date)
}

date();