🛰️ Exercício: Conceitos Básicos de JavaScript aplicados ao Google Earth Engine (GEE)

Este repositório contém um exercício realizado durante a disciplina da pós-graduação em Ciência de Dados Geográficos, utilizando o código-base fornecido pelo professor.
O objetivo é apresentar e praticar conceitos fundamentais de JavaScript, aplicados no ambiente do Google Earth Engine (GEE).

📌 Descrição do Exercício

O script — salvo com a extensão .g.js — demonstra os principais blocos de construção da linguagem JavaScript dentro do contexto do GEE, incluindo:

Tipos de dados em JavaScript

Manipulação de strings, números, listas e objetos

Declaração e uso de funções

Uso de métodos e construtores do Earth Engine (ee.Image, ee.String, etc.)

Envio e retorno de dados do servidor do GEE

Visualização básica de imagens Landsat

🧩 Conteúdos Abordados
1. Strings

Definição e impressão no console do GEE:

var umaString = "Google Earth Engine";
print(umaString);

2. Números
var numero = 10;
print('O limiar para classificação é ', numero);

3. Listas
var listaNumeros = [0, 1, 5, 22, 34];
var listaBandas = ['b1', 'b2', 'b3', 'b8'];
print('A lista de números é ', listaNumeros);

4. Objetos em JavaScript

Utilização de propriedades e acesso via colchetes ou ponto:

var objeto = {
  titulo: 'Pós-graduação em Ciências de Dados Geográficos',
  duracao: 12,
  temas: ['geoprocessamento', 'computacao_em_nuvem', 'sensoriamento_remoto']
};

print('Qual a duração, em meses?', objeto['duracao']);
print('Quais os temas?', objeto.temas);

5. Funções

Criação de funções simples e funções com retorno:

var saudacao = function(cumprimento) {
  return cumprimento;
};

print('Bom dia!', saudacao('Obrigado, a você também!'));


Outro exemplo:

function somar(x, y) {
  return x + y;
}

var resultado = somar(1, 2);
print(resultado);

🌐 Conceitos do Earth Engine

O exercício também introduz elementos importantes da API do GEE:

🔹 Strings enviadas ao servidor do Earth Engine
var eeString = ee.String('Texto enviado ao servidor');
print('Resultado:', eeString);

🔹 Imagens no GEE

Uso de construtores como ee.Image:

var imagem = ee.Image('LANDSAT/LT05/C02/T1_TOA/LT05_031034_20110619');

var visParams = {
  bands: ['B5', 'B4', 'B3'],
  min: 0.02,
  max: 0.4,
  gamma: 1.3
};

// Map.addLayer(imagem, visParams, 'Landsat');

🎯 Objetivo do Exercício

Esse script foi desenvolvido para:

Introduzir a sintaxe do JavaScript dentro do Google Earth Engine

Demonstrar como o GEE utiliza objetos, métodos e construtores (ee.*)

Familiarizar o estudante com a lógica de envio e processamento de dados no servidor

Exibir uma imagem Landsat com parâmetros de visualização

📁 Estrutura do Arquivo

O arquivo fornecido, salvo como conceitos-basicos.g.js, contém todos os exemplos comentados para facilitar o estudo e a futura consulta.

👩‍💻 Créditos

Exercício baseado no código e instruções do professor Diego Hemkemeier Silva da pós-graduação em
Ciência de Dados Geográficos ClickGeo Anhanguera
