---
layout: post
title: soma bla bla
date: 2024-07-02 22:48
author: Morgao
comments: true
categories: [Algoritmos, Algoritmos 1, Algoritmos e Estruturas de Dados, beecrowd, Linguagem C, Programação]
---
#include &lt;iostream&gt;<br />
using namespace std;<br />
<br />
<br />
<br />
int main ()<br />
{<br />
<br />
<span style="white-space: pre;"> </span>int a,i,soma;<br />
<span style="white-space: pre;"> </span>cout&lt;&lt; "digite... "&lt;&lt;endl;<br />
<span style="white-space: pre;"> </span>cin&gt;&gt;a;<br />
<span style="white-space: pre;"> </span>soma = 0;<br />
<span style="white-space: pre;"> </span>for(i=0;i&lt;a;i++)<br />
<span style="white-space: pre;"> </span>{<br />
<span style="white-space: pre;">  </span>if(a%i==0)<br />
<span style="white-space: pre;">  </span>{<br />
<span style="white-space: pre;">   </span>soma = soma + 1;<br />
<span style="white-space: pre;">  </span>}<br />
<span style="white-space: pre;"> </span>}<br />
<span style="white-space: pre;"> </span>if(soma==2)<br />
<span style="white-space: pre;"> </span>{<br />
<span style="white-space: pre;">  </span><br />
<span style="white-space: pre;">  </span>cout&lt;&lt;" é primo"&lt;&lt;endl;<br />
<span style="white-space: pre;"> </span>}<br />
<span style="white-space: pre;"> </span>else<br />
<span style="white-space: pre;"> </span>{<br />
<span style="white-space: pre;">  </span>cout&lt;&lt;"não é primo"&lt;&lt;endl;<br />
<span style="white-space: pre;"> </span>}<br />
<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span>return(0);<br />
<span style="white-space: pre;"> </span><br />
}<br />
/*<br />
int fator (int x)<br />
{<br />
<span style="white-space: pre;"> </span>int w,i,fat,y;<br />
<span style="white-space: pre;"> </span>for(i=1;i&lt;=x;i++)<br />
<span style="white-space: pre;"> </span>{<br />
&nbsp; <span style="white-space: pre;"> </span>fat = x * i;<br />
&nbsp; <span style="white-space: pre;"> </span>y = fat;<br />
&nbsp;<span style="white-space: pre;"> </span>w = y * i;<br />
<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span>return(w);<br />
<span style="white-space: pre;"> </span>}<br />
*/<br />
<div>
<br /></div>

