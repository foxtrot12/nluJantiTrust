if(window.innerWidth <720)
	{
		var timeEl = document.getElementById('time');
		timeEl.style.setProperty('flex-direction', 'column');
	}
else{
		var descGalEl = document.getElementById('descGal');
		var infoEl = document.getElementById('info');
		var carouselWithControlsEl = document.getElementById('carouselWithControls');


	}

	var countDownDate = new Date("Jan 4, 2023 23:59:59").getTime();

	var x = setInterval(function() {

	  var now = new Date().getTime();
	    
	  var distance = countDownDate - now;
	    
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	    
	  document.getElementById("day").innerHTML = days + "<br>Days ";
  	  document.getElementById("hour").innerHTML = hours + "<br>Hours ";
	  document.getElementById("minute").innerHTML = minutes + "<br>Min ";
	  document.getElementById("sec").innerHTML = seconds + "<br>Sec";

	    
	  if (distance < 0) {
	    clearInterval(x);
	    document.getElementById("timer").innerHTML = "EXPIRED";
	  }
	}, 1000);
