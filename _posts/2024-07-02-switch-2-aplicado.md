---
layout: post
title: switch 2 aplicado
date: 2024-07-02 22:44
author: Morgao
comments: true
categories: 
---
#include &lt;iostream&gt;<br /><br />using namespace std;<br /><br /><br />int main() {<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; int val;<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; cout&lt;&lt;"Selecione uma cor"&lt;&lt;endl;<br />&nbsp;&nbsp;&nbsp; cout&lt;&lt;" [1,2,3]=Verde, [4,5,6]=Azul,&nbsp; "&lt;&lt;endl;<br />&nbsp;&nbsp;&nbsp; cin&gt;&gt;val;<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; switch(val)<br />&nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; case 1:<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; case 2:<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; case 3:&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout&lt;&lt; "Cor Selecionada: Verde"&lt;&lt;endl;<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; break;<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; case 4:<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; case 5:<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; case 6:<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout&lt;&lt; "Cor Selecionada: Azul"&lt;&lt;endl;<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; break;<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; default:<br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout&lt;&lt;" Valor Selecionado Invalido "&lt;&lt;endl;<br />&nbsp;&nbsp;&nbsp; }<br />&nbsp;&nbsp;&nbsp; cout&lt;&lt;"\nPrograma Finalizado\n";<br />&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; return 0;<br />}
