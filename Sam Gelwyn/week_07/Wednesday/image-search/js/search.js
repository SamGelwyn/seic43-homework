const searchFlickr = function (keywords) {
  console.log('searching for', keywords);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json'
  }).done(showImages).done(function (info) {
    console.log(info);
  });
};

const showImages = function (results) {
  _(results.photos.photo).each(function (photo) {
    // generate a URL from the photo object
    const thumbnailURL = generateURL(photo);
    // display the image at that URL
    const $img = $('<img>', {src: thumbnailURL, alt: photo.title});
    $img.appendTo('#images');
  });
};

const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg' // Change 'q' to something esle for diffent sizes (see docs)
  ].join('')
}

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();

    $('#images').empty();

    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);
  });

  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();
    console.log(scrollBottom);


  })
  // calculate scroll bottom
  // if the scroll bottom < 200px
    // searchFlickr again

});