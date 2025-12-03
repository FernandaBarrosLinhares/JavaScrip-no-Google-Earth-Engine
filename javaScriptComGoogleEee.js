// ---- CONCEITOS BÁSICO DE JAVASCRIPT PARA O GEE ----

// Uma instrução JavaScript (JS). Sempre terminam com ponto-e-vírgula.

print('Olá Mundo!');

// TIPOS DE DADOS JS
// Strings:

var umaString = "Google Earth Engine";
var umaString2 = "Google Earth Engine 2";
print(umaString);

//Números:

var numero = 10;
print('O limiar para classificação é ', numero);

//Listas - entre colchetes:

var listaNumeros = [0, 1, 5, 22, 34];
var listaBandas = ['b1', 'b2', 'b3', 'b8'];
print('A lista de números é ', listaNumeros);

//Objetos
//São "variáveis" que possuem uma COLEÇÃO DE VALORES. Essa coleção
possui itens chamados de PROPRIEDADE.
//Cada PROPRIEDADE possui um par de termos com a seguinte formatação:
"nome: valor"
//Uma PROPRIEDADE pode armazenar uma FUNÇÃO.

var objeto = {
 titulo: 'Pós-graduação em Ciências de Dados Geográficos',
 duracao: 12,
 temas: ['geoprocessamento', 'computacao_em_nuvem',
'sensoriamento_remoto']
};
print('Valor:', objeto);

// Acessar os itens por meio de colchetes:

print('Qual a duração, em meses?', objeto['duracao']);

// Acessar os itens utilizando o ponto e o nome do tema:
print('Quais os temas?', objeto.temas);
//Exemplo prático do GEE:

var vizParams = {bands: ['B5', 'B4', 'B3'], min: 0.02, max: 0.4, gamma: 1.3};

//Funções
/*Agrupa conjuntos de operações. Use a palavra "function" para definir.
As funções, geralmente, recebem parâmetros e estarão entre parênteses ().
O conjunto de instruções que compõem a função estará entre chaves.
A palavra reservada "return" indica qual a saída da função.
O valor passado para um parâmetro é chamado de argumento.*/


var minhaFuncao = function(parametro1, parametro2, parametro3) {
 declaracao;
 declaracao;
 declaracao;
 return declaracao;
};


//A variável "saudacao" tratá um simples parâmetro, chamado de "cumprimento":
var saudacao = function(cumprimento) {
 return cumprimento;
};

print('Bom dia!', saudacao('Obrigado, a você também!'));

//Outro exemplo de função:
var resultado = somar(1, 2);
function somar(x, y) {
 return x + y;
}
print(resultado);
//-------------------------------------------------------------------------------------
//OBJETOS, MÉTODOS E CONSTRUTORES DO EARTH ENGINE
//Agora, o script enviará a solicitação para os servidor do Google.
// Definir a string e adicionar a um contêiner para envio ao Google:
var aString = 'Foi enviado para o Google EE e recebido novamente!';


var eeString = ee.String(aString);
print('Onde foi o texto?', eeString);

//Definindo a variável e o contêiner em uma só vez:

var string = ee.String('a string que veio do servidor GEE.'); //aqui o texto poderia
ser trocado por uma imagem, por exemplo.
print('String local e ', string);

// Os "ee." são chamados de construtores. Os construtores coletam os
ARGUMENTOS e os PARÂMETROS, inserem num contêiner e retornam
// um OBJETO do GEE. Esse objeto ficará pronto para ser utilizado no código.
Ex.: uma variável de imagem, como mostrado no código abaixo.
//Exemplo prático:

var imagem =
ee.Image('LANDSAT/LT05/C02/T1_TOA/LT05_031034_20110619');
var visParams = {bands: ['B5', 'B4', 'B3'], min: 0.02, max: 0.4, gamma: 1.3};
//Map.setCenter(-101.05259, 37.93418, 13);
//Map.addLayer(image, {min: 0, max: 1}, 'Landsat');
//Map.addLayer(imagem, visParams, 'Landsat');