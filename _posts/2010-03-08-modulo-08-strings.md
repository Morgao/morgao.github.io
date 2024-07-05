---
layout: post
title: Módulo 8 – Strings
date: 2010-02-08 19:45
author: Morgao
comments: true
categories: [Algoritmos, Linguagem C++, Programação]
---


Módulo 8 – Strings
Não falamos até agora de matrizes de caracteres, apesar de já utilizá-las várias vezes. Uma matriz de caracteres é normalmente chamada de “string” em linguagem de programação. Em C++, existem duas maneiras de se criar e trabalhar com strings. Um deles é o método antigo, já utilizado pela linguagem C, de se declarar e trabalhar com uma matriz de caracteres do mesmo modo que trabalhamos com matrizes numéricas. O outro método é utilizar as facilidades da biblioteca padrão de C++, que define um tipo de variável específico para strings, com várias operações e funções próprias. Nesta apostila trabalharemos com as strings do tipo C++, por serem elas mais simples e ao mesmo tempo apresentarem mais recursos do que as strings tipo C.
8.1 – Cabeçalho de um programa com strings
Todo programa que utilize strings deve conter a seguinte linha de inclusão em seu cabeçalho:
#include <string>
Isso faz com que o compilador inclua no programa a biblioteca padrão de strings de C++, que contém todas as definições do tipo string, assim como as funções e facilidades relacionados à este tipo. Assim, o cabeçalho de um programa típico envolvendo strings fica assim:
#include <iostream>
#include <string>
using namespace std;
8.2 – Declarando e Inicializando uma String
Declaramos strings da mesma maneira que declaramos variáveis: explicitando o tipo da variável (no caso, string) e seu nome. Veja a sintaxe e o exemplo abaixo:
string <nome da string>;
string nacionalidade;
string sobrenome;
Uma string declarada desta forma estará vazia até que um valor seja atribuído à ela, das maneiras já estudadas: através de uma atribuição, ou de uma entrada de dados do usuário, por exemplo.
C++ possui uma série de facilidades para a inicialização de strings. Cada um desses diferentes métodos é chamado de “inicializador” de uma string. A tabela abaixo reúne os quatro principais inicializadores de string:
string s1; - Cria uma string vazia, chamada s1. Esta é a inicialização default de uma string: toda string criada dessa forma está vazia.
string s2 (s1); - Cria a string s2 como uma cópia de outra string (nesse caso, s1).
string s2 (“Esta é uma string literal”); - Cria a string s2 como uma cópia da string literal entre os parênteses.
string s2 (x, ‘c’); - Cria a string s2, que contém x cópias do caractere entre aspas (no caso, c).
O programa abaixo exemplifica os métodos descritos acima:
#include <iostream>
#include <string>
using namespace std;

int main()
{
string vazia;
string ditado("Casa de ferreiro, espeto de pau");
string copia_ditado(ditado);
string letra_z( 42, 'z');
cout <<"Mostrando o conteúdo da string 'vazia':"<< endl;
cout << vazia;
cout <<"Mostrando o conteúdo da string 'ditado':"<< endl;
cout << ditado;
cout <<"Mostrando o conteúdo da string 'copia_ditado':"<< endl;
cout << copia_ditado;
cout <<"Mostrando o conteúdo da string 'letra_z':"<< endl;
cout << letra_z;
system("PAUSE > null");
return 0;
}
8.3 – Leitura e Escrita de Strings na Tela
Utilizamos cin e cout para ler e escrever strings, assim como fazemos com variáveis simples. Basicamente, cin e cout tratam strings como se fossem variáveis simples, facilitando sua manipulação e seu uso em programas.
Já vimos no programa exemplo anterior que utilizamos cout para exibir strings inteiras na tela. cout exibe todos os caracteres da string, e detecta automaticamente o fim dela.
Utiliza-se o comando cin para ler strings através do teclado. A sintaxe é a seguinte:
cin >> <nome da strin>;
Como já vimos, cin lerá os caracteres inseridos através do teclado até encontrar um espaço em branco (tecla barra de espaço) ou o fim da entrada (tecla Enter). Quando cin encontra um espaço em branco, todos os caracteres após este espaço são ignorados. O programa abaixo lê entradas do teclado para armazenar o nome e sobrenome do usuário dentro de strings.
#include <iostream>
#include <string>
using namespace std;

int main()
{
string nome;
string sobrenome;
cout<<"Digite seu nome: ";
cin >> nome;
cout<<"Digite seu sobrenome: ";
cin >> sobrenome;
cout << "Seu nome é "<<nome<<" e seu sobrenome é “<<sobrenome<<"."<<endl;
system("PAUSE > null");
return 0;
}
Esse programa apresenta alguns problemas quando o usuário possui mais de um nome ou sobrenome. Por exemplo, caso o nome “José Ricardo” seja inserido, a leitura do sobrenome será “ignorada” e o programa exibirá “José” como o nome e “Ricardo” como sobrenome. Da mesma forma, no caso da entrada de um sobrenome duplo, somente o primeiro sobrenome é guardado na string “sobrenome”, sendo o segundo “ignorado”. Isto acontece por causa da maneira que C++ trata os espaços em branco em uma entrada via teclado.
Espaços em branco são considerados fim de entrada pelo comando cin; ao invés de descartar os caracteres que vierem após o espaço em branco, C++ os guarda em um buffer (uma espécie de “reserva” ou pilha de dados). Quando cin for chamado novamente, antes de ler a nova entrada do teclado, o programa primeiro utiliza os dados que estão nesse buffer. Assim, temos a impressão que a nova entrada de dados foi descartada pelo programa, mas na verdade ela foi jogada no buffer, esperando uma nova chamada de cin.
Dessa forma, cin não é o método recomendado para ler frases inteiras, com palavras separadas por espaços. Para este objetivo, utilizamos o método cin.getline, que já estudamos no módulo 5, com algumas alterações.
O método cin.getline lê linhas inteiras de entrada através do teclado, sem se importar com os espaços em branco. Mas a sintaxe do método cin.getline é um pouco diferente, quando trabalhamos com strings:
getline ( cin, <nome da string>);
Assim, este método recebe todos os caracteres (incluindo os espaços em branco) entrados pelo usuário, até que ele aperte a tecla Enter. O programa abaixo é uma versão melhorada do programa anterior, utilizando o método cin.getline para receber os dados desejados.
#include <iostream>
#include <string>
using namespace std;

int main()
{
string nome;
string sobrenome;
cout<<"Digite seu nome: ";
getline(cin, nome);
cout<<"Digite seu sobrenome: ";
getline(cin, sobrenome);
cout <<"Seu nome é "<<nome<<" e seu sobrenome é "<<sobrenome<<"."<<endl;
system("PAUSE > null");
return 0;
}
8.4 – Operações com Strings
C++ possui uma série de funções e operações próprias para strings. A tabela abaixo resume as operações mais utilizadas (s é uma string qualquer):
s.empty( ) - Função que retorna verdadeiro se a string está vazia, e falso caso contrário.
s.size ( ) - Função que retorna o tamanho em caracteres da string.
s [n] - Acessa um elemento da string. Funciona exatamente com um elemento de uma matriz.
s1 + s2 - Concatena duas strings.
s1 = s2 - Atribui o conteúdo de s2 na string s1.
s1 == s2 - Testa a igualdade entre s1 e s2 (retorna verdadeiro se as duas strings forem iguais). Duas strings são consideradas iguais se elas tiverem o mesmo número de caracteres e seus caracteres forem iguais.
A primeira função, <string>.empty indica se uma string está vazia ou não. Esta função retorna um valor booleano verdadeiro ( true ou 1 ) caso a string esteja vazia, caso contrário ela retorna falso (false ou 0).
A função <string>.size é bastante útil para trabalhar com strings entradas pelo usuário. Como não podemos saber exatamente o número de caracteres entrados pelo usuário, é útil ter uma função que nos retorne o tamanho de uma string.
Como vemos acima, é possível acessar um elemento individual de uma string do mesmo modo que fazemos com matrizes. Esse tipo de acesso é útil quando precisamos manipular os vários caracteres de uma string, como por exemplo, identificar as letras maiúsculas de uma string e transformá-las em minúsculas. Para esse tipo de manipulação caractere à caractere, contamos com as diversas funções da biblioteca cctype, que veremos no item 8.5.
A concatenação de strings é particularmente útil. Quando utilizamos o sinal de soma entre duas strings, estamos concatenando elas, ou seja, juntando o começo da segunda matriz com o final da primeira. Também é possível concatenar strings literais ( frases entre aspas) junto com as variáveis string dessa forma. O programa abaixo ilustra a concatenação de strings.
#include <iostream>
#include <string>
using namespace std;

int main()
{
string nome;
string sobrenome;
cout<<"Digite seu nome: ";
getline(cin, nome);
cout<<"Digite seu sobrenome: ";
getline(cin, sobrenome);
string concatena;
concatena = nome + sobrenome;
cout << "O seu nome completo é : " + nome + " " + sobrenome << endl;
system("PAUSE > null");
return 0;
}
8.5 – Biblioteca cctype: operações com caracteres
A biblioteca cctype é uma versão da biblioteca ctype da linguagem C, convertida para C++. Ela contém diversas funções que permitem processar os caracteres de uma string, um por um. Por exemplo, podemos precisar saber se um determinado caracter é uma letra ou um número, se está acentuado ou não, se é minúsculo ou maiúsculo, e transformar este caractere. Para utilizar esta biblioteca, precisamos declará-la no cabeçalho do programa, assim como fizemos com a biblioteca de strings. Para declará-la, a sintaxe é a seguinte:
#include <cctype>
Assim, o cabeçalho de um programa que utiliza strings e a biblioteca cctype ficaria assim:
#include <iostream>
#include <string>
#include <cctype>
using namespace std;
A tabela abaixo resume algumas das funções mais úteis desta biblioteca (x é um elemento de uma string, por exemplo, “sobrenome[4]”) :
isalnum (x) - Retorna verdadeiro (1) caso x for uma letra ou um número.
isalpha (x) - Retorna verdadeiro (1) caso x for uma letra.
iscntrl (x) - Retorna verdadeiro (1) caso x for um dígito de controle.
isdigit (x) - Retorna verdadeiro (1) caso x for um número.
isgraph (x) - Retorna verdadeiro (1) caso x não for um espaço.
islower (x) - Retorna verdadeiro (1) caso x for uma letra minúscula.
isprint (x) - Retorna verdadeiro (1) caso x for um caractere imprimível.
ispunct (x) - Retorna verdadeiro (1) caso x for um caractere acentuado.
isspace (x) - Retorna verdadeiro (1) caso x for um esaço em branco.
isupper (x) - Retorna verdadeiro (1) caso x for uma letra maiúscula
isxdigit (x) - Retorna verdadeiro (1) caso x for um número hexadecimal.
tolower (x) - Transforma um caractere maiúsculo em minúsculo.
toupper (x) - Transforma um caractere minúsculo em maiúsculo.
Com exceção das duas últimas funções que transformam caracteres, todas as outras testam os caracteres de uma string, retornando valores booleanos ( true ou false, 1 ou 0 ). O programa abaixo mostra o uso de algumas dessas funções, através da leitura de uma string entrada pelo usuário. Note que também é feito o uso da função <string>.size para determinar o tamanho da string.
#include <iostream>
#include <string>
using namespace std;
int main()
{
string frase;
int letras = 0, maiusculas = 0, minusculas = 0, numeros = 0;
cout<<"Entre com uma frase qualquer, composta de letras maiusculas, minusculas e numeros: "<< endl;
getline(cin, frase);
letras = frase.size();
cout<<"Sua frase tem "<< letras<< " letras."<<endl;
for (int i = 0; i < letras; i++)
{
if (isdigit(frase[i])) numeros++;
if (islower(frase[i])) minusculas++;
if (isupper(frase[i])) maiusculas++;
}
cout<<"Sua frase tem "<< numeros<< " numeros."<<endl;
cout<<"Sua frase tem "<< minusculas<< " letras minusculas."<<endl;
cout<<"Sua frase tem "<< maiusculas<< " letras maiusculas."<<endl;
system("PAUSE > null");
return 0;
}

-------------------------------------------------------------------------------------------------------------
Publicado originalmente em - sexta-feira, 13 de agosto de 2010
atualizacao da referencia bibliografica em -atualizado em 21/08/2017 - 03:01
eu publiquei em uma epoca de ensino medio, sem entender de direito autroal, o arquivo é do autor (Esta apostila é o resultado do trabalho de conclusão de curso realizado por Enrique Camargo Trevelin, aluno do curso de Engenharia Elétrica, sob a orientação do Prof. Carlos Antônio Alves. ), está publicado no site : (http://apostilacpp.awardspace.com/index.php?pagina=home) na integra e peco desculpa se o autor quer que retire do site o material, mande um email para
contatomorgao@gmail.com