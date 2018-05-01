var visible = [true,true,true]
$(document).ready(function () {
	var h = Math.max($('#dev').height(), $('#stc').height() , $('#sme').height());
	$('.description').height(h);

	var h = Math.max($('#dev_head').height(), $('#stc_head').height() , $('#sme_head').height());
	$('h1').height(h);
	
	$('#hidden_dev').hide(0);
	$('#hidden_sme').hide(0);
	$('#hidden_stc').hide(0);
	
	$(window).resize(function(){
		console.log("got here");
		$('#dev').height("auto");
		$('#stc').height("auto");
		$('#sme').height("auto");
		
		
		$('#dev_head').height("auto");
		$('#stc_head').height("auto");
		$('#sme_head').height("auto");
		var h = Math.max($('#dev').height(), $('#stc').height() , $('#sme').height());
		$('.description').height(h);

		var h = Math.max($('#dev_head').height(), $('#stc_head').height() , $('#sme_head').height());
		$('h1').height(h);
	})
	
	$('#dev_drop').click(
		function(){
			
			
			if(visible[0])
			{
			    document.getElementById("dev_drop").innerHTML = 'keyboard_arrow_up'
				$('#hidden_dev').slideDown(1000);			
				
			}
			else
			{
			    $('#hidden_dev').slideUp(1000);
			    document.getElementById("dev_drop").innerHTML = 'keyboard_arrow_down'
			}

			visible[0] = !visible[0];
			
		}
	);

	

	$('#stc_drop').click(
	function(){
        if(visible[1])
        {
            document.getElementById("stc_drop").innerHTML = 'keyboard_arrow_up'
        	$('#hidden_stc').slideDown(1000);	
        }
        else
        {
            document.getElementById("stc_drop").innerHTML = 'keyboard_arrow_down'
			//$("#stc").height(h);
        	$('#hidden_stc').slideUp(1000);	
        }
        visible[1] = !visible[1]
		}
	);

	


	$('#sme_drop').click(
	function(){
        if(visible[2])
        {
            document.getElementById("sme_drop").innerHTML = 'keyboard_arrow_up'
        	$('#hidden_sme').slideDown(1000);	
        }
        else
        {
            document.getElementById("sme_drop").innerHTML = 'keyboard_arrow_down'
        	$('#hidden_sme').slideUp(1000);	
        }
        visible[2] = !visible[2];
		}
	);

	
});


