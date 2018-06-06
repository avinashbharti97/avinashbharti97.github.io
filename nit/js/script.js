$(document).ready(function() {
	$('#fullpage').fullpage({
    scrollOverflow:true
  });

});



// $('#ckLine').ckLine();

// $('.card-slider-1').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });
// function createCard(cardData) {
//   var cardTemplate = [
//     '<div class="col-3 card">',
//     '<p>My name is: ',
//     cardData.Name || 'No name provided',
//     '</p>',
//     '<p>My job is: ',
//     cardData.Job || 'No job provided',
//     '</p></div>'

    
//   ];

//   // a jQuery node
//   return $(cardTemplate.join(''));
// }

// var data = [
//     { "Name": "Peter", "Job": "Programmer" },
//     { "Name": "John", "Job": "Programmer" },
//     { "Name": "Kevin", "Job": "Scientist" },
// ];

// var cards = $();
// // Store all the card nodes
// data.forEach(function(item, i) {
//   cards = cards.add(createCard(item));
// });

// // Add them to the page... for instance the <body>
// $(function() {
//   $('.cards_style').append(cards);
// });

// window.sr = ScrollReveal();
// sr.reveal('.about_content');



// $.ajax({
//   dataType: "json",
//   url: "https://5a5b96f44611170012fe752c.mockapi.io/api/event",
//   method:"GET",
//   success: function (data){
//     console.log(data);
//     // $(".event_card").append(data[0].event_name);
//     for(var i = 0; i < data.length; i++){
//       var x = "<div class='col-6 col-md-2 event_card'><h3>"+data[i].name+"</h3></div>";
//       $("#events").append(x);
//       console.log(x);   
//       console.log(data[i].id);
//       $(".event_card").on("click", function(){
//         window.location.href = "event.html#"+data[i].id;
//       });
//     }
//   }
// })


$(document).ready(function(){

  const Item = ({link,name}) =>
    `<div class="col-3 col-md-2 event_card" onclick="location.href='${link}';" style="cursor:pointer; padding-top:30px">
      
        <h3>${name}</h3>
      
    </div>`;

  

    $.ajax({
      dataType: "json",
      url: "https://5a5b96f44611170012fe752c.mockapi.io/api/event",
      method: "GET",
      success: function(data){
        console.log(data);
        var templateData = [];
        $.each(data,function(k,v){
          var obj = {};
          obj.link = "event.html#"+v.id;
          obj.name = v.name;
          templateData.push(obj);
          $('#events').html(templateData.map(Item).join(''));
        });
      }
    });

    $(".event_card").click(function() {
      window.location = $(this).find("a").attr("href"); 
      return false;
    });
    
});

$(document).ready(function(){
  const Item2 = ({name,designation, institute}) =>
  `<div class="col-6 col-md-2 profile_card" style="margin-bottom:30px">
    <div class="card" style="">
      <img class="card-img-top" src="" alt="Card image cap">
      <div class="card-body" style="text-align:center">
        <h4 class="card-text">${name}</h4>
        <h6 class="card-text">${designation}</h6>
        <p class="card-text">${institute}</p>
      </div>
    </div>
    </div>`;

  $.ajax({
      dataType: "json",
      url: "https://5a5b96f44611170012fe752c.mockapi.io/api/profile",
      method: "GET",
      success: function(data){
        console.log(data);
        var templateData = [];
        $.each(data,function(k,v){
          var obj = {};
          obj.name = v.name;
          obj.designation = v.designation;
          obj.institute = v.institute;
          templateData.push(obj);
          $('#organisers').html(templateData.map(Item2).join(''));
        });
      }
    });
});

