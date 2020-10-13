# KeyHero

## Aprender Context API  y Hooks creando un juego
Vamos a crear un juego clon de Guitar Hero, para ello
vamos a usar como base create-react-app por facilidad al
tener un bundle ya construido, y vamos a aplicar las bases
del context API para el manejo de estádos, algo vital en cualquier
videojuego, así mismo, vamos a implementar los hooks mas comunes, siguiendo
una forma moderna en el desarrollo de aplicaciones con React.

var mutationObserver = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		if (mutation.target === containerRef.current) {
			console.log(mutation);
		}
	});
});

mutationObserver.observe(document.documentElement, {
	attributes: true,
	characterData: true,
	childList: true,
	subtree: true,
	attributeOldValue: true,
	characterDataOldValue: true
});