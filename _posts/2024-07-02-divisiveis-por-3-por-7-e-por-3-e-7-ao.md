---
layout: post
title: divisiveis por 3, por 7 e por 3 e 7 ao mesmo tempo
date: 2024-07-02 22:47
author: Morgao
comments: true
categories: 
---
#include &lt;iostream&gt;<br />
using namespace std;<br />
<br />
int main() {<br />
<span style="white-space: pre;"> </span>int i,x, soma3, soma7, soma3e7, p3, p7, p3e7;<br />
<span style="white-space: pre;"> </span>float y,z,w;<br />
<span style="white-space: pre;"> </span>soma3 = 0;<br />
<span style="white-space: pre;"> </span>soma7 = 0;<br />
<span style="white-space: pre;"> </span>p3 = 0;<br />
<span style="white-space: pre;"> </span>p7 = 0;<br />
<span style="white-space: pre;"> </span>soma3e7 = 0;<br />
<span style="white-space: pre;"> </span>p3e7 = 0;<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span>for(i=1;i&lt;=30;i=i+1)<br />
<span style="white-space: pre;"> </span>{<br />
<span style="white-space: pre;">  </span>cin&gt;&gt;x;<br />
<span style="white-space: pre;">  </span>if(x%3==0)<br />
<span style="white-space: pre;">  </span>{<br />
<span style="white-space: pre;">   </span>soma3 = soma3 + 1;<br />
<span style="white-space: pre;">   </span>p3 = p3 + 1;<br />
<span style="white-space: pre;">  </span>}<br />
<span style="white-space: pre;">  </span>if(x%7==0)<br />
<span style="white-space: pre;">  </span>{<br />
<span style="white-space: pre;">   </span>soma7 = soma7 + 1;<br />
<span style="white-space: pre;">   </span>p7 = p7 + 1;<br />
<span style="white-space: pre;">   </span><br />
<span style="white-space: pre;">  </span>}<br />
<span style="white-space: pre;">  </span>if((x%3==0)&amp;&amp;(x%7==0))<br />
<span style="white-space: pre;">  </span>{<br />
<span style="white-space: pre;">   </span>soma3e7 = soma3e7 + 1;<br />
<span style="white-space: pre;">   </span>p3e7 = p3e7 + 1;<br />
<span style="white-space: pre;">  </span>}<br />
<span style="white-space: pre;">  </span><br />
<br />
<br />
<span style="white-space: pre;"> </span>}<br />
<span style="white-space: pre;"> </span>z = soma3 / p3;<br />
<span style="white-space: pre;"> </span>y = soma7 / p7;<br />
<span style="white-space: pre;"> </span>w = soma3e7 / p3e7;<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;">  </span>cout&lt;&lt;"media dos multiplos de 3"&lt;&lt;z&lt;&lt;endl;<br />
<span style="white-space: pre;">  </span>cout&lt;&lt;"media dos multiplos de 7"&lt;&lt;y&lt;&lt;endl;<br />
<span style="white-space: pre;"> </span>if(z&gt;y)<br />
<span style="white-space: pre;"> </span>{<br />
<span style="white-space: pre;">  </span>cout&lt;&lt;"a media de 3 e maior "&lt;&lt;z&lt;&lt;endl;<br />
<span style="white-space: pre;"> </span>}<br />
<span style="white-space: pre;"> </span>else<br />
<span style="white-space: pre;"> </span>{<br />
<span style="white-space: pre;">  </span>cout&lt;&lt;"a media de 7 e maior "&lt;&lt;y&lt;&lt;endl;<br />
<span style="white-space: pre;"> </span>}<br />
<span style="white-space: pre;">  </span>cout&lt;&lt;"quantos numero sao multiplos de 3 e 7 ao mesmo tempo"&lt;&lt;p3e7&lt;&lt;endl;<br />
<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span>cout&lt;&lt;"fim do programa"&lt;&lt;endl;<br />
<span style="white-space: pre;"> </span>return 0;<br />
}
