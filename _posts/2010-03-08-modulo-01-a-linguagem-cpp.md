---
layout: post
title: Módulo 01 A Linguagem C++
date: 2010-02-08 19:45
author: Morgao
comments: true
categories: [Algoritmos, Linguagem C++, Programação]
---
Módulo 01 A Linguagem C++

Módulo 1 – A Linguagem C++
1.1 – História da Linguagem C/C++
O C++ foi inicialmente desenvolvido por Bjarne Stroustrup durante a década de 1980 com o objetivo de melhorar a linguagem de programação C, mantendo a compatibilidade com esta linguagem. Stroustrup percebeu que a linguagem Simula possuía características bastante úteis para o desenvolvimento de software, mas era muito lenta para uso prático. Por outro lado o BCPL era rápido, mas possuía baixo nível, dificultando sua utilização em desenvolvimento de aplicações. Durante seu período na Bell Labs, ele enfrentou o problema de analisar o kernel UNIX com respeito à computação distribuída. A partir de sua experiência de doutorado, começou a acrescentar elementos do Simula no C.
C foi escolhido pois possuía uma proposta de uso genérico, era rápido e também portável para diversas plataformas. Algumas outras linguagens que também serviram de inspiração para o informático foram ALGOL 68, Ada, CLU e ML. Novas características foram adicionadas, como funções virtuais, sobrecarga de operadores e funções, referências, constantes, controle de memória pelo usuário, melhorias na checagem de tipo e estilo de comentário de uma linha (//). A primeira versão comercial da linguagem C++ foi lançada em outubro de 1985.
1.2 – Características da Linguagem C++
O principal desenvolvedor da linguagem C++, Bjarne Stroustrup, descreve no livro “In The Design and Evolution of C++” quais seus principais objetivos ao desenvolver e expandir esta linguagem:
Em proposta geral, C++ deve ser tão eficiente e portável quanto C, sendo desenvolvida para ser uma linguagem com tipos de dados estáticos.
C++ é desenvolvido para ser o quanto mais compatível com C possível, fornecendo transições simples para código C.
C++ é desenvolvido para suportar múltiplos paradigmas de programação, principalmente a programação estruturada e a programação orientada a objetos, possibilitando múltiplas maneiras de resolver um mesmo problema.
C++ é desenvolvido para fornecer ao programador múltiplas escolhas, mesmo que seja possível ao programador escolher a opção errada.
1.3 – Exemplos de Aplicações Escritas em C++
Abaixo temos alguns exemplos de aplicações e programas comerciais desenvolvidos totalmente ou parcialmente em C++.
Grande parte dos programas da Microsoft, incluindo Windows XP, Windows NT, Windows 9x, Pacote Office, Internet Explorer, Visual Studio e outros.
Sistemas Operacionais como o já citado Windows, Apple OS X, BeOS, Solaris e Symbian (sistema operacional para celulares).
Bancos de dados como SQL e MySQL.
Aplicações Web, como a máquina de busca Google e o sistema de comércio virtual da Amazon.
Aplicações gráficas como os programas da Adobe (Photoshop, Illustrator), Maya e AutoCAD.
Jogos em geral, como o Doom III.
A lista é enorme e poderia se estender por muitas e muitas páginas. Atualmente C++ é, juntamente com Java, a linguagem de programação comercial mais difundida no mundo.
1.4 – Comparação de C++ com outras linguagens
Podemos dividir as linguagens de programação conforme o “dialeto” utilizado por elas. Quanto mais próximo da linguagem humana for a maneira com que passamos instruções para a máquina, mais alto será seu nível: por exemplo, Fortran e Basic são consideradas linguagens de alto nível pois seus comandos parecem-se com frases humanas (em inglês, claro): “Se x = y então faça x = x+1 e imprima y”. De maneira análoga, quanto mais próximo da linguagem da máquina for a linguagem de programação, mais baixo será seu nível: por exemplo, o Assembly é considerada uma linguagem de nível baixo, pois seus comandos são escritos em hexadecimal. Ambos os tipos possuem vantagens e desvantagens, mas de maneira geral podemos dizer que a vantagem das linguagens de nível alto é a simplicidade de programação, enquanto que a vantagem das linguagens de nível baixo é a alta velocidade que seus programas podem ter. Tanto C como C++ podem ser consideradas linguagens de nível intermediário, pois utilizam-se de um dialeto de nível alto mas possibilita ao programador facilidades para se trabalhar em nível baixo, como manipulação de bits, bytes e endereços de memória de maneira direta, sem recorrer a abstrações apresentadas por outras linguagens de alto nível.
A filosofia que existe por trás da linguagens C e C++ é que o programador sabe realmente o que está fazendo. Estas linguagens quase nunca colocam-se no caminho do programador, deixando-o livre para usá-la de qualquer forma que queira, mas arcando com as consequências de seu mau ou incorreto uso. O motivo para essa “liberdade na programação” é permitir ao compilador criar códigos muito rápidos e eficientes, deixando a responsabilidade da verificação de erros para o programador. O próprio criador de C++, Bjorne Stroustrup afirma que “C faz com que dar um tiro no pé seja fácil; C++ torna isso mais difícil, mas quando nós o fazemos arrebenta com a perna toda”. A citação de Stroutrup trata com humor o fato de o C++, ao possibilitar a programação de alto nível, ter facilitado a codificação de algoritmos e organização de projetos em relação ao C, uma linguagem que requer constante atenção contra erros lógicos de programação devido à sua alta flexibidade. Por outro lado, o C++ possui nuances da sintaxe e semântica da linguagem muito sutis, difíceis de serem identificados, e que quando não percebidos podem levar a comportamentos indesejados no código.
As principais vantagens e desvantagens do C++ são listadas a seguir:
Vantagens
Possibilidade em programação de alto e baixo nível.
Alta flexibilidade, portabilidade e consistência.
Compatilidade com C, resultando em vasta base de códigos.
Adequado para grandes projetos.
Ampla disponibilidade e suporte, devido principalmente à grande base de desenvolvedores.
Não está sob o domínio de uma empresa (em contraste do Java - Sun ou Visual Basic – Microsoft).
Padronização pela ISO.
Grandes possibilidades para a metaprogramação e programação genérica.

Desvantagens

Compatilidade com o C herdou os problemas de entendimento de sintaxe do mesmo.
Os compiladores atuais nem sempre produzem o código mais otimizado, tanto em velocidade quando tamanho do código.
Grande período para o aprendizado.
A biblioteca padrão ainda não cobre áreas importantes da programação, como threads, conexões TCP/IP e manipulação de sistemas de arquivos, o que implica na necessidade de criação de bibliotecas próprias para tal, que pecam em portabilidade.
Devido à grande flexibilidade no desenvolvimento, é recomendado o uso de padrões de programação mais amplamente que em outras linguagens.
1.5 – Paradigmas de Programação: Programação Estruturada e Orientada a Objetos
Um paradigma de programação é um conjunto de idéias que fornecem ao programador uma visão sobre a estruturação e execução de um programa. Assim como ao resolver um problema podemos adotar uma entre variadas metodologias para resolvê-lo, ao criar um programa podemos adotar um determinado paradigma de programação para desenvolvê-lo. Certas linguagens de programação são escritas especificamente para trabalhar com um tipo de paradigma: este é o caso de Smalltalk e Java que suportam a programação orientada a objetos. Outras linguagens suportam vários paradigmas, ou seja, o programador pode escolher qual paradigma se adapta melhor ao problema que ele precisa resolver e trabalhar com ele, e até mesmo alternar entre paradigmas (desde que ele saiba o que está fazendo).
A linguagem C utiliza o paradigma da programação estruturada. A base da programação estruturada é trabalhar a lógica do programa como uma estrutura composta de similares sub-estruturas, reduzindo a compreensão do programa à compreensão de cada sub-estrutura individualmente. Na prática, este método envolve a criação de várias funções dentro de um programa, pequenas e simples o suficiente para serem entendidas individualmente, sendo o programa a sequência de todas estas funções trabalhando em conjunto. A programação estruturada se opõe ao uso de comandos de pulo como “GOTO”, preferindo a criação de estruturas e condições lógicas que substituam ou mesmo eliminem a necessidade de um comando de pulo. Este paradigma é o mais utilizado no ensino e aprendizado de linguagens de programação, por ser mais facilmente entendido por estudantes e por criar hábitos de programação saudáveis e úteis mesmo em outros paradigmas.
A linguagem C++ é uma das linguagens que suportam vários paradigmas. Inicialmente, sendo uma “evolução” de C, ela suporta inteiramente o paradigma da programação estruturada. Além disso, ela suporta outros paradigmas como a programação procedural, a programação genérica, abstração de dados e a programação orientada a objetos. Dentre estes paradigmas, o mais utilizado atualmente é a Programação Orientada a Objetos, ou mais comumente chamado de OOP (Object-Oriented Programming). Apesar de ter sido criada nos anos 60, este paradigma só começou a ganhar aceitação maior após os anos 90,com a explosão das linguagens C++, Java e Visual Basic. A idéia básica por trás da OOP é criar um conjunto de “objetos” (unidades de software) para modelar um sistema. Estes objetos são independentes entre si, possuindo responsabilidades e funções distintas no programa como um todo, mas que se comunicam entre si através do envio e recebimento de mensagens. A OOP é especialmente útil para grandes programas que se beneficiam mais com a modularidade oferecida por este paradigma: dividindo o programa em vários módulos independentes, aumenta-se a flexibilidade e a facilidade para manutenção do programa como um todo.
Nesta apostila, enfocaremos os aspectos de linguagem de programação estruturada da linguagem C++, deixando os aspectos de linguagem orientada a objetos para os últimos capítulos a título de introdução ao assunto. Isto se deve a maior dificuldade de aprendizado e entendimento do paradigma da programação orientada a objetos, principalmente tratando-se de estudantes com pouco contato com linguagens de programação. Por isso, é preferível estabelecer uma base para o estudante com os conceitos da programação estruturada, que são mais facilmente compreendidos e trabalhados, para que depois este estudante possa progredir para o paradigma da OOP com maior facilidade.

-------------------------------------------------------------------------------------------------------------

Publicado originalmente em - sexta-feira, 13 de agosto de 2010

atualizacao da referencia bibliografica em -atualizado em 21/08/2017 - 03:01

eu publiquei em uma epoca de ensino medio, sem entender de direito autroal, o arquivo é do autor (Esta apostila é o resultado do trabalho de conclusão de curso realizado por Enrique Camargo Trevelin, aluno do curso de Engenharia Elétrica, sob a orientação do Prof. Carlos Antônio Alves. ), está publicado no site : (http://apostilacpp.awardspace.com/index.php?pagina=home) na integra e peco desculpa se o autor quer que retire do site o material, mande um email para
contatomorgao@gmail.com