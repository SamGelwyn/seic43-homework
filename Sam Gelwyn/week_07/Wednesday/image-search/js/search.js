const searchFlickr = function (keywords) {

  if (state.lastPageReached) {
    return; // Get out.
  }

  console.log('searching for', keywords);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: state.nextPage++
  }).done(showImages).done(function (info) {
    if (info.photos.page >= info.photos.pages) {
      state.lastPageReached = true;
    }
    console.log(info);
    console.log(state);
  });
};

const throttledSearchFlickr = _.throttle(searchFlickr,1000, {trailing: false})

const state = {
  nextPage: 1,
  lastPageReached: false
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

    state.nextPage = 1;
    $('#images').empty();

    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);
  });

  $(window).on('scroll', function () {
    // calculate scroll bottom
    const scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();
    console.log(scrollBottom);

    // if the scroll bottom < 400px searchFlickr again
    if (scrollBottom < 400) {
      const searchTerms = $('#query').val();
      throttledSearchFlickr(searchTerms); // page 1 again: HW: get the next page
    }

  });
  
});