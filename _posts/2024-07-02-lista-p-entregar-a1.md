---
layout: post
title: lista p entregar a1
date: 2024-07-02 22:43
author: Morgao
comments: true
categories: 
---
incompleto<br />
#include &lt;iostream&gt;<br />
using namespace std;<br />
<br />
int main (){<br />
<span style="white-space: pre;"> </span>int f1,f2,f3,i,soma,media;<br />
<span style="white-space: pre;"> </span><br />
<br />
<span style="white-space: pre;"> </span>cin&gt;&gt;f1;<br />
<span style="white-space: pre;"> </span>cin&gt;&gt;f2;<br />
<span style="white-space: pre;"> </span>f3 = 0<br />
<span style="white-space: pre;"> </span>soma = 0;<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span>for(i=0;i&lt;13;i++)<br />
<span style="white-space: pre;"> </span>{<br />
<span style="white-space: pre;">  </span>f3 = f1 + f2;<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;">  </span>for(i=0;i&lt;15;i++)<br />
<span style="white-space: pre;">  </span>{<br />
<span style="white-space: pre;">  </span>soma = soma + f3;<br />
<span style="white-space: pre;">  </span><br />
<span style="white-space: pre;">  </span>}<br />
<span style="white-space: pre;">   </span>cout&lt;&lt; f3 &lt;&lt;endl;<br />
<span style="white-space: pre;"> </span>}<br />
<span style="white-space: pre;"> </span>media = soma / 15 ;<br />
<span style="white-space: pre;"> </span>cout&lt;&lt;"soma: "&lt;&lt;soma&lt;&lt;endl;<br />
<span style="white-space: pre;"> </span>cout&lt;&lt;"media: "&lt;&lt;media&lt;&lt;endl;<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span>return 0;<br />
}
