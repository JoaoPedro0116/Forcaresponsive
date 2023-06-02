const  objetos = [
    { palavra: 'Cadeira', dica: 'Um móvel para sentar' },
    { palavra: 'Carro', dica: 'Um veículo com rodas' },
    { palavra: 'Computador', dica: 'Uma máquina que processa informações' },
    { palavra: 'Livro', dica: 'Contém páginas com texto' },
    { palavra: 'Bola', dica: 'Um objeto esférico usado em diversos esportes' },
    { palavra: 'Telefone', dica: 'Dispositivo para comunicação à distância' },
    { palavra: 'Cachorro', dica: 'Animal de estimação leal e amigável' },
    { palavra: 'Relogio', dica: 'Um dispositivo para medir o tempo' },
    { palavra: 'Caneta', dica: 'Usada para escrever' },
    { palavra: 'oculos', dica: 'Usados para melhorar a visão' },
    { palavra: 'Mesa', dica: 'Superfície plana com pernas usada para apoiar objetos' },
    { palavra: 'Chave', dica: 'Usada para abrir fechaduras' },
    { palavra: 'Guitarra', dica: 'Instrumento musical de cordas' },
    { palavra: 'Abacaxi', dica: 'Uma fruta tropical de casca grossa e polpa doce' },
    { palavra: 'Aviao', dica: 'Um meio de transporte que voa' },
    { palavra: 'Piano', dica: 'Um instrumento musical de teclas' },
    { palavra: 'Lápis', dica: 'Usado para escrever e desenhar' },
    { palavra: 'Gato', dica: 'Animal de estimação independente e ágil' },
    { palavra: 'Faca', dica: 'Uma ferramenta cortante com lâmina afiada' },
    { palavra: 'Fogão', dica: 'Usado para cozinhar alimentos' },
    { palavra: 'Mochila', dica: 'Um saco usado para transportar objetos nas costas' },
    { palavra: 'Cama', dica: 'Móvel usado para dormir' },
    { palavra: 'Martelo', dica: 'Ferramenta usada para bater ou fixar pregos' },
    { palavra: 'Bicicleta', dica: 'Veículo de duas rodas movido pelo esforço humano' },
    { palavra: 'Maca', dica: 'Uma fruta de polpa suculenta e sabor adocicado' },
    { palavra: 'Camiseta', dica: 'Peça de vestuário de manga curta' },
    { palavra: 'Futebol', dica: 'Esporte jogado com uma bola nos pés' },
    { palavra: 'Chinelo', dica: 'Calçado aberto e confortável para os pés' },
    { palavra: 'Espelho', dica: 'Superfície refletora que mostra a imagem' },
    { palavra: 'Guitarra', dica: 'Instrumento musical de cordas' },
    { palavra: 'Guardachuva', dica: 'Objeto usado para se proteger da chuva' },
    { palavra: 'Televisão', dica: 'Aparelho eletrônico para assistir programas e filmes' },
    { palavra: 'Violao', dica: 'Instrumento musical de cordas' },
    { palavra: 'Sapato', dica: 'Calçado usado nos pés' },
    { palavra: 'Celular', dica: 'Dispositivo eletrônico para comunicação e acesso à internet' },
    { palavra: 'Cadeado', dica: 'Dispositivo de segurança usado para trancar objetos' },
    { palavra: 'Ventilador', dica: 'Aparelho usado para movimentar o ar e gerar vento' },
    { palavra: 'Microfone', dica: 'Dispositivo usado para amplificar a voz em apresentações' },
    { palavra: 'Garrafa', dica: 'Recipientes usados para armazenar líquidos' },
    { palavra: 'Arcondicionado', dica: 'Aparelho usado para resfriar o ambiente' },
    { palavra: 'Bolsa', dica: 'Acessório usado para carregar objetos pessoais' },
    { palavra: 'Roupa', dica: 'Vestuário usado para cobrir o corpo' },
    { palavra: 'Escova', dica: 'Utensílio usado para pentear ou limpar' },
    { palavra: 'Fotografia', dica: 'Imagem capturada por uma câmera' },
    { palavra: 'Vaso', dica: 'Objeto usado para plantar flores ou plantas' },
    { palavra: 'Escada', dica: 'Estrutura usada para subir e descer entre diferentes níveis' },
    { palavra: 'Carrinho', dica: 'Pequeno veículo usado para transporte de objetos' },
    { palavra: 'Chapeu', dica: 'Acessório usado para cobrir a cabeça' },
    { palavra: 'Chuveiro', dica: 'Aparelho usado para tomar banho' },
    { palavra: 'Chocolate', dica: 'Doce feito com cacau' },
    { palavra: 'Cinto', dica: 'Acessório usado para segurar as calças' },
    { palavra: 'Bolsa', dica: 'Acessório usado para carregar objetos pessoais' },
    { palavra: 'Fone', dica: 'Dispositivo usado para ouvir áudio' },
    { palavra: 'Banana', dica: 'Fruta amarela e alongada' },
    { palavra: 'Relogio', dica: 'usado no pulso' },
    { palavra: 'Colher', dica: 'Utensílio usado para comer ou mexer alimentos' },
    { palavra: 'Copo', dica: 'Recipientes usados para beber líquidos' },
    { palavra: 'Garfo', dica: 'Utensílio usado para comer alimentos sólidos' },
    { palavra: 'Lanterna', dica: 'Dispositivo portátil usado para iluminar' },
    { palavra: 'Bateria', dica: 'Fonte de energia para dispositivos eletrônicos' },
    { palavra: 'Pente', dica: 'Utensílio usado para arrumar'}
    ];
// Aqui você está sorteando o indice da palavra de 0 até o tamanho da lista
var num = parseInt(Math.random()*objetos.length); 
var palavra = objetos[num].palavra;
var dica = objetos[num].dica;
// chances tem que ser 6, pois é a quantidade de partes do corpo disponíveis
var chances = 6;
var acertos = 0;
var img = 1;
//coloca a dica na div da dica
var divDica = document.getElementById("dica");
var p = document.createElement(p);
let msg = document.createTextNode(dica);
p.appendChild(msg);
divDica.appendChild(p);


for (posicao = 0; posicao < palavra.length; posicao++) {
    // a tag span é quase que uma div, só que de uma linha só
    let span = document.createElement("span");
    span.setAttribute('id', posicao);

    let div = document.getElementById("palavra");
    // coloca o span dentro da div como um filhinho
    div.appendChild(span);
}


let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T','U', 'V', 'W', 'X', 'Y', 'Z']

for (posicao = 0; posicao < letras.length; posicao++) {
    let botao = document.createElement("button");
    let letra = document.createTextNode(letras[posicao]);
    
    botao.appendChild(letra);
    //quando ele apertar no botão ele vai  ser direcionado para uma função que vai fazer  a verificação se tá certo ou não e depois será desativado
    botao.setAttribute('onclick', 'escolheLetra(\''+letras[posicao]+'\')');
    botao.setAttribute('id', letras[posicao]);

    let div = document.getElementById("teclado");
  
    div.appendChild(botao);
}

function escolheLetra(letra) {
    if(chances ==0||acertos == palavra.length){
        return;
    }

    let acertou = false;

    for (posicao = 0; posicao < palavra.length; posicao++) {
        // converte em maiuscula na comparação
        if (letra.toUpperCase() == palavra[posicao].toUpperCase()) {
            let span = document.getElementById(posicao);
            let l = document.createTextNode(letra);

            span.appendChild(l);

            let botao = document.getElementById(letra);
            // coloca uma classe certa
            botao.setAttribute('class', 'certa');
            // remove o atributo de clique
            botao.removeAttribute('onclick');

            acertos++;
            acertou = true;
        }
    }


    if (acertou === false) {
        img++;
        document.getElementById("img").src = "Img/img"+img+".jpeg";

        var botao = document.getElementById(letra);
        // coloca a classe de letra errada
        botao.setAttribute('class', 'errada');
        botao.removeAttribute('onclick');

        chances--;
    }

    if (chances === 0) {
        setTimeout(()=>{alert("Você perdeu!");},1000)
        let botao = document.createElement("button");
        let t2 = document.createTextNode("jogar novamente");
    
        
        botao.appendChild(t2);
        botao.setAttribute('class', 'botao1');
        // essa função recarrega a pag
        botao.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("botao");
        div.appendChild(botao);
    }

    if (acertos === palavra.length) {
        setTimeout(()=>{alert("Você ganhou!");},1000)
        let botao = document.createElement("button");
        let t2 = document.createTextNode("jogar novamente");
        
        botao.appendChild(t2);
        botao.setAttribute('class', 'botao1');
        botao.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("botao");
        div.appendChild(botao);
    }
}


