---
layout: post
title: abv
date: 2024-07-02 22:48
author: Morgao
comments: true
categories:
---
#include &lt;iostream&gt;<br />
using namespace std;<br />
<br />
int fator (int x);<br />
<br />
int main ()<br />
{<br />
<br />
<span style="white-space: pre;"> </span>int a, res ;<br />
<span style="white-space: pre;"> </span>cout&lt;&lt; "digite... "&lt;&lt;endl;<br />
<span style="white-space: pre;"> </span>cin&gt;&gt;a;<br />
<span style="white-space: pre;"> </span>res = fator(a);<br />
<span style="white-space: pre;"> </span>cout&lt;&lt;"o fatorial e: "&lt;&lt;res&lt;&lt;endl;<br />
<span style="white-space: pre;"> </span><br />
<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span>return(0);<br />
<span style="white-space: pre;"> </span><br />
}<br />
<br />
int fator (int x)<br />
{<br />
<span style="white-space: pre;"> </span>int w,i,fat,y;<br />
<span style="white-space: pre;"> </span>for(i=1;i&lt;=x;i++)<br />
<span style="white-space: pre;"> </span>{<br />
&nbsp; <span style="white-space: pre;"> </span>fat = x * i;<br />
&nbsp; <span style="white-space: pre;"> </span>y = fat;<br />
&nbsp;<span style="white-space: pre;"> </span>w = y * i;<br />
<br />
<span style="white-space: pre;"> </span><br />
<span style="white-space: pre;"> </span>return(w);<br />
<span style="white-space: pre;"> </span>}<br />
<br />
