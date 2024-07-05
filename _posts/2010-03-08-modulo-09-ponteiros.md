---
layout: post
title: Módulo 9 – Ponteiros
date: 2010-02-08 19:45
author: Morgao
comments: true
categories: [Algoritmos, Linguagem C++, Programação]
---
Módulo 9 – Ponteiros
9.1 - Endereços de Memória
Já dissemos várias vezes que as variáveis ficam armazenadas em determinados espaços na memória do computador. Ao trabalhar com uma variável, geralmente não precisamos nos preocupar com o endereço desta variável, pois o compilador cuida destes “detalhes” técnicos. Entretanto, pode ser bastante útil saber o endereço de uma variável. Em C++, utilizamos o operador de endereço & para acessar o endereço de uma variável. Sua sintaxe é muito simples, bastando inserir o operador & na frente do nome de uma variável:
&<variável>
O programa abaixo cria uma variável inteira e utiliza cout para exibir o valor da variável e depois seu endereço, utilizando o operador &.
#include <iostream>
using namespace std;

int main( )
{
int valor = 124;
cout << "A variavel armazena o seguinte valor: ";
cout << valor <<endl;
cout << "A variavel esta armazenada no seguinte endereço: ";
cout << &valor <<endl;
system(“PAUSE > null”);
return 0;
}
O operador de endereço é utilizável também em matrizes. Quando utilizamos este operador em uma matriz, temos o endereço inicial da matriz, que nada mais é do que o endereço do primeiro elemento da matriz. Também podemos utilizar o operador & para acessar os endereços de cada elemento de uma matriz, como vemos no exemplo abaixo:
#include <iostream>
using namespace std;

int main( )
{
int matriz[3] = { 42, 37, 28 };
cout << &matriz[0] << " : " << matriz[0] << endl;
cout << &matriz[1] << " : " << matriz[1] << endl;
cout << &matriz[2] << " : " << matriz[2] << endl;
system(“PAUSE > null”);
return 0;
}
9.2 – Ponteiros
Em linguagem de programação, chamamos de ponteiros as variáveis especiais que armazenam endereços de memória. Como já vimos, as variáveis possuem três atributos básicos: seu nome, o valor armazenado por ela e o endereço de memória onde ela está armazenada. Os ponteiros, ao invés de armazenar valores, armazenam endereços de memória. Ao utilizar um ponteiro, podemos acessar este endereço e manipular o valor que está armazenado lá dentro.
Ponteiros são utilizados constantemente em C++. Por exemplo, quando trabalhamos com matrizes sem saber estamos trabalhando com ponteiros: a linguagem C++ ( e a linguagem C também) utiliza ponteiros para acessar as diversas posições de uma matriz.
9.3 – Declarando Ponteiros
A declaração de ponteiros é bem parecido com a declaração de variáveis. Assim como uma variável comum, ponteiros precisam ter tipos (como int, float, long) para indicar ao compilador qual o tipo de valor para o qual o ponteiro aponta. Além disso, utilizamos o asterisco * antes do nome do ponteiro, para indicar ao compilador que estamos declarando um ponteiro e não uma variável simples. A sintaxe da declaração de um ponteiro é vista abaixo:
<tipo> * <nome do ponteiro>;
Ponteiros podem ser de qualquer tipo, como int, float, long e até mesmo sem tipo (void). Abaixo temos alguns exemplos de declaração de ponteiro:
int *referencia;
float *media;
Após declarar um ponteiro, é importante atribuir o endereço que será armazenado por ele. Isto é feito utilizando o operador & para obter o endereço de uma variável. A atribuição é feita da mesma forma que atribuimos valores para uma variável. Suponha que tenhamos em um programa qualquer um ponteiro chamado “referencia” e uma variável chamada “valor”. Caso desejássemos que o ponteiro referencia armazenasse o endereço da variável valor, faríamos a seguinte atribuição:
referencia = &valor;
O programa abaixo é simplesmente o primeiro programa-exemplo deste módulo, reescrito utilizando-se um ponteiro para armazenar o endereço da variável. Note que cout exibe corretamente o endereço armazenado pelo ponteiro, da mesma maneira que exibiria uma variável:
#include <iostream>
using namespace std;

int main( )
{
int valor = 124;
int *referencia;
cout << "A variavel armazena o seguinte valor: ";
cout << valor <<endl;
cout << "A variavel esta armazenada no seguinte endereço: ";
referencia = &valor;
cout << referencia <<endl;
system(“PAUSE > null”);
return 0;
}
9.4 – Desreferenciando um Ponteiro
“Desferenciar” um ponteiro nada mais é do que acessar o valor que está armazenado no endereço de memória armazenado pelo ponteiro. Esta operação é feita pelo operador * (que chamamos formalmente de “asterisco de indireção”). Assim como utilizamos o operador de endereço & para acessar o endereço de uma variável, utilizamos o asterisco de indireção para obter o valor que está dentro da posição de memória guardada pela ponteiro. Para utilizá-lo basta adicionar o asterisco antes do nome de um ponteiro em qualquer operação ou comando dentro um programa:
*<nome do ponteiro>;
O programa abaixo é bastante parecido com os anteriores, mas utiliza o asterisco de indireção para obter o valor da posição de memória indicada pelo ponteiro. Além disso, este valor é modificado utilizando este mesmo operador:
#include <iostream>
using namespace std;

int main( )
{
int valor = 42;
int * ponteiro;
ponteiro = &valor;
cout << "Endereço apontado pelo ponteiro: ";
cout << ponteiro <<endl;
cout << "Valor guardado por este endereço: ";
cout << *ponteiro <<endl;
cout << “Valor atualizado!”;
*ponteiro = 12458;
cout << "Novo valor guardado por este endereço: ";
cout << *ponteiro <<endl;
system(“PAUSE > null”);
return 0;
}
Esta operação é útil para acessar e modificar valores dentro de posições de memória. Um ponteiro com o asterisco de indireção se comporta como uma variável comum. Podemos utilizá-lo em comandos, expressões, atribuições e onde mais for necessário.
9.5 –Ponteiros em Funções: Chamada por Referência
Como vimos no módulo 4, podemos criar funções que utilizam dois tipos de chamada de parâmetros: a chamada por valor, onde a função recebe uma cópia do valor de uma variável e a variável em si não é alterada pela função, e a chamada por referência, onde a função recebe o endereço da variável, que tem seu valor alterado durante a execução da função. Nesta seção explicaremos como é feita a chamada de por referência.
A chamada por referência acontece quando passamos um ponteiro como parâmetro de uma função. Já sabemos que o ponteiro armazena um endereço de uma variável: assim, a função recebe o endereço de uma variável, e pode alterar o valor armazenado neste endereço da maneira que precisar.
É preciso uma série de cuidados quando criamos funções que usam chamada por referência. A primeira delas é declarar os ponteiros que serão utilizados como parâmetros no protótipo da função. Por exemplo:
void soma ( int * parcela1, int * parcela2) {

//corpo da função

}
A declaração de ponteiros como parâmetros é feita da mesma forma que declararíamos ponteiros em um programa, declarando o tipo e utilizando o asterisco para indicar que se trata de um ponteiro.
Ao escrever o corpo da função, também é preciso atenção. Como estamos trabalhando com um ponteiro, é preciso lembrar que um ponteiro indica um endereço. Quando precisamos do valor guardado neste endereço, é preciso usar o asterisco antes do ponteiro. Assim, qualquer operação envolvendo o valor indicado pelo ponteiro deve conter o ponteiro acompanhado do asterisco. Caso utilizemos o próprio ponteiro, não estamos alterando o valor, e sim o endereço. De forma resumida:
ponteiro ? endereço
*ponteiro ? valor
É muito importante ter isso em mente ao criar funções que utilizem ponteiros. A confusão entre o uso de um ponteiro como endereço ou como valor é a principal fonte de erros nestas situações. O código abaixo é o corpo de uma função que utiliza ponteiros. Note que utilizamos um ponteiro e uma variável normal como parâmetros. Além disso, sempre que utilizamos o valor referenciado pelo ponteiro durante a função, utilizamos o asterisco de dereferenciação antes do nome do ponteiro.
void potencia( int *variavel,int elevado) {
int original = 2;
if (elevado == 0) {
*variavel = 1;
return;
}

if (elevado == 1) return;

for (int i = 2; i <= elevado; i++) {
*variavel = *variavel*original;
}
Quando utilizamos uma função deste tipo, é preciso que o programa passe um ponteiro como parâmetro desta função. Isto pode ser feito de duas maneiras: indicando um ponteiro que contenha um endereço, ou indicando simplesmente o endereço de uma variável. Como já vimos, utilizamos o operador & antes do nome de uma variável para obter seu endereço. Assim, uma função que utiliza ponteiros aceita em seu parâmetro um ponteiro ou o endereço de uma variável ( &variável ).
O programa abaixo mostra a utilização de uma função com chamada por referência, tendo em mente os cuidados descritos anteriormente.
#include <iostream>
using namespace std;

void potencia( int *variavel,int elevado) {
int original = 2;
if (elevado == 0) {
*variavel = 1;
return;
}
if (elevado == 1) return;
for (int i = 2; i <= elevado; i++) {
*variavel = *variavel*original;
}
}

int main()
{
int dois = 2;
int j = 5;
potencia( &dois, j);
cout << "dois elevado a "<< j <<" : "<< dois << endl;
system("PAUSE > null");
return 0;
}
A utilização da chamada por referência parece não ter muita utilidade quando trabalhamos com variáveis simples. Porém, este cenário muda quando trabalhamos com matrizes: a utilização da chamada por referência é a melhor forma de se criar funções que trabalham com matrizes.
9.6 – Ponteiros para Matrizes
Já vimos que podemos utilizar matrizes como parâmetros de funções e que não podemos utilizar matrizes como retorno de funções. Também já vimos que essa limitação pode ser superada graças ao fato das funções poderem alterar as matrizes que recebem como parâmetros. Assim, caso precisemos de uma função que some 20 à todos os elementos de uma matriz, não podemos criar uma função que retorne uma cópia da matriz alterada, mas podemos criar facilmente uma função que altere a própria matriz, utilizando a chamada por referência.
Isto acontece porque quando trabalhamos com funções, C++ trata o nome de uma matriz como o endereço de seu primeiro elemento. Assim:
matriz = = &matriz [0]
Assim, quando utilizamos uma matriz como parâmetro de um função, estamos na verdade enviando o endereço de seu primeiro elemento para a função, como numa chamada por referência. A partir deste endereço, a função tem acesso a todos os elementos da matriz, e pode fazer todas as alterações que precisar nesta matriz. Podemos utilizar o nome da matriz como se fosse um ponteiro: utilizando o asterisco para obter seu valor, e realizar operações de aritmética de ponteiros para acessar seus elementos. Entretanto, é mais fácil utilizar a matriz do modo que já conhecemos: utilizando o nome da matriz e o número do elemento entre chaves para acessar e alterar qualquer um de seus elementos. Abaixo explicaremos como funciona a aritmética dos ponteiros.
Já sabemos que um ponteiro é um valor que aponta para uma posição de memória específica. Se somar-se o valor 1 a um ponteiro, o ponteiro apontará para a próxima posição de memória. Se somar-se 5 ao valor de um ponteiro, o ponteiro apontará para a posição de memória de cinco posições adiante do endereço atual. No entanto, a aritmética de ponteiro não é tão simples quanto parece. Por exemplo, assuma que um ponteiro contenha o endereço 1000. Se fosse somado 1 ao ponteiro, poderia se esperar que o resultado fosse 1001. No entanto, o endereço resultante depende do tipo de ponteiro. Por exemplo, se fosse somado 1 a um ponteiro do tipo char (que contém 1000), o endereço resultante será 1001. Se fosse somado 1 a um ponteiro do tipo int (que requer dois bytes na memória), o endereço resultante será 1002. Quando incrementamos um ponteiro de um determinado tipo, o próprio compilador já faz a conversão de tipo para nós. Assim, podemos utilizar o incremento de um ponteiro para acessar os vários elementos de uma matriz de qualquer tipo. O programa abaixo utiliza a aritmética de ponteiros para acessar uma matriz. Cria-se um ponteiro que aponta para o endereço do primeiro elemento da matriz (lembre-se sempre que o nome de uma matriz indica o mesmo endereço de seu primeiro elemento), e a partir daí vamos incrementando este ponteiro para exibir todos os elementos da matriz. Inicialmente, incrementamos o ponteiro “manualmente” para ilustrar melhor o que estamos fazendo, mas podemos facilmente utilizar um laço for para incrementar o ponteiro e percorrer a matriz toda.
#include <iostream> using namespace std; int main() { int tabela[5] = { 20, 34, 58, 70, 125 }; int *ponteiro = tabela; cout << *ponteiro << endl; ponteiro++; cout << *ponteiro << endl; for (int i = 2; i < 5; i++){ ponteiro++; cout << *ponteiro << endl; } system("PAUSE > null"); return 0; }
O programa abaixo ilustra a criação de duas funções que utilizam matrizes. As duas funções fazem a mesma coisa (organizar uma matriz em ordem crescente), mas a primeira função trata a matriz como um ponteiro, enquanto que a segunda trabalha com a matriz do modo já conhecido. Os dois métodos são válidos e tem sua utilidade, mas de modo geral é mais simples e recomendável utilizar matrizes do modo já estudado.
#include <iostream> using namespace std; int ordenamatriz( int matriz[], int tamanho) { int temp = 0; for (int i = 0; i < tamanho; i++){ for (int j = i; j < tamanho; j++){ if (matriz[j] < matriz [i]) { temp = matriz[i]; matriz[i] = matriz[j]; matriz[j] = temp; } } } } int ordenaponteiro (int *matriz, int tamanho) { int temp = 0; for (int i =0; i < tamanho; i++) { for (int j = i; j < tamanho; j++){ if ( *(matriz + j) < *(matriz + i ) ) { temp = *( matriz + i ); *(matriz + i) = *(matriz + j); *(matriz + j) = temp; } } } } int main() { const int TAMANHO = 4; int sequencia[TAMANHO] = {27, 12, 42, -8}; int sequencia2[TAMANHO] = {21, -27, 1024, 42}; cout<<endl; ordenamatriz(sequencia, TAMANHO); ordenaponteiro(sequencia2, TAMANHO); cout <<"Sequencia ordenada 1: "; for (int i = 0; i < 4; i++) { cout << sequencia[i]<<" "; } cout<<endl; cout <<"Sequencia ordenada 2: "; for (int i = 0; i < 4; i++) { cout << sequencia2[i]<<" "; } cout<<endl; system("PAUSE > null"); return 0; }
9.7 – Funções que Retornam Ponteiros
Podemos criar funções que retornam ponteiros para o programa que as chamou. Estas funções são úteis, por exemplo, para trabalhar com matrizes e strings, retornando o endereço da matriz ou string modificada para o programa. Para declarar uma função que retorne um ponteiro, é preciso declarar o tipo de retorno no protótipo da função, não se esquecendo do asterisco. Por exemplo, veja o protótipo de função abaixo:
int *calculaseno ( ); char *maisculas( );
9.8 – Ponteiros para Funções
Encerrando os tópicos relacionados com ponteiros e funções, temos os ponteiros para funções. Um ponteiro para uma função armazena o endereço de uma função. Este tipo de ponteiro é útil para ser usado como parâmetro de outra função. Sua declaração é parecida com a declaração de funções que retornam ponteiros, mas não deve ser confundida. Sua sintaxe é a seguinte:
<tipo do ponteiro/função> (*<nome da função>) ( );
Basicamente, coloca-se o asterisco antes do nome da função, junto dos parênteses, Alguns exemplos:
int (*seno) ( ); int (*integral) ( );
9.9 – Ponteiros para Ponteiros
Ponteiros, assim como variáveis, ocupam um endereço na memória do computador. Podemos então criar ponteiros que apontam para o endereço de outro ponteiro, como vemos no código exemplo abaixo:
int inteiro = 1024; int *pontinteiro = &inteiro; int *pontponteiro = &pontinteiro;
Declaramos um ponteiro para um ponteiro utilizando dois asteriscos antes de declarar seu nome. No programa acima temos a seguinte sequência:
pontponteiro --> pontinteiro --> inteiro
Utilizando o operador de desreferência * no ponteiro “pontpvalor”, recebemos o valro armazenado pela variável “inteiro”, como já era de se esperar. Quando utilizamos o operador de desreferência * no ponteiro “pontppont”, o que recebemos é o ponteiro “pontpinteiro”, ou melhor, o valor armazenado por ele: o endereço da variável inteiro. Para acessar o valor da variável “inteiro” utilizando o ponteiro “pontppont”, precisamos utilizar o operador de desreferência * duas vezes. O programa abaixo mostra três maneiras diferentes de se acessar o valor de “inteiro”: acessando a própria variável, utilizando um ponteiro e o operador de desreferência, ou utilizando um ponteiro para ponteiro e o operador de desreferência duas vezes.
#include <iostream> using namespace std; int main() { int inteiro = 1024; int *pontinteiro = &inteiro; int **pontponteiro = &pontinteiro; cout << "Acessando o valor da variavel inteiro: "<<endl; cout << "De forma direta (pela propria variavel): "<< inteiro << endl; cout << "De forma indireta (pelo ponteiro para variavel pontinteiro): "<< *pontinteiro << endl; cout << "De forma duplamente indireta (pelo ponteiro para ponteiro pontponteiro): "<< **pontponteiro << endl; system("PAUSE > null"); return 0; }
Na verdade, C++ nos permites criar infinitas indireções (ponteiros para ponteiros para ponteiros...e assim por diante). Mas na prática, a utilização de ponteiros para ponteiros é geralmente evitada por causar grande confusão e dificultar a compreensão dos programas.
9.10 – Operadores new e delete
Já falamos no módulo sobre matrizes da importância dos operadores new e delete. A linguagem C++ prima pela economia de memória, para possibilitar a construção de programas maiores e/ou mais rápidos. Assim, temos dois operadores que gerenciam a alocação e a liberação de memória dinamicamente, possibilitando a criação e destruição de variáveis durante a execução de um programa para evitar o desperdício de memória. Este tipo de criação e destruição de variáveis é chamado de alocação dinâmica.
A vantagem de se criar variáveis dinâmicas é que a memória utilizada por esta variável só é “tirada” do sistema após a execução do operador new, e pode ser liberada novamente após sua utilização com o operador delete. Quando declaramos uma variável do jeito “normal”, a memória utilizada por ela é guardada pelo programa durante toda sua execução, consumindo recursos desnecessários do computador. A sintaxe para se criar uma variável com o operador new é a seguinte:
<tipo> * <nome> = new <tipo>;
Como você deve ter percebido, estamos criando um ponteiro. A novidade está do lado direito do operador de atribuição: o uso do operador new faz com que o sistema separe um espaço na memória para armazenar uma variável do tipo declarado (ou ainda uma matriz, como vimos anteriormente). Para acessar este espaço, utilizamos o ponteiro que acabamos de criar, utilizando o operador de desreferência * para acessar o valor que está armazenado ali.
A outra face do operador new é o operador delete. Só podemos utilizar este operador com variáveis criadas pelo operador new, ou melhor, com os ponteiros que usamos para acessar a memória alocada com o operador new. O uso do operador delete é bastante simples:
delete <nome>;
Após o uso do operador delete, o espaço alocado por new é totalmente liberado para o sistema.
Apesar da vantagem da economia de memória apresentada pelos operadores new e delete, é preciso saber aonde utilizá-los. Eles são especialmente úteis para matrizes cujo tamanho exato não conhecemos, ocasionando grande economia de memória. Entretanto, para variáveis que serão utilizadas o tempo todo pelo programa, a economia de memória obtida não é tão grande, e a alocação/liberação constante de memória pode deixar o programa até mais lento. Assim, recomenda-se a utilização da declaração “normal” de variáveis na maioria dos programas que criamos.

-------------------------------------------------------------------------------------------------------------

Publicado originalmente em - sexta-feira, 13 de agosto de 2010

atualizacao da referencia bibliografica em -atualizado em 21/08/2017 - 03:01

eu publiquei em uma epoca de ensino medio, sem entender de direito autroal, o arquivo é do autor (Esta apostila é o resultado do trabalho de conclusão de curso realizado por Enrique Camargo Trevelin, aluno do curso de Engenharia Elétrica, sob a orientação do Prof. Carlos Antônio Alves. ), está publicado no site : (http://apostilacpp.awardspace.com/index.php?pagina=home) na integra e peco desculpa se o autor quer que retire do site o material, mande um email para
contatomorgao@gmail.com