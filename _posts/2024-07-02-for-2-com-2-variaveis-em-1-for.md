---
layout: post
title: for 2 com 2 ou mais variaveis variaveis em 1 for
date: 2024-07-02 22:45
author: Morgao
comments: true
categories: [Algoritmos, Algoritmos 1, Algoritmos e Estruturas de Dados, beecrowd, Linguagem C, Programação]
---
#include &lt;iostream&gt;<br />
using namespace std;<br />
<br />
int main() {&nbsp;&nbsp; <br />
<br />
&nbsp;&nbsp;&nbsp; int x, y;<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; // inscrementando 2 variaveis em 1 for<br />
&nbsp;&nbsp;&nbsp; for(x=0,y=1;x&lt;10;x++,y+=2)<br />
&nbsp;&nbsp;&nbsp; {<br />
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout&lt;&lt;x&lt;&lt; " // "&lt;&lt;y&lt;&lt;endl;<br />
&nbsp;&nbsp;&nbsp; }<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; return 0;<br />
<br />
}<br />
&nbsp;------------------------------------------------------------------------------------------<br />
#include &lt;iostream&gt;<br />using namespace std;<br /><br />int main() {&nbsp;&nbsp; <br /><br />&nbsp;&nbsp;&nbsp; int x, y, z;<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; // inscrementando 2 variaveis em 1 for<br />&nbsp;&nbsp;&nbsp; for(x=0, y=1, z=0;x&lt;10; x++, y+=2, z+=2)<br />&nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout&lt;&lt;x&lt;&lt; " // "&lt;&lt;y&lt;&lt;" // "&lt;&lt;z&lt;&lt;endl;<br />&nbsp;&nbsp;&nbsp; }<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; return 0;<br /><br />} 
