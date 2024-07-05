---
layout: post
title: 1 exercicio 1 fibonacci da forma mais simples.
date: 2024-07-02 22:27
author: Morgao
comments: true
categories: [matemática]
---
<b>Algoritmos e Linguagem de Programação</b><br />
<b>Lista de exercícios</b><br />
<b>Data de Entrega: 07/11/2018 Valor 1,0</b><br />
<b><br /></b>
<b><br /></b>
1) Faça um programa que calcule a soma os 15 primeiros termos da <b>Série de Fibonacci.&nbsp;</b><br />
Os dois primeiros números da série deverão ser informados via teclado.<br />
&nbsp;Ao final da execução do programa, mostrar:<br />
- Os Números da Série, a Soma e a Média dos números da série.<br />
Exemplo de uma Série de Fibonacci: 5, 6, 11, 17, 28, 45, 73 ...<br />
<br />
/* Comentarios - achei que iria usar o termo geral da série de fibonacci no caso não foi necessario<br />
essa é apenas uma forma de resolver a questão, tentei escrever os printf( todos em um só printf acabou dando um erro que não me recordo o porque então enumerei cada um dos printf, e cada uma das contas na mão se usar if/ incrementação, provavelmente posteriormente posto novas formas de resolver o mesmo problema usando recursos mais avançados!<br />
*/<br />
video de referencia caso alguem queria resolver usando a formula geral :<br />
IMPA - iniciação científica<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
<iframe allowfullscreen="" class="YOUTUBE-iframe-video" data-thumbnail-src="https://i.ytimg.com/vi/QVlTuInyZKk/0.jpg" frameborder="0" height="266" src="https://www.youtube.com/embed/QVlTuInyZKk?feature=player_embedded" width="320"></iframe></div>
<br />
<br />
<div class="separator" style="clear: both; text-align: center;">
</div>
<div class="separator" style="clear: both; text-align: center;">
<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOr1jvkxcN7yNQUiMjqEmC7RSzDavmFEZZyWd1k_JyfempK__7eL5oRXnEdOXysSYOkAgOQRYnf0tssRDOcwaqXC1hcrbx5lkRL4bsM5VoKHOIuK2fDXVFv5VGc3-iVdiAv4UUgncu56A/s1600/01.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img alt="amplie a imagem" border="0" data-original-height="1600" data-original-width="1163" height="320" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiOr1jvkxcN7yNQUiMjqEmC7RSzDavmFEZZyWd1k_JyfempK__7eL5oRXnEdOXysSYOkAgOQRYnf0tssRDOcwaqXC1hcrbx5lkRL4bsM5VoKHOIuK2fDXVFv5VGc3-iVdiAv4UUgncu56A/s320/01.jpg" title="amplie a imagem" width="232" /></a></div>
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnzJxS_EfrcdYcGNRSe_apD76zswJjgKbbt03GFwtjcXXZYXD38XOejFWsY2SaDw2YWub3mlTc91ngCL1YpfiCAqkqDKy7yo3eoN6XmEHwH-NyXKdH1_pVtCBcOO8jUNiIxgvK6HqSDKI/s1600/02.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img alt="amplie a imagem" border="0" data-original-height="1600" data-original-width="1163" height="320" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnzJxS_EfrcdYcGNRSe_apD76zswJjgKbbt03GFwtjcXXZYXD38XOejFWsY2SaDw2YWub3mlTc91ngCL1YpfiCAqkqDKy7yo3eoN6XmEHwH-NyXKdH1_pVtCBcOO8jUNiIxgvK6HqSDKI/s320/02.jpg" title="amplie a imagem" width="232" /></a></div>
-------------------------------------------------------------------------------------------------------------------------<br />
<br />
<br />
<b></b>

(primeiro código feito em Linguagem C)<br />
<br />
#include &lt;stdio.h&gt;<br />
#include &lt;stdlib.h&gt;<br />
#include &lt;math.h&gt;<br />
/*<br />
Por &gt; Morgao Freud<br />
matheus nakade<br />
contatomorgao@gmail.com<br />
<br />
Exercicios numero 01<br />
exemplo de como resolver com a fórmula geral da fibonacci<br />
IFG-2018/2 - Hallison<br />
<br />
*/<br />
int main() {<br />
<br />
&nbsp;&nbsp;&nbsp; /*<br />
&nbsp;&nbsp;&nbsp; &nbsp;a sequencia fibonacci sempre tem que declarar os dois primeiros termos de onde parte a sequencia<br />
&nbsp;&nbsp;&nbsp;&nbsp; por isso na questão o professor não está ajudando dando 2 termos, sem os 2 termos seria uma P.A.<br />
&nbsp;&nbsp;&nbsp;&nbsp; a lógica da fibonacci é sempre esta, se o primeiro numero é 10, e o segundo é 15, <br />
&nbsp;&nbsp;&nbsp; o terceiro numero é a soma do primeiro numero com o segundo numero que no caso seria <br />
&nbsp;&nbsp;&nbsp; F = a1 + a2; F = 10 + 15; F = 25. a sequencia por enquanto é {10,15,25,...} o proximo termo é a<br />
&nbsp;&nbsp;&nbsp; soma de 25 + 15 = 40 entao a sequencia seria {10,15,25,40,...} o programa não pode funcionar apenas<br />
&nbsp;&nbsp;&nbsp; para a fibonacci original que é {0,1,1,2,3,5,8,...} ele tem que funcionar para qualquer fibonacci<br />
&nbsp;&nbsp;&nbsp; derivada dessa lógica. e no caso o professor vai testar 2 numeros fixos( exemplo primeiro termo como 10<br />
&nbsp;&nbsp;&nbsp; e o segundo termo como 15) ai ele já sabe que resultado esperar da sequencia dos 15 numeros (ele pediu<br />
&nbsp;&nbsp;&nbsp; para enumerar os 15 numeros e na sequencia (não pode ser aleatorio ou do ultimo numero digitado para o primeiro<br />
&nbsp;&nbsp;&nbsp; tem que partir dos 2 primeiros que ele digitou e seguir no calculo do a3 até o a15, incluindo os 2 primerios <br />
&nbsp;&nbsp;&nbsp; que ele mesmo digitou e os outros 13 que vc tem que calcular quais são eles <br />
&nbsp;&nbsp;&nbsp; vai ser cout a1, cout a2, cout a3... cout a15, o resultado &nbsp;&nbsp;&nbsp; da soma desses <br />
&nbsp;&nbsp;&nbsp; 15 numeros, da média desses 15 numeros.<br />
<br />
&nbsp;&nbsp;&nbsp; vou perguntar o primeiro e segunto termo da sequencia (printf)<br />
&nbsp;&nbsp;&nbsp; &nbsp;na sequencia vou guardar o valor do primeiro e do segundo termo da sequencia (scanf)<br />
&nbsp;&nbsp;&nbsp; */<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; int a01, a02, a03, a04, a05, a06, a07, a08, a09, a10, a11, a12, a13, a14, a15;<br />
&nbsp;&nbsp;&nbsp; float media, soma;<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; printf("Escreva o Primeiro termo da sequencia Fibonacci : ");<br />
&nbsp;&nbsp;&nbsp; scanf("%d",&amp;a01);<br />
&nbsp;&nbsp;&nbsp; printf("Escreva o Segundo termo da sequencia Fibonacci : ");<br />
&nbsp;&nbsp;&nbsp; scanf("%d",&amp;a02);<br />
&nbsp;&nbsp;&nbsp; a03 = a02 + a01;<br />
&nbsp;&nbsp;&nbsp; a04 = a03 + a02;<br />
&nbsp;&nbsp;&nbsp; a05 = a04 + a03;<br />
&nbsp;&nbsp;&nbsp; a06 = a05 + a04;<br />
&nbsp;&nbsp;&nbsp; a07 = a06 + a05;<br />
&nbsp;&nbsp;&nbsp; a08 = a07 + a06;<br />
&nbsp;&nbsp;&nbsp; a09 = a08 + a07;<br />
&nbsp;&nbsp;&nbsp; a10 = a09 + a08;<br />
&nbsp;&nbsp;&nbsp; a11 = a10 + a09;<br />
&nbsp;&nbsp;&nbsp; a12 = a11 + a10;<br />
&nbsp;&nbsp;&nbsp; a13 = a12 + a11;<br />
&nbsp;&nbsp;&nbsp; a14 = a13 + a12;<br />
&nbsp;&nbsp;&nbsp; a15 = a14 + a13;<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; // aora estou fazendo a soma da sequencia, copiei igual ta escrito na declaração <br />
&nbsp;&nbsp;&nbsp; // das variaveis apagando a virgunta e preenchendo com espaço antes o simbolo da soma e espaco depois.<br />
&nbsp;&nbsp;&nbsp; // para efeito de comparação a soma dos 15 termos, com o a1 = 1 e o a2 = 1, a fibonacci clássica<br />
&nbsp;&nbsp;&nbsp; // a soma tem que dar 1596<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; soma = a01 + a02 + a03 + a04 + a05 + a06 + a07 + a08 + a09 + a10 + a11 + a12 + a13 + a14 + a15;<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; // agora vou fazer a ultima etapa do exercicios que é a media dos numeros da serie.<br />
&nbsp;&nbsp;&nbsp; // lembrar de declarar a variavel media como tipo float (flutuante, numero real) porque é um numero com virgula. quebrado<br />
&nbsp;&nbsp;&nbsp; // e no ultimo printf, ou cout tem que declarar a variavel como tipo float tbm, nos outros printf ou cout<br />
&nbsp;&nbsp;&nbsp; // era declarado apenas do tipo inteiro (int)<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; media = (soma/15);<br />
// aqui eu percebi que além da variavel media ser do tipo float( tipo real) a variavel soma teria que ser do tipo<br />
// float tbm, somar todos numeros da sequencia da um numero inteiro. se a variavel soma estivar declarada como inteiro (int)<br />
// na hora de fazer a media o meu resultado vai sair sempre aredondado, no caso padrão para 106 nesse exercicio e na<br />
// linguagem c podemos usar outros formar para aredondar para baixo(chão) para cima (Céu) e um terceira que aredonda 0,5<br />
// até o numero ,5 aredonda pra baixo e acima de ,5 para cima... ( se não me enagano.<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; printf("A Sequencia Fibonacci é : \n");&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; printf("%d \n",a01);<br />
&nbsp;&nbsp;&nbsp; printf("%d \n",a02);<br />
&nbsp;&nbsp;&nbsp; printf("%d \n",a03);<br />
&nbsp;&nbsp;&nbsp; printf("%d \n",a04);<br />
&nbsp;&nbsp;&nbsp; printf("%d \n",a05);<br />
&nbsp;&nbsp;&nbsp; printf("%d \n",a06);<br />
&nbsp;&nbsp;&nbsp; printf("%d \n",a07);<br />
&nbsp;&nbsp;&nbsp; printf("%d \n",a08);<br />
&nbsp;&nbsp;&nbsp; printf("%d \n",a09);<br />
&nbsp;&nbsp;&nbsp; printf("%d \n",a10);<br />
&nbsp;&nbsp;&nbsp; printf("%d \n",a11);<br />
&nbsp;&nbsp;&nbsp; printf("%d \n",a12);<br />
&nbsp;&nbsp;&nbsp; printf("%d \n",a13);<br />
&nbsp;&nbsp;&nbsp; printf("%d \n",a14);<br />
&nbsp;&nbsp;&nbsp; printf("%d \n",a15);<br />
&nbsp;&nbsp;&nbsp; <br />
<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; printf("A soma da sequencia fibonaci e: ");<br />
&nbsp;&nbsp;&nbsp; printf("%d \n",soma);<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; printf("A media&nbsp; da sequencia fibonaci e: ");<br />
&nbsp;&nbsp;&nbsp; // para imprimir um numero do tipo float basta colocar %f, no caso coloquei %.1f o um representa o numero<br />
&nbsp;&nbsp;&nbsp; // de casas decimais que eu quero. se for %.3f seria 106,400 (3 casas decimais)<br />
&nbsp;&nbsp;&nbsp; printf("%.1f \n",media);<br />
/*<br />
1 pergunta (quais são os numeros da sequencia, digitando os 2 primeiros numeros ?)<br />
vou tomar como padrao o a1 = 1 e o a2 = 1 que é a sequencia normal da fibonacci<br />
Resposta<br />
1<br />
1<br />
2<br />
3<br />
5<br />
8<br />
13<br />
21<br />
34<br />
55<br />
89<br />
144<br />
233<br />
377<br />
610<br />
<br />
2 Pergunta qual a soma de toda a sequencia ?<br />
1596<br />
3 Pergunta qual é a média dos numeros da series fibonacci ?<br />
Resposta : 106,4<br />
<br />
<br />
*/<br />
<br />
<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; system ("PAUSE");<br />
&nbsp;&nbsp;&nbsp; return 0;<br />
}<br />
<br />
<br />
-----------------------------------------------------------------------------------------------------------------------------<br />
<br />
Versão em Linguagem C++<br />
<br />
/*<br />
Por &gt; Morgao Freud<br />
matheus nakade<br />
contatomorgao@gmail.com<br />
<br />
Exercicios numero 01<br />
exemplo de como resolver com a fórmula geral da fibonacci<br />
IFG-2018/2 - Hallison<br />
<br />
*/<br />
<br />
#include &lt;iostream&gt;&nbsp;&nbsp;&nbsp;&nbsp; // std::cout, std::fixed<br />
#include &lt;iomanip&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // std::setprecision usar precisão na media e soma valores tipo float <br />
<br />
<br />
<br />
using namespace std;<br />
<br />
int main() {<br />
<br />
<br />
<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; /*<br />
&nbsp;&nbsp;&nbsp; &nbsp;a sequencia fibonacci sempre tem que declarar os dois primeiros termos de onde parte a sequencia<br />
&nbsp;&nbsp;&nbsp; &nbsp;por isso na questão o professor não está ajudando dando 2 termos, sem os 2 termos seria uma P.A.<br />
&nbsp;&nbsp;&nbsp; &nbsp;a lógica da fibonacci é sempre esta, se o primeiro numero é 10, e o segundo é 15, <br />
&nbsp;&nbsp;&nbsp; o terceiro numero é a soma do primeiro numero com o segundo numero que no caso seria <br />
&nbsp;&nbsp;&nbsp; F = a1 + a2; F = 10 + 15; F = 25. a sequencia por enquanto é {10,15,25,...} o proximo termo é a<br />
&nbsp;&nbsp;&nbsp; soma de 25 + 15 = 40 entao a sequencia seria {10,15,25,40,...} o programa não pode funcionar apenas<br />
&nbsp;&nbsp;&nbsp; para a fibonacci original que é {0,1,1,2,3,5,8,...} ele tem que funcionar para qualquer fibonacci<br />
&nbsp;&nbsp;&nbsp; derivada dessa lógica. e no caso o professor vai testar 2 numeros fixos( exemplo primeiro termo como 10<br />
&nbsp;&nbsp;&nbsp; e o segundo termo como 15) ai ele já sabe que resultado esperar da sequencia dos 15 numeros (ele pediu<br />
&nbsp;&nbsp;&nbsp; para enumerar os 15 numeros e na sequencia (não pode ser aleatorio ou do ultimo numero digitado para o primeiro<br />
&nbsp;&nbsp;&nbsp; tem que partir dos 2 primeiros que ele digitou e seguir no calculo do a3 até o a15, incluindo os 2 primerios <br />
&nbsp;&nbsp;&nbsp; que ele mesmo digitou e os outros 13 que vc tem que calcular quais são eles <br />
&nbsp;&nbsp;&nbsp; vai ser cout a1, cout a2, cout a3... cout a15, o resultado &nbsp;&nbsp; &nbsp;da soma desses <br />
&nbsp;&nbsp;&nbsp; 15 numeros, da média desses 15 numeros.<br />
<br />
&nbsp;&nbsp;&nbsp; vou perguntar o primeiro e segunto termo da sequencia (printf)<br />
&nbsp;&nbsp;&nbsp; &nbsp;na sequencia vou guardar o valor do primeiro e do segundo termo da sequencia (scanf)<br />
&nbsp;&nbsp;&nbsp; */<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; int a01, a02, a03, a04, a05, a06, a07, a08, a09, a10, a11, a12, a13, a14, a15;<br />
&nbsp;&nbsp;&nbsp; float media, soma;<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "Escreva o Primeiro termo da sequencia Fibonacci: ";<br />
&nbsp;&nbsp;&nbsp; cin &gt;&gt; a01;<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "Escreva o Segundo termo da sequencia Fibonacci: ";<br />
&nbsp;&nbsp;&nbsp; cin &gt;&gt; a02;<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; a03 = a02 + a01;<br />
&nbsp;&nbsp;&nbsp; a04 = a03 + a02;<br />
&nbsp;&nbsp;&nbsp; a05 = a04 + a03;<br />
&nbsp;&nbsp;&nbsp; a06 = a05 + a04;<br />
&nbsp;&nbsp;&nbsp; a07 = a06 + a05;<br />
&nbsp;&nbsp;&nbsp; a08 = a07 + a06;<br />
&nbsp;&nbsp;&nbsp; a09 = a08 + a07;<br />
&nbsp;&nbsp;&nbsp; a10 = a09 + a08;<br />
&nbsp;&nbsp;&nbsp; a11 = a10 + a09;<br />
&nbsp;&nbsp;&nbsp; a12 = a11 + a10;<br />
&nbsp;&nbsp;&nbsp; a13 = a12 + a11;<br />
&nbsp;&nbsp;&nbsp; a14 = a13 + a12;<br />
&nbsp;&nbsp;&nbsp; a15 = a14 + a13;<br />
&nbsp;&nbsp;&nbsp; <br />
<br />
&nbsp;&nbsp;&nbsp; // aora estou fazendo a soma da sequencia, copiei igual ta escrito na declaração <br />
&nbsp;&nbsp;&nbsp; // das variaveis apagando a virgunta e preenchendo com espaço antes o simbolo da soma e espaco depois.<br />
&nbsp;&nbsp;&nbsp; // para efeito de comparação a soma dos 15 termos, com o a1 = 1 e o a2 = 1, a fibonacci clássica<br />
&nbsp;&nbsp;&nbsp; // a soma tem que dar 1596<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; soma = a01 + a02 + a03 + a04 + a05 + a06 + a07 + a08 + a09 + a10 + a11 + a12 + a13 + a14 + a15;<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; // agora vou fazer a ultima etapa do exercicios que é a media dos numeros da serie.<br />
&nbsp;&nbsp;&nbsp; // lembrar de declarar a variavel media como tipo float (flutuante, numero real) porque é um numero com virgula. quebrado<br />
&nbsp;&nbsp;&nbsp; // e no ultimo printf, ou cout tem que declarar a variavel como tipo float tbm, nos outros printf ou cout<br />
&nbsp;&nbsp;&nbsp; // era declarado apenas do tipo inteiro (int)<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; media = (soma/15);<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; // aqui eu percebi que além da variavel media ser do tipo float( tipo real) a variavel soma teria que ser do tipo<br />
&nbsp;&nbsp;&nbsp; // float tbm, somar todos numeros da sequencia da um numero inteiro. se a variavel soma estivar declarada como inteiro (int)<br />
&nbsp;&nbsp;&nbsp; // na hora de fazer a media o meu resultado vai sair sempre aredondado, no caso padrão para 106 nesse exercicio e na<br />
&nbsp;&nbsp;&nbsp; // linguagem c podemos usar outros formar para aredondar para baixo(chão) para cima (Céu) e um terceira que aredonda 0,5<br />
&nbsp;&nbsp;&nbsp; // até o numero ,5 aredonda pra baixo e acima de ,5 para cima... ( se não me enagano.<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "A Sequencia Fibonacci e: \n";<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n" &lt;&lt; a01 ;<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n" &lt;&lt; a02 ;<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n" &lt;&lt; a03 ;<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n" &lt;&lt; a04 ;<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n" &lt;&lt; a05 ;<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n" &lt;&lt; a06 ;<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n" &lt;&lt; a07 ;<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n" &lt;&lt; a08 ;<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n" &lt;&lt; a09 ;<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n" &lt;&lt; a10 ;<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n" &lt;&lt; a11 ;<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n" &lt;&lt; a12 ;<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n" &lt;&lt; a13 ;<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n" &lt;&lt; a14 ;<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n" &lt;&lt; a15 ;<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n A soma da sequencia Fibonacci e: ";<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; soma;<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; // para imprimir um numero do tipo float basta colocar %f, no caso coloquei %.1f o um representa o numero<br />
&nbsp;&nbsp;&nbsp; // de casas decimais que eu quero. se for %.3f seria 106,400 (3 casas decimais)<br />
&nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n A media da sequencia Fibonacci e: ";<br />
&nbsp;&nbsp;&nbsp; std::cout &lt;&lt; std::fixed &lt;&lt; std::setprecision(1) &lt;&lt; media &lt;&lt; "\n";<br />
<br />
<br />
<br />
&nbsp;&nbsp;&nbsp; <br />
/*<br />
1 pergunta (quais são os numeros da sequencia, digitando os 2 primeiros numeros ?)<br />
vou tomar como padrao o a1 = 1 e o a2 = 1 que é a sequencia normal da fibonacci<br />
Resposta<br />
1<br />
1<br />
2<br />
3<br />
5<br />
8<br />
13<br />
21<br />
34<br />
55<br />
89<br />
144<br />
233<br />
377<br />
610<br />
<br />
2 Pergunta qual a soma de toda a sequencia ?<br />
1596<br />
3 Pergunta qual é a média dos numeros da series fibonacci ?<br />
Resposta : 106,4<br />
<br />
<br />
*/<br />
<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; system ("PAUSE");<br />
&nbsp;&nbsp;&nbsp; return 0;<br />
}<br />
<br />
https://www.urionlinejudge.com.br/judge/pt/problems/view/1029<br />
<div class="description">
                    
 Quase todo estudante de Ciência da Computação recebe em algum momento 
no início de seu curso de graduação algum problema envolvendo a 
sequência de Fibonacci. Tal sequência tem como os dois primeiros valores
 0 (zero) e 1 (um) e cada próximo valor será sempre a soma dos dois 
valores imediatamente anteriores. Por definição, podemos apresentar a 
seguinte fórmula para encontrar qualquer número da sequência de 
Fibonacci:<br />
 <span class="code">
 fib(0) = 0<br />
 fib(1) = 1<br />
 fib(n) = fib(n-1) + fib(n-2);</span><br />

 Uma das formas de encontrar o número de Fibonacci é através de chamadas
 recursivas. Isto é ilustrado a seguir, apresentando a árvore de 
derivação ao calcularmos o valor fib(4), ou seja o 5º valor desta 
sequência:<br />

 <br />  <div class="center">
 <img alt="" src="https://urionlinejudge.r.worldssl.net/gallery/images/problems/UOJ_1029.png" style="height: 265px; width: 468px;" /></div>
<br />
 Desta forma,
<ul>
<li>
  fib(4) = 1+0+1+1+0 = 3</li>
<li>
  Foram feitas 8 calls, ou seja, 8 chamadas recursivas.</li>
</ul>
</div>
<h2>
Entrada</h2>
<div class="input">
                    
 A primeira linha da entrada contém um único inteiro <strong>N</strong>, indicando o número de casos de teste. Cada caso de teste contém um inteiro <strong>X</strong> (1 ≤ <strong>X</strong> ≤ 39) .<br />


                </div>
<h2>
Saída</h2>
<div class="output">
                    
 Para cada caso de teste de entrada deverá ser apresentada uma linha de saída, no seguinte formato: fib(n) = <strong>num_calls</strong> calls = <strong>result</strong>, aonde <strong>num_calls</strong> é o número de chamadas recursivas, tendo sempre um espaço antes e depois do sinal de igualdade, conforme o exemplo abaixo.<br />


                </div>
<table><thead>
<tr>
                            <td>Exemplo de Entrada</td>
                            <td>Exemplo de Saída</td>
                        </tr>
</thead>
                    <tbody>
<tr>
                            <td class="division">
                                
 2<br />
 5<br />
 4<br />


                            </td>
                            <td>
                                
                                fib(5) = 14 calls = 5<br />
                                fib(4) = 8 calls = 3</td></tr>
</tbody></table>
<br />
https://www.urionlinejudge.com.br/judge/pt/problems/view/1151<br />
<br />
<div class="problem">

            <div class="description">
                
                    A seguinte sequência de números 0 1 1 2 3 5 8 13 
21... é conhecida como série de Fibonacci. Nessa sequência, cada número,
 depois dos 2 primeiros, é igual à soma dos 2 anteriores. Escreva um 
algoritmo que leia um inteiro N (N &lt; 46) e mostre os N primeiros 
números dessa série.<br />


            </div>
<h2>
Entrada</h2>
<div class="input">
                
                    O arquivo de entrada contém um valor inteiro N (0 &lt; N &lt; 46).<br />


            </div>
<h2>
Saída</h2>
<div class="output">
                
                    Os valores devem ser mostrados na mesma linha, 
separados por um espaço em branco. Não deve haver espaço após o último 
valor.<br />


            </div>
<table>
                <thead>
<tr>
                        <td>Exemplo de Entrada</td>
                        <td>Exemplo de Saída</td>
                    </tr>
</thead>
                <tbody>
<tr>
                        <td class="division">
                            
                                5<br />


                        </td>
                        <td>
                            
                                0 1 1 2 3<br />


                        </td>

                    </tr>
</tbody>
            </table>
<div class="footer">
                Agradecimentos a Cássio F.</div>
<div class="footer">
<br /></div>
<div class="footer">
https://www.urionlinejudge.com.br/judge/pt/problems/view/1531</div>
<div class="footer">
<br /></div>
<div class="description">
                    A famosa sequência de Fibonacci pode ser definida da seguinte maneira:<br />


<ul>
<li>Fib( 1 ) = Fib( 2 ) = 1</li>
<li>Fib( N&nbsp;) = Fib( N-1 ) + Fib( N-2 ), para N &gt; 2</li>
</ul>
Sua tarefa é simples, calcular o valor do resto de Fib( Fib( N ) ) por M.<br />


                </div>
<h2>
Entrada</h2>
<div class="input">
                    A entrada é composta por vários casos de teste e termina com EOF. Cada caso de teste consiste de uma linha com dois inteiros&nbsp;<strong>N</strong>&nbsp;e&nbsp;<strong>M</strong>&nbsp;<span style="font-family: trebuchet ms,helvetica,jamrul,sans-serif; font-size: 14px;">(1 ≤ <strong>N</strong><span style="font-family: trebuchet ms,helvetica,jamrul,sans-serif; font-size: 14px;">&nbsp;≤ 10<sup>9</sup>, 2&nbsp;≤&nbsp;<strong>M</strong><span style="font-family: trebuchet ms,helvetica,jamrul,sans-serif; font-size: 14px;">&nbsp;≤ 10<sup>6</sup><span style="font-family: trebuchet ms,helvetica,jamrul,sans-serif; font-size: 14px;">).</span></span></span></span><br />


                </div>
<h2>
Saída</h2>
<div class="output">
                    Para cada caso de teste, imprima uma linha contendo um inteiro igual ao&nbsp;resto de Fib( Fib( <strong>N</strong> ) ) por <strong>M</strong>.<br />


                </div>
&nbsp;</div>
<div class="problem">
<table><thead>
<tr>
                            <td>Exemplo de Entrada</td>
                            <td>Exemplo de Saída</td>
                        </tr>
</thead>
                    <tbody>
<tr>
                            <td class="division">
                                1 100<br />
2 100<br />
3 100<br />
4 100<br />
5 100<br />
5 2<br />
6 100<br />


                            </td>
                            <td>
                                1<br />
1<br />
1<br />
2<br />
5<br />
1<br />
21</td></tr>
</tbody></table>
<div class="footer">
<br /></div>
<div class="footer">
https://www.urionlinejudge.com.br/judge/pt/problems/view/1176</div>
<div class="footer">
<br /></div>
<div class="problem">

            <div class="description">
                
                    Faça um programa que leia um valor e apresente o 
número de Fibonacci correspondente a este valor lido. 
                    Lembre que os 2 primeiros elementos da série de 
Fibonacci são 0 e 1 e cada próximo termo é a soma dos 2 anteriores a 
ele.
                    Todos os valores de Fibonacci calculados neste 
problema devem caber em um inteiro de 64 bits sem sinal.<br />


            </div>
<h2>
Entrada</h2>
<div class="input">
                
                    A primeira linha da entrada contém um inteiro <strong>T</strong>, indicando o número de casos de teste.
                    Cada caso de teste contém um único inteiro <strong>N</strong> (0 ≤ <strong>N</strong> ≤ 60), correspondente ao N-esimo termo da série de Fibonacci.<br />


            </div>
<h2>
Saída</h2>
<div class="output">
                
                    Para cada caso de teste da entrada, imprima a 
mensagem "Fib(N) = X", onde X é o N-ésimo termo da série de Fibonacci.<br />


            </div>
<table>
                <thead>
<tr>
                        <td>Exemplo de Entrada</td>
                        <td>Exemplo de Saída</td>
                    </tr>
</thead>
                <tbody>
<tr>
                        <td class="division">
                            
                                3<br />
                                0<br />
                                4<br />
                                2<br />


                        </td>
                        <td>
                            
                                Fib(0) = 0<br />
                                Fib(4) = 3<br />
                                Fib(2) = 1<br />


                        </td>
                    </tr>
</tbody>
            </table>
<div class="footer">
                Agradecimentos a Cassio F.</div>
</div>
<div class="footer">
<br /></div>
</div>

