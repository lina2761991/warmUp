
        var s = "";

       $( "#1" ).click(function() {
          s= "left"
       });

        $( "#2" ).click(function() {
           s= "right";
       });

           $( "#3" ).click(function() {
           	if(s ==="left"){
	       
	        var v = $("input").val();
	      	var $ul = $('ul');
	      	var $li = $('<li></li>');
	         $li.text(v).addClass('left');
	         $li.appendTo($ul);
	     }
	     	else if(s ==="right"){
	       
	        var v = $("input").val();
	      	var $ul = $('ul');
	      	var $li = $('<li></li>'+'<br>');
	         $li.text(v).addClass('right');
	         $li.appendTo($ul);
	     }
      });








