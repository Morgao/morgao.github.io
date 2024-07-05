---
layout: post
title: primeiro if simples completo
date: 2024-07-02 22:44
author: Morgao
comments: true
categories: [Algoritmos, Algoritmos 1, Algoritmos e Estruturas de Dados, beecrowd, Linguagem C, Programação]
---
#include &lt;iostream&gt;<br />
// biblioteca do system cls<br />#include &lt;cstdlib&gt;<br />using namespace std;<br /><br /><br />int main() {<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; int n1, n2, res;<br />&nbsp;&nbsp;&nbsp; char opc;<br />
<br />&nbsp;&nbsp;&nbsp; // table do gotto<br />&nbsp;&nbsp;&nbsp; inicio:<br />
<br />
// clear do dos<br />&nbsp;&nbsp;&nbsp; system ("cls");<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; cout&lt;&lt; " Digite o valor da nota 1: "&lt;&lt;endl;<br />&nbsp;&nbsp;&nbsp; cin&gt;&gt;n1;<br />&nbsp;&nbsp;&nbsp; cout&lt;&lt; " DIgite o valor da nota 2: "&lt;&lt;endl;<br />&nbsp;&nbsp;&nbsp; cin&gt;&gt;n2;<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; res = n1 + n2;<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; // aprovado, reprovado e recuperacao<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; // &gt; = aprovado<br />&nbsp;&nbsp;&nbsp; //&nbsp; &gt;= 40 e &lt;59 recuperacao<br />&nbsp;&nbsp;&nbsp; // &lt; 40 reprovado<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; if(res &gt;=60)<br />&nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout&lt;&lt; " \n aluno aprovado \n";<br />&nbsp;&nbsp;&nbsp; }<br />&nbsp;&nbsp;&nbsp; else if (res &gt;= 40)<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout&lt;&lt; "\n aluno em recuperacao&nbsp; \n";<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; }<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; else<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout&lt;&lt; " \n auluno reprovado \n";<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; }<br />&nbsp;&nbsp;&nbsp; // comandos&nbsp; pro go to, continuar outros teste do programa<br />&nbsp;&nbsp;&nbsp; cout&lt;&lt; "\n Digita outras notas (s/n) \n";<br />&nbsp;&nbsp;&nbsp; cin&gt;&gt; opc;<br />&nbsp;&nbsp;&nbsp; if(opc == 's' || opc=='S')<br />&nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; goto inicio;<br />&nbsp;&nbsp;&nbsp; }<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; return 0;<br />}
