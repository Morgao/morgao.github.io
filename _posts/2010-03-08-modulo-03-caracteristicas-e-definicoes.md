---
layout: post
title: Módulo 3 – Características e Definições Gerais da Linguagem C++
date: 2010-02-08 19:45
author: Morgao
comments: true
categories: [Algoritmos, Linguagem C++, Programação]
---

Módulo 3 – Características e Definições Gerais da Linguagem C++
3.1 – Nomes e Identificadores Usados na Linguagem C++
Existem algumas regras para a escolha dos nomes (ou identificadores) de variáveis em C++:
Nomes de variáveis só podem conter letras do alfabeto, números e o caracter underscore “_”.
Não podem começar com um número.
Nomes que comecem com um ou dois caracteres underscore (“_” e “__”) são reservados para a implementação interna do programa e seu uso é extremamente desaconselhado. O compilador não acusa erro quando criamos variáveis desse jeito, mas o programa criado se comportará de forma inesperada.
Não é possível utilizar palavras reservadas da linguagem C++ (para mais detalhes, veja o item 2.2). Também não é possível criar uma variável que tenha o mesmo nome de um função, mesmo que essa função tenha sido criada pelo programador ou seja uma função de biblioteca.
C++ diferencia letras maiúsculas e minúsculas em nomes de variáveis. Ou seja, count, Count e COUNT são três nomes de variáveis distintos.
C++ não estabelece limites para o número de caracteres em um nome de variável, e todos os caracteres são significantes.
3.2 – Palavras Reservadas na Linguagem C++
Na linguagem C++ existem palavras que são de uso reservado, ou seja, que possuem funções específicas na linguagem de programação e não podem ser utilizadas para outro fim, como por exemplo, ser usada como nome de variável. Por exemplo, a palavra reservada “for” serve para chamar um laço de repetição, e não pode ser utilizada como nome de uma variável.
A lista abaixo relaciona as palavras reservadas da linguagem C++:
asm	auto	bool	break	case
catch	char	class	const	const_cast
Continue	default	delete	do	double
Dynamic_cast	else	enum	explicit	export
extern	false	float	for	friend
goto	if	inline	int	long
mutable	namespace	new	operator	private
protected	public	register	reinterpret_cast	return
short	signed	sizeof	static	static_cast
struct	switch	template	this	throw
true	try	typedef	typeid	typename
union	unsigned	using	virtual	void
Volatile	wchar_t	while		


É importante notar que a linguagem C++ diferencia letras maiúsculas e minúsculas, ou seja, char é uma palavra reservada de C++ mas CHAR ou ChAr não é (entretanto, normalmente desaconselha-se o uso dessa diferenciação por atrapalhar a legibilidade do código). Reforçando o que já foi mencionado, as palavras reservadas só irão executar os comandos que lhes foram designados.
3.3 – Tipos e Dados
Quando um programa é escrito em qualquer linguagem de programação é necessário a definição de algumas variáveis. Variáveis são instâncias em que serão armazenados valores utilizados durante a execução de programas. Estas variáveis podem ser modificadas para suportar diferentes tipos de dados. Os principais tipos de dados utilizados em C++ podem ser divididos em variáveis inteiras e reais.
Variáveis inteiras servem para armazenar números inteiros, sem partes fracionárias. O principal tipo de variável inteira em C++ é o int. Além dele, existem os tipos char, short e long, cada um deles caracterizado por um tamanho em bits diferente. Estes tipos podem ser modificados pelo prefixo “unsigned”, que determina que a variável em questão só terá valores positivos, liberando o bit de sinal e aumentando a capacidade de armazenamento da variável (por default, todas as variáveis inteiras e reais declaradas em C++ são “signed”, ou seja, possuem um bit de sinal e podem ser tanto positivas como negativas). A tabela abaixo mostra os principais tipos de inteiros, seus tamanhos em bits e seu intervalo de armazenamento.
Tipo	Tamanho (em bits)	Intervalo
Char	8	-128 a 127
unsigned char	8	0 a 255
Int	16	-32768 a 32767
unsigned int	16	0 a 65535
Short	16	-32768 a 32767
unsigned short	16	0 a 65535
Long	32	-2147483648 a 2147483647
unsigned long	32	0 a 4294967295


Variáveis reais servem para armazenar números que possuem partes fracionárias. Existem duas maneiras de representar números fracionários em C++. A primeira, a mais simples, é utilizar o ponto para separar as partes inteiras e fracionárias. Por exemplo:
0.00098
1.2145
3.1461
8.0
(Mesmo no caso de um número com parte fracionária igual a zero, a utilização do ponto assegura que este número seja considerado um número de ponto flutuante por C++).
A segunda maneira é utilizar a notação científica E. Por exemplo : 3.45E7 significa “3.45 multiplicado por 10 elevado à sétima potência (10.000.000)”. Essa notação é bastante útil para representar números realmente grandes ou realmente pequenos. A notação E assegura que o número seja armazenado em formato de ponto flutuante. Alguns exemplos:
2.52E8 = 2.52 x 100.000.000 = 252.000.000
-3.2E3 = -3.2 x 1000 = -3200
23E-4 = 23 x 0.0001 = 0.0023
Assim como os inteiros, os números reais em C++ podem ser representados por 3 tipos de variáveis com diferentes intervalos. São elas: float, double e long double. Float é o tipo de variável real natural, aquela com a qual o sistema trabalha com maior naturalidade. Double e long double são úteis quando queremos trabalhar com intervalos de números reais realmente grandes. Utilizamos números reais geralmente para expressar precisão através do número de casas decimais, então podemos dizer que uma variável float é menos precisa que uma variável double, assim como uma variável double é menos precisa que long double. A tabela abaixo mostra os tipos de variáveis reais, seu tamanho em bits e o intervalo de armazenagem.
Tipo	Tamanho (em bits)	Intervalo
Float	32	3,4E-38 a 3,4E+38
Double	64	1,7E-308 a 1,7E+308
long double	80	3,4E-4932 a 1,1E+4932


3.4 – Definição de Variáveis
As variáveis devem ser declaradas, ou seja, devem ser definidos nome, tipo e algumas vezes seu valor inicial. As variáveis são classificadas em variáveis locais e globais.
Variáveis globais são aquelas declaradas fora do escopo das funções.
Variáveis locais são aquelas declaradas no início de um bloco e seus escopos estão restritos aos blocos em que foram declaradas. A declaração de variáveis locais deve obrigatoriamente ser a primeira parte de um bloco, ou seja, deve vir logo após um caractere de “abre chaves”, '{';  e não deve ser intercalada com instruções ou comandos.
Para declarar uma variável somente é obrigatório declarar seu tipo e nome:
<tipo> <nome>;
Por exemplo:
int exemplo;
Além disso, caso seja necessário, podemos declarar um valor a esta variável no momento de sua declaração, e também adicionar um prefixo a ela, da seguinte forma:
<prefixo> <tipo> <nome> = <valor>;
Por exemplo:
unsigned int exemplo = 12;
3.5 – Definição de Constantes
O conceito de constantes em linguagens de programação é atribuir um certo valor constante a um nome, e quando este nome for referenciado dentro do código do programa, será utilizado nas operações o valor atribuído a este nome. Ou seja, se for definida a constante PI com o valor “3,1415926536”, quando for encontrado no código o nome PI, será utilizado em seu lugar o valor “3,1415926536”.
Em C++ , utilizamos o prefixo const associado a um tipo, um nome e um valor para definir uma constante. Assim:
const <tipo> <nome> = <valor>;
Por exemplo:
const int eterna = 256;
No exemplo acima, definimos uma constante inteira de nome “eterna” que possui o valor numérico 256. É importante notar que devemos declarar a constante e lhe atribuir um valor na mesma linha de comando. Não podemos criar uma constante e lhe atribuir um valor posteriormente, ou seja, as seguintes linhas de comando são inválidas:
const int eterna; eterna = 256;
A partir da primeira linha, “eterna” passa a ser uma constante e seu valor não pode ser mais mudado durante a execução do programa. Como seu valor não foi declarado, esta constante pode ter qualquer valor que esteja na memória do computador naquele momento da declaração da variável.
3.6 – Números Hexadecimais e Octais
Em programação algumas vezes é comum usar um sistema de numeração baseado em 8 ou 16 em vez de 10. O sistema numérico baseado em 8 é chamado octal e usa os dígitos de 0 a 7. Em octal, o número 10 é o mesmo que 8 em decimal. O sistema numérico de base 16 é chamado hexadecimal e usa os dígitos de 0 a 9 mais as letras de A até F, que equivalem a 10, 11, 12, 13, 14 e 15. Por exemplo, o número hexadecimal 10 é 16 em decimal. Por causa da freqüência com que estes dois sistemas numéricos são usados, a linguagem C++ permite que se especifique valores inteiros em hexadecimal ou octal para uma variável ou constante em vez de decimal. Um valor hexadecimal deve começar com “0x” (um zero seguido de um x), seguido pelo valor em formato hexadecimal. Um valor octal começa com um zero. Aqui estão alguns exemplos:
hex = 0xFF; /* 255 em decimal */ oct = 011; /* 9 em decimal */
Outra base numérica muito utilizada na programação é a base binária. Apesar de C++ não possuir uma forma específica de se expressar valores de base binária, podemos utilizar a notação hexadecimal para esta função. A tabela abaixo mostra como pode ser feita a conversão de um valor binário para um valor hexadecimal.
Dígito Hexadecimal	Equivalente Binário	Dígito Hexadecimal	Equivalente Binário
0	0000	8	1000
1	0001	9	1001
2	0010	A	1010
3	0011	B	1011
4	0100	C	1100
5	0101	D	1101
6	0110	E	1110
7	0111	F	1111


3.7 – Valores Strings
Outro tipo de valor suportado pela Linguagem C++ é o tipo string. Uma string é um conjunto de caracteres entre aspas. Por exemplo, “você é um vencedor” é uma string, composta pelas várias letras que formam a frase. Não confunda strings com caractere. Uma constante caractere simples fica entre dois apóstrofos, por exemplo ‘a’. Entretanto “a” é uma string que contém somente uma letra.
3.8 – Códigos de Barra Invertida
A linguagem C++ fornece constantes caractere mais barra invertida especiais, úteis para caracteres que não são facilmente inseridos através do teclado ou de strings (como por exemplo, o retorno de carro). Estes códigos são mostrados na tabela a seguir:
Código	Significado	Código	Significado
\b	Retrocesso	\f	Alimentação de formulário
\n	Nova linha	\r	Retorno de carro
\t	Tabulação horizontal	\"	Aspas
\'	Apóstrofo	\0	Nulo
\\	Barra invertida	\v	Tabulação vertical
\a	Sinal sonoro	\N	Constante octal
\xN	Constante hexadecimal


Usa-se um código de barra invertida exatamente da mesma maneira como usa qualquer outro caractere. Por exemplo:
ch = ‘\t’;
printf(“Este é um teste\n”);
Esse fragmento de código primeiro atribui uma tabulação a ch e, então, imprime “este é um teste” na tela, seguido de uma nova linha.
3.9 – Operadores
Um operador é um símbolo que diz ao compilador para realizar manipulações matemáticas e lógicas específicas. A linguagem C++ possui três classes gerais de operadores: aritméticos, relacionais e lógicos e bit-a-bit.
3.9.1 – Operador de atribuição
O operador “=” atribui um valor ou resultado de uma expressão contida a sua direita para a variável especificada a sua esquerda. Exemplos:
a = 10; b = c * valor + getval(x); a = b = c = 1;
O último exemplo é interessante por mostrar que é possível associar vários operadores de atribuição em sequência, fazendo com que todas as variáveis envolvidas tenham o mesmo valor especificado.
3.9.2 – Operadores Aritméticos
São aqueles que operam sobre números e expressões, resultando valores numéricos. São eles:
Operador	Ação
+	Soma
-	subtração
*	multiplicação
/	divisão
%	m?dulo da divisão (resto da divisão inteira)
-	sinal negativo (operador un?rio)


3.9.3 – Operadores Relacionais
Operam sobre expressões, resultando valores lógicos de TRUE (verdadeiro) ou FALSE (falso).  são eles:
Operador	Ação
>	Maior
>=	maior ou igual
<	Menor
<=	menor ou igual
==	Igual
!=	não igual (diferente)


Atenção! Não existem os operadores relacionais: “=<“, “=>“ e “<>“. Não confunda a atribuição (“=“) com a comparação (“==“)!
3.9.4 – Operadores Lógicos
Operam sobre expressões, resultando valores lógicos de TRUE (verdadeiro) ou FALSE (falso). Possuem a característica de “short circuit”, ou seja, sua execução é curta e só é executada até o ponto necessário. São eles:
Operador	AND
&&	operação AND
||	operação OR
!	operador de negação NOT (operador unário)


Exemplos de “short circuit”:
(a == b) && (b == c)   /*   Se a != b não avalia o resto da expressão */ (a == b) || (b == c)   /*   Se a == b não avalia o resto da expressão */
3.9.5 – Manipulação de bits
A manipulação é feita em todos os bits da variável. É importante notar que a variável manipulada não pode ser do tipo float ou double. Os operadores que manipulam bits estão relacionados abaixo:
Operador	Ação
&	bit and
|	bit or
^	bit xor - exclusive or
<<	Rotação a esquerda
>>	Rotação a direita
~	bit not (complemento)


Observação: x << n irá rotacionar n vezes a variável x à esquerda.
3.9.6 – Operadores de assinalamento
É expresso da seguinte forma: (operadores combinados)
var = var op expr        ->      var op = expr
Onde tempos op como um dos seguintes operadores:
Operador	Ação
+	Soma
-	Subtração
*	Multiplicação
/	Divisão
%	módulo (resto da divisão)
>>	Rotação a direita
<<	Rotação a esquerda
&	And
^	xor - exclusive or
|	Or


Exemplo de aplicação:
i+= 2; /* É equivalente a: i = i + 2 */
j-= 3; /* É equivalente a: j = j – 3 */
k >>= 3; /* É equivalente a: k = k >> 3;*/
z &= flag; /* É equivalente a: z = z & flag;*/
3.9.7 – Operadores de Pré e Pós-Incremento
Operadores de pré e pós-incremento são aqueles usados quando é necessário incrementar ou decrementar um determinado valor.
As operações abaixo podem ser representadas assim:
i = i + 1;                     ?               i = ++i;         ?         ++i;
i = i – 1;                     ?               i = --i;           ?         --i;
z = a;    a = a + 1;     ?               z = a++;
z = a;     a = a – 1;     ?              z = a--;
a = a + 1;   z = a;       ?              z = ++a;
a = a - 1;    z = a;       ?              z = --a;
3.9.8  - Operadores de Endereço
São operadores usados com ponteiros,  para acesso a endereços de memória.
Operador	Significado
&	endereo de uma vari?vel
*	conteúdo do endereço especificado


Exemplos:
int var, *x;
x = &var;
var = *x;
3.10 – Tabela de Operadores da Linguagem C
A tabela abaixo mostra todos os operadores apresentados anteriormente:
Operador	Função	Exemplo (C++¦
-	menos unário	a = -b;
+	mais unário	a = +b ;
!	negação lógica	! flag
~	bitwise not	a = ~b ;
&	endereço de	a = &b ;
*	referência a ptr	a = *ptr ;
sizeof	tamanho de var	a = sizeof(b) ;
++	incremento	++a; ou a++;
--	decremento	--a; ou a--;
*	multiplicação	a = b * c;
/	divisão inteira	a = b / c;
/	divisão real	a = b / c;
%	resto da divisão	a = b % c;
+	soma	a = b + c;
-	subtração	a = b v c;
>>	shift right	a = b >> n;
<<	shift left	a = b << n;
>	maior que	a > b
>=	maior ou igual a	a >= b
<	menor que	a < b
<=	menor ou igual a	a <= b
= =	igual a	a == b
!=	diferente de	a != b
&	bitwise AND	a = b & c;
|	bitwise OR	a = b | c;
^	bitwise XOR	a = b ^ c;
&&	logical AND	flag1 && flag2
||	logical OR	flag1 || flag2
=	assinalamento	a = b;
OP=	assinalamento	a OP= b;


3.11 – Expressões
Operadores, constantes e variáveis constituem expressões. Uma expressão em C++ é qualquer combinação válida dessas partes. Uma vez que muitas expressões tendem a seguir as regras gerais da álgebra, estas regras são freqüentemente consideradas. Entretanto, existem alguns aspectos das expressões que estão especificamente relacionadas com a linguagem C e serão discutidas agora.
3.12 – Precedência e Associatividade de Operadores
C++ possui uma série de regras de precedência de operadores, para que o compilador saiba decidir corretamente qual operador será executado primeiro, em uma expressão com vários operadores. Essas regras seguem basicamente as regras algébricas. Além disso, é possível o uso de parênteses para forçar o compilador a executar uma parte de uma expressão antes das outras.
Além das regras de precedência, existem também certas regras de associatividade para determinados operadores que possuem o mesmo nível de precedência, como por exemplo os operadores de divisão e multiplicação. Quando C++ encontra dois operadores com o mesmo nível de precedência em uma expressão, ele verifica se estes operadores possuem associatividade esquerda-para-direita ou direita-para-esquerda. Associatividade esquerda-para-direita significa que se estes dois operadores agirem sobre um mesmo operando, o operador da esquerda será aplicado primeiro. Da mesma forma, associatividade direita-para-esquerda significa que na mesma situação, o operador da direita será aplicado primeiro. Por exemplo, os operadores divisão e multiplicação possuem associatividade esquerda-para-direita.
A tabela abaixo mostra as regras de precedência e associativade para os operadores de C++. O número na coluna de precedência indica qual o nível de precedência dos operadores em questão, sendo 1 o nível mais alto (operador a ser executado primeiro). Na coluna de precedência, é feito o uso dos termos unário (para operadores que usam um só operando) e binário (para operadores que necessitam de dois operandos) serve para diferenciar operadores que possuem símbolos iguais. Na coluna de associatividade, as siglas E-D e D-E indicam o tipo de associatividade dos operadores daquele nível de precedência: E-D significa associatividade esquerda-para-direita, e D-E significa associatividade direita-para-esquerda.
Precedência	Operador	Associatividade	Explicação
1	(expressão)		Agrupamento
2	()	E-D	Chamada de função
++		Operador de incremento, pósfixado
--		Operador de decremento, pósfixado
3 (todos unários)	!	D-E	Negação lógica
~		Negação Bitwise
+		Mais unário (sinal positivo)
-		Menos unário (sinal negativo)
++		Operador de incremento, pré-fixado
--		Operador de decremento, pré-fixado
&		Endereço
*		Conteúdo de endereço
()		Modelador de tipo "(tipo) nome"
sizeof		Tamanho em bytes
new		Alocação Dinâmica de memória
new []		Alocação Dinâmica de matriz
delete		Liberação Dinâmica de memória
delete []		Liberação Dinâmica de matriz
4 (todos binários)	*	E-D	Multiplicação
/		Divisão
%		Resto de divisão
5 (todos binários)	+	E-D	Adição
-		Subtração
6	<<	E-D	Shift para esquerda
>>		Shift para direita
7	<	E-D	Menor que
<=		Menor que ou igual a
>=		Maior que ou igual a
>		Maior que
8	==	E-D	Igual a
!=		Não igual a
9 (binário)	&	E-D	Bitwise AND
10	^	E-D	Bitwise XOR (OR exclusivo)
11	|	E-D	Bitwise OR
12	&&	E-D	AND Lógico
13	||	E-D	OR Lógico
14	=	D-E	Atribuição simples
*=		Multiplicação e atribuição
/=		Dividir e atribuição
%=		Achar resto da divisão e atribuição
+=		Adição e atribuição
-=		Subtração e atribuição
&=		Bitwise AND e atribuição
^=		Bitwise XOR e atribuição
|=		Bitwise OR e atribuição
<<=		Shift para esquerda e atribuição
>>=		Shift para direita e atribuição
15	:?	D-E	Condicional
16	,	E-D	Combina duas expressões em uma só


3.13 – Conversões de Tipos
3.13.1 - Conversões durante a Atribuição
C++ permite que o programador atribua um valor de um certo tipo para uma variável designada para armazenar outro tipo de valor, mas quando isto é feito o valor é automaticamente convertido para o tipo da variável.
Quando atribuímos um certo valor para uma variável cujo tamanho é maior do que o valor atribuído, não há problemas. Porém, quando o tamanho da variável é menor do que o valor a ser atribuído à ela, haverá truncamento deste valor e consequente perda de informação e/ou precisão.
Outro caso complicado é a atribuição de valores reais em variáveis inteiras. Quando armazenamos valores reais em variáveis inteiras, a parte fracionária do valor é descartada, resultando em truncamento do valor. Pode ocorrer também incompatibilidades de tamanho, por exemplo, um valor de tamanho float (64 bits) tentando ser armazenado em uma variável int (16 bits), causando invariavelmente perda de informações.
Por isso, é preciso tomar cuidado com os tipos e tamanhos de variáveis envolvidos durante uma atribuição de valores, para termos certeza que o valor inserido pode ser armazenado por aquela variável.
3.13.2 – Conversões durante Expressões
Quando constantes e variáveis de tipos diferentes são misturadas em uma expressão, elas são convertidas para o mesmo tipo. O compilador C++ converterá todos os operandos para o tipo do operando maior. Isso é feito na base de operação a operação, como descrito nestas regras de conversão de tipos:
1.Se algum dos operandos for do tipo long double, o outro operando é convertido para long double também.
2. Senão, se algum dos operando for double, o outro operando sera convertido para double.
3.Senão, se algum dos operandos for float, o outro operando será convertido para float.
4.Senão, os operandos são inteiros e promoções inteiras serão feitas.
5.Nesse caso, se algum dos operandos for do tipo unsigned long, o outro operando sera convertido para unsigned long.
6.Senão, caso um dos operandos seja long int e o outro seja um unsigned int, a conversão dependerá do tamanho relative entre os dois tipos. Se long conseguir expressar valores possíveis de unsigned int, a variável unsigne int será convertida para long.
7.Senão, ambos os operadores são convertidos para unsigned long.
8.Senão, se algum dos operadores for long, o outro será convertido para long.
9.Senão, se algum dos operadores for um unsigned int, o outro será convertido para unsigned int.
10.Caso o compilador chegue a este ponto na lista, ambos operadores serão int.
3.14 – Modeladores de Tipos
É possível também forçar a conversão de uma variável ou expressão para um determinado tipo, usando o mecanismo dos modeladores de tipos, também chamado de “type cast”. É possível utilizar duas sintaxes diferentes para obter o mesmo resultado de modelamento. São elas:
(tipo) variável_ou_expressão; por exemplo: (int) modelos; (int) 19.99;
e
tipo (variável_ou_expressão); por exemplo: int (modelos); int (19.99);
Ambos os comandos produzem o mesmo resultado: forçar o valor presente na variável (ou expressão) à ser convertido no tipo desejado. Note que o valor da variável não é alterado; somente é feita uma conversão momentânea, cujo valor resultante deve ser armazenada em outra variável ou trabalhado imediatamente em uma expressão.

-------------------------------------------------------------------------------------------------------------

Publicado originalmente em - sexta-feira, 13 de agosto de 2010

atualizacao da referencia bibliografica em -atualizado em 21/08/2017 - 03:01

eu publiquei em uma epoca de ensino medio, sem entender de direito autroal, o arquivo é do autor (Esta apostila é o resultado do trabalho de conclusão de curso realizado por Enrique Camargo Trevelin, aluno do curso de Engenharia Elétrica, sob a orientação do Prof. Carlos Antônio Alves. ), está publicado no site : (http://apostilacpp.awardspace.com/index.php?pagina=home) na integra e peco desculpa se o autor quer que retire do site o material, mande um email para
contatomorgao@gmail.com