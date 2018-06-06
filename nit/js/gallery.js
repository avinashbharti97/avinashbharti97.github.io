var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: 'http://fakeimg.pl/350x200/?text=Hello',
        w: 600,
        h: 400
    },
    {
        src: 'http://fakeimg.pl/350x200/?text=this',
        w: 600,
        h: 400
    },
    {
        src: 'http://fakeimg.pl/350x200/?text=is',
        w: 600,
        h: 400
    },
    {
        src: 'http://fakeimg.pl/350x200/?text=gallery',
        w: 600,
        h: 400
    },
    {
        src: 'http://fakeimg.pl/350x200/?text=thank',
        w: 600,
        h: 400
    },
    {
        src: 'http://fakeimg.pl/350x200/?text=you',
        w: 600,
        h: 400
    },
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();