const fetchBook = function () {

  const input = document.getElementById("input");
  const author = document.getElementById("author");
  const title = document.getElementById("title");
  const rating = document.getElementById("rating");
  const cover = document.getElementById("cover");

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }
    const data = JSON.parse(xhr.responseText);

    const Cover = data.items[0]["volumeInfo"]["imageLinks"]["thumbnail"]
    const Author = data.items[0]["volumeInfo"]["authors"]
    const Title = data.items[0]["volumeInfo"]["title"]
    const Rating = data.items[0]["volumeInfo"]["averageRating"]
    title.innerHTML = `${Title}`;
    author.innerHTML = `by: ${Author}`;
    rating.innerHTML = `rating: ${Rating}/5`;
    cover.innerHTML = `<img src='${Cover}'alt="Book Cover" width="300">`;
    
  };

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${input.value}`);
  xhr.send();

};

document.getElementById('fetch').addEventListener('click', fetchBook)