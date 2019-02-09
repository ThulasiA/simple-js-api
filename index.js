let app = document.getElementById('root');

let container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);



let request = new XMLHttpRequest();

request.open('GET', 'http://hp-api.herokuapp.com/api/characters', true);

request.onload = function() {
  let data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(characters => {
      let innerDiv = document.createElement('div');
      innerDiv.setAttribute('class', 'innerDiv');
      container.appendChild(innerDiv);

      let h1Element = document.createElement('h1');
      h1Element.textContent = characters.name;

      let imgElement = document.createElement('img');
      imgElement.src = characters.image;

      innerDiv.appendChild(h1Element);
      innerDiv.appendChild(imgElement);
    });
  }  else {
    console.log('error');
  }
}

request.send();