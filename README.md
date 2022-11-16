# Projeto #07 - Instagram [React]

# Requisitos

- Geral
    - [ ]  Você deve criar seu projeto usando o comando que demos do `create-react-app`
        
        ```bash
        create-react-app nome-do-projeto --template @bootcamp-ra/cra-template-semana1
        ```
        
    - [ ]  Por padrão, o `create-react-app` já inicializa o Git dentro da pasta do projeto (é como se você tivesse rodado `git init` lá). Em seguida, crie o projeto também no GitHub e conecte seu projeto local ao GitHub (a entrega será por lá)
- Layout
    - [ ]  O layout é quase o mesmo do Instagram que vocês fizeram no início do curso! A única diferença é o ícone de lápis após o nome da pessoa dona do perfil, como visto abaixo:
    - [ ]  Você pode utilizar o seu próprio código do Instagram para iniciar o projeto ou utilizar o que nós fornecemos no fim desse enunciado 😃
    
- CSS e Imagens
    - [ ]  Arquivos CSS podem ser colocados na pasta `public` e linkados diretamente no `index.html` da pasta `public`
    - [ ]  Você também deve criar, dentro da `public`, uma pasta `assets` para colocar as images
- Componentes
    - [ ]  A página deve ser componentizada em **arquivos diferentes**, utilizando import/export
        - Lista dos componentes que deverão ser feitos
            - App
            - Corpo
            - SideBar
            - NavBar
            - Usuario
            - Stories (onde cada item será um componente diferente, o Story)
            - Posts (onde cada item será um componente diferente, o Post)
            - Sugestoes (onde cada item será um componente diferente, o Sugestao)
            - Se não entender o que é cada componente, clique aqui 🙂
                
                ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/145d7991-20e6-47a2-ac0f-1775ef9ec439/Untitled.png)
                
    - [ ]  Todos os itens repetitivos do projeto devem ser representados como Arrays/Objetos nos componentes e renderizados no JSX usando `map`. No projeto, esses itens são:
        - Os stories (deve ter pelo menos 2 stories)
        - Os posts (deve ter pelo menos 2 posts)
        - As sugestões de seguidores (deve ter pelo menos 2 sugestões)
        - O usuário acima das sugestões (este não é um array, mas os dados devem vir de props)
        - Exemplo
            - Em vez de:
                
                ```jsx
                export default function Lista() {
                	return (
                		<ul>
                			<li>Item 1</li>
                			<li>Item 2</li>
                			<li>Item 3</li>
                		</ul>
                	);
                }
                ```
                
            - Você deve seguir a abordagem de:
                
                ```jsx
                export default function Lista() {
                	const itens = ["Item 1", "Item 2", "Item 3"]
                
                	return (
                		<ul>
                			{itens.map((item) => <li>{item}</li>)}
                		</ul>
                	)
                }
                ```
                
- Dados Dinâmicos
    - [ ]  O projeto também deverá ter alguns dados dinâmicos que irão mudar na tela. São eles:
        - [ ]  Nome de usuário (ao apertar o lápis, aparece um prompt para alterá-lo)
            - O texto que deve ser mudado é apenas o que aparece ao lado do lápis!
                
                ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77fd39f4-e620-4a58-864f-bb90d21d26ea/Untitled.png)
                
        - [ ]  Imagem de perfil (ao clicar uma vez na imagem, aparece um prompt pedindo novo link)
        - [ ]  Salvar o post (ao clicar no ícone de salvar o post, ele deverá ficar preenchido)
        - [ ]  Like no post
            - Ao clicar no ícone do like o usuário poderá curtir a postagem, caso a postagem já esteja curtida ao clicar no ícone a postagem não deve ficar curtida.
            - Ao clicar na imagem de um post do feed, o usuário poderá curtir a postagem, ou seja, o botão do like deverá ficar preenchido em vermelho
                - OBS: assim como no Instagram real, clicar na imagem **NÃO** retira likes, apenas adiciona caso já não tenha
            - O número de likes deverá aumentar quando a pessoa der um like e diminuir quando retirá-lo.
    
# Bônus

- Like com double click na imagem
    - [ ]  Para dar like clicando na imagem, é necessário clicar duas vezes seguidas, rapidamente.
        - Clicar duas vezes com um intervalo de tempo grande NÃO CONFIGURA double click.
- Animação de coração no double click
    - [ ]  Quando ocorrer o double click na imagem, deverá surgir no centro da imagem um coração, que primeiro cresce e depois desaparece, como na imagem abaixo:
        
        ![heart.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/90738755-1549-45e0-97a3-045251c75e31/heart.gif)
        
    - [ ]  Parâmetros da animação:
        - Escala inicial: 0.2
        - Escala final: 1
        - Tempo da animação: 0.3s
        - Cor do coração: white
        - Após 0.5s, o coração some da tela