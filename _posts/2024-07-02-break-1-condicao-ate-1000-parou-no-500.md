---
layout: post
title: break 1 - condicao ate 1000 parou no 500
date: 2024-07-02 22:45
author: Morgao
comments: true
categories: 
---
#include &lt;iostream&gt;<br /><br />using namespace std;<br /><br /><br />int main() {<br />&nbsp;&nbsp; <br />&nbsp;&nbsp; &nbsp;int cont;<br />&nbsp;&nbsp; <br />&nbsp;&nbsp; &nbsp;cont = 0;<br />&nbsp;&nbsp; &nbsp;// aparece do 0 ao 499 (chega no 500 ele nao motra o 500)<br />&nbsp;&nbsp; &nbsp;while(cont &lt; 1000)<br />&nbsp;&nbsp; &nbsp;{<br />&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;cout&lt;&lt; cont &lt;&lt;endl;<br />&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;cont++;<br />&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;if(cont==500)<br />&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;{<br />&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;break;<br />&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;}<br />&nbsp;&nbsp; &nbsp;}<br />&nbsp;&nbsp; <br /><br /><br />&nbsp;&nbsp; <br />&nbsp;&nbsp; <br />&nbsp;&nbsp; &nbsp;cout&lt;&lt;"\nPrograma Finalizado\n";<br />&nbsp;&nbsp; <br />&nbsp;&nbsp; &nbsp;return 0;<br />}<br />
<br />
outro modo para mostrar o ultimo numero inscrementar por ultimo no while depois do if<br />
<br />
#include &lt;iostream&gt;<br /><br />using namespace std;<br /><br /><br />int main() {<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; int cont;<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; cont = 0;<br />&nbsp;&nbsp;&nbsp; // aparece do 0 ao 500 (cchega ate o 500 porque o incremento vem depois do if)<br />&nbsp;&nbsp;&nbsp; while(cont &lt; 1000)<br />&nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout&lt;&lt; cont &lt;&lt;endl;<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; if(cont==500)<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; break;<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; }<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cont++;<br />&nbsp;&nbsp;&nbsp; }<br />&nbsp;&nbsp;&nbsp; <br /><br /><br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; cout&lt;&lt;"\nPrograma Finalizado\n";<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; return 0;<br />}
