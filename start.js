
if(!Detector.webgl){
		alert('Hello World!');
      Detector.addGetWebGLMessage();
    } else {
		alert('Hello World!');

      var years = ['1990','1995','2000'];
      var container = document.getElementById('container');
      var globe = new DAT.Globe(container);

      console.log(globe);
      var i, tweens = [];
      
      var settime = function(globe, t) {
        return function() {
          new TWEEN.Tween(globe).to({time: t/years.length},500).easing(TWEEN.Easing.Cubic.EaseOut).start();
          var y = document.getElementById('year'+years[t]);
          if (y.getAttribute('class') === 'year active') {
            return;
          }
          var yy = document.getElementsByClassName('year');
          for(i=0; i<yy.length; i++) {
            yy[i].setAttribute('class','year');
          }
          y.setAttribute('class', 'year active');
        };
      };
      
      for(var i = 0; i<years.length; i++) {
        var y = document.getElementById('year'+years[i]);
        y.addEventListener('mouseover', settime(globe,i), false);
      }
      
      var xhr;
      TWEEN.start();
      
      xhr = new XMLHttpRequest();
      xhr.open('GET', 'C:/Users/nicos_000/Desktop/webgl-globe/population909500.json', true);
	  alert('2');
      xhr.onreadystatechange = function(e) {
		  alert('3');
        if (xhr.readyState === 4) {
			alert('4');
          if (xhr.status === 200) {
			  alert('5');
            var data = JSON.parse(xhr.responseText);
            window.data = data;
            for (i=0;i<data.length;i++) {
              globe.addData(data[i][1], {format: 'magnitude', name: data[i][0], animated: true});
			  
            }
			alert('a');
            globe.createPoints();
            settime(globe,0)();
            globe.animate();
			
            document.body.style.backgroundImage = 'none'; // remove loading
          }
        }
      };
      xhr.send(null);
    }
