---
layout: post
title: quantos sao impares e quantos sao pares
date: 2024-07-02 22:47
author: Morgao
comments: true
categories: [Algoritmos, Algoritmos 1, Algoritmos e Estruturas de Dados, beecrowd, Linguagem C, Programação]
---
#include &lt;iostream&gt;<br />using namespace std;<br />int main() {<br />&nbsp;int a[12],i,x,soma,impares,pares,w;<br />&nbsp;soma = 0;<br />&nbsp;impares = 0;<br />&nbsp;pares = 0;<br />&nbsp;w = 0;<br />&nbsp;for(i=0;i&lt;=11;i++)<br />&nbsp;{<br />&nbsp; cout&lt;&lt;"digite um numero "&lt;&lt;i&lt;&lt;"= "&lt;&lt;endl;<br />&nbsp; cin&gt;&gt;a[i];<br />&nbsp; soma = soma + a[i];<br />&nbsp; cout&lt;&lt;a[i];<br />&nbsp; if(a[i]%2==1)<br />&nbsp; {<br />&nbsp;&nbsp; impares = impares + 1;<br />&nbsp; }<br />&nbsp; if(a[i]%2==0)<br />&nbsp; {<br />&nbsp;&nbsp; pares = pares +1;<br />&nbsp; }<br />&nbsp; if((a[i]&gt;10) &amp;&amp; (a[i]&lt;100))<br />&nbsp; {<br />&nbsp;&nbsp; w = w + 1;<br />&nbsp; }<br />&nbsp;}<br />&nbsp;cout&lt;&lt;" sao pares "&lt;&lt;pares&lt;&lt;endl;<br />&nbsp;cout&lt;&lt;" sao impares "&lt;&lt;impares&lt;&lt;endl;<br />&nbsp;cout&lt;&lt;" sao maiores que 10 e menores que 100 "&lt;&lt;w&lt;&lt;endl; <br /><br />&nbsp;cout&lt;&lt;"Fim do Porgrama"&lt;&lt;endl;<br /><br />&nbsp;return 0;<br /><br />}
