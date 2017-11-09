

function shortenUrl() {
	return ;
}



$('.btn-shorten').on('click', function(){

	var shorten_url = shortenUrl();


  $.ajax({
    url: '/url',
    type: 'POST',
    dataType: 'JSON',
    data: {url: $('#url-field').val() },
    success: function(data){

      console.log(data);
        // display the shortened URL
        var shortUrl = '<a class="result" href="' + data.url + '" target="_blank">'
            + data.message + '</a>';

        $('#link').html(shortUrl);
        $('#link').hide().fadeIn('slow');
    }
  });


});
