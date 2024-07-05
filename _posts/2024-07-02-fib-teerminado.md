---
layout: post
title: fib teerminado
date: 2024-07-02 22:48
author: Morgao
comments: true
categories: [Algoritmos, Algoritmos 1, Algoritmos e Estruturas de Dados, beecrowd, Linguagem C, Programação]
---
#include &lt;iostream&gt;<br />
<br />
using namespace std;<br />
<br />
int fib (int x, int y, int z);<br />
int main() {<br />
&nbsp;int f1,f2,fx,res;<br />
<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; cout&lt;&lt;"Digite o primeiro numero da sequencia Fib: "&lt;&lt;endl;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; cin&gt;&gt;f1;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; cout&lt;&lt;"Digite o segundo numero da sequencia Fib: "&lt;&lt;endl;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; cin&gt;&gt;f2;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; cout&lt;&lt;"Digite o segundo numero da sequencia Fib: "&lt;&lt;endl;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; cin&gt;&gt;fx;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; cout&lt;&lt;endl;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; res = fib(f1,f2,fx);<br />
&nbsp; &nbsp; &nbsp; &nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; cout&lt;&lt;"a resposta :"&lt;&lt;res&lt;&lt;endl;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
<br />
<br />
&nbsp; <br />
&nbsp; <br />
<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
&nbsp; &nbsp;return 0;<br />
&nbsp; <br />
<br />
}<br />
<br />
&nbsp; &nbsp;int fib (int x, int y, int z)<br />
&nbsp; &nbsp;{<br />
&nbsp; <br />
&nbsp; &nbsp;<span style="white-space: pre;"> </span>int i,w,soma;<br />
&nbsp; &nbsp; for(i=2;i&lt;z;i++)<br />
&nbsp; &nbsp; {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; w = x + y;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; cout&lt;&lt;w&lt;&lt;endl;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; soma = w + y;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; x = y;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; y = w;<br />
&nbsp; &nbsp; }<br />
&nbsp; <span style="white-space: pre;">   </span>return(w);<br />
&nbsp; &nbsp; }<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br />
<br />
<br />
/*<br />
paramentros<br />
<span style="background-color: #fff2cc; font-family: &quot;arial&quot; , &quot;tahoma&quot; , &quot;helvetica&quot; , &quot;freesans&quot; , sans-serif; font-size: 13.524px;">1</span><br />
<span style="background-color: #fff2cc; font-family: &quot;arial&quot; , &quot;tahoma&quot; , &quot;helvetica&quot; , &quot;freesans&quot; , sans-serif; font-size: 13.524px;">1</span><br />
<span style="background-color: #fff2cc; font-family: &quot;arial&quot; , &quot;tahoma&quot; , &quot;helvetica&quot; , &quot;freesans&quot; , sans-serif; font-size: 13.524px;">2</span><br />
<span style="background-color: #fff2cc; font-family: &quot;arial&quot; , &quot;tahoma&quot; , &quot;helvetica&quot; , &quot;freesans&quot; , sans-serif; font-size: 13.524px;">3</span><br />
<span style="background-color: #fff2cc; font-family: &quot;arial&quot; , &quot;tahoma&quot; , &quot;helvetica&quot; , &quot;freesans&quot; , sans-serif; font-size: 13.524px;">5</span><br />
<span style="background-color: #fff2cc; font-family: &quot;arial&quot; , &quot;tahoma&quot; , &quot;helvetica&quot; , &quot;freesans&quot; , sans-serif; font-size: 13.524px;">8</span><br />
<span style="background-color: #fff2cc; font-family: &quot;arial&quot; , &quot;tahoma&quot; , &quot;helvetica&quot; , &quot;freesans&quot; , sans-serif; font-size: 13.524px;">13</span><br />
<span style="background-color: #fff2cc; font-family: &quot;arial&quot; , &quot;tahoma&quot; , &quot;helvetica&quot; , &quot;freesans&quot; , sans-serif; font-size: 13.524px;">21</span><br />
<span style="background-color: #fff2cc; font-family: &quot;arial&quot; , &quot;tahoma&quot; , &quot;helvetica&quot; , &quot;freesans&quot; , sans-serif; font-size: 13.524px;">34</span><br />
<span style="background-color: #fff2cc; font-family: &quot;arial&quot; , &quot;tahoma&quot; , &quot;helvetica&quot; , &quot;freesans&quot; , sans-serif; font-size: 13.524px;">55</span><br />
<span style="background-color: #fff2cc; font-family: &quot;arial&quot; , &quot;tahoma&quot; , &quot;helvetica&quot; , &quot;freesans&quot; , sans-serif; font-size: 13.524px;">89</span><br />
<span style="background-color: #fff2cc; font-family: &quot;arial&quot; , &quot;tahoma&quot; , &quot;helvetica&quot; , &quot;freesans&quot; , sans-serif; font-size: 13.524px;">144</span><br />
<span style="background-color: #fff2cc; font-family: &quot;arial&quot; , &quot;tahoma&quot; , &quot;helvetica&quot; , &quot;freesans&quot; , sans-serif; font-size: 13.524px;">233</span><br />
<span style="background-color: #fff2cc; font-family: &quot;arial&quot; , &quot;tahoma&quot; , &quot;helvetica&quot; , &quot;freesans&quot; , sans-serif; font-size: 13.524px;">377</span><br />
<span style="background-color: #fff2cc; font-family: &quot;arial&quot; , &quot;tahoma&quot; , &quot;helvetica&quot; , &quot;freesans&quot; , sans-serif; font-size: 13.524px;">610</span>&nbsp; <br />
*/<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
