(function ($) {



	
// number of selected items
function counter() {
  if ($('li.selected').length > 0)
    $('.send').addClass('selected');
  else
    $('.send').removeClass('selected');
  $('.send').attr('data-counter',$('li.selected').length);
}
	
	
	


$.imgSel = {
	init:function(){
		// item selection
		$("#container").find('img').click(function () {
		  $(this).toggleClass('selected');
		  if ($('img.selected').length == 0)
			$('.select').removeClass('selected');
		  else
			$('.select').addClass('selected');
		  counter();
		});		
	}
};






}(jQuery));