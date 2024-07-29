let button = document.querySelector('button');
let p =document.querySelector('p');
p.style.display = 'none';
button.addEventListener('click', function() {
  fetchQuotes();
});

function fetchQuotes() {
    fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        p.style.display = 'block';
        p.textContent = data[Math.floor(Math.random() * data.length)].text;
        button.style.width ='8rem';
        button.style.height ='3rem';
        button.style.fontSize ='0.9rem';
        button.style.marginTop ='5rem';
      });

    };

    const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://type.fit/api/quotes",
    "method": "GET"
}

$.ajax(settings).done(function (response) {
  const data = JSON.parse(response);
  console.log(data);
});