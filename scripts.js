const keyboard = document.querySelector('.keyboard');
const secretWordDiv = document.querySelector('.secretWord');
const categoryDiv = document.querySelector('.category');
const buttons = document.querySelectorAll('button');
const keys = "qwertyuiopasdfghjklçzxcvbnm".split("");
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
    // key.setAttribute('onClick', 'letterFunction');
    key.innerHTML = k;
    keyboard.appendChild(key);
}

const createKeyboard = () => {
    for(var i = 0; i < keys.length; i++){
        createKey(keys[i].toUpperCase());
    }
}

const createSecretWord = () => {
    createKeyboard()
    const wordAndCategory = chooseWord();
    const word = wordAndCategory[0];
    const category = wordAndCategory[1];
    const keys = document.querySelectorAll('button');
    
    
    for(var i = 0; i < word.length; i++){
        space = document.createElement('div');
        letter = document.createElement('p');
        space.className = 'secretLetter';
        letter.className = 'letter'
        letter.innerHTML = word.slice(i, i+1)
        // letter.style.display = 'none'
        letter.setAttribute('id', i)
        secretWordDiv.appendChild(space);
        space.appendChild(letter)

    }
    Array.from(keys).forEach((key)=>{
        key.addEventListener("click", (e)=>{
            if(word.includes(e.target.innerHTML)){
                console.log("acertou")
            }
            else{
                console.log("errou")
            }
        })
    })
    
    categoryDiv.innerHTML = category;
    console.log(word)

}

createSecretWord()