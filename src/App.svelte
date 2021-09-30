<script>
	export let name;

	import Menu from './Menu/Navbar.svelte'
	import Projects from './Projects/Projects.svelte'
</script>

<Menu></Menu>
<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Scum.</p>
</main>
<Projects></Projects>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>