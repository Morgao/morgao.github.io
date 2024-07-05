---
layout: post
title: Módulo 7 – Matrizes
date: 2010-02-08 19:45
author: Morgao
comments: true
categories: [Algoritmos, Linguagem C++, Programação]
---
Módulo 7 – Matrizes
7.1 – Matrizes
Matrizes são variáveis que contém vários valores de um mesmo tipo. Por exemplo, podemos criar a matriz notas para armazenar as notas obtidas por 100 alunos em um exame, ou então utilizar uma matriz chamada gastos_mensais para anotar nossos gastos mensais ao longo do ano. Uma matriz armazena vários valores de um mesmo tipo: podemos criar matrizes para armazenar qualquer um dos tipos básicos de variáveis, como int, float e char. Cada valor é armazenado separadamente em um elemento da matriz, e pode ser acessado e modificado a qualquer momento.
7.2 – Declaração de uma matriz
Para criar uma matriz, precisamos declarar três atributos dela:
O tipo de valor que vai ser armazenado na matriz
O nome da matriz, para que possamos acessá-la
O número de elementos da matriz
A declaração de uma matriz é muito parecida com a declaração de uma variável, bastando adicionar o número de elementos que desejamos que ela tenha. A sintaxe é a seguinte:
<tipo> <nome> [<numero de elementos>];
Por exemplo, caso quiséssemos criar uma matriz chamada catálogo para armazenar 156 inteiros, a declaração seria assim:
int catalogo [156];
Podemos utilizar qualquer tipo de variáveis já estudadas anteriormente para criar uma matriz, como float, int, char. Uma vez criada uma matriz de um determinado tipo, ela só pode receber valores deste tipo. Note que precisamos definir um tipo para uma matriz: não é possível criar uma matriz “genérica” que aceite um tipo qualquer, ou vários tipos. Isso acontece porque ao declarar uma matriz, o compilador aloca memória suficiente para conter o número de valores especificado de acordo com o tipo da matriz. Por exemplo, uma matriz de 100 elementos do tipo int normalmente irá requerer 100*2 ou 200 bytes de memória. Por outro lado, uma matriz de 100 elementos do tipo float irá requerer 100*4 bytes ou 400 bytes.
Assim como uma variável normal, podemos atribuir valores para uma matriz no momento de sua declaração. Isto é feito utilizando o operador de atribuição “=” seguido dos valores contidos entre chaves e separados por vírgulas. Por exemplo, considere a matriz de inteiros “teste” abaixo:
int teste[5] = { 1, 2, 3, 4 , 5};
Também podemos atribuir apenas parte dos valores de uma matriz, por exemplo, podemos criar uma matriz que comporte 50 valores do tipo float e atribuir apenas 5 valores à ela, deixando para atribuir o restante dos valores no decorrer do programa.
float notas[50] = { 7.65, 8.48, 4.27, 6.78, 9.10 };
A linguagem C++ faz com que toda matriz parcialmente inicializada tenha seus valores restantes automaticamente transformados em zero. Assim, caso precisemos de uma matriz que só contenha zeros, podemos atribuir o primeiro elemento da matriz como zero e deixar que o compilador transforme os elementos restantes em zero, como vemos abaixo:
int zeros[75] = {0};
7.3 – Acessando Valores de uma Matriz
Após criar uma matriz, podemos acessar qualquer valor dentro dela. Cada valor, ou elemento de uma matriz, possui um número próprio. Toda matriz começa no elemento 0. Precisamos ter isso em mente quando acessamos valores dentro de uma matriz, pois o primeiro elemento será o elemento “0”, o segundo elemento será o elemento “1”.
Cada elemento de uma matriz é tratado como uma variável separada. Assim, podemos atribuir valor para um elemento, exibí-lo na tela, utilizá-lo em operações matemáticas e em laços condicionais. O programa abaixo ilustra estas várias ações:
#include <iostream>
using namespace std;
int main() {
int matriz[5] = {1,2,3,4,5};
cout<<"o primeiro valor da matriz é: "<<matriz[0]<<endl;
cout<<"o último valor da matriz é: "<<matriz[4]<<endl;
cout<<"Somando o segundo e o quarto elementos da matriz temos: "<< matriz[1] + matriz[3]<<endl;
matriz[2] = 27;
cout<<"Mudamos o valor do terceiro elemento da matriz para: "<<matriz[2]<<endl;
system(“PAUSE > null”);
return 0;
}
7.4 – Utilizando Laços para Percorrer Matrizes
Uma das utilizações mais úteis dos laços condicionais é o acesso à vários (ou todos) elementos de uma matriz rapidamente. Podemos utilizar qualquer um dos laços que estudamos, mas sem dúvida o laço for é o mais prático para trabalhar-se com matrizes. Utilizamos a variável de controle do laço para acessar cada um dos elementos desejados (lembre-se que a matriz sempre começa no elemento 0), como vemos no programa abaixo que percorre os elementos de uma matriz, primeiro preenchendo a matriz com os dados entrados pelo usuário, depois exibindo estes dados na tela.
#include <iostream>
using namespace std;

int main()
{
int sequencia[4];
for (int i = 0; i < 4; i++) {
cout << "Entre com o elemento numero "<<(i+1)<<" da sequencia: ";
cin >> sequencia[i];
cout << endl;
}
cout << "A sequencia entrada pelo usuario foi: ";
for (int i = 0; i < 4; i++) {
cout << sequencia[i]<<" ";
}
system("PAUSE > null");
return 0;
}
Importante: como vimos no exemplo anterior, podemos utilizar variáveis para acessar os elementos de uma matriz. Da mesma forma, podemos definir constantes para indicar o número de elementos de uma matriz. Essa técnica é muito útil, pois caso precisemos alterar o número de elementos da matriz ao invés de caçarmos no código todas as referências à este número, tudo que precisamos fazer é alterar o valor da constante. Assim, veja o mesmo programa anterior reescrito utilizando uma definição de constante.
#include <iostream>
using namespace std;

int main()
{
const int TAMANHO = 4;
int sequencia[TAMANHO];
for (int i = 0; i < 4; i++) {
cout << "Entre com o elemento numero "<<(i+1)<<" da sequencia: ";
cin >> sequencia[i];
cout << endl;
}
cout << "A sequencia entrada pelo usuario foi: ";
for (int i = 0; i < 4; i++) {
cout << sequencia[i]<<" ";
}
system("PAUSE > null");
return 0;
}
7.5 – Matrizes Multidimensionais
Além das matrizes simples de uma única dimensão, C++ permite a criação de matrizes de múltiplas dimensões. As matrizes bidimensionais são sem dúvida as mais utilizadas e as mais úteis, pois comportam-se como tabelas com linhas e colunas. Ao declarar uma matriz multidimensional, adicionamos um conjunto de colchetes para cada dimensão extra. Entre os colchetes de cada dimensão, colocamos o número de elementos que aquela dimensão terá (ou uma variável que represente o número de elementos). Assim:
int tabela [10] [5]; //matriz bidimensional
int horas [12] [30] [24]; //matriz de três dimensões
int minutos [12] [30] [24] [60]; //matriz de quatro dimensões
Normalmente trabalhamos no máximo com matrizes bidimensionais, mas podem surgir ocasiões onde matrizes de mais de duas dimensões sejam necessárias. Matrizes multidimensionais funcionam como matrizes dentro de matrizes. Por exemplo, uma matriz bidimensional pode ser vista como uma matriz de uma dimensão cujos elementos são outra matrizes. Esta analogia é útil para entender como é feita a inicialização dos valores de matrizes multidimensionais: inicializamos a matriz separando seus elementos por vírgulas, onde cada elemento é uma matriz individual e é inicializada da mesma forma que a matriz “principal”. Por exemplo, seja a matriz bidimensional tabela:
int tabela [2] [3] = { { 1, 2, 3} , { 4, 5, 6}};
Veja que cada “elemento” é fechado por chaves e separado por vírgulas. A mesma coisa acontece com matrizes de três dimensões, e assim por diante. O exemplo abaixo mostra a declaração de uma matriz tridimensional. Preste atenção na presença das chaves e das vírgulas separando cada elemento diferente:
int tritabela [2] [2] [2] = { {{ 9, 8}, {7,6}} , {{5, 4},{3, 2}} };
Cada elemento de uma matriz multidimensional pode ser acessado individualmente, indicando a posição exata do valor dentro da matriz. Como vimos anteriormente no caso das matrizes simples, a utilização dos laços condicionais facilita o acesso aos vários elementos de uma matriz. No caso das matrizes multidimensionais, utilizamos laços aninhados para acessar cada dimensão de uma vez. O programa abaixo declara a matriz tridimensional que vimos anteriormente e utiliza uma sucessão de laços for aninhados para exibir a matriz na tela.
#include <iostream>
using namespace std;

int main()
{
int tritabela [2] [2] [2] = {{{ 9, 8}, {7,6}},{{5, 4},{3, 2}}};
for (int i = 0; i < 2; i++) {
for (int j = 0; j < 2; j++) {
for (int k = 0; k < 2; k++) {
cout << tritabela[i][j][k]<<" ";
}
cout<<endl;
}
cout<<endl;
}
system("PAUSE > null");
return 0;
}
7.6 – Matrizes em Funções
Podemos utilizar matrizes como parâmetros de funções com alguns cuidados simples. Ao declarar os parâmetros que serão utilizados na função, declaramos um parâmetro para a matriz e um parâmetro para seu tamanho separadamente. Fazemos isso para que possamos utilizar matrizes de qualquer tamanho utilizando a mesma função. Ao criar o parâmetro referente à matriz, usamos um conjunto de colchetes vazios para indicar que se trata de uma matriz e não de uma variável simples. No entanto, quando utilizarmos esta função, passamos para ela somente o nome da matriz, sem os parênteses: o programa “já sabe” que uma matriz será enviada, pois já declaramos isso no protótipo da função. O programa abaixo mostra uma função que soma todos os elementos de uma matriz.
#include <iostream>
using namespace std;

int soma( int matriz[], int tamanho) {
int resultado = 0;
for (int i = 0; i < tamanho; i++){
resultado = resultado + matriz[i];
}
return resultado;
}

int main()
{
const int TAMANHO = 4;
int sequencia[TAMANHO];
int result = 0;
for (int i = 0; i < 4; i++) {
cout << "Entre com o elemento numero "<<(i+1)<<" da sequencia: ";
cin >> sequencia[i];
cout << endl;
}
result = soma(sequencia, TAMANHO);
cout << "A soma de todos os elementos da matriz e igual a "<<result<<"."<<endl;
system("PAUSE > null");
return 0;
}
Também podemos utilizar funções que trabalhem com matrizes multidimensionais. Entretanto, ao criar o parâmetro da matriz é preciso declarar o tamanho de todas as dimensões da matriz com exceção da primeira. Por exemplo:
int soma_tabela ( int matriz [ ] [3] [4], int elementos) { comandos; }
A primeira dimensão é deixada em branco, para ter seu tamanho definido pelo outro parâmetro “elementos”. Entretanto, as outras duas dimensões tem seu tamanho definido respectivamente em 3 e 4. Caso deixássemos estas outras duas dimensões sem um tamanho definido, o programa não seria compilado.
É muito importante notar que, ao trabalhar com matrizes dentro de funções, estamos trabalhando com a própria matriz, ou melhor, com o endereço dos dados desta matriz. Normalmente, quando trabalhamos com variáveis dentro de uma função, estamos trabalhando com cópias destes valores. Entretanto, isso não é verdade para matrizes, por razões que veremos no módulo sobre ponteiros. Por enquanto, basta saber que quando trabalhamos com matrizes dentro de funções, qualquer modificação feita na matriz é feita para valer. Se somarmos mais 10 a todos os valores de uma matriz em uma função, quando a função terminar a matriz estará modificada. Esta característica é muito útil para contornar o fato que não podemos utilizar uma matriz como retorno de uma função: não precisamos que a função retorne uma matriz, só precisamos fazer com que a função altere a matriz. Por exemplo, o programa abaixo usa uma função para ordenar os números dentro de uma matriz.
#include <iostream>
using namespace std;

int ordena( int matriz[], int tamanho) {
int temp = 0;
for (int i = 0; i < tamanho; i++){
for (int j = i; j < tamanho; j++){
if (matriz[j] < matriz [i]) {
temp = matriz[i];
matriz[i] = matriz[j];
matriz[j] = temp;
}
}
}
}

int main()
{
const int TAMANHO = 4;
int sequencia[TAMANHO] = {27, 12, 42, -8};
cout <<"Sequencia original: ";
for (int i = 0; i < 4; i++) {
cout << sequencia[i]<<" ";
}
cout<<endl;
ordena(sequencia, TAMANHO);
cout <<"Sequencia ordenada: ";
for (int i = 0; i < 4; i++) {
cout << sequencia[i]<<" ";
}
cout<<endl;
system("PAUSE > null");
return 0;
}
7.7 – Criando Matrizes Dinamicamente
A linguagem C++ prima pela economia de memória durante a execução de seus programas. Quando declaramos uma matriz no início de um programa, o compilador separa um “pedaço” da memória do computador de tamanho equivalente ao tamanho máximo da matriz. Assim, se criarmos uma matriz de inteiros com 200 elementos, o compilador separa na memória do computador um espaço de 400 bytes (2 bytes x 200 elementos). Entretanto, quando trabalhamos com matrizes frequentemente não sabemos qual o tamanho exato de elementos que precisamos. Ao criar uma matriz, estipulamos um valor que seja maior do que o valor máximo de elementos que precisamos, mesmo que não utilizemos todos os espaços disponíveis na matriz. Isso causa desperdício de memória do computador e lentidão na execução de programas.
Para evitar este problema, a linguagem C++ introduz dois novos operadores de controle de memória. Em primeiro lugar, temos o operador new, que é utilizado para alocar espaços na memória de computador durante a execução de um programa. Em segundo lugar, o operador delete, que libera a memória alocada com o operador new após sua utilização. Este tipo de criação e destruição de variáveis é chamado de alocação dinâmica. Uma matriz criada dessa forma é chamada de matriz dinâmica.
A vantagem de se criar matrizes dinâmicas é que a memória utilizada pela matriz só é “tirada” do sistema após a execução do operador new, e pode ser liberada novamente após sua utilização com o operador delete. Quando criamos uma matriz do jeito “normal”, a memória utilizada por ela é guardada pelo programa durante toda sua execução, consumindo recursos desnecessários do computador.
A sintaxe para criar-se uma matriz utilizando o operador new é a seguinte:
<tipo> * <nome> = new <tipo> [ <numero de elementos> ];
Por exemplo, para criar uma matriz do tipo float com 10 elementos:
float * lista = new float [10];
O acesso aos elementos da nova matriz é feito de forma análoga ao de uma matriz criada do jeito “normal”: utilizamos o nome da matriz seguido do número do elemento acessado. Como já dito anteriormente, o primeiro elemento de uma matriz é sempre o elemento 0.
Note que não podemos inicializar automaticamente os valores de uma matriz criada dessa forma. Cada elemento da matriz deve ter seu valor atribuído separadamente.
A outra face do operador new é o operador delete. Só podemos utilizar este operador com matrizes criadas pelo operador new, ou seja, matrizes criadas por declaração normal não podem ser apagadas durante a execução do programa. Para utilizar o operador delete para apagar uma matriz, a sintaxe é a seguinte:
delete <nome>;
O programa abaixo pede ao usuário o número de elementos da matriz, cria uma matriz e depois volta a pedir ao usuário os valores de cada um dos elementos da matriz. No final do programa, a matriz é deletada.
#include <iostream>
using namespace std;

int main() {
int tamanho = 0;
cout<<"Entre com o tamanho da matriz: ";
cin>>tamanho;
cout<<endl;
int *sequencia = new int[tamanho];
for (int i = 0; i < tamanho; i++) {
cout << "Entre com o elemento "<<(i+1)<<" da matriz: ";
cin>>sequencia[i];
cout<<endl;
}
cout<<"A matriz entrada e: ";
for (int i = 0; i < tamanho; i++) {
cout << sequencia[i]<<" ";
}
cout<<endl;
cout<<"Programa encerrado. A matriz criada será deletada, e a memória será devolvida para o processador.";
delete sequencia;
system("PAUSE > null");
return 0;
}

-------------------------------------------------------------------------------------------------------------
Publicado originalmente em - sexta-feira, 13 de agosto de 2010
atualizacao da referencia bibliografica em -atualizado em 21/08/2017 - 03:01
eu publiquei em uma epoca de ensino medio, sem entender de direito autroal, o arquivo é do autor (Esta apostila é o resultado do trabalho de conclusão de curso realizado por Enrique Camargo Trevelin, aluno do curso de Engenharia Elétrica, sob a orientação do Prof. Carlos Antônio Alves. ), está publicado no site : (http://apostilacpp.awardspace.com/index.php?pagina=home) na integra e peco desculpa se o autor quer que retire do site o material, mande um email para
contatomorgao@gmail.com