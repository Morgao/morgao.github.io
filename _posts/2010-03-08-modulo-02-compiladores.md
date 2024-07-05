---
layout: post
title: Módulo 02 Compiladores
date: 2010-02-08 19:45
author: Morgao
comments: true
categories: [Algoritmos, Linguagem C++, Programação]
---
Módulo 02 Compiladores

Módulo 2 – Compiladores
2.1 – O que é um Compilador
Toda linguagem de programação possui um tradutor de código. Este tradutor pode ser um compilador ou um interpretador, dependendo da linguagem. Interpretadores são programas que leêm o código-fonte e executam ele diretamente, sem a criação de um arquivo executável. Chamamos de compilador o programa que traduz um arquivo escrito em código de linguagem de programação (arquivo-fonte) para a linguagem do microprocessador, criando um arquivo capaz de executar as instruções pedidas (arquivo executável).
O primeiro passo de um compilador é analisar o código presente no arquivo-fonte, verificando se existem erros de sintaxe. Caso algum erro de sintaxe seja encontrado, a compilação é interrompida para que o programador possa corrijir estes erros. Caso o código não possua erros o próximo passo do compilador é criar um arquivo de código-objeto, que possui as instruções do programa já traduzidas para a linguagem da máquina e informações sobre alocação de memória, símbolos do programa (variáveis e funções) e informações de debug. A partir deste arquivo de código-objeto, o compilador finalmente cria um arquivo executável com o programa compilado, que funciona independente do compilador e realiza as instruções criadas pelo programador.
2.2 – Compiladores de C++
Existem muitos compiladores de C++ no mercado. Os mais famosos são os softwares da Borland e da Microsoft, que são realmente muito bons e oferecem muitos recursos. O problema é que estes compiladores são caros e voltados principalmente para programadores experientes, que podem fazer uso dos recursos avançados destes programas. Para quem não está ainda aprendendo a linguagem e não quer ainda gastar dinheiro com compiladores, existem várias opções de compiladores freeware (software livre, “de graça”). Nesta seção descreveremos a instalação e o uso do DevC++, um compilador freeware muito utilizado.
2.3 – DevC++
O Dev-C++ é um compilador freeware das linguagens C, C++ e C#. É uma opção muito interessante, pois é de fácil utilização e aprendizado para usuários novos e possui muitos recursos avançados para usuários experientes. Além de, claro, seu download ser gratuito.
2.3.1 - Instalação
A versão mais recente do DevC++ pode ser baixada através da páginahttp://www.bloodshed.net/dev/devcpp.html, no link “Download”. Utilizou-se, na elaboração desta apostila, a versão do DevC++ beta 9.2, disponível diretamente através do linkhttp://prdownloads.sourceforge.net/dev-cpp/devcpp-4.9.9.2_setup.exe. O arquivo de instalação possui aproximadamente 9 megas. Após o fim do download, é preciso clicar duas vezes neste arquivo para começar a instalação.
A instalação do DevC++ é bem simples. Utilizaremos nesta apostila a instalação completa, escolhendo o item full durante a etapa da instalação mostrada na figura 1.a.



Figura 2.1 – Escolha o tipo de instalação “Full”
O próximo passo é escolher o diretório onde o programa será instalado. Neste diretório estarão todos os arquivos relacionados ao compilador, como bibliotecas, executáveis, arquivos de ajuda e muitos outros. Além disso, é neste diretório que o compilador salvará os códigos e programas que fizermos. Normalmente os programas são instalados por definição em sua pasta própria, geralmente “c:/arquivos de programas/dev-cpp”, mas podemos escolher outro diretório qualquer que satisfaça nossas necessidades. Escolhemos para esta apostila instalar o compilador em “C:/dev-cpp” , como mostra a figura 1.b, por maior facilidade de acesso e referência. São necessários aproximadamente 60 megas de espaço livre em disco.



Figura 2.2 – Escolha o local onde serão instalados os arquivos do compilador.
Após isto, a instalação será concluída com sucesso. Para acessar o programa, basta encontrar o atalho ao programa no menu iniciar sob o nome “Bloodsheed Dev-C++” e clicar para executá-lo.
2.3.2 - Interface
Importante: Na primeira vez que iniciamos o Dev-C++, todos os seus menus estão em inglês. Porém, o programa é traduzido para várias línguas, inclusive português. Para mudar os menus do programa para a nossa língua (ou qualquer outra língua que desejar), basta acessar o menu “Tools -> Enviroment Options”. Uma janela se abrirá, com várias opções referentes ao funcionamento do ambiente de trabalho. Na aba “Interface” encontra-se a opção “Language” com as várias linguas em que o programa está disponível. Basta procurar a opção “portuguese (Brazil)” e clicar OK, e o programa já estará traduzido para nossa língua.
A tela principal do programa é mostrada na figura abaixo.


Figura 2.3 – Interface do DevC++
Os menus principais do programa são muito parecidos com os programas windows padrão. Temos os menus:
Arquivo: possui as funções básicas de manuseio de arquivos (criar novo arquivo, abrir arquivo, fechar, imprimir, ver propriedades)
Editar: aonde estão localizadas as funções de edição básicas de edição (copiar, recortar, colar) e algumas funções úteis para programação (como comentar e descomentar trechos do programa, e criar e acessar “bookmarks”, que são marcas de acesso rápido para partes do programa, especialmente úteis para programas extensos)
Localizar: possui os comandos de procurar e substituir partes do código; o menu Exibir permite o controle de quais componentes da tela são exibidos
Projeto: refere-se a projetos de programas que possuem vários componentes e arquivos de códigos separados e é utilizado para adicionar e retirar componentes do projeto
Executa: é talvez o mais importante para nós, e nele estão localizadas as funções básicas do compilador (como os comandos Compilar, Executar ) e algumas funções úteis como procurar por erros de sintaxe
Debug: serve para controlar o debug de um programa, que é a sua execução passo-a-passo para melhor análise e busca por erros
Ferramentas: refere-se a várias opções do compilador, do ambiente de trabalho e de edição, além de configurações diversas
CVS: é uma função extra do compilador, e não nos tem serventia
Janela: possui comandos úteis para os casos em que temos vários arquivos ou projetos abertos ao mesmo tempo e precisamos alternar entre eles.
Ajuda: dá acesso à ajuda do programa, que possui uma listagem dos principais comandos do compilador e um breve tutorial da linguagem C.
Logo abaixo dos menus, temos as barras de ferramenta com as principais funções e comandos do programa representados por ícones para acesso rápido. Basta posicionar o mouse sobre qualquer um dos ícones para saber sua função.
Abaixo das barras de ferramentas, estão as duas principais janelas do programa. A janela da esquerda é chamada de Navegador de Classes e Projetos, e serve para acessar rapidamente os vários arquivos de código pertencentes à um projeto ou então acessar rapidamente as várias classes existentes em um programa. A janela da direita é nossa tela de trabalho, onde digitamos nossos códigos. Note que caso exista mais de um arquivo sendo trabalhado ao mesmo tempo, podemos alternar entre eles através das pequenas abas que existem diretamente acima da tela de trabalho, cada uma identificada pelo nome de seu arquivo.
Finalmente, a janela inferior do programa possui várias informações sobre o processo de compilação e debugagem de um programa. Ela é particularmente útil para encontrar erros de compilação, como veremos mais adiante.
2.3.3 - Utilização
Para iniciarmos um novo arquivo de código, é preciso acessar o menu “Arquivo -> Novo -> Arquivo Fonte” (como mostra a figura 1.c) ou então utilizar o atalho CTRL + N. O novo arquivo será criado imediatamente e poderemos começar a trabalhar nele.


Figura 2.4 – Utilize o comando Arquivo Fonte para criar um novo arquivo em branco.
As funções básicas do compilador podem ser encontradas no menu Executar, como mostra a figura 1.d. Os comandos que utilizaremos são: Compilar (atalho: CTRL + F9), Executar ( CTRL + F10) e Compilar & Executar ( atalho: F9). Utilizamos o comando Compilar para compilar o arquivo código do programa em que estamos trabalhando e gerar um arquivo executável deste programa. Em seguida, utilizamos o comando Executar para automaticamente executar o arquivo criado pela compilação. O comando Compilar & Executar é a união dos dois comandos: compila e executa o programa logo em seguida. Como já indicado antes, estes três comandos possuem ícones de acesso rápido na barra de ferramentas (veja a figura 1.e).


Figura 2.5 – O menu Executar possui todas os comandos necessários para compilar e executar os programas que criaremos.


Figura 2.6 – Localização dos comandos básicos na barra de tarefas. Coloque o mouse sobre qualquer um dos ícones para saber qual é sua função.
2.3.4 - Erros
Quando compilamos um arquivo de código no Dev-C++, a janela indicadora do progresso da compilação é automaticamente aberta. Caso o arquivo de código não contenha nenhum erro, a compilação terminará e a janela de progresso permanecerá aberta para indicar que tudo correu bem (verifique o quadrado da janela chamado “status”: ele deverá indicar Done após o fim da compilação). Desta maneira, após o fim da compilação basta fechar a janela e executar o programa executável que foi gerado.


Figura 2.7 – Janela que indica o progresso da compilação do arquivo de código.
Caso nosso arquivo de código contenha uma ou mais linhas de códigos com erro, a compilação é interrompida para que estes erros (ou advertências) sejam verificados pelo programador. A janela de progresso da compilação é fechada, e a janela inferior do programa é maximizada mostrando todos os erros que foram encontrados durante a compilação do programa.


Figura 2.8 – A janela que indica a posição e o tipo de erros encontrados durante a compilação do programa.
A figura acima mostra que a janela possui três colunas: linha, unidade e mensagem. A coluna linha indica a linha de código onde o erro foi encontrado; a coluna unidade indica o arquivo onde foi encontrado o erro e a coluna mensagem relata o tipo de erro encontrado. Um duplo clique em qualquer uma das indicações de erro nesta janela faz com que a linha de código onde o erro foi encontrado seja sublinhada em vermelho na janela de edição de código.
Geralmente, os erros encontrados são erros de digitação do código. Quando erramos o nome de uma variável ou mesmo um comando, o Dev-C++ indica que o nome errado não foi declarado anteriormente (“variável_x undeclared(first use in this function)”), pois ele age como se este nome desconhecido fosse uma variável não declaradada e tenta continuar a compilação.
Outro erro bastante comum é a falta de ponto-e-vírgula no fim de uma linha de comando. Neste caso, a mensagem de erro geralmente é “; expected before algum_comando”, indicando que o compilador esperava o ponto-e-vírgula antes do próximo comando ou variável. A mensagem de erro indica a próxima linha de código, mas o ponto-e-vírgula ausente está na linha anterior. O compilador também indica quando utiliza-se o ponto-e-vírgula antes da hora, ou seja, quando o compilador espera por uma expressão ou comando e encontra somente o ponto-e-vírgula. Por exemplo, uma declaração de variável sem declaração de valor: “variável = ;”. Neste caso, a mensagem de erro dada pelo programa é “expected primary-expression before ';' token”.
2.4 – Estrutura Básica de um Programa em C++
Temos abaixo a estrutura de um programa escrito na linguagem C++:
#include <iostream>
using namespace std;

int main()
{

//comandos do programa

system("PAUSE > null");
return 0;
}
As duas primeiras linhas são o cabeçalho do programa. Todo programa deve ter um cabeçalho desse tipo para definir quais as bibliotecas ele utilizará. “Bibliotecas” são arquivos que normalmente são instalados juntos com o compilador e que possuem os comandos e funções pertencentes à linguagem.
O cabeçalho #include<> serve para indicar ao compilador todas as bibliotecas que este programa utilizará. Na maioria dos programas que escreveremos durante esta apostila, só utilizaremos o #include <iostream>, que serve para incluir a biblioteca iostream em nossos programas. Esta biblioteca contém as principais funções, comandos e classes de entrada e saída de C++, necessárias para realizar programas que, por exemplo, recebam dados via teclado e enviem dados via monitor.
A segundal linha do cabeçalho, using namespace std; , é um aviso ao compilador que estaremos utilizando os comandos e funções padrão de C++. Ele é necessário porque em C++ podemos criar várias bibliotecas para serem utilizáveis em vários programas. Cada uma dessas bibliotecas contém comandos, classes e funções próprias, e para evitar confusões e problemas com os nomes destes comandos, utilizamos o cabeçalho “using namespace ...;” para definir qual o campo de nomes que estamos utilizando. Num programa normal, que não utiliza outras bibliotecas além da padrão de C++, utilizamos o namespace std como nosso campo de nomes de comandos e funções. Assim, sempre que utilizamos um comando próprio de C++, o compilador reconhecerá automaticamente este comando como sendo pertencente à biblioteca padrão de C++.
Assim como em C, tudo o que acontece durante a execução do programa está contido dentro de uma função principal, chamada main. Declaramos a função main com:
int main ( )
Todos os comandos executados pelo programa estão contidos entre as chaves “{ }” da função main. No módulo 4 estudaremos as funções à fundo e veremos que um programa pode ter mais de uma função, mas é indispensável que todos os programas possuam a função main.
Cada programa terá seus próprios comandos, logicamente. Entretanto, o encerramento de um programa geralmente é feito da mesma maneira para todos eles. As duas últimas linhas antes do fecha-chaves são dois comandos normalmente utilizados ao fim de um programa.
A linha “system(“PAUSE > null”)” é uma chamada de função própria de C++. A função system( ) recebe argumentos como o PAUSE que na verdade são comandos para o sistema operacional. Neste caso, ela recebe o comando “PAUSE > null” para pausar a execução do programa até que o usuário aperte uma tecla qualquer. Utilizamos este recurso para que a tela do programa não seja terminada automaticamente pelo sistema, impedindo que vejamos os resultados do programa.
Finalmente, o comando “return 0” é a “resposta” da função main para o sistema. Quase toda função retorna um valor para o sistema ou programa que a chamou, por exemplo, uma função pode retornar o resultado de uma operação matemática executada por ela. No caso da função main, ela retorna um valor para o sistema operacional que executou o programa. Esse valor é interpretado pelo sistema como uma mensagem indicando se o programa foi executado corretamente ou não. Um valor de retorno 0 indica que o programa foi executado sem problemas; qualquer outro valor de retorno indica problemas. Quando o programa é executado até o fim, ele retorna 0 ao sistema operacional, indicando que ele foi executado e terminado corretamente. Quando o programa encontra algum erro ou é terminado antes da hora, ele retorna um valor qualquer ao sistema, indicando erro durante a execução.

-------------------------------------------------------------------------------------------------------------

Publicado originalmente em - sexta-feira, 13 de agosto de 2010

atualizacao da referencia bibliografica em -atualizado em 21/08/2017 - 03:01

eu publiquei em uma epoca de ensino medio, sem entender de direito autroal, o arquivo é do autor (Esta apostila é o resultado do trabalho de conclusão de curso realizado por Enrique Camargo Trevelin, aluno do curso de Engenharia Elétrica, sob a orientação do Prof. Carlos Antônio Alves. ), está publicado no site : (http://apostilacpp.awardspace.com/index.php?pagina=home) na integra e peco desculpa se o autor quer que retire do site o material, mande um email para
contatomorgao@gmail.com