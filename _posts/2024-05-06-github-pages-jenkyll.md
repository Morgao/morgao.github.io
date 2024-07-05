---
layout: post
title: Github Pages Jenkyll
date: 2024-02-06 19:13
author: Morgao
comments: true
categories: [Curiosidades]
---
---

---

Documentação do Jenkyll
<a href="https://jekyllrb.com/docs/installation/">https://jekyllrb.com/docs/installation/</a>
<h2 id="inicio-da-configuração">Inicio Da Configuração</h2>
Requisitos:
<ul>
 	<li>Git</li>
 	<li>MinGw</li>
 	<li>
<ul>
 	<li>GCC</li>
</ul>
</li>
 	<li>
<ul>
 	<li>G++</li>
</ul>
</li>
 	<li>Make</li>
 	<li>Msys</li>
 	<li>Ruby</li>
 	<li>
<ul>
 	<li>Gem</li>
</ul>
</li>
 	<li>Jekyll</li>
 	<li>GitHub Conta</li>
 	<li>GitHub Desktop</li>
 	<li>Visual Code</li>
 	<li></li>
</ul>
Adiciona as variáveis de ambiente do Windows e reinicia o computador
ou
seta manualmente no console elas pra funcionar agora
essa referencia

Git
<pre><code>C:\RailsInstaller\Git\cmd   
</code></pre>
Setar Manualmente:
<pre><code>set PATH=C:\Program Files (x86)\GnuWin32\bin;%PATH%
</code></pre>
MinGw
<pre><code>C:\MinGW\bin
</code></pre>
Setar Manualmente:
<pre><code>set PATH=C:\Program Files (x86)\C:\MinGW\bin\bin;%PATH%
</code></pre>
Make
<pre><code>C:\Program Files (x86)\GnuWin32\bin
</code></pre>
Setar Manualmente:
<pre><code>set PATH=C:\Program Files (x86)\GnuWin32\bin;%PATH%
</code></pre>
Msys
<pre><code>abcv
</code></pre>
Setar Manualmente:
<pre><code>set PATH=C:\Program Files (x86)\GnuWin32\bin;%PATH%
</code></pre>
Ruby
<pre><code>C:\Ruby33-x64
</code></pre>
Setar Manualmente:
<pre><code>set PATH=C:\Ruby33-x64\bin;%PATH% 
</code></pre>
Jekyll
<pre><code>abc
</code></pre>
Setar Manualmente:
<pre><code>set PATH=C:\Ruby33-x64\bin;%PATH% 
</code></pre>
Vs Code
<pre><code>C:\Users\admna\AppData\Local\Programs\Microsoft VS Code\bin
</code></pre>
Setar Manualmente:
<pre><code>set PATH=C:\Ruby33-x64\bin;%PATH% 
</code></pre>
GitHubDesktop
<pre><code>abc
</code></pre>
Setar Manualmente:
<pre><code>C:\Users\admna\AppData\Local\GitHubDesktop\bin
</code></pre>
<h2 id="fim-da-configuração">Fim Da Configuração</h2>
C:\Users\admna\AppData\Local\Microsoft\WinGet\Links

criar conta no github
<a href="https://github.com/">https://github.com/</a>

github desktop
<a href="https://desktop.github.com/">https://desktop.github.com/</a>

Git
<a href="https://www.git-scm.com/downloads">https://www.git-scm.com/downloads</a>

GCC
<a href="https://gcc.gnu.org/install/">https://gcc.gnu.org/install/</a>
ou
mingw
<a href="https://sourceforge.net/projects/mingw/">https://sourceforge.net/projects/mingw/</a>

Make
<a href="https://www.gnu.org/software/make/">https://www.gnu.org/software/make/</a>

Ruby
<a href="https://rubyinstaller.org/">https://rubyinstaller.org/</a>

Jekyll
<pre><code>gem install jekyll
gem install jekyll bundler
bundle init   
jekyll new .
cd nomeSite
executar sistema
bundle exec jekyll serve
bundle exec jekyll serve --livereload // pra ver as alteracoes em tempo real
bundle update github-pages // se nao encontrar
bundle update
</code></pre>
<blockquote>
<blockquote>acesso offline no seu computador Browse to <a href="http://localhost:4000">http://localhost:4000</a> ou
<a href="http://127.0.0.1:4000">http://127.0.0.1:4000</a>

// alterar nome e outras coisas salvar autosve()</blockquote>
atualiza site pra ver bundle exec jekyll serve --livereload

envia o conteudo pro github agora

//aba github pages e aletara brach / main root /save

pages // github actions

/ ele coloca no raiz <a href="http://seuNomeDeUsuario.github.io">seuNomeDeUsuario.github.io</a> blog vira //

veio quebrado site

alterar referncia no congfig</blockquote>
<pre><code>git add . //adiciona
git commit -m "Initial Jekyll website commit" //comenta o add
git push origin master  # or the branch you're using // manda pra origin

add seu repositiorio como repositio remoto
git remote add origin https://github.com/Morgao/morgao.git

git push -u origin BRANCH
</code></pre>
baixar post do medium
<pre><code>bundle update &amp;&amp; bundle install
curl https://medium.com/feed/&lt;medium username&gt; &gt; .rss.xml
bundle exec jekyll import rss --source .rss.xml
</code></pre>
winget install --id GitHub.cli
winget install --id GitHub.cli
<pre><code>git config user.name my-name
git config user.email my-email

git config user.name Morgao
git config user.email contatomorgao@gmail.com

giothuib cli
gh auth login
</code></pre>
bundle exec jekyll serve
cd nomeDoSeuSite (acessar a pasta que voce criou agora)

troca gem local host para gem online github pag
no arquivo gemfile
remvoe gem "jekyll
colcoar
gem githubpag

atualizar as atualizacoes

bundle update github-pages // se nao encontrar
bundle update

agora instal esse sistema

bundle install

// arquivo config

bundle update github-pages // se nao encontrar
bundle update

git clone <a href="https://github.com/username/username.github.io">https://github.com/username/username.github.io</a>
git clone <a href="https://github.com/Morgao/Morgao.github.io">https://github.com/Morgao/Morgao.github.io</a>

cd <a href="http://username.github.io">username.github.io</a>

acesso offline no seu computador
Browse to <a href="http://localhost:4000">http://localhost:4000</a>
<div style="display: inline-block; white-space: nowrap;"></div>
