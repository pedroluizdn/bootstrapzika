(function($){

	$(document).ready(function(){
		
		function changePositionProp(){
			
			var offsetTop = $("body").scrollTop();
			
			if(offsetTop > 0){
				$("#navbar").css("position", "fixed");
			}
			else{
				$("#navbar").css("position", "static");
			}
			
			time = null;
			
		}
		
		var time = null;
		
		$(this).scroll(function(event){
					
			time = null;
			
			time = setTimeout(changePositionProp, 40);
			
		});
		
		$("a[href^='#']").click(function(e){
			
			e.preventDefault();
			$($(this).attr("href"))[0].scrollIntoView();
			scrollBy(0, -150);
		
		})
		
	})

}(jQuery));