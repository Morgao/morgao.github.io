---
layout: post
title: ler 1 vetor os numeros pares multiplica por 2 os impares multiplica por 3
date: 2024-07-02 22:47
author: Morgao
comments: true
categories: [Algoritmos, Algoritmos 1, Algoritmos e Estruturas de Dados, beecrowd, Linguagem C, Programação]
---
#include &lt;iostream&gt;<br />using namespace std;<br /><br />int main() {<br />&nbsp;int a[12],b[12],i,j;<br /><br />&nbsp;for(i=0;i&lt;=11;i++)<br />&nbsp;{<br />&nbsp; cout&lt;&lt;"digite um numero "&lt;&lt;i&lt;&lt;"= "&lt;&lt;endl;<br />&nbsp; cin&gt;&gt;a[i];<br />&nbsp;}<br /><br />&nbsp;&nbsp; for (j=0;j&lt;=11;j++)<br />&nbsp; {<br />&nbsp;&nbsp; if(j%2==0)<br />&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp; b[j]= a[j] * 2;<br />&nbsp;&nbsp;&nbsp; cout&lt;&lt;" "&lt;&lt;b[j]&lt;&lt;" ";<br />&nbsp;&nbsp; }<br /><br />&nbsp;&nbsp; if(j%2==1)<br />&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp; b[j] = a[j] * 3;<br />&nbsp;&nbsp;&nbsp; cout&lt;&lt;" "&lt;&lt;b[j]&lt;&lt;" ";<br />&nbsp;&nbsp; }&nbsp; <br />&nbsp; }<br /><br />&nbsp;return 0;<br /><br />}<br /><br /><br />
