let button = document.getElementById('btnEnviar');


function pegarValores(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let idade = Number(document.getElementById('idade').value);
    let trocaH1 = document.getElementById('h1').textContent = `H1 trocado`; // 'Desafio 2'

    document.getElementById('nomeR').textContent = nome;
    document.getElementById('emailR').textContent = email;
    document.getElementById('idadeR').textContent = idade;

    

    console.log(nome, email, idade);


}

function buttonAtv(){
    button.addEventListener('click', pegarValores);
}

buttonAtv();