---
layout: post
title: operador ternario if simples verd ou falso
date: 2024-07-02 22:44
author: Morgao
comments: true
categories: [Algoritmos, Algoritmos 1, Algoritmos e Estruturas de Dados, beecrowd, Linguagem C, Programação]
---
#include &lt;iostream&gt;<br /><br />using namespace std;<br /><br /><br />int main() {<br />&nbsp;&nbsp; <br />&nbsp;&nbsp; &nbsp;// (expressao) ?(verdadediro relazia esa &gt; valor 1&nbsp; : falta realiza essa &gt; valor 2<br />&nbsp;&nbsp; &nbsp;// retorno de v ou f<br />&nbsp;&nbsp; &nbsp;// ou alteracao de uma variavel<br />&nbsp;&nbsp; <br />&nbsp;&nbsp; &nbsp;int n1, n2, nota;<br />&nbsp;&nbsp; &nbsp;string res;<br />&nbsp;&nbsp; <br />&nbsp;&nbsp; &nbsp;cout&lt;&lt; " Digite a primeira Nota: "&lt;&lt;endl;<br />&nbsp;&nbsp; &nbsp;cin&gt;&gt;n1<br />&nbsp;&nbsp; &nbsp;cout&lt;&lt; " Digite a segunda Nota: "&lt;&lt;endl;<br />&nbsp;&nbsp; &nbsp;cin&gt;&gt;n2<br />&nbsp;&nbsp; <br />&nbsp;&nbsp; &nbsp;nota = n1 + n2;<br />&nbsp;&nbsp; <br />&nbsp;&nbsp; &nbsp;// nota &gt;= 60 aprovado<br />&nbsp;&nbsp; &nbsp;// nota &lt; 60 reprovado<br /><br />&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; &nbsp;(nota &gt;= 60) ? res="Aprovado" : res="Reprovado";<br />&nbsp;&nbsp;&nbsp; &nbsp;// ou<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; &nbsp;// &nbsp;&nbsp; &nbsp;res=(nota&gt;=60)? "Aprovado" : "Reprovado";<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;cout&lt;&lt; "\nSituacao do aluno: \n"&lt;&lt; res &lt;&lt;endl;<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;// res2 que é tipoo int <br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;// &nbsp;&nbsp; &nbsp;res=(nota&gt;=60)? 1 : 0;<br /><br />&nbsp;&nbsp; <br />&nbsp;&nbsp; &nbsp;return 0;<br />}
