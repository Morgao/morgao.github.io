---
layout: post
title: Módulo 4 – Funções na Linguagem C++
date: 2010-02-08 19:45
author: Morgao
comments: true
categories: [Algoritmos, Linguagem C++, Programação]
---

Módulo 4 – Funções na Linguagem C++
4.1 – Funções
Funções são os blocos de construção da linguagem C++, com os quais podemos construir programas melhores e mais facilmente compreensíveis. Quando os programas tornam-se maiores e mais complexos, pode-se melhorar a clareza e compreensão do trabalho dividindo-o em partes menores, que chamamos de funções. Todo programa possui ao menos uma função: a função main, a qual podemos chamar de “corpo” do programa, onde estão localizados todos os comandos e chamadas de outras funções que são executadas pelo programa. Além da função main, podemos utilizar e também criar várias outras funções dentro do mesmo programa. Por exemplo, imagine um programa que organize o funcionamento de uma loja. Poderia haver uma função para organizar o estoque, outra para relacionar os preços dos produtos, outra para acessar um banco de dados com os cadastros dos clientes, entre outras. Se fossem colocados todos os comandos do programa dentro da função main, o programa ficaria muito grande e provavelmente incompreensível. Dividindo o programa em funções separadas, deixando para a função main somente a tarefa de organizar as chamadas das demais funções, podemos trabalhar mais facilmente com o programa, modificando e corrigindo funções individualmente. À medida que o tamanho e a complexidade do programa aumentam, aumenta também a possibilidade de erros, já se o mesmo for dividido em blocos menores e organizados, fica mais fácil encontrar e evitar erros.
Basicamente, uma função funciona da seguinte forma: é feita uma chamada para esta função durante a execução do programa; o programa é interrompido temporariamente, e “pula” para esta função executando seus comandos; quando a função termina, ou seja, quando seus comandos acabam (ou quando o comando return é encontrado), o programa volta ao ponto onde foi interrompido para continuar sua execução normal. Uma função pode receber dados do programa para executar seus comandos (estes dados são chamados de parâmetros ou argumentos), e pode também retornar dados para o programa (o que chamamos de retorno de função).
Por exemplo, vamos observar a função sqrt( ), que retorna o valor da raiz quadrada de um número. Esta função foi criada e definida na biblioteca padrão da linguagem C/C++, de modo que podemos nos preocupar somente com sua execução neste momento. Você pode usar a seguinte linha de comando em um programa qualquer:

x = sqrt(6.25);

A expressão sqrt(6.25) chama a função sqrt( ). O número entre parênteses é o valor que estamos enviando para a função sqrt( ), e o chamamos de parâmetro ou argumento. A função calculará a raiz quadrada de 6.25, e enviará o valor calculado para o programa, o chamado retorno da função. Nesta linha de comando, especificamos que o retorno da função, ou seja, seu resultado, será armazenado na variável x. Resumindo, um valor é enviado para a função, e a função retorna o valor resultante para o programa. Entretanto, antes de podermos utilizar a função sqrt( ) ou qualquer outra função em um programa é preciso declará-la. Veremos isso em detalhes no próximo item.
4.2 – Declarando uma Função
Antes de utilizar uma função em um programa é preciso declará-la, ou seja, especificar para o compilador exatamente o que faz esta função e que tipo de dados ela recebe e retorna. Podemos dividir o processo de declarar uma função em duas etapas distintas: o protótipo da função e a definição da função.
4.2.1 – Protótipo de uma Função
O protótipo de uma função tem a mesma função de uma declaração de variáveis: dizer ao compilador quais tipos de variáveis estarão envolvidos na função. Isso permite que o compilador saiba trabalhar corretamente com os valores que entram e saem da função, fazendo conversões de tipos sempre que necessário. A sintaxe da declaração de um protótipo de função é a seguinte:
<tipo_da_função> <nome> ( <tipo_de_parâmetro> <nome_da_variável>);
O tipo da função denominará qual será o tipo de valor que esta função retorna. Uma função pode retornar qualquer tipo de valor, seja inteiro, fracionário ou nenhum valor. Quando uma função não retorna nenhum valor para o programa, seu tipo é void. Esse tipo de função executará seus comandos normalmente, mas não retornará nenhum valor para o programa quando terminar.
Já o tipo de parâmetro serve para determinar o tipo de variáveis que a função receberá como parâmetros. Assim como o tipo da função, qualquer tipo de variável pode ser utilizado como parâmetro. Uma função que não recebe parâmetros de entrada deve ter a palavra chave void entre parênteses. É possível ter vários parâmetros na mesma função, separando-os com vírgulas. Alguns exemplos de protótipo de função:

int livro (unsigned int paginas);
float divide (float dividendo, float divisor);
void imprime ( void );
float divide (float, float);

O último exemplo mostra que a escolha do nome do parâmetro no protótipo é opcional: basta inserir o tipo de parâmetros que serão utilizados pela função e o compilador alocará a memória necessária para eles. Porém a atribuição de nomes para parâmetros é aconselhável, pois melhora a legibilidade do programa. Quando declaramos e definimos uma função no início do programa, isto é, antes da função main, podemos omitir o protótipo da função, fazendo somente a definição da função como veremos abaixo.
4.2.2 – Definição de uma Função
O protótipo de uma função diz para o compilador quais os tipos de variáveis ela usará. Já a definição de uma função diz ao compilador exatamente o que a função faz. A sintaxe da definição de uma função é a seguinte:
<tipo da função> <nome> ( <tipo do parâmetro> <nome do parâmetro>)
{
comandos da função;
}
A primeira linha da definição de uma função é idêntica ao protótipo, com a exceção de que somos obrigados a declarar nomes para as variáveis de parâmetro e que a linha não termina em um ponto-e-vírgula, e sim em uma abre-chaves. Dentro das chaves estarão todos os comandos pertencentes a função, inclusive declaração de variáveis locais, chamadas para outras funções e chamadas de retorno. Por exemplo:
int cubo ( int valor) {
resultado = valor*valor*valor;
return resultado;
}
A função acima calcula o cubo de um valor inteiro. Note que podemos declarar variáveis dentro de uma função; entretanto, estas variáveis só poderão ser utilizadas dentro desta mesma função. O comando return termina a função e retorna um valor para o programa.
4.2.3 – Retorno de uma função
O comando return é utilizado para terminar a execução de uma função e retornar um valor para o programa. Sua sintaxe é a seguinte:
return <variável ou expressão>;
O comando return aceita qualquer constante, variável ou expressão geral que o programador precise retornar para o programa principal, desde que este valor seja igual ou convertível para o tipo da função (já estabelecido no protótipo da função). É importante notar que o valor retornado não pode ser uma matriz; porém, é possível retornar uma matriz indiretamente, desde que ela faça parte de uma estrutura ou objeto (tipos de dados que serão estudados mais adiante).
É possível também criar funções que contênham múltiplos comandos return, cada um dos quais retornando um valor para uma condição específica. Por exemplo, considere a função compara_valores, mostrada a seguir:
int compara_valores(int primeiro, int segundo)
{
if (primeiro == segundo)
return (0);
else if (primeiro > segundo)
 return (1);
else if (primeiro < segundo)
return (2);
}
A função compara_valores examina dois valores listados na tabela abaixo:
Resultado	Significado
0	Os valores são iguais.
1	O primeiro valor é maior que o segundo.
2	O segundo valor é maior que o primeiro.
Como regra, deve-se tentar limitar as funções a usar somente um comando return. À medida que as funções se tornarem maiores e mais complexas, ter muitos comandos return normalmente tornará as funções mais difíceis de compreender. Na maioria dos casos, pode-se reescrever a função para que ela use somente um comando return
4.3 – Main como uma Função
Como já dissemos anteriormente, todo programa possui uma função principal que contém todos os comandos e chamadas para outras funções presentes no programa. A função main funciona como uma função normal: possui um protótipo e uma definição. Geralmente omitimos o protótipo, fazendo apenas a definição da função main da seguinte forma:
int main (void) { //corpo do programa return 0; }
Note que a função main é do tipo int, e retorna 0. Entretanto, não existe outra função acima de main que a tenha chamado, para que ela possa retornar um valor de resposta. Para que serve este retorno então? Simples: consideramos que a “função chamadora” de main é o próprio sistema operacional. Assim, utilizamos o retorno para indicar o funcionamento do programa. Caso o programa termine e retorne o valor 0 para o sistema operacional, sabemos que tudo correu bem e que o programa terminou normalmente. Um valor retornado diferente de 0 indica que o programa não rodou até o final (ou seja, até o ponto “return 0;”) e que aconteceu algum erro. Muitos sistemas operacionais e programas utilizam esse sistema simples para detectar erros durante a execução de seus aplicativos.
4.4 – Variáveis dentro das Funções
À medida que as funções vão se tornando mais úteis nos programas, muitas delas requerem que as variáveis gerem resultados valiosos. Para usar uma variável dentro de uma função, precisa-se primeiro declarar a variável, exatamente como feito na função principal main. Quando se declara variáveis dentro de uma função, os nomes usados para essas variáveis são exclusivos para a função.
Portanto, se o programa usa dez funções diferentes e cada função usa uma variável chamada contador, o compilador considerará a variável de cada função como distinta. Se uma função requer muitas variáveis, elas deverão ser declaradas no início da função, exatamente como se faria dentro de main.
4.4.1 – Variáveis Locais
A Linguagem C++ permite declarar variáveis dentro de suas funções. Essas variáveis são chamadas de variáveis locais, pois seus nomes e valores somente têm significado dentro da função que contém a declaração da variável.
O programa a seguir ilustra o conceito de uma variável local. A função valores_locais declara 3 variáveis a, b e c, e atribui às variáveis os valores 1, 2 e 3, respectivamente. A função main tenta imprimir o valor de cada variável. No entanto, como os nomes dos valores são locais à função, o compilador gera erros, dizendo que os símbolos a, b, e c estão indefinidos.
#include <iostream>
using namespace std;

void valores_locais(void);
void valores_locais(void)
{
int a=1, b=2, c=3;
}
int main (void)
{
cout<<”A vale ”<< a <<”. B vale “<< b <<”. C vale “<< c <<.\n”;
system("PAUSE > null");
return 0;
}
O programa abaixo é a versão corrigida do programa acima. Veja que a função main chama a função valores_locais, que por sua vez declara as variáveis junto com seus valores e as imprime na tela corretamente.
#include <iostream> using namespace std;

void valores_locais(void);

void valores_locais(void)
{
int a=1, b=2, c=3;
cout<<"A vale "<< a <<". B vale "<< b <<". C vale "<< c <<".\n";
}

int main (void)
{
valores_locais();
system("PAUSE > null");
return 0;
}
4.4.2 –Variáveis Globais
Além das variáveis locais, a Linguagem C permite que os programas usem variáveis globais, cujos nomes, valores e existência são conhecidos em todo o programa. Em outras palavras, todos os programas em Linguagem C podem usar variáveis globais. O programa a seguir ilustra o uso de três variáveis globais a, b e c:
#include <iostream>
using namespace std;

int a = 1, b = 2, c = 3;  // Variaveis globais
void valores_globais(void)
{
cout<<"A vale "<< a <<". B vale "<< b <<". C vale "<< c <<".\n";
}
int main(void)
{
valores_globais();
cout<<"A vale "<< a <<". B vale "<< b <<". C vale "<< c <<".\n";
system("PAUSE > null");
return 0;
}
Quando este programa é compilado e executado, as funções variaveis_globais e main exibem os valores das variáveis globais. Observe que as variáveis globais são declaradas fora de todas as funções. Declarando variáveis globais deste modo, todas as funções do programa podem usar e alterar os valores da variável global simplesmente referenciando o nome dela.
Embora as variáveis globais possam parecer convenientes, o uso incorreto delas podem causar erros que são difíceis de depurar. Se um programa usa variáveis globais, algumas vezes o nome de uma variável global é o mesmo que aquele de uma variável local que seu programa declara dentro de uma função. Por isso, é preciso estar atento com o uso de variáveis globais e sua nomeação. Quando nomes de variáveis globais e locais estiverem em conflito, a linguagem C++ usará sempre a variável local.
4.5.1 – Chamada por Valor
Os programas passam informações para funções usando parâmetros. Quando um parâmetro é passado a uma função, a Linguagem C++ usa uma técnica conhecida como chamada por valor para fornecer à função uma cópia dos valores dos parâmetros. Usando a chamada por valor, quaisquer modificações que a função fizer nos parâmetros existem apenas dentro da própria função. Quando a função termina, o valor das variáveis  que a função chamadora passou para a função não é modificada dentro da função chamadora.
Por exemplo, o programa a seguir passa três parâmetros (as variáveis a, b e c) para a função exibe_e_altera. A função, por sua vez, exibirá os valores, somará 100 aos valores e depois exibirá o resultado. Quando a função terminar, o programa exibirá os valores das variáveis. Como a Linguagem C usa chamada por valor, a função não altera os valores das variáveis dentro do chamador, como mostrado a seguir:
#include <iostream>
using namespace std;

void exibe_e_altera(int primeiro, int segundo, int terceiro)
{
cout<<"Valores originais da funcao: "<<primeiro<<" "<<segundo<<" "<<terceiro<<"\n";
primeiro = primeiro +100;
segundo = segundo + 100;
terceiro = terceiro + 100;
cout<<"Valores originais da funcao: "<<primeiro<<" "<<segundo<<" "<<terceiro<<"\n";
}

int main(void)
{
int a = 1, b = 2, c = 3;
exibe_e_altera(a, b, c);
cout<<"Valores finais em main: "<<a<<" "<<b<<" "<<c<<"\n";
system("PAUSE > null");
}
Como pode ser visto, as alterações que a função faz nas variáveis somente são visíveis dentro da própria função. Quando a função termina, as variáveis dentro de main estão inalteradas.
4.5.2 - Chamada por Referência
Usando a chamada por valor, as funções não podem modificar o valor de uma variável passada para uma função. No entanto, na maioria dos programas, as funções modificarão as variáveis de um modo ou de outro. Por exemplo, uma função que lê informações de um arquivo precisa colocar as informações em uma matriz de string de caracteres. Da mesma forma, uma função tal como strupr precisa converter as letras em uma string de caractere para maiúsculas. Quando as funções alteram o valor de um parâmetro, os programas precisam passar o parâmetro para a função usando chamada por referência.
A diferença entre chamada por valor e chamada por referência é que, usando a chamada por valor, as funções recebem uma cópia do valor de um parâmetro. Por outro lado, com a chamada por referência, as funções recebem o endereço de memória da variável. Portanto, as funções podem alterar o valor armazenado na posição de memória específica (em outras palavras, o valor da variável); alterações essas que permanecem após a função terminar.
Para usar a chamada por referência, seu programa precisar usar ponteiros. Por ora tudo o que precisamos saber é que um ponteiro armazena um endereço de memória, assim como uma variável armazena um valor. O módulo 8 é dedicado totalmente à explicação de ponteiros e suas aplicações em C++, incluindo o funcionamento de uma chamada de função por referência.
4.6 – Biblioteca de Execução
Muitas vezes, uma função criada para um determinado programa atende as necessidades de um segundo programa. A capacidade de reutilizar as funções em mais de um programa pode poupar um tempo considerável de programação e teste. Para isto é só copiar a função de um para outro programa.
A linguagem C++ possui uma biblioteca padrão com muitas funções úteis previamente implementadas para uso do programador, inclusive incluindo todas as funções da biblioteca padrão de C. A biblioteca padrão se divide em várias bibliotecas ou arquivos menores, divididos pelos tipos de função que cada um contém. Por exemplo, a biblioteca “cmath” contém as funções matemáticas padrão da linguagem C e a biblioteca “string” contém funções da biblioteca padrão de C++ que tratam de strings. Para utilizar uma destas bibliotecas, é preciso “avisar” ao compilador através da diretiva
#include <nome_da_biblioteca>
O comando “#include” copia o conteúdo da biblioteca para o programa que estamos compilando, para que as funções pertencentes à ela possam ser utilizadas. Algumas das bibliotecas padrão de C e seus cabeçalhos são mostrados abaixo:
Funções matemáticas: #include <cmath>
Funções de string: #include <cstring>
Funções de string do C++: #include <string>
Funções de I/O: #include <cstdio>
Funções de tempo: #include <ctime>
Uma descrição detalhada das funções presentes na biblioteca padrão de C++ não cabe nesta apostila. Entretanto, muitos livros e websites contém listagens e explicações das funções padrões. Um bom exemplo é o website http://www.cppreference.com/index.html , que contém uma vasta referência sobre vários aspectos da linguagem C++.
Não deixe de examinar as funções que seu compilador fornece. Muitos compiladores referenciam essas funções internas como biblioteca de execução. A maioria dos compiladores fornece centenas de funções de biblioteca de execução com propósito que vão de abertura e trabalho com arquivos para acessar informações do disco ou de diretório para determinar o tamanho de uma string de caracteres. As duas ou três horas que serão gastas para ler a documentação da biblioteca de execução pouparão muitas horas de programação.
4.7 – Funções Recursivas
Em C++, as funções podem chamar a si próprias, com exceção da função principal main. Uma função é recursiva se um comando no corpo da função chama ela mesma. Algumas vezes chamada de definição circular, a recursividade é o processo de definição de algo em termos de si mesmo.
Exemplos de recursividade existem em grande número. Uma maneira de definir um número inteiro sem sinal por meio de recursividade é utilizando-se os dígitos 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 mais ou menos outro número inteiro. Por exemplo, o número 15 é o número 7 mais o número 8; 21 é 9 mais 12 e 12 é 9 mais 3.
Para uma linguagem ser recursiva, uma função deve estar apta a chamar a si própria. O exemplo clássico de recursividade é mostrado na função fatorial_recursivo(), que calcula o fatorial de um número inteiro. O fatorial de um número N é o produto de todos os números inteiros entre 1 e N. Por exemplo, o fatorial de 3 é 1 x 2 x 3, ou 6.
#include <iostream>
#include <cstdio>
using namespace std;

unsigned long fatorial_recursivo (int n){
unsigned long resposta;
if ((n == 1) || (n == 0))return(1);
resposta = n * fatorial_recursivo(n - 1);
return(resposta);
}

int main()
{
unsigned long f;
int n;
cout<<"Digite um número: \n";
cin >> n;
f = fatorial_recursivo(n);
cout<<"O fatorial de "<<n<<" e "<<f<<" \n";
system("PAUSE > null");
return 0;
}
Quando uma função chama a si própria, as novas variáveis locais e os argumentos são alocados na pilha, e o código da função é executado com esses novos valores a partir do início. Uma chamada recursiva não faz uma nova cópia da função. Somente os argumentos e as variáveis são novos. Quando cada chamada recursiva retorna, as antigas variáveis locais e os parâmetros são removidos da pilha e a execução recomeça no ponto de chamada da função dentro da função.
Tendo em vista que o local para os argumentos de funções e para as variáveis locais é a pilha e que a cada nova chamada é criado uma cópia destas variáveis na pilha, é possível ocorrer overflow da pilha (stack overflow) e o programa terminar com um erro.
4.8 - Sobrecarga da Função
Quando um programa usa uma função, a Linguagem C armazena o endereço de retorno, os parâmetros e as variáveis locais na pilha. Quando a função termina, a Linguagem C descarta o espaço da pilha que continha as variáveis locais e parâmetros, e, depois, usa o valor de retorno para retornar a execução do programa para a posição correta.
Embora o uso da pilha seja poderoso porque permite que o programa chame e passe as informações para as funções, também consome tempo de processamento. Os programadores chamam a quantidade de tempo que o computador requer para colocar e retirar informações da pilha de sobrecarga da função. Na maioria dos sistemas, os cálculos baseados em funções podem requerer quase o dobro do tempo de processamento. Entretanto, C++ introduz um conceito que pode reduzir bastante a sobrecarga da função: são as funções inline.
4.9 – Funções Inline
As funções inline são funções que são compiladas “na sequência” (“in line”) do código. Isso quer dizer que quando chamamos uma função inline em um programa, o compilador substitui a chamada de função pelo próprio código da função, adaptando automaticamente os parâmetros e retorno da função. Assim, elimina-se a necessidade do programa pular para outro ponto na memória do computador, executar a função e depois retornar ao ponto onde parou.
Criamos funções inline do mesmo jeito que criamos funções normais: declarando seu protótipo e sua definição, com parâmetros e retorno. Só é preciso adicionar o prefixo inline antes do protótipo ou da definição da função, como é mostrado na função abaixo:
inline int quadrado (long x)
{
x = x * x;
return x;
}
Não podemos criar funções inline recursivas, pois logicamente uma função recursiva tem um tamanho variável de acordo com seu número de iterações, que muitas vezes muda durante a execução do programa.
Ganha-se velocidade com as funções inline, mas perde-se em memória utilizada. Se um programa chama uma função inline 10 vezes, criam-se 10 cópias da função dentro do código, aumentando seu tamanho durante a compilação. É preciso escolher com cuidado quando utilizar funções normais e funções inline, tendo em mente o compromisso rapidez de execução – memória utilizada.
4.10 – Parâmetros Padrão
Outra novidade introduzida por C++ no manuseio de funções é a possibilidade de definir-se um valor padrão para parâmetros de uma função. Isto é, podemos definir um parâmetro para uma função e estabelecer um valor padrão para ele, da seguinte forma:
void mensagem (int x = 1);
Quando chamamos a função e enviamos um valor como parâmetro para ela, a função é executada normalmente, utilizando o valor de x que enviamos. Porém, caso não enviássemos um valor x como parâmetro para esta função, isto é, fizéssemos a seguinte declaração no programa:
mensagem( );
Automaticamente a função substituiria x por 1, como especificamos no protótipo da função. Caso não tivéssemos definido um valor padrão para o parâmetro x, o compilador nos retornaria um erro de parâmetros insuficientes para que a função seja executada. Abaixo temos um exemplo de programa utilizando um parâmetro padrão.
#include <iostream>
#include <cstdio>
using namespace std;

void mensagem (int x = 1) {
if (x != 1) cout<<"Voce enviou um parametro para a função! O parametro X é igual a "<<x<<"\n";
if (x == 1) cout<<"Voce NAO enviou um parametro para função! O parametro X é igual a "<<x<<"\n";
}

int main()
{
int valor;
cout<<"Entre com um valor. Este valor será repassado para a função mensagem automaticamente!\n";
cin>>valor;
mensagem(valor);
cout<<"Agora chamaremos a função mensagem sem lhe dar um parametro. Veja o que acontece: \n";
mensagem();
system("PAUSE > null");
return 0;
}

-------------------------------------------------------------------------------------------------------------
Publicado originalmente em - sexta-feira, 13 de agosto de 2010
atualizacao da referencia bibliografica em -atualizado em 21/08/2017 - 03:01
eu publiquei em uma epoca de ensino medio, sem entender de direito autroal, o arquivo é do autor (Esta apostila é o resultado do trabalho de conclusão de curso realizado por Enrique Camargo Trevelin, aluno do curso de Engenharia Elétrica, sob a orientação do Prof. Carlos Antônio Alves. ), está publicado no site : (http://apostilacpp.awardspace.com/index.php?pagina=home) na integra e peco desculpa se o autor quer que retire do site o material, mande um email para
contatomorgao@gmail.com