---
layout: post
title: matriz 1 array bidimencional array de array linha e coluna
date: 2024-07-02 22:46
author: Morgao
comments: true
categories: [Algoritmos, Algoritmos 1, Algoritmos e Estruturas de Dados, beecrowd, Linguagem C, Programação]
---
#include &lt;iostream&gt;<br />
using namespace std;<br />
<br />
int main() {&nbsp;&nbsp; <br />
<br />
&nbsp;&nbsp;&nbsp; int matriz[3][4];<br />
&nbsp;&nbsp;&nbsp; int L, C;<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; matriz[0][0]=0;<br />
&nbsp;&nbsp;&nbsp; matriz[0][1]=0;<br />
&nbsp;&nbsp;&nbsp; matriz[0][2]=0;<br />
&nbsp;&nbsp;&nbsp; matriz[0][3]=0;<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; matriz[1][0]=1;<br />
&nbsp;&nbsp;&nbsp; matriz[1][1]=1;<br />
&nbsp;&nbsp;&nbsp; matriz[1][2]=1;<br />
&nbsp;&nbsp;&nbsp; matriz[1][3]=1;<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; matriz[2][0]=2;<br />
&nbsp;&nbsp;&nbsp; matriz[2][1]=2;<br />
&nbsp;&nbsp;&nbsp; matriz[2][2]=2;<br />
&nbsp;&nbsp;&nbsp; matriz[2][3]=2;<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; for(L=0;L&lt;3;L++)<br />
&nbsp;&nbsp;&nbsp; {<br />
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; for(C=0;C&lt;4;C++)<br />
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {<br />
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout&lt;&lt;matriz[L][C]&lt;&lt;" ";<br />
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; }<br />
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout &lt;&lt; "\n";<br />
&nbsp;&nbsp;&nbsp; }<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; <br />
<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; return 0;<br />
<br />
}
