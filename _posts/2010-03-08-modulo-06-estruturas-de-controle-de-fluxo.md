---
layout: post
title: Módulo 6 - Estruturas de Controle de Fluxo
date: 2010-02-08 19:45
author: Morgao
comments: true
categories: [Algoritmos, Linguagem C++, Programação]
---
Módulo 6 - Estruturas de Controle de Fluxo
Módulo 6 - Estruturas de Controle de Fluxo
6.1 - Estruturas de Controle de Fluxo
Estruturas de controle de fluxo são comandos utilizados em uma linguagem de programação para determinar qual a ordem e quais comandos devem ser executados pelo programa em uma dada condição. C++ oferece várias opções de estrutura de controle de fluxo, todas elas herdadas da linguagem C. Neste módulo iremos ver como funcionam cada uma destas estruturas em detalhe.
Geralmente, as estruturas de controle utilizam expressões condicionais. Caso a expressão retorne 0, dizemos que ela é falsa. Caso ela retorne qualquer outro valor, dizemos que ela é verdadeira. Nesse contexto, qualquer expressão pode ser utilizada desde que retorne um valor zero ou não zero. Podemos utilizar operadores aritméticos, relacionais, lógicos, desde que no final a expressão nos retorne um valor que possa ser testado. Também é possível testar várias condições ao mesmo tempo, unindo as expressões com o auxílio dos operadores AND e OR.
6.2 – A declaração if
Utilizamos a declaração if quando desejamos que o programa teste uma ou mais condições e execute um ou outro comando de acordo com o resultado deste teste. A sintaxe de if é a seguinte:
if (condição)
{
comandos;
}
else
{
comandos;
}
A declaração if testará a condição expressa entre parênteses. Caso a condição seja verdadeira, os comandos declarados entre as chaves serão executados.
A declaração else é opcional: podemos utilizá-la para determinar um conjunto de comandos que serão executados caso a condição testada seja falsa. Note que somente um dos conjuntos de comandos será executado, nunca os dois: caso a condição seja verdadeira, o bloco pertencente a if será executado; caso a condição falhe, o bloco pertencente a else será executado.
O programa abaixo ilustra de maneira simples o uso da declaração if-else, obtendo um número do usuário e verificando se este valor é maior ou igual a 50.
#include <iostream>
using namespace std;

int main()
{
int teste;
cout<<"Digite um numero qualquer:\n";
cin>> teste;
if (teste > 50)
{
cout<<"O numero que voce digitou é maior que 50";
}
else
{
cout<<"O numero que voce digitou é menor que 50";
}
system("PAUSE > null");
return 0;
}
É possível também aninhar ifs, ou seja, fazer uma declaração if dentro de outra declaração if anterior. Este é um método muito útil em programação, mas é preciso tomar cuidado ao utilizá-lo para saber qual bloco else pertence à qual if. Em C++, o else é ligado ao if mais próximo dentro do mesmo bloco de código que já não tenha uma declaração else associada a ele. Para se certificar de que estamos aninhando os ifs e elses corretamente, utilizamos chaves para delimitar os diferentes blocos, como pode ser visto no código abaixo:
if ( x > 10)
{
if ( x == 17)
{
cout<< “x é maior que 10 e igual a 17”;
}
else
{
cout<< “x é maior que 10 mas não é igual a 17”;
}
}
else
{
cout << “x é menor do que 10”;
}
Note que a segunda declaração if está totalmente contida pelas chaves da primeira declaração if. Utilizou-se chaves em todas os blocos de comando, para melhor separar as condições dos blocos de comandos. Além disso, note o uso da tabulação para separar visualmente os diferentes blocos e declarações: poderíamos escrever todo o código sem usar tabulação, alinhando todas as linhas à esquerda, mas isto dificultaria a identificação das diferentes declarações.
6.3 – O Encadeamento If – Else if
Utilizamos a variação “If – Else If” quando desejamos que o programa teste várias condições em sequência, até encontrar uma que seja verdadeira. Sua sintaxe é muito parecida com a declaração if simples:
if (condição)
{
comandos;
}
else if (condição)
{
comandos;
}
else if (condição)
{
comandos;
}
else
{
comandos;
}
Cada bloco “else if” deverá testar uma condição diferente. O programa testará todas as condições na sequência, de cima para baixo, até encontrar uma condição verdadeira. Quando isto acontece, os comandos pertencentes ao bloco “verdadeiro” serão executados enquanto todos os outros blocos do encadeamento são ignorados. Caso nenhuma condição “else if” seja verdadeira, executa-se o bloco de comandos pertencente ao else final. Note que o else é opcional: Se o else final não estiver presente e todas as outras condições forem falsas, então nenhuma ação será realizada.
Utilizando este encadeamento, ampliaremos o programa anterior para que ele teste várias condições sobre um número enviado pelo usuário, até encontrar uma condição verdadeira.
#include <iostream>
using namespace std;

int main()
{
int teste;
cout<<"Digite um numero qualquer:\n";
cin>> teste;
if (teste <= 50)
{
cout<<"O número que você digitou é menor que 50\n";
}
else if (teste > 50 && teste <= 100)
{
cout<<"O número digitado é maior que 50 e menor ou igual a 100\n";
}
else if (teste > 100 && teste <= 200)
{
cout<<"O número digitado é maior que 100 e menor ou igual a 200\n";
}
else
{
cout<<"O numero digitado é maior que 200\n";
}
system("PAUSE > null");
return 0;
}
6.4 – A Declaração Switch
A declaração switch é uma maneira fácil e elegante de se fazer uma tomada de decisão com múltiplas escolhas. Na declaração switch, a variável é sucessivamente testada contra uma lista de inteiros ou constantes caractere. Quando uma associação é encontrada, o conjunto de comandos associado com a constante é executado. Veja a sintaxe de switch abaixo:
switch ( variável )
{
case valor1:
comandos;
break;

case valor2:
comandos;
break;

...

case valorx;
comandos;
break;

default:
comandos;
}
A declaração switch testa o valor de uma única variável. Note que existem vários “case”, cada um associado a um determinado valor. A declaração comparará o valor da variável com o valor de cada um dos “case”: quando uma associação é encontrada, os comandos pertencentes ao “case” relacionado são executados. Se nenhuma associação for encontrada, a declaração switch executará os comandos pertencentes ao bloco default (note que o bloco default é opcional: caso ele não exista, caso nenhuma associação seja encontrada a declaração switch termina sem que nenhum comando seja executado). O exemplo abaixo demonstra uma utilização da declaração switch.
#include <iostream>
using namespace std;

int main()
{
int option;
cout<<"Digite a opção desejada:\n";
cout<<"1. Opção 1\n";
cout<<"2. Opção 2\n";
cout<<"3. Opção 3\n";
option = 0;
cin>> option;
switch(option)
{
case 1:
cout<<"Você escolheu a primeira opção\n";
break;
case 2:
cout<<"Você escolheu a segunda opção\n";
break;
case 3:
cout<<"Você escolheu a terceira opção\n";
break;
default:
cout<<"Você escolheu uma opção inválida!\n";
}
system("PAUSE > null");
return 0;
}
Após o fim de cada bloco de comandos “case”, é comum utilizar o comando “break;”. Este comando interrompe a execução do laço em que o programa se encontra, fazendo com que o programa prossiga para o próximo comando imediatamente após o laço. No caso de switch, o comando break assegura que a execução da declaração switch termine, forçando o programa à voltar para sua execução normal. Caso omitíssemos os comandos break; no fim de cada bloco, a declaração switch executaria os comandos presentes no “case” em que a associação foi encontrada, e continuaria a executar todos os comandos presentes em todos os “case” na sequência (incluindo o bloco default) até o término da declaração switch. Note que este comportamento pode ser útil em alguns programas, como por exemplo uma sequência de operações matemáticas onde utilizamos a declaração switch para escolher o ponto de partida da sequência.
6.5 – A declaração for
Utiliza-se a declaração for para realizar tarefas repetitivas dentro de um programa, como somar todos os elementos de uma matriz ou exibir na tela uma sequência grande de valores. A declaração for tem o seguinte formato:
for ( valor_inicial; condição_testada; valor_incremento)
{
comandos;
}
A declaração for é o que chamamos de laço ou loop em programação: um conjunto de comandos que serão executados repetidamente até que uma determinada condição falhe e termine o laço. Em for, determinamos o número de repetições desejadas através de uma variável de controle que será modificada pelos argumentos da declaração for.
valor_inicial refere-se à atribuição de um valor inicial para a variável de controle, por exemplo: “controle = 0;”
condição_testada é uma expressão qualquer contendo a variável de controle, que será testada continuamente. Enquanto a condição for verdadeira, os comandos dentro do laço for serão executados. Quando a condição falhar, o laço termina e o programa continua seu fluxo normal. Por exemplo, “controle < 30;” é uma expressão válida, que testa se a variável controle é menor do que 30.
valor_incremento é uma expressão que incrementará a variável de controle sempre que a condição testada anteriormente for verdadeira. Por exemplo, “controle = controle + 1” ou mais simplesmente “controle++”
Como já dissemos, os comandos entre as chaves serão executados sempre que a condição testada for verdadeira, e se repetirão até que a condição se torne falsa e o laço termine.
O exemplo de código abaixo mostra uma declaração de laço for utilizando o exemplo dado anteriormente:
#include <iostream>
using namespace std;

int main()
{
int controle;
for ( controle = 0; controle <= 30; controle++)
{
cout << "Esta frase se repetirá até que a variável controle seja maior do que 30\n";
cout<< "controle = "<<controle<<"\n";
}
system("PAUSE > null");
return 0;
}
A variável controle começa com valor 0. O laço for testa o valor da variável continuamente, sempre determinando se ele é menor do que 30.
Sempre que o valor da variável for menor que 30 (condição verdadeira), a variável de controle é incrementada de 1 e os comandos entre as chaves são executados. Quando a variável controle for maior do que 30 (condição falsa), o laço termina e o programa volta a ser executado normalmente.
O comando for é extremamente flexível. Podemos atribuir qualquer valor que quisermos à variável de controle, e também podemos incrementá-la (ou decrementá-la da forma que desejarmos). No exemplo abaixo, utilizamos o laço for de forma inversa ao exemplo anterior: a variável de controle começa em 60 e vai sendo decrementada de 2 a cada repetição.
#include <iostream>
using namespace std;

int main()
{
int controle;
for ( controle = 60; controle >= 0; controle = controle - 2)
{
cout << "Esta frase se repetirá até que a variável controle seja igual a 0\n";
cout<< "controle = "<<controle<<"\n";
}
system("PAUSE > null");
return 0;
}
Os três argumentos do laço for são opcionais: podemos omitir qualquer um dos argumentos, mas precisamos estar atentos às consequências que isto traz ao programa. Por exemplo, o código abaixo omite o argumento de incremento da variável de controle. No entando, fazemos o incremento da variável dentro do bloco de comandos do laço for:
for (x = 0; x <= 50; )
{
cout<<x;
x++;
}
Caso não fizéssemos o incremento dentro do bloco de comandos, a condição testada seria sempre verdadeira, e o laço for nunca terminaria. É o chamado laço infinito:
for (x = 0; x <= 50; )
{
cout<<x;
}
Laços infinitos geralmente surgem por algum erro de programação. Quando o programa entra em um laço infinito, pode-se pressionar Ctrl+C no modo MS-DOS para finalizar o programa.
É importante saber que mesmo omitindo um argumento, é necessário incluir o ponto-e-vírgula correspondente. Podemos omitir também a inicialização da variável de controle, caso ela tenha sido declarada e inicializada anteriormente no programa.
Também podemos criar um laço for nulo, sem um bloco de comandos:
for (x = 0; x == 50; x++)
{
}
Nesse caso, o programa ainda é interrompido para a execução do laço for, e não faz nada durante este intervalo. Esta técnica pode ser utilizada para forçar uma pausa na execução de um programa, porém ela é pouco precisa e desperdiça recursos do microprocessador.
Finalmente, podemos utilizar várias variáveis de controle para controlar um mesmo laço for. Para isto, utilizamos vírgulas para separar as expressões relacionadas a cada variável dentro de um mesmo argumento. O código abaixo abaixo ilustra como isto é feito:
for (i=0, j=100; i <= 100; i++, j++)
{
cout << i << j;
}
A utilização de várias variáveis dentro de um mesmo laço for é particularmente útil em programas que trabalham com matrizes e vetores.
6.6 – A declaração while
Uma outra forma de laço é a declaração while. Seu funcionamento é muito parecido com a declaração for que estudamos anteriormente. Ao encontrar um laço while, o programa testa a condição especificada. Se a condição for verdadeira, efetuará os comandos contidos no laço. Quando a condição se torna falsa, o laço termina e o programa passa para o próximo comando. A sintaxe da declaração while é a seguinte:
while (condição)
{
comandos;
}
A declaração while é diferente é diferente da declaração for em alguns aspectos. Em primeiro lugar, while não utiliza variáveis de controle automaticamente. O único argumento entre os parênteses é a condição a ser testada: caso a condição nunca mude e seja sempre verdadeira, estaremos criando um laço infinito. Assim, cabe ao programador inserir uma variável de controle no laço while para evitar que isso ocorra. Isso pode ser feito declarando-se e inicializando-se uma variável antes do laço while, testando esta variável de controle no laço while e finalmente modificando esta variável (incrementando-a ou decrementando-a) após a execução dos comandos necessários. O programa abaixo demonstra como inserir uma variável de controle no laço while.
#include <iostream>
using namespace std;

int main()
{
int controle = 0;
while (controle < 20)
{
cout<<"A variavel de controle funcionará se esta frase se repetir somente 20 vezes: ";
controle++;
cout<<controle<<" \n";
}
system("PAUSE > null");
return 0;
}
6.7 – A Declaração Do While
A declaração do while é muitíssimo parecida com a declaração while, com uma única diferença fundamental: o teste condicional é feito após a execução dos comandos pertencentes ao laço. Veja a sintaxe do laço do while:
do
{
comandos;
}
while ( condição);
Note a inversão da ordem: primeiro temos a declaração do seguida do corpo do laço, contendo os comandos à serem executados entre as chaves. Após o símbolo fecha-chaves, temos a declaração while e a expressão que será testada. Os comandos entre as chaves serão executados até que a condição torne-se falsa. Porém, lembre-se que a condição só será testada após a execução dos comandos dentro do laço, ao contrário dos laços que vimos anteriormente que antes testavam uma condição para depois executar qualquer comando. O exemplo abaixo ilustra uma utilização simples do laço do while.
#include <iostream>
using namespace std;

int main()
{
int controle = 1;
do {
cout<<"Esta frase foi escrita "<<controle<<" vezes!\n";
controle++;
}
while (controle <= 20);

system("PAUSE > null");
return 0;
}
6.8 – Laços Aninhados
Qualquer um dos laços estudados acima pode ser aninhados, ou seja, colocados um dentro do outro. Esta técnica pode ser muito útil para trabalhar com matrizes multidimensionais, programas que trabalhem com menus e várias outras situações. Entretanto, é preciso atenção para não confundir quais blocos fazem parte de qual laço ou declaração. Como já dissemos anteriormente, é fundamental a utilização de chaves para separar corretamente os blocos e laços, e também a utilização de tabulação na escrita do código para melhor visualização de cada uma das partes do programa. Também é interessante a utilização de comentários no código, para melhor identificação.
O programa exemplo abaixo demonstra a utilização de vários laços e declarações aninhadas, assim como a aplicação de tabulação e comentários para melhor entendimento do programa.
#include <iostream>
using namespace std;

int main()
{
int mult1, mult2;
for (mult1 = 1; mult1 <= 10; mult1++)
{
cout<<"Tabuada do numero "<<mult1<<":\n";
for (mult2 = 1; mult2 <= 10; mult2++)
{
cout.width(2);
cout<<mult1<<" X ";
cout.width(2);
cout<<mult2<<" = ";
cout.width(3);
cout<<mult1*mult2<<"\n";
}
}
system("PAUSE > null");
return 0;
}
6.9 – Break e Continue
Utilizamos os comandos break e continue para pular partes de um código. Já vimos a utilização do comando break quando falamos sobre a declaração switch: ele é utilizado para interromper a execução de um laço, pulando imediatamente para o próximo comando após o fim do laço. O comando break “quebra” qualquer teste de condição que esteja sendo feito, forçando o laço a terminar abruptamente.
O comando continue é utilizado em um laço de repetição para pular todos os comandos que seriam executados na sequência do comando continue e forçar o laço a pular para a próxima repetição. O comando break força o laço a terminar; já o comando continue pula os próximos comandos que seriam feitos mas continua a executar o laço. O exemplo abaixo mostra a utilização de um comando continue em um programa que simula um menu de opções.
#include <iostream>
using namespace std;

int main()
{
int opcao;
while (opcao!= 5)
{
cout<<"Escolha uma opção entre 1 e 4. Escolha 5 para sair do programa\n";
cin>>opcao;
if ((opcao> 5) || (opcao< 1))
{
continue; //opção invalida: volta ao inicio do loop
}
switch (opcao)
{ //início do switch
case 1:
cout<<"Opção 1 foi escolhida\n";
break;
case 2:
cout<<"Opção 2 foi escolhida\n";
break;
case 3:
cout<<"Opção 3 foi escolhida\n";
break;
case 4:
cout<<"Opção 4 foi escolhida\n";
break;
case 5:
cout<<"Você saiu do programa\n";
break;
} //fim do switch
} //fim do laço while
system("PAUSE > null");
}
Em primeiro lugar, o laço while fará com que o programa rode repetidamente até que a variável opcao, cujo valor é atribuído pelo usuário a cada repetição do programa, tenha valor igual a 5. A declaração if checa se o valor entrado pelo usuário é maior que cinco ou menor que 1. Caso isto seja verdade, o comando continue interrompe a execução de todos os comandos seguintes, fazendo o laço while ser repetido mais uma vez. Caso o usuário entre um valor entre 1 e 5, o comando continue não é executado e o laço while continua para o próximo bloco de comandos, no caso, a declaração switch. A declaração switch é utilizada para mostrar qual opção o usuário escolheu e, no caso do usuário ter escolhido o valor 5, indicar que o programa terminou. Quando o valor 5 é escolhido, a condição do laço while torna-se falsa, terminando o programa.

-------------------------------------------------------------------------------------------------------------

Publicado originalmente em - sexta-feira, 13 de agosto de 2010

atualizacao da referencia bibliografica em -atualizado em 21/08/2017 - 03:01

eu publiquei em uma epoca de ensino medio, sem entender de direito autroal, o arquivo é do autor (Esta apostila é o resultado do trabalho de conclusão de curso realizado por Enrique Camargo Trevelin, aluno do curso de Engenharia Elétrica, sob a orientação do Prof. Carlos Antônio Alves. ), está publicado no site : (http://apostilacpp.awardspace.com/index.php?pagina=home) na integra e peco desculpa se o autor quer que retire do site o material, mande um email para
contatomorgao@gmail.com