//assincrona -> esperar resposta antes de sair fazendo
async function buscar(){
    console.log("Passei por aqui");

    // resposta da api -> fetch vai até a API para pegar a resposta
    const resposta = await fetch("https://660f4491356b87a55c510c96.mockapi.io/agendas");
    const respostaDadosAgenda = await resposta.json();

    // -> await: esperar a resposta da promessa
    console.log("Resposta: ", respostaDadosAgenda);

    const cards = document.getElementById("cards_games")

    // map -> percorre a resposta, nos parenteses vamos criar uma função que vai percorrer os dados da resposta
    // () -> parâmetros, cada item que retornou do vetor
    cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
            return "Teste "
    });
}


console.log("antes de buscar")
buscar();
console.log("depois de buscar");
