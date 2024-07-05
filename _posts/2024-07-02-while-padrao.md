---
layout: post
title: while  padrao
date: 2024-07-02 22:44
author: Morgao
comments: true
categories: 
---
#include &lt;iostream&gt;<br /><br />using namespace std;<br /><br /><br />int main() {<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; int n=0;<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; while(n&lt;10)<br />&nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout&lt;&lt; n &lt;&lt; "\n";<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; n++;<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; }<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; cout&lt;&lt; "rotina finalizada"&lt;&lt;endl;<br /><br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; cout&lt;&lt;"\nPrograma Finalizado\n";<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; return 0;<br />}<br />
<br />
// sem o inscremento ficaria em loop infinito<br />
// while condicao de entrada, variavel declarada e com valor ou ler valor de teclado<br />
// e condicao de parada
