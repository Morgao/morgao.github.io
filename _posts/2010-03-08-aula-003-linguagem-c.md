---
layout: post
title: Aula [003] Linguagem C
date: 2010-02-08 19:45
author: Morgao
comments: true
categories: [Algoritmos, Linguagem C, Programação]
---
Aula [003] Linguagem C
1) Escreva dois números,faca uma divisao dos números inteiros, mostrando o resultado na tela final do programa.

#include <stdio.h>
#include <conio.h>
int main( )
{
float a,b,x;
printf("Enscreva um numero Inteiro:");
scanf("%f",&a);
printf("Enscreva outro numero Inteiro:");
scanf("%f",&b);
x=a/b;
printf("A divisao desses numeros inteiros  e: %.2f",x);
getch();
return 0;
}



2) Escreva dois números,faca uma divisao dos números inteiros, mostrando o resultado e a divisão na tela final do programa.

#include <stdio.h>
#include <conio.h>
int main( )
{

int a,b,x;     
printf("Enscreva um numero Inteiro:");
scanf("%d",&a);
printf("Enscreva outro numero Inteiro:");
scanf("%d",&b);
x=a/b;
printf(" %d / %d = %d",a,b,x);   
getch();
return 0;
}

Desafio mostre a media entre esses numero no final da tela do programa.

#include <stdio.h>
#include <conio.h>
int main( )
{
float x,y,z,r;
x=3;
y=4;
z=5;
r=(x+y+z)/3;
printf("A media entre esses numeros e: %.f",r);
getch();
return 0;
}


Desafio calcule a área de uma esfera, sabendo que Pí vale 3.14  . mostre a  valor  da  área  no final da tela do programa.

#include <stdio.h>
#include <conio.h>
int main( )
{
int r,h,a;
printf("De o raio da esfera:");
scanf("%d",&r);
a=4*3.14*r*r;
printf("O area da esfera e: %d",a);
getch();
return 0;
}
 -------------------------------------------------------------------------------------------------------------

Publicado originalmente em - sexta-feira, 13 de agosto de 2010

atualização da referencia bibliográfica em -atualizado em 21/08/2017 - 03:10

esse conteúdo ate onde eu me lembro é todo original, as perguntas feitas pelo professor em sala de aula, e as respostas, em muitos locais copio e colo partes do meu propio codigo para nao ter que reescrever boa parte dele, tem bibliotecas e ferramentas sobressalentes em varias partes, se tiver alguma parte do código que não é minha me indique e fale de onde é a referencia, acho que tem partes de calculadoras (científicas) que eu não sabia como fazer e copiei de um codigo de uma apostila, e que rodo o codigo mesmo sem entender as bibliotecas usadas, bom qualquer outra coisa é me informar !