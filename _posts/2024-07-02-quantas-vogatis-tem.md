---
layout: post
title: quantas vogatis tem
date: 2024-07-02 22:47
author: Morgao
comments: true
categories: [Algoritmos, Algoritmos 1, Algoritmos e Estruturas de Dados, beecrowd, Linguagem C, Programação]
---
#include &lt;iostream&gt;<br />
#include &lt;stdio.h&gt;<br />
<br />
using namespace std;<br />
<br />
<br />
int main() {<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span>char a[100];<br />
<span style="white-space: pre;"> </span>int soma=0,i;<br />
<span style="white-space: pre;"> </span>int somaA=0;<br />
<span style="white-space: pre;"> </span>int somaE=0;<br />
<span style="white-space: pre;"> </span>int somaI=0;<br />
<span style="white-space: pre;"> </span>int somaO=0;<br />
<span style="white-space: pre;"> </span>int somaU=0;<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span>cout&lt;&lt;"Digite uma string"&lt;&lt;endl;<br />
<span style="white-space: pre;"> </span>gets(a);<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span>cout&lt;&lt;a;<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span>for(i=0;a[i]!='\0';i++)<br />
<span style="white-space: pre;"> </span>{<br />
<span style="white-space: pre;">  </span>if(a[i]=='a' || a[i]=='A' )<br />
<span style="white-space: pre;">  </span>{<br />
<span style="white-space: pre;">   </span>soma+=1;<br />
<span style="white-space: pre;">  </span>}<br />
<span style="white-space: pre;">  </span>if(a[i]=='e' || a[i]=='E' )<br />
<span style="white-space: pre;">  </span>{<br />
<span style="white-space: pre;">   </span>soma+=1;<br />
<span style="white-space: pre;">  </span>}<br />
<span style="white-space: pre;">  </span>if(a[i]=='I' || a[i]=='i' )<br />
<span style="white-space: pre;">  </span>{<br />
<span style="white-space: pre;">   </span>soma+=1;<br />
<span style="white-space: pre;">  </span>}<br />
<span style="white-space: pre;">  </span>if(a[i]=='O' || a[i]=='o' )<br />
<span style="white-space: pre;">  </span>{<br />
<span style="white-space: pre;">   </span>soma+=1;<br />
<span style="white-space: pre;">  </span>}<br />
<span style="white-space: pre;">  </span>if(a[i]=='U' || a[i]=='u' )<br />
<span style="white-space: pre;">  </span>{<br />
<span style="white-space: pre;">   </span>soma+=1;<br />
<span style="white-space: pre;">  </span>}<br />
<span style="white-space: pre;">  </span><br />
<span style="white-space: pre;"> </span>}<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span>cout&lt;&lt;soma;<br />
<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span>return 0;<br />
}
