---
layout: post
title: while vs do while
date: 2024-07-02 22:45
author: Morgao
comments: true
categories: 
---
while se nao satifazer a questao pode pular esse bloco de comandos<br />
do while " inscrementa " uma vez ao menos e depois verifica se satifaz a condicao<br />
<br />
normal<br />
while<br />
<br />
#include &lt;iostream&gt;<br />
<br />
using namespace std;<br />
<br />
<br />
int main() {<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; int cont;<br />
&nbsp;&nbsp;&nbsp; cont = 0;<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; while(cont&lt;20)<br />
&nbsp;&nbsp;&nbsp; {<br />
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cout&lt;&lt;&nbsp; "Matheus Nakade"&lt;&lt;cont&lt;&lt;endl;<br />
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; cont++;<br />
&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <br />
<br />
&nbsp;&nbsp;&nbsp; }<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; cout&lt;&lt; "rotina finalizada"&lt;&lt;endl;<br />
<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; cout&lt;&lt;"\nPrograma Finalizado\n";<br />
&nbsp;&nbsp;&nbsp; <br />
&nbsp;&nbsp;&nbsp; return 0;<br />
}<br />
-------------------------------------------------------------------------------------------------------------- <br />
<br />
condicao desse padrao se n já vale 20 ele nao executa nada dos comandos do laco de repeticao while ou seja em um programa maior ele pularia esse bloco de codigo por naoo satisfazer a equacao<br />
<br />
#include &lt;iostream&gt;<br /><br /><br />using namespace std;<br /><br /><br /><br />int main() {&nbsp;&nbsp; <br /><br />&nbsp;&nbsp;&nbsp; int cont;<br /><br />&nbsp;&nbsp;&nbsp; cont = 20;<br /><br />&nbsp;&nbsp; <br /><br />&nbsp;&nbsp;&nbsp; while(cont&lt;20)<br /><br />&nbsp;&nbsp;&nbsp; {<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cout&lt;&lt;&nbsp; "Matheus Nakade"&lt;&lt;cont&lt;&lt;endl;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cont++;<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br /><br /><br />&nbsp;&nbsp;&nbsp; }<br /><br />&nbsp;&nbsp; <br /><br />&nbsp;&nbsp;&nbsp; cout&lt;&lt; "rotina finalizada"&lt;&lt;endl;<br /><br /><br />&nbsp;&nbsp; <br /><br />&nbsp;&nbsp; <br /><br />&nbsp;&nbsp;&nbsp; cout&lt;&lt;"\nPrograma Finalizado\n";<br /><br />&nbsp;&nbsp; <br /><br />&nbsp;&nbsp;&nbsp; return 0;<br /><br />}<br />
<br />
-------------------------------------------------------------------------------------------------------------- <br />
<br />
do while<br />
<br />
#include &lt;iostream&gt;<br /><br /><br />using namespace std;<br /><br /><br /><br />int main() {&nbsp;&nbsp; <br /><br />&nbsp;&nbsp;&nbsp; int cont;<br />&nbsp;&nbsp;&nbsp; cont = 20;&nbsp; <br /><br />&nbsp;&nbsp; do <br />&nbsp;&nbsp;&nbsp; {<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cout&lt;&lt;&nbsp; "Matheus Nakade"&lt;&lt;cont&lt;&lt;endl;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cont++;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; }<br />&nbsp;&nbsp;&nbsp; while(cont&lt;20);&nbsp; <br /><br />&nbsp;&nbsp;&nbsp; cout&lt;&lt; "rotina finalizada"&lt;&lt;endl;<br /><br />&nbsp;&nbsp; <br /><br />&nbsp;&nbsp;&nbsp; cout&lt;&lt;"\nPrograma Finalizado\n";<br /><br />&nbsp;&nbsp; <br /><br />&nbsp;&nbsp;&nbsp; return 0;<br /><br />}
