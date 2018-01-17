$(document).ready(function(){
	var id = window.location.hash.substr(1);
	console.log(id);

		$.ajax({
			url: "https://5a5b96f44611170012fe752c.mockapi.io/api/event/" + id,
			method: "GET",
			success:function(data){
				console.log(data);
				$("#event_name").append(data.name);
				$("#institute_name").append(data.venue);
				$("#time").append(data.date);
				$("#date").append(data.start_time);
				$("#win1_name").append(data.win1);
				$("#win1_inst").append(data.win1_inst);
				$("#win2_name").append(data.win2);
				$("#win2_inst").append(data.win2_inst);
				$("#win3_name").append(data.win3);
				$("#win3_inst").append(data.win3_inst);

			}
		});
		
	});


