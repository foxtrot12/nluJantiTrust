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

	var countDownDate = new Date("Jan 6, 2023 23:59:59").getTime();

	var x = setInterval(function() {

	  var now = new Date().getTime();
	    
	  var distance = countDownDate - now;
	    

		
	  if(distance < 0)
	  {
		document.getElementById("regText").innerHTML = "Registrations Closed";
		document.getElementById("day").innerHTML = 00 + "<br>Days ";
  	  	document.getElementById("hour").innerHTML = 00 + "<br>Hours ";
	  	document.getElementById("minute").innerHTML = 00 + "<br>Min ";
	  	document.getElementById("sec").innerHTML = 00 + "<br>Sec";
	  }
	  else{
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("day").innerHTML = days + "<br>Days ";
  	  	document.getElementById("hour").innerHTML = hours + "<br>Hours ";
	  	document.getElementById("minute").innerHTML = minutes + "<br>Min ";
	  	document.getElementById("sec").innerHTML = seconds + "<br>Sec";
	  }

	}, 1000);
