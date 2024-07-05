---
layout: post
title: matriz 3 ler peleo teclado valores pro array e printa na tela
date: 2024-07-02 22:46
author: Morgao
comments: true
categories: 
---
#include &lt;iostream&gt;<br />using namespace std;<br /><br />int main() {&nbsp;&nbsp; <br /><br />&nbsp;&nbsp;&nbsp; int matriz[3][4];<br />&nbsp;&nbsp;&nbsp; int L, C;<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; // inserir os valores pelo teclado<br />&nbsp;&nbsp;&nbsp; for(L=0;L&lt;3;L++)<br />&nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; for(C=0;C&lt;4;C++)<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cin&gt;&gt;matriz[L][C];<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; }<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; }<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; // for que imprime os valores da matriz<br />&nbsp;&nbsp;&nbsp; for(L=0;L&lt;3;L++)<br />&nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; for(C=0;C&lt;4;C++)<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout&lt;&lt;matriz[L][C]&lt;&lt;" ";<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; }<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n";<br />&nbsp;&nbsp;&nbsp; }<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; <br /><br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; return 0;<br /><br />}
