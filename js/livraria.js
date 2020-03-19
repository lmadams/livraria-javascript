window.onload = function () {

  fetch('https://api.myjson.com/bins/oi83g', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(function (response) {
      response
        .json()
        .then(function (livros) {

          debugger

          const header = document.getElementById('table-head');
          const trHeader = document.createElement('tr');

          Object
            .keys(livros[0])
            .forEach(function (key) {
              let thHeader = document.createElement('th');
              thHeader.textContent = key;
              trHeader.appendChild(thHeader);
            });

          header.appendChild(trHeader);

          const body = document.getElementById('table-body');
          livros.forEach(function (livro) {
            console.log(Object.keys(livro));
            console.log(livro);
            console.log(livro.id);
            console.log(livro.nome);
            console.log(livro['codigo']);
            console.log(livro.categoria);
            console.log(livro.categoria.nome);
            console.log('--------------------------------------')
          });

        });
    })
    .catch(err => console.log(err))
};
