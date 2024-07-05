---
layout: post
title: Algoritmos Ghunter Lista 2 - For - Array Vetor e Matriz - ex 04
date: 2024-07-02 22:46
author: Morgao
comments: true
categories: [Algoritmos, Algoritmos 1, Algoritmos e Estruturas de Dados, beecrowd, Linguagem C, Programação]
---
#include &lt;iostream&gt;<br />
using namespace std;<br />
// Matheus Nakade Lista 2 - EX 04<br />
<br />
int main() {&nbsp; <br />
<br />
&nbsp;&nbsp;&nbsp; int A[20],L;<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp; <br />
// lE os 20 numeros inteiros do vetor A<br />
&nbsp;&nbsp;&nbsp; for(L=0;L&lt;20;L++)<br />
&nbsp;&nbsp;&nbsp; {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cin&gt;&gt;A[L];&nbsp;&nbsp; <br />
&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />
&nbsp; <br />
// mostra os 20 numeros do vetor A<br />
&nbsp;&nbsp;&nbsp; cout&lt;&lt;" "&lt;&lt;endl;&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; cout&lt;&lt;"O Vetor Digita e: "&lt;&lt;endl;&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; for(L=0;L&lt;20;L++)<br />
&nbsp;&nbsp;&nbsp; {<br />
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout&lt;&lt;A[L]&lt;&lt;" ";<br />
&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; }<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />
// altera os numeros pares por 0&nbsp;&nbsp; <br />
<br />
&nbsp;&nbsp;&nbsp; for(L=0;L&lt;20;L++)<br />
&nbsp;&nbsp;&nbsp; {<br />
&nbsp;&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; for(L=0;L&lt;20;L++)<br />
&nbsp;&nbsp;&nbsp; {<br />
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; if(A[L]%2 == 0)<br />
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {<br />
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; A[L]=0;<br />
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; }<br />
&nbsp;&nbsp;&nbsp; }<br />
&nbsp;&nbsp;&nbsp; <br />
// mostra os 20 numeros do vetor A aletando os vetores que são pares para 0<br />
&nbsp;&nbsp;&nbsp; cout&lt;&lt;" "&lt;&lt;endl;<br />
&nbsp;&nbsp;&nbsp; cout&lt;&lt;"A Seguir o vetor alterado: "&lt;&lt;endl;<br />
&nbsp;&nbsp;&nbsp; for(L=0;L&lt;20;L++)<br />
&nbsp;&nbsp;&nbsp; {<br />
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout&lt;&lt;A[L]&lt;&lt;" ";<br />
&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; }<br />
}<br />
&nbsp;&nbsp; <br />
&nbsp;&nbsp; <br />
&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; cout&lt;&lt;"Fim do Programa"&lt;&lt;endl;<br />
&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; return 0;<br />
<br />
} 
