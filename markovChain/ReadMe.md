## Markov Generator Play Ground

Using _Robin Hood_ and _The Night Land_ from **[Project Gutenberg](http://www.gutenberg.org/)** I have created a very basic implementation.

Valid URLs are:
  `?corpi=night`
  `?corpi=robin,night`
  `?corpi=<default>` (defaults to robin)

### How it works

#### Generate Title
- Creates fragment by walking the chain, grabbing 3-7 words
  - Removes periods, commas, semi-colons
  - Shave curated list of undesireable words off beginning and end

>  TODO: extend titling
>    10% include an "Author's or Editor's" note (just another generated sentence)
>    20% add a title modifier
>      "<n>th edition"
>      ": Unabridged"
>      "Vol: <VII>"
>      etc

#### Generate Sentence
- Choose n-gram word at random
  - Walk chain until you hit a period
    - Place limit at 45-55 words.

#### Generate Paragraph
- Generate 3-8 Sentences

#### Generate Book
- Generate 8-31 paragraphs
  - 5% generate a 'tome' (8-10x as long as normal book)
