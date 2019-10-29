       var count = 0;

        $( "button" ).click(function() {
	        count++;
	      	var v = $("input").val();
	      	var $ul = $('ul');
	      	var $li = $('<li></li>');

	      	if(count %2 === 0){
	         $li.text(v).addClass('class2');
	         }
	        else{
	         $li.text(v).addClass('class1');	
	         }
	         
	         $li.appendTo($ul);
      });
