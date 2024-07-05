---
layout: post
title: soma vetor a com vetor b
date: 2024-07-02 22:43
author: Morgao
comments: true
categories: 
---
#include &lt;iostream&gt;<br />
using namespace std;<br />
int main()<br />
{<br />
&nbsp; int A[3][3],B[3][3],L,C,soma;<br />
&nbsp; soma=0;<br />
&nbsp; // lendo a<br />
&nbsp; &nbsp; for (L=0;L&lt;=2;L=L+1)<br />
&nbsp; <br />
&nbsp; &nbsp; {<br />
&nbsp; &nbsp; &nbsp;for (C=0; C&lt;=2; C=C+1)<br />
&nbsp; &nbsp; &nbsp;{<br />
&nbsp; &nbsp; &nbsp; cout&lt;&lt;"digite "&lt;&lt;endl;<br />
&nbsp; &nbsp; &nbsp; cin&gt;&gt;A[L][C];<br />
&nbsp; &nbsp; &nbsp;}<br />
&nbsp;}<br />
&nbsp;// fim a<br />
<br />
&nbsp;// printando linha e coluna somando linha e coluna<br />
&nbsp; &nbsp; &nbsp;for (L=0;L&lt;=2;L=L+1)<br />
&nbsp; &nbsp; {<br />
&nbsp; &nbsp; &nbsp;for (C=0; C&lt;=2; C=C+1)<br />
&nbsp; &nbsp; &nbsp;{<br />
&nbsp; &nbsp; &nbsp; cout&lt;&lt;A[L][C]&lt;&lt;" ";<br />
&nbsp;<br />
&nbsp; &nbsp; &nbsp;}<br />
&nbsp; &nbsp; cout&lt;&lt;endl;<br />
&nbsp;}<br />
&nbsp;// fim linha coluna somando linha coluna<br />
<br />
&nbsp; &nbsp;// lendo b<br />
&nbsp; &nbsp; for (L=0;L&lt;=2;L=L+1)<br />
&nbsp; <br />
&nbsp; &nbsp; {<br />
&nbsp; &nbsp; &nbsp;for (C=0; C&lt;=2; C=C+1)<br />
&nbsp; &nbsp; &nbsp;{<br />
&nbsp; &nbsp; &nbsp; cout&lt;&lt;"digite "&lt;&lt;endl;<br />
&nbsp; &nbsp; &nbsp; cin&gt;&gt;B[L][C];<br />
&nbsp; &nbsp; &nbsp;}<br />
&nbsp;}<br />
&nbsp;// fim b<br />
<br />
&nbsp;// printando linha e coluna somando linha e coluna<br />
&nbsp; &nbsp; &nbsp;for (L=0;L&lt;=2;L=L+1)<br />
&nbsp; &nbsp; {<br />
&nbsp; &nbsp; &nbsp;for (C=0; C&lt;=2; C=C+1)<br />
&nbsp; &nbsp; &nbsp;{<br />
&nbsp; &nbsp; &nbsp; cout&lt;&lt;B[L][C]&lt;&lt;" ";<br />
&nbsp; &nbsp; &nbsp;<br />
&nbsp; &nbsp; &nbsp;}<br />
&nbsp; &nbsp; cout&lt;&lt;endl;<br />
&nbsp;}<br />
&nbsp;// fim linha coluna somando linha coluna<br />
<br />
&nbsp; // soma de a com b<br />
&nbsp; &nbsp; &nbsp;for (L=0;L&lt;=2;L=L+1)<br />
&nbsp; &nbsp; {<br />
&nbsp; &nbsp; &nbsp;for (C=0; C&lt;=2; C=C+1)<br />
&nbsp; &nbsp; &nbsp;{<br />
&nbsp; &nbsp; &nbsp; cout&lt;&lt;A[L][C]&lt;&lt;"+"&lt;&lt;B[L][C]&lt;&lt;" ";<br />
&nbsp; &nbsp; &nbsp; soma=soma +A[L][C] + B[L][C];<br />
&nbsp; &nbsp; &nbsp;}<br />
&nbsp; &nbsp; cout&lt;&lt;endl;<br />
&nbsp;}<br />
&nbsp;// fim da soma de a com b<br />
<br />
&nbsp;cout&lt;&lt;soma&lt;&lt;" ";<br />
<br />
return(0);<br />
}<br />
<div>
<br /></div>

