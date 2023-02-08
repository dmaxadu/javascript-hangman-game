const keyboard = document.querySelector('.keyboard');
const secretWordDiv = document.querySelector('.secretWord');
const categoryDiv = document.querySelector('.category');
const buttons = document.getElementsByClassName('key');
const secretLetters = document.getElementsByClassName('letter');
const keys = "qwertyuiopasdfghjklçzxcvbnm".split("");
let mistakes = 0;
let found = 0;
let oldFound = 0;

const nomes = [
    'MARIA',
    'ANA',
    'JOSE',
    'DANIEL',
    'PEDRO',
    'ANTONIO',
    'HUGO',
    'LUIGI',
    'BARBARA',
    'FERNANDO',
    'CRISTIANE',
    'LUIZ',
    'PAULO',
    'GABRIEL',
    'GERALDO',
    'SANDRA',
    'ADRIANA',
    'MARIANA',
    'JORGE',
    'FELIPE',
    'ROBERTO',
    'RODRIGO',
    'PATRICIA',
    'CARLOS',
    'EDUARDO',
    'JOAQUIM',
];
const animais = [
    'ABELHA',
    'GATO',
    'CACHORRO',
    'PAPAGAIO',
    'COBRA',
    'ANDORINHA',
    'BALEIA',
    'BURRO',
    'CABRA',
    'CABRITO',
    'CARACOL',
    'CARAMUJO',
    'ELEFANTE',
    'AVESTRUZ',
    'GALINHA',
    'GAIVOTA',
    'GANSO',
    'GALO',
    'GIRAFA',
    'GOLFINHO',
    'HIENA',
    'IGUANA',
    'CAVALO',
    'JACARÉ',
    'CROCODILO',
    'MACACO',
];
const cep = [
    'BRASIL',
    'NORUEGA',
    'ALEMANHA',
    'FORTALEZA',
    'PORTUGAL',
    'ESPANHA',
    'FRANÇA',
    'MANAUS',
    'ROMA',
    'BERLIM',
    'LISBOA',
    'MADRID',
    'GHANA',
    'TURQUIA',
    'CANADA',
    'ALASKA',
    'ITALIA',
    'NITEROI',
    'FLORIANOPOLIS',
    'AMAPA',
    'MACAPA',
    'SERGIPE',
    'FLORIDA',
    'ORLANDO',
    'MIAMI',
    'CALIFORNIA',
];
const comidas = [
    'ARROZ',
    'FEIJAO',
    'ESTROGONOFE',
    'BATATA',
    'CENOURA',
    'BROCOLIS',
    'BRIGADEIRO',
    'SORVETE',
    'CHOCOLATE',
    'BALA',
    'QUEIJO',
    'PIZZA',
    'COXINHA',
    'BISCOITO',
    'SALGADINHO',
    'CROISSANT',
    'BANANA',
    'BOLO',
    'TORTA',
    'PAVE',
    'MOUSSE',
    'PUDIM',
    'GELEIA',
    'LINGUIÇA',
    'CHURRASCO',
    'FAROFA',
];

const chooseWord = () => {
    const numberCategories = 4;
    const numberWords = 25;
    const categoryIndex = Math.floor((Math.random()*numberCategories) + 1);
    const wordIndex = Math.floor((Math.random()*numberWords) + 1);
    if(categoryIndex == 1){
        const category = 'Nomes';
        const word = nomes[wordIndex];
        return [word, category];
    }
    else if(categoryIndex == 2){
        const category = 'Animais';
        const word = animais[wordIndex];
        return [word, category];
    }
    else if(categoryIndex == 3){
        const category = 'Cidade, Estado ou País';
        const word = cep[wordIndex];
        return [word, category];
    }
    else {
        const category = 'Comidas';
        const word = comidas[wordIndex];
        return [word, category];
    }

}

const createKey = (k) => {
    const key = document.createElement('button');
    key.className = 'key';
    key.innerHTML = k;
    keyboard.appendChild(key);
}

const createKeyboard = () => {
    for(var i = 0; i < keys.length; i++){
        createKey(keys[i].toUpperCase());
    }

    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', handlePressedKey);
    }
}

const createSecretWord = () => {
    const wordAndCategory = chooseWord();
    const word = wordAndCategory[0];
    const category = wordAndCategory[1];
    const keys = document.querySelectorAll('button');
    
    
    for(var i = 0; i < word.length; i++){
        const space = document.createElement('div');
        letter = document.createElement('p');
        space.className = 'secretLetter';
        letter.className = 'letter';
        letter.innerHTML = word.slice(i, i+1);
        letter.style.display = 'none';
        letter.setAttribute('id', i);
        secretWordDiv.appendChild(space);
        space.appendChild(letter);

    }
    
    categoryDiv.innerHTML = category;
}

const loadGame = () => {
    createKeyboard();
    createSecretWord();
}

const handleHangman = (mistakes) => {
    const hangmanImg = document.getElementById('hangmanImg');
    hangmanImg.setAttribute('src', 'images/forca0'+ mistakes +'.png');
}

const alertWindow = (mensagem) =>{
    alert(mensagem);
}

const winnerWindow = () => {
    alertWindow("Você ganhou")
    location.reload()
}

const loserWindow = () => {
    alertWindow("Você perdeu")
    location.reload()
}

const handlePressedKey = (event) => {
    console.log(event.target.innerHTML);
    for(var i = 0; i < secretLetters.length; i++){
        if(event.target.innerHTML === secretLetters[i].innerHTML){
            console.log("acertou");
            secretLetters[i].style.display = 'flex';
            found++;
            console.log("found:", found);
        }
    }
    if(found == 0 || oldFound == found){
        mistakes = mistakes + 1;
        handleHangman(mistakes);
    }

    oldFound = found;

    if(mistakes >= 6){
        mistakes = 0;
        setTimeout(loserWindow, 300)
    }

    if(found == secretLetters.length){
        setTimeout(winnerWindow, 300)
    }

}

loadGame()
