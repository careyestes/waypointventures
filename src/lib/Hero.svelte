<script>
	import Logo from '../lib/Logo.svelte';
</script>

<header>
	<h1>
		<Logo size="large" />
	</h1>
	<h2 class="heading-3">Guiding Startups to Success.</h2>
</header>

<style>
	@keyframes pan-background {
		0% {
			background-position: 0% 0%;
		}
		33% {
			background-position: 90% 15%;
		}
		66% {
			background-position: 100% 0%;
		}
		100% {
			background-position: 0% 0%;
		}
	}

	header {
		display: flex;
		align-items: center;
		height: 60vh;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 10%, transparent 50%, rgba(0, 0, 0, 0.6) 90%), url('../assets/cyano-map.png');
		background-size: 125%;
		backdrop-filter: brightness(50%);
		color: var(--paper);
		animation: pan-background 200s infinite ease; /* Adjust the time as necessary */
	}
	h1, h2 {
		display: flex;
		justify-content: center;
		flex: 1 1 50%;
	}
	h1 {
		padding: 10rem 10rem;
		text-align: center;
	}
	h2 {
		margin: 0;
		color: var(--paper);
		font-family: var(--base-font);
		text-align: center;
		-webkit-text-stroke: 0.5px var(--brass);
		text-shadow: 0 0 30px var(--navy);
		transform: translateY(-1.6rem);
	}

	/* Small Viewports */
	@media screen and (max-width: 1200px) {
		header {
			flex-direction: column;
			gap: 2rem;
			justify-content: space-between;
			align-items: center;
			height: 90vh;
			background-size: cover;
		}
		h1 {
			align-items: flex-end;
			padding: 0;
		}
		h2 {
			align-items: flex-start;
		}
	}
	
</style>
