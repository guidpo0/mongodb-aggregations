### Informações Gerais

Projeto desenvolvido durante formação em desenvolvedor Web Full Stack pela Trybe.

---

# Boas vindas ao repositório do projeto de Aggregations!

Neste projeto foi praticado os conceitos de aggregations do **MongoDB** utilizando dados do **IMDB**, dados sobre empresas aéreas e também dados que contenham registros de deslocamento de pessoas que utilizam bicicletas.

Lembrando que esta aplicação corresponde aos meus esforços para melhorar minhas hard skills e soft skills, sinta-se à vontade para explorá-la! Feedbacks construtivos são sempre bem vindos!

Abaixo você poderá encontrar mais informações técnicas sobre este projeto.

---

# Sumário

- [Habilidades](#habilidades)
- [Intruções para fazer o fork do repositório](#intruções-para-fazer-o-fork-do-repositório)
- [Informações do projeto](#informações-do-projeto)
  - [Linter](#linter)
  - [Instruções para restaurar o banco de dados aggregations](#instruções-para-restaurar-o-banco-de-dados-aggregations)
  - [Implementações técnicas](#implementações-técnicas)
- [Desafios](#desafios)
  - [Desafio 1](#desafio-1)
  - [Desafio 2](#desafio-2)
  - [Desafio 3](#desafio-3)
  - [Desafio 4](#desafio-4)
  - [Desafio 5](#desafio-5)
  - [Desafio 6](#desafio-6)
  - [Desafio 7](#desafio-7)
  - [Desafio 8](#desafio-8)
  - [Desafio 9](#desafio-9)
  - [Desafio 10](#desafio-10)
  - [Desafio 11](#desafio-11)
  - [Desafio 12](#desafio-12)
  - [Desafio 13](#desafio-13)
  - [Desafio 14](#desafio-14)

---

# Habilidades

Nesse projeto, fui capaz de:

- Executar buscas complexas no banco mongoDB
- Usar os operadores de aggregation para fazer uma pipeline  

---

# Instruções para fazer o fork do repositório

1. Faça o fork do repositório

2. Instale as dependências do projeto
  * Instale as dependências:
    * `npm install`

---

# Informações do projeto

### Linter

Para garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento foi utilizado neste projeto o linter `ESLint`.

### Instruções para restaurar o banco de dados `aggregations`

1. Abra o terminal e conecte-se à sua instância local do **MongoDB**.

2. Agora que você tem certeza de que a sua instância está no ar e que você está conectado a ela, digite `exit`. Você voltará ao terminal para iniciar a importação dos dados.

3. Na raiz do diretório do projeto, execute o seguinte comando que fará a restauração da base de dados `aggregations`:
    ```sh
    DBNAME=aggregations ./scripts/resetdb.sh assets
    ```

  * A execução desse script criará um banco de dados chamado `aggregations` e importará todas as suas coleções.

### Implementações técnicas

Para executar localmente os testes, é preciso escrever o seguinte no seu terminal, estando na raiz do diretório do projeto:
```sh
./scripts/evaluate.sh
```

Esse script passará por **todos os desafios** e imprimirá um relatório indicando se passou ou não para cada desafio. Como a execução do script **envolve restauração da base de dados `aggregations`** de um teste para outro, recomenda-se esperar pela sua execução completa.

Para executar somente o teste de um desafio, execute o comando abaixo, substituindo N pelo númedo do desafio

```sh
./scripts/evaluate.sh desafioN
```

⚠️ Como na avaliação o banco de dados `aggregations` é restaurado de um teste para outro, **se atente a fazer uso do banco restaurado na hora de fazer um desafio**. ⚠️

---

# Desafios

### Desafio 1

Ajude a Trybe a escolher um filme para a próxima noite! Baseado em uma pesquisa, decidimos que os filmes em potencial devem atender alguns critérios, vejamos:

#### Retorne todos os filmes que satisfaça, através de uma  _pipeline_, as condições abaixo

* `imdb.rating` deve ser maior ou igual a `7`;
* `genres` não deve conter `Crime` ou `Horror`;
* `rated` deve ser igual a `PG` ou `G`;
* `languages` contém `English` e `Spanish`.
* Utilize a coleção `movies`.

Sua query deve retornar `41` documentos.

### Desafio 2

A escolha do filme da noite foi um sucesso, mas infelizmente ficamos com nossa banda de internet quase esgotada, e ainda precisamos de uma nova recomendação de filme. Para diminuir o volume de dados trafegados:

#### Utilizando o mesmo _pipeline_ anterior, retorne apenas os campos `title`, `rated`, `imdb.rating`, `imdb.votes` e `year`, modificando seus nomes para `titulo`, `avaliado`, `notaIMDB`, `votosIMDB` e `ano`, respectivamente.


O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "titulo" : "A Streetcar Named Desire", "avaliado" : "PG", "notaIMDB" : 8.1, "votosIMDB" : 72364, "ano" : 1951 }
// Demais documentos
```

### Desafio 3

Agora que você tem os campos essenciais, aplique mais um estágio na pipeline do desafio anterior que atenda a seguinte demanda:

#### Retorne esses filmes ordenados por ano e nota IMDB de forma decrescente e título por ordem alfabética.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "titulo" : "McFarland, USA", "avaliado" : "PG", "notaIMDB" : 7.5, "votosIMDB" : 14091, "ano" : 2015 }
// Demais documentos
```

### Desafio 4

Nossa coleção de filmes tem muitos documentos diferentes, alguns com títulos "mais complexos" do que outros. Se quisermos analisar nossa coleção para encontrar títulos de filmes que têm uma só palavra no título, poderíamos buscar todos os filmes da coleção e processar isso na aplicação, mas o `Aggregation Framework` nos permite fazer isso diretamente no lado do banco de dados.

#### Crie uma _pipeline_ que retorna documentos  com o novo campo `title_split`, ela deve seguir as seguintes condições:

- `title_split` deve conter uma lista de palavras presentes em `title`.
- A pipeline deve retornar apenas filmes com o título composto apenas de uma palavra.
- A pipeline deve ser ordenada por `title` em ordem alfabética.
- A pipeline deve retornar apenas o campo `title_split`.

Por exemplo, `"Cinderela"` e `"3-25"` devem entrar nessa contagem, mas `"Cast Away"` não.

**Dica:** utilize os operadores `$split`, `$size` e `$sort` para te auxiliar.
[Documentação do $split](https://docs.mongodb.com/manual/reference/operator/aggregation/split/)

Sua query deve retornar `8068` documentos.

### Desafio 5

Temos outra noite de filme aqui na Trybe e, desta vez, nós perguntamos à equipe quais são suas pessoas preferidas como atores e/ou atrizes. Aqui está o resultado:

* Sandra Bullock
* Tom Hanks
* Julia Roberts
* Kevin Spacey
* George Clooney

#### Considerando esta lista, crie uma _pipeline_ que retorne o `title` do vigésimo quinto filme da agregação que satisfaz as seguintes condições:

- `countries` é Estados unidos no banco estará classificado como USA
- `tomatoes.viewer.rating` maior ou igual a `3`
-  Crie um novo campo chamado `num_favs`, que represente quantos atores ou atrizes da nossa lista de favoritos aparecem no elenco (informação do campo `cast` no banco) do filme, caso ele possua favoritos.
- Ordene os resultados por `num_favs`, `tomatoes.viewer.rating` e `title`, todos em ordem decrescente.

**Dica:** coloque a lista de atores e atrizes favoritos em uma variável e explore operadores como `$size` e [`$setIntersection`](https://docs.mongodb.com/manual/reference/operator/aggregation/setIntersection/index.html).

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "title" : <nome_do_filme> }
```

### Desafio 6

Vamos explorar mais operadores aritméticos!

#### Considerando todos os filmes que ganharam o Oscar pelo menos uma vez, calcule o **maior valor**, **menor valor**, **média** e o **desvio padrão** das avaliações (informação do campo `imdb.rating` no banco)

- Para a média e o desvio padrão arredonde os valores para uma casa decimal utilizando o [`$round`](https://docs.mongodb.com/manual/reference/operator/aggregation/round/index.html).

**Dica:** todos os filmes na coleção, que já ganharam um Oscar (informação do campo `awards` no banco), começam com uma sequência de string parecida com essas abaixo, portanto `$regex` é um operador bem-vindo:

```
Won 10 Oscars
Won 1 Oscar
```

Utilizem o [`$stdDevSamp`](https://docs.mongodb.com/manual/reference/operator/aggregation/stdDevSamp/index.html) para calcular o desvio padrão.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{
  "maior_rating" : <maior_rating>,
  "menor_rating" : <menor_rating>,
  "media_rating" : <media_rating>,
  "desvio_padrao" : <desvio_padrao>
}
```

### Desafio 7

Vamos nos aprofundar um pouco mais em nossa coleção de filmes. 

#### Conte quantos filmes cada um dos atores e atrizes do elenco (`cast` no banco) já participou e obtenha uma média do campo `imdb.rating` para cada um desses atores e atrizes.

- Traga o nome do ator ou atriz;
- Número de filmes em que participou
- Média do imdb desses filmes arredondada para uma casa decimal usando o operador [`$round`](https://docs.mongodb.com/manual/reference/operator/aggregation/round/index.html).
- Considere somente os membros do elenco de filmes com o idioma inglês (`English`). 
- Exiba a lista em ordem decrescente de documentos pelo número de filmes e nome do ator ou atriz.

Sua query deve retornar `47055` documentos. Cada documento no resultado deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "_id" : "John Wayne", "numeroFilmes" : 107, "mediaIMDB" : 6.4 }
```

### Desafio 8

Trocando de contexto, vamos utilizar nossa outra coleção que contém dados de empresas aéreas, suas rotas, seus voos e parcerias.

#### Liste todas as parcerias da coleção `air_alliances`, que voam rotas com um Boing 747 ou um Airbus A380 , para descobrir qual delas tem o maior número de rotas com esses aviões.

No campo `airplane`, na coleção `air_routes`: 
- Boing 747 está abreviado para `747`
- Airbus A380 está abreviado para `380`

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "_id" : <nome_da_alianca>, "totalRotas" : <total_de_rotas> }
```

### Desafio 9

#### A partir da coleção `trips`, determine o menor e o maior ano de nascimento. 

- Guarde essa informação, você precisará dela mais tarde.

- Não considere documentos com valores vazios (`""`) e em que o campo não existe!

- Para este desafio utilize o operador [`$toInt`](https://docs.mongodb.com/manual/reference/operator/aggregation/toInt/index.html) para converter de string para valor inteiro.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "maiorAnoNascimento" : <ano>, "menorAnoNascimento" : <ano> }
```

### Desafio 10

#### Encontre a duração média de viagens por tipo de usuário. 

- Exiba o valor em horas com apenas duas casas decimais 
- Exiba a média de viagens ordenada de forma crescente. 

Para arredondar a média use o [`$round`](https://docs.mongodb.com/manual/reference/operator/aggregation/round/index.html).

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "tipo" : <tipo>, "duracaoMedia" : <duracaoMedia> }
// ...
```

### Desafio 11

#### Determine qual o dia da semana com maior número de viagens iniciadas.

**Dica:** Utilize o operador [`$dayOfWeek`](https://docs.mongodb.com/manual/reference/operator/aggregation/dayOfWeek/index.html) para extrair o dia da semana como um número de uma data.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "diaDaSemana" : <dia_da_semana>, "total" : <total_de_viagens> }
```

### Desafio 12

#### Usando a pipeline anterior que retorna o dia com mais viagens, determine qual estação tem o maior número de viagens nesse dia da semana.

- Exiba apenas o nome da estação e o total de viagens.

**Dica:** Utilize o operador [`$dayOfWeek`](https://docs.mongodb.com/manual/reference/operator/aggregation/dayOfWeek/index.html) para extrair o dia da semana como um número de uma data.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "nomeEstacao" : <nome_da_estacao>, "total" : <total_de_viagens> }
```

### Desafio 13

#### Determine a duração média das viagens iniciadas no dia `10/03/2016`, em minutos.

- Arredonde o resultado para cima.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "duracaoMediaEmMinutos" : <duracao_media_em_minutos> }
```

### Desafio 14

#### Baseado na duração média das viagens, determine quais são as `5` bicicletas que foram mais utilizadas. 

- Exiba o resultado em minutos arredondados para cima e em ordem decrescente.

O resultado da sua query deve ter exatamente o seguinte formato (incluindo a ordem dos campos):

```javascript
{ "bikeId" : <bike_id>, "duracaoMedia" : <duracao_media> }
{ "bikeId" : <bike_id>, "duracaoMedia" : <duracao_media> }
{ "bikeId" : <bike_id>, "duracaoMedia" : <duracao_media> }
{ "bikeId" : <bike_id>, "duracaoMedia" : <duracao_media> }
{ "bikeId" : <bike_id>, "duracaoMedia" : <duracao_media> }
```

---