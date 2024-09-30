 npx create-react-app meu-site --template typescript
 Serve para criar um projeto usando o typescript(javascript com tipos)
## Estrutura
 - Node_modules bibliotecas para rodar no seu pc
 - public, tudo que o usuario consegue acessar direto, tipo html
 - src codigo que colocamos
	 - Aqui dentro o react cria muito lixo , no fim só deixamos:
		 - app.css, app.tsx, index.css, index.tsx e o react app env
 - package lock.json fala as versoes das bibliotecas e tudo mais
 - package.json tem todas as informações importantes para o site, passamos ela para outro pc caso queiramos rodar em outro pc, rodando npm install
## trabalhando na linguagem
![[Pasted image 20240916165512.png]]
Aqui podemos ver funções. em react podemso retornar html, UAU, ali tambem da pra ver uma variavel sendo usada (para substituir, precisa de {}) e uma função sendo chamada tambem.
Também temos uma funçaõ sendo uusada dentro de outra função, que pode ser tanto com {} quanto com </>
Outra coisa, o export default ali embaixo, serve para passear para outros programas a função que vc criou
Importante, o react so pode retornar um elemento, podendo ser dentro de uma div se quiser ou só <> </> 