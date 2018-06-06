$.ajax({
	dataType : "json",
	url: "http://5a5b96f44611170012fe752c.mockapi.io/api/notification",
	method: "GET",
	success : function(data){
		console.log(data);
		for(var i = 0; i < data.length; i++){
      		var x = "<div class='col-12 notification'><span>"+data[i].title+"</span><a style='position:absolute; right:10px' class='btn btn-primary download-btn' href='"+data[i].file_link+"' role='button'>Download</a></div>";
      		// var y ="<div class='card card-body noti-card'> " +data[i].file_link +"</div>"
      	$("#notification_div").append(x);
      	
      	var $button = $("a.download-btn");

      	$button.on("click", function(data){
      		var link=document.createElement('a');
		      link.href=window.URL.createObjectURL(data);
		      link.click();
      	})


      	console.log(x);   
    }
	}
});
console.log("hey");