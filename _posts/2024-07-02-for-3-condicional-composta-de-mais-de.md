---
layout: post
title: for 3 condicional composta de mais de um parametro
date: 2024-07-02 22:46
author: Morgao
comments: true
categories: 
---
#include &lt;iostream&gt;<br />using namespace std;<br /><br />int main() {&nbsp;&nbsp; <br /><br />&nbsp;&nbsp;&nbsp; int x, y, z;<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; // inscrementando 2 variaveis em 1 for<br />&nbsp;&nbsp;&nbsp; for(x=0, y=1, z=0;x&lt;10 &amp;&amp; z&lt;=6; x++, y+=2, z+=2)<br />&nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout&lt;&lt;x&lt;&lt; " // "&lt;&lt;y&lt;&lt;" // "&lt;&lt;z&lt;&lt;endl;<br />&nbsp;&nbsp;&nbsp; }<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; return 0;<br /><br />}
