---
layout: post
title: funcao com goto
date: 2024-07-02 22:47
author: Morgao
comments: true
categories: 
---
#include &lt;iostream&gt;<br />
using namespace std;<br />
<br />
int soma (int x, int y);<br />
<br />
int main ()<br />
{<br />
<span style="white-space: pre;"> </span> char opc;<br />
&nbsp; &nbsp; // table do gotto<br />
&nbsp; &nbsp;<br />
&nbsp; &nbsp; inicio:<br />
<span style="white-space: pre;"> </span>int a, b, res;<br />
<span style="white-space: pre;"> </span>cout&lt;&lt; "digite... "&lt;&lt;endl;<br />
<span style="white-space: pre;"> </span>cin&gt;&gt;a;<br />
<span style="white-space: pre;"> </span>cin&gt;&gt;b;<br />
<span style="white-space: pre;"> </span>res = soma(a,b);<br />
<span style="white-space: pre;"> </span>cout&lt;&lt;res&lt;&lt;endl;<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span>&nbsp; // comandos&nbsp; pro go to, continuar outros teste do programa<br />
&nbsp; &nbsp; cout&lt;&lt; "\n continuar somando: (s/n) \n";<br />
&nbsp; &nbsp; cin&gt;&gt; opc;<br />
&nbsp; &nbsp; if(opc == 's' || opc=='S')<br />
&nbsp; &nbsp; {<br />
&nbsp; &nbsp; &nbsp; &nbsp; goto inicio;<br />
&nbsp; &nbsp; }<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span>return(0);<br />
<span style="white-space: pre;"> </span><br />
}<br />
<br />
int soma (int x, int y)<br />
{<br />
<span style="white-space: pre;"> </span>int w;<br />
<span style="white-space: pre;"> </span>w = x + y;<br />
<span style="white-space: pre;"> </span>return(w);<br />
}<br />
<br />
