---
layout: post
title: Java (linguagem de programação)
date: 2010-02-08 19:45
author: Morgao
comments: true
categories: Linguagem JAVA
---
Java
Java (linguagem de programação)
Histórico

Em 1991, na Sun Microsystems, foi iniciado o Green Project, o berço do Java, uma linguagem de programação orientada a objetos. Os mentores do projeto eram Patrick Naughton, Mike Sheridan, e James Gosling. O objetivo do projeto não era a criação de uma nova linguagem de programação, mas antecipar e planejar a “próxima onda” do mundo digital. Eles acreditavam que, em algum tempo, haveria uma convergência dos computadores com os equipamentos e eletrodomésticos comumente usados pelas pessoas no seu dia-a-dia.
Para provar a viabilidade desta idéia, 13 pessoas trabalharam arduamente durante 18 meses. No verão de 1992 eles emergiram de um escritório de Sand Hill Road no Menlo Park com uma demonstração funcional da idéia inicial. O protótipo se chamava *7 (leia-se “StarSeven”), um controle remoto com uma interface gráfica touchscreen. Para o *7, foi criado um mascote, hoje amplamente conhecido no mundo Java, o Duke. O trabalho do Duke no *7 era ser um guia virtual ajudando e ensinando o usuário a utilizar o equipamento. O *7 tinha a habilidade de controlar diversos dispositivos e aplicações. James Gosling especificou uma nova linguagem de programação para o *7. Gosling decidiu batizá-la de “Oak”, que quer dizer carvalho, uma árvore que ele podia observar quando olhava pela sua janela.
O próximo passo era encontrar um mercado para o *7. A equipe achava que uma boa idéia seria controlar televisões e vídeo por demanda com o equipamento. Eles construíram um demo chamado MovieWood, mas infelizmente era muito cedo para que o vídeo por demanda bem como as empresas de TV a cabo pudessem viabilizar o negócio. A idéia que o *7 tentava vender, hoje já é realidade em programas interativos e também na televisão digital. Permitir ao telespectador interagir com a emissora e com a programação em uma grande rede de cabos, era algo muito visionário e estava muito longe do que as empresas de TV a cabo tinham capacidade de entender e comprar. A idéia certa, na época errada.
Entretanto, o estouro da Internet aconteceu e rapidamente uma grande rede interativa estava se estabelecendo. Era este tipo de rede interativa que a equipe do *7 estava tentando vender para as empresas de TV a cabo. E, da noite para o dia, não era mais necessário construir a infra-estrutura para a rede, ela simplesmente estava lá. Gosling foi incumbido de adaptar o Oak para a Internet e em janeiro 1995 foi lançada uma nova versão do Oak que foi rebatizada para Java. A tecnologia Java tinha sido projetada para se mover por meio das redes de dispositivos heterogêneos, redes como a Internet. Agora aplicações poderiam ser executadas dentro dos browsers nos Applets Java e tudo seria disponibilizado pela Internet instantaneamente. Foi o estático HTML dos browsers que promoveu a rápida disseminação da dinâmica tecnologia Java. A velocidade dos acontecimentos seguintes foi assustadora, o número de usuários cresceu rapidamente, grandes fornecedores de tecnologia, como a IBM anunciaram suporte para a tecnologia Java.
Desde seu lançamento, em maio de 1995, a plataforma Java foi adotada mais rapidamente do que qualquer outra linguagem de programação na história da computação. Em 2004 Java atingiu a marca de 3 milhões de desenvolvedores em todo mundo[1]. Java continuou crescendo e hoje é uma referência no mercado de desenvolvimento de software. Java tornou-se popular pelo seu uso na Internet e hoje possui seu ambiente de execução presente em web browsers, mainframes, SOs, celulares, palmtops, cartões inteligentes etc.
[editar]Padronização

Em 1997 a Sun Microsystems tentou submeter a linguagem a padronização pelos órgãos ISO/IEC e ECMA, mas acabou desistindo. [2][3][4] Java ainda é um standard de fato, que é controlada através da JCP Java Community Process.[5] Em 13 de Novembro de 2006, a Sun lançou a maior parte do Java como Software Livre sob os termos da GNU General Public License (GPL). Em 8 de Maio de 2007 a Sun finalizou o processo, tornando praticamente todo o código Java como software de código aberto, menos uma pequena porção da qual a Sun não possui copyright.[6]
[editar]Principais Características da Linguagem Java

A linguagem Java foi projectada tendo em vista os seguintes objectivos:
Orientação a objecto - Baseado no modelo de Simula67;
Portabilidade - Independência de plataforma - "escreva uma vez, execute em qualquer lugar" ("write once, run anywhere");
Recursos de Rede - Possui extensa biblioteca de rotinas que facilitam a cooperação com protocolos TCP/IP, como HTTP e FTP;
Segurança - Pode executar programas via rede com restrições de execução;
Além disso, podem-se destacar outras vantagens apresentadas pela linguagem:
Sintaxe similar a Linguagem C/C++.
Facilidades de Internacionalização - Suporta nativamente caracteres Unicode;
Simplicidade na especificação, tanto da linguagem como do "ambiente" de execução (JVM);
É distribuída com um vasto conjunto de bibliotecas (ou APIs);
Possui facilidades para criação de programas distribuídos e multitarefa (múltiplas linhas de execução num mesmo programa);
Desalocação de memória automática por processo de coletor de lixo (garbage collector);
Carga Dinâmica de Código - Programas em Java são formados por uma colecção de classes armazenadas independentemente e que podem ser carregadas no momento de utilização.
[editar]Exemplos de código

[editar]Método main
O método main é onde o programa inicia. Pode estar presente em qualquer classe. Os parâmetros de linha de comando são enviados para a array args[], do tipo String.
 public class OlaMundo {

    /**
    * Método que executa o programa
    * public = É visto em qualquer lugar da aplicação
    * static = é iniciado automaticamente pela JVM, sem precisar de uma instância
    * void = Método sem retorno (retorno vazio)
    * main = Nome do método, que é obrigatorio ser este. Recebe como parâmetro um array de String.
    * String[] args = Array de argumentos que podem ser repassados na chamada do programa.
    */

    public static void main(String[] args) {
       System.out.println("Olá, Mundo!"); //Imprime na tela a frase
    }
 }
[editar]Criação de classes
Exemplo:
 public abstract class Animal {
    public abstract void fazerBarulho();
 }

----

 public class Cachorro extends Animal {
    public void fazerBarulho() {
        System.out.println("AuAu!");
    }
 }

----

 public class Gato extends Animal {
    public void fazerBarulho() {
        System.out.println("Miau!");
    }
 }
O exemplo acima cria a classe Animal e duas classes derivadas de Animal.
Java não suporta herança múltipla, e todas as classes em Java derivam de Object(Classe).
A única possibilidade de se ver herança múltipla em java é no uso de interfaces, pois uma so interfaces pode herdar várias outras interfaces.
[editar]Interfaces
Uma interface modela um comportamento esperado. Pode-se entendê-la como uma classe que contenha apenas métodos abstratos. Embora uma classe não possa conter mais de uma super classe, a classe pode implementar mais de uma interface. Exemplo:
 public interface Pesado {
    double obterPeso();
 }

 public interface Colorido {
    Color obterCor();
 }

 public class Porco extends Animal implements Pesado, Colorido {
    public void fazerBarulho() {
        System.out.println("Óinc!");
    }

    //Implementação da interface Pesado
    public double obterPeso() {
        return 50.00;
    }

    //Implementação da interface Colorido
    public Color obterCor() {
        return Color.BLACK;
    }

    //Uma propriedade só do porco
    public boolean enlameado() {
        return true;
    }
 }
[editar]Classes internas
Java pode ter classes internas. Exemplos:
 public class Cavalo extends Animal {
    public void fazerBarulho() {
        System.out.println("RIINCH!");
    }
    //Classe interna e privada. Existe só no contexto da classe "Cavalo".
    private class Parasita extends Animal {
        public void fazerBarulho() {
            System.out.println("SQRRT");
        }
    }
 }
[editar]Objetos anônimos
Podemos ter também objetos anônimos, aonde não é necessário instanciar o objeto em uma variável para utilizá-lo. Exemplo:
 public class MostraBarulho {
    public static void main(String args[]) {
        new Cavalo().fazerBarulho(); //Objeto anônimo.

        //Abaixo um objeto e classe anônimos!
        new Animal() {//novo objeto
            public void fazerBarulho() {
                System.out.println("QUAC!");//imprime na tela
            }
        }.fazerBarulho();
    }
 }
[editar]Programas simples
Programa em Java para somar dois números inteiros:
import javax.swing.JOptionPane;
public class Soma{

  public static void main(String[]args){

    //declaração das variáveis
    String numeroA, numeroB;
    int numero1, numero2, soma;

    //pede dois números inteiros
    numeroA = JOptionPane.showInputDialog("Entre com o primeiro número inteiro");
    numeroB = JOptionPane.showInputDialog("Entre com o segundo número inteiro");

    //converte os números de string para inteiro
    numero1 = Integer.parseInt(numeroA);
    numero2 = Integer.parseInt(numeroB);

    //outra forma de conversão seria utilizar o método valueOf
    numero1 = Integer.valueOf(numeroA);
    numero2 = Integer.valueOf(numeroB);

    //efetua a soma dos números
    soma = numero1 + numero2;

    //mostra o resultado da soma para o usuário
    JOptionPane.showMessageDialog(null,"A soma dos números é: " +
    soma,"Resultado",JOptionPane.PLAIN_MESSAGE);
  }
}
[editar]Extensões

Extensões em Java:
J2ME (Micro-Edition for PDAs and cellular phones)
J2SE (Standard Edition)
J3D (A high level API for 3D graphics programming)
JAAS (Java Authentication and Authorization Service)
JAIN (Java API for Integrated Networks)
Java Card
JMX (Java Management Extensions)
JavaFX
JSF (JavaServer Faces)
JSP (JavaServer Pages)
JavaSpaces
JCE (Java Cryptography Extension)
JDBC (Java Database Connectivity)
JDMK (Java Dynamic Management Kit)
JDO (Java Data Objects)
JEE (Enterprise Edition)
Jini (a network architecture for the construction of distributed systems)
Jiro
JMF (Java Media Framework)
JMI (Java Metadata Interface)
JMS (Java Message Service)
JNDI (Java Naming and Directory Interface)
JNI (Java Native Interface)
JOGL (A low level API for 3D graphics programming, using OpenGL)
JSML (Java Speech API Markup Language)
JXTA (open source-based peer-to-peer infrastructure)
MARF (Modular Audio Recognition Framework)
OSGi (Dynamic Service Management and Remote Maintenance)
SuperWaba (JavaVMs for handhelds)
[editar]Polimorfismo

O Polimorfismo é uma característica muito importante em sistemas orientados a objetos. Termo proveniente do grego que significa "muitas formas". Através dele conseguimos realizar várias tarefas.
Existem 4 tipos de polimorfismo divididos em 2 categorias (todos eles são implementados em Java), são descritos a seguir:
[editar]Polimorfismo Universal
Como o próprio nome diz, ele é universal, ou seja, ele pode ser aplicado em vários casos, logo não consegue saber quantas vezes será aplicado o polimorfismo. Trabalha potencialmente num conjunto infinito de tipos, de modo disciplinado. Este polimorfismo possui duas formas:
[editar]Paramétrico ou parametrização
A idéia do polimorfismo universal paramétrico é ao definir um elemento(que pode ser uma classe, um método ou alguma outra estrutura da linguagem), a definição do tipo sozinha ela é incompleta, ela precisa parametrizar este tipo, ou seja, teoricamente não existiria o tipo sozinho, o que sim existe e o tipo de alguma coisa de alguma coisa, por exemplo, uma list não seria só do tipo list, e sim do tipo list de elefantes. Vale lembrar que este polimorfismo só foi implementado em Java apartir da versão 1.5.
Exemplo de Polimorfismo Paramétrico em Java


//Aqui no exemplo é criado um ArrayList do tipo ArrayList de Aluno, e não ArrayList, isso é o polimorfismo universal paramétrico

ArrayList<Aluno> alunos = new ArrayList<Aluno>();//aqui ha o como aluno
 Aluno a = new Aluno("Rafael");
 alunos.add( a );

 Aluno x = alunos.get( 0 );
 System.out.println("Nome: "+ x.getNome() );
[editar]Inclusão
É quando você tem um ponteiro para mãe e ele consegue apontar para um objeto da filha, já que esse polimorfismo é muito básico, é difícil você conseguir outras coisas sem ele, por isso boa parte das linguagens orientadas a objetos conhecidas implementam esse polimorfismo.
Exemplo em Código:
class Porca {
 int faces;
 void acopleETorca();
}
class Porca8mm extends Porca {
 void acopleETorca(){
  if (...) ...
 }
}
class Porca10mm extends Porca {
 void acopleETorca(){
  for (...) ...
 }
}
[editar]Polimorfismo Ad-Hoc
É implementado quando queremos definir uma coisa específica, ou seja, este polimorfismo, diferente do universal, não pode ser usado em todo lugar, logo sabemos quantas vezes ele será aplicado. Este polimorfismo possui duas formas:
[editar]Sobrecarga (Overloading)
Permite que um “nome de função” seja utilizado mais de uma vez com diferentes assinaturas, ou seja, dois métodos com o mesmo nome, porém com tipos de parâmetros diferentes por quantidades ou por tipo. O compilador automaticamente chama a função “correta” que deve ser utilizada.
Exemplo em código: Podemos citar como exemplo uma função f aplicada aos parâmetros reais a e b, onde, dependendo dos tipos dos parâmetros, podemos ter a execução da primeira ou da segunda função, caracterizando o polimorfismo ad-hoc de overloading.
class Aritmetica{
 int f (int x, int y) {
  return x+y;
 }
 double f (double x, double y) {
  return x*x + y*y;
 }
}
class Testa{
 public static void main(String[] args){
  f(a,b);
 }
}
[editar]Coerção
A idéia é que a linguagem é quem faz uma coerção de tipos e não o programador, ou seja, que esta não é feita voluntariamente pelo programador e sim pela linguagem.
Exemplo: se o operador + é definido para somar dois números reais, e um número inteiro é passado como parâmetro então o inteiro é "coergido" para real.
Exemplo em código:
class Funcionario {
 protected String CPF, RG, telefone, nome;
}
class Gerente extends Funcionario {
 private String departamento;
}
class Supervisor extends Funcionario {
 private String setor;
}
class Auxiliar extends Funcionario {
}
 public class TesteUpcasting {
 public static void main(String[] args) {
  Gerente ger = new Gerente();
  Supervisor sup = new Supervisor();
  Funcionario func = ger;
 }
 //func é do tipo Funcionario, mas recebe uma instância do tipo Gerente - no caso ocorre um UPCASTING
}
[editar]Frameworks

É possível utilizar frameworks para facilitar o desenvolvimento de aplicações. Dentre os mais utilizados pode-se destacar:
Hibernate ferramenta para ORM;
Junit ferramenta para auxiliar na criação de testes unitários;
Log4j ferramenta para facilitar a criação de logs na aplicação;
Spring ferramenta que auxilia principalmente implementação de injeção de dependências e inversão de controle;
Struts controlador MVC (Model 2) web.
[editar]Ambientes de desenvolvimento

É possível desenvolver aplicações em Java através de vários ambientes de desenvolvimento integrado (IDEs). Dentre as opções mais utilizadas pode-se destacar:
BlueJ — um ambiente desenvolvido por uma faculdade australiana (considerado muito bom para iniciantes);
JCreator — (gratuito/shareware) — um ambiente desenvolvido pela Xinox (recomendado para programadores iniciantes);
jEdit — (recomendado para programadores iniciantes);
IDEs completas (recomendado para programadores profissionais):
Eclipse — um projeto aberto iniciado pela IBM;
IntelliJ IDEA (comercial) — uma IDE desenvolvida pela JetBrains;
JBuilder — um ambiente desenvolvido pela empresa Borland;
JDeveloper (gratuito OTN) — uma IDE desenvolvida pela empresa Oracle;
NetBeans (software livre) — uma IDE desenvolvida pela Sun Microsystems;
Outras IDEs (menos populares):
Gel (IDE) — open source;
Greenfoot — bem parecido com o BlueJ;
JGRASP — bom para intermediários, feito pela equipe do Projeto GRASP;
Java Studio Creator/Enterprise (gratuito SDN) um ambiente criado pela empresa Sun Microsystems;
Workshop for WebLogic (comercial/desenvolvedor) um ambiente criado pela empresa Oracle;
WebSphere Studio Application Developer um ambiente criado pela empresa IBM;
[editar]Certificações

Existem 8 tipos de certificações[7] da Sun Microsystems para Java:
Sun Certified Enterprise Architect (SCEA)
Sun Certified Mobile Application Developer (SCMAD)
Sun Certified Developer For Java Web Services (SCDJWS)
Sun Certified Business Component Developer (SCBCD)
Sun Certified Web Component Developer (SCWCD)
Sun Certified Java Developer (SCJD)
Sun Certified Java Programmer (SCJP)
Sun Certified Java Associate (SCJA)
Cada certificação testa algum tipo de habilidade dentro da plataforma e linguagem Java. Todos os testes são realizados pela empresa Prometric[8] e são reconhecidos internacionalmente.
[editar]Comunidade

A comunidade de desenvolvedores Java reúne-se em grupo denominados JUGs (Java User Groups). No Brasil o movimento de grupos de usuários expandiu-se bastante e tem formado alguns dos maiores grupos de usuários Java do mundo[carece de fontes], como por exemplo o PortalJava, GUJ e o JavaFree.
[editar]Licença

A Sun disponibiliza a maioria das distribuições Java gratuitamente e obtém receita com programas mais especializados como o Java Enterprise System. Em 13 de novembro de 2006, a Sun liberou partes do Java como software livre, sob a licença GNU General Public License.[9] A liberação completa do código fonte sob a GPL ocorreu em maio de 2007.[10]
[editar]Curiosidades

O número mágico de uma classe Java, quando representado em Hexadecimal fica 0xCAFEBABE. Leia abaixo:
Patrick Naughton
—Strangely enough the magic number for .class files was chosen long before the name Java was ever uttered in reference to this language. We were looking for something fun, unique and easy to remember. 0xcafebabe was better than the second runner-up, 0xdeadbabe. It is only a coincidence that the oblique reference to the cute barristas at Peet's Coffee was foreshadowing for the name Java.
[editar]Ver também

Java (plataforma de software)
Referências

↑
http://www.sun.com/2004-0511/feature/
↑ Java Study Group
↑ Why Java™ Was - Not - Standardized Twice
↑ What is ECMA--and why Microsoft cares
↑ Java Community Process website
↑ open.itworld.com - JAVAONE: Sun - The bulk of Java is open sourced
↑ Java Certification
↑ Prometric: Testing and Assessment
↑ Sun begins releasing Java under the GPL (em inglês). Página visitada em 6 de julho de 2010.
↑ JavaOne opening keynote notes and comments (em inglês). Página visitada em 6 de julho de 2010.
[editar]Ligações externas

Página oficial da linguagem Java
Iniciando em Java
Tutoriais oficiais da Sun
O que é Java?
Características Básicas
Orientação a Objetos com Java


-------------------------------------------------------------------------------------------------------------

Publicado originalmente em - sexta-feira, 13 de agosto de 2010

atualizacao da referencia bibliografica em -atualizado em 21/08/2017 - 2:53


pagina em português da wikipedia para (Java - Linguagem de programação) 

https://pt.wikipedia.org/wiki/Java_(linguagem_de_programa%C3%A7%C3%A3o)