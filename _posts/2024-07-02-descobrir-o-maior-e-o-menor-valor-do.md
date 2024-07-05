---
layout: post
title: descobrir o maior e o menor valor do vetor
date: 2024-07-02 22:47
author: Morgao
comments: true
categories:
---
#include &lt;iostream&gt;<br />using namespace std;<br /><br />int main() {<br />&nbsp;int a[10],i,maior,menor,x;<br /><br />&nbsp;for(i=0;i&lt;=9;i++)<br />&nbsp;{<br />&nbsp; cout&lt;&lt;"digite um numero "&lt;&lt;i&lt;&lt;"= "&lt;&lt;endl;<br />&nbsp; cin&gt;&gt;a[i]; <br /><br />&nbsp;}<br />&nbsp;maior = a[0];<br />&nbsp;menor = a[0];<br />&nbsp;for(x=0;x&lt;=9;x++)<br />&nbsp;{<br />&nbsp; if(a[x]&gt;maior)<br />&nbsp; {<br />&nbsp;&nbsp; maior = a[x];<br />&nbsp; }<br />&nbsp; if(a[x]&lt;menor)<br />&nbsp; {<br />&nbsp;&nbsp; menor = a[x];<br />&nbsp; }<br />&nbsp;}<br />&nbsp;x = maior - menor;<br />&nbsp;cout&lt;&lt;" maior "&lt;&lt;maior&lt;&lt;endl;<br />&nbsp;cout&lt;&lt;" menor "&lt;&lt;menor&lt;&lt;endl;<br />&nbsp;cout&lt;&lt;" o maior e "&lt;&lt;x&lt;&lt;" maior que o menor"&lt;&lt;endl;<br />&nbsp;cout&lt;&lt;"Fim do Porgrama"&lt;&lt;endl;<br /><br />&nbsp;return 0;<br /><br />}
