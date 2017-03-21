# Recuperar todos os números do objeto

Tive uma situação em que precisei recuperar todos os valores de um objetos,
mas esse objeto tinha vários níveis.

O que fiz então foi, criar uma recursividade, verificando cada nó do objeto, 
se o nó fosse o tipo Object, como quase tudo no JS é, a função é novamente chamada entrando
em um loop até que todos os nós fossem processados e seus valores armazenados.

O reduce permite um valor inicial, então usando o concat e o valor inicial como um array vazio
foi possível armazenar e retiornar todos os valores do objeto.

Acho que pode ser útil.