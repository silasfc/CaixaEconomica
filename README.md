## Protótipo de Redesenho do App da Caixa Econômica

#### Acadêmicos

* Caetano Finisterre Burjack da Silva
* Silas Ferraciolli Corrêa

#### Objetivo

Desenvolver duas soluções (Android e iOS) como objeto de avaliação da disciplina de Projeto de Interface para Dispositivos Móveis - Faculdade Católica do Tocantins

#### Status

O protótipo ainda precisa evoluir bastante, mas como se trata apenas de uma prévia do que virão a ser as telas reais do aplicativo, já se pode ter uma noção a partir dessa experiência.

#### Requisitos primários

* JDK (preferencialmente o mais recente)
* Node Package Manager - NPM (preferencialmente o mais recente)

#### Requisitos secundários

Baixar e instalar o nodejs, que já conterá o npm para uso no seu S.O. Em seguida, instalar os dois maiores responsáveis pelo desenvolvimento deste trabalho:

* cordova
* ionic

Aqui serão instalados os mais recentes releases de todos os componentes de software necessários.
Para tal, execute:

```
$ sudo npm install -g cordova@latest ionic@latest
```

#### Instalação/Construção do App

* Clonar o projeto:
```
$ git clone https://github.com/silasfc/CaixaEconomica.git
```

* Abrir diretório do projeto:
```
$ cd CaixaEconomica
```

* Instalar requisitos:
```
$ npm install
```

* Adicionar plataformas:
```
$ ionic cordova platform add android
$ ionic cordova platform add ios
```

* Construir os binários para as plataformas:
```
$ ionic cordova build android
$ ionic cordova build ios
```

* Construir/Rodar o app nas plataformas:
```
$ ionic cordova run android
$ ionic cordova run ios
```
