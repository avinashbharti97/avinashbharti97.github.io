$(document).ready(function() {
	$('#fullpage').fullpage();
});

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