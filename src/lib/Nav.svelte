<script>
  import { onMount, onDestroy } from 'svelte';
	import { Hamburger } from 'svelte-hamburgers';
  import Logo from '../lib/Logo.svelte';

  let isScrolledTo55VH = false;
	let open;

  function handleScroll() {
    const scrollThreshold = window.innerHeight * 0.55;
    isScrolledTo55VH = window.scrollY > scrollThreshold;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it once in case the page is already scrolled
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll);
    }
  });


</script>

<nav class="top" class:scrolled={isScrolledTo55VH} class:open={open}>
  <Hamburger type="squeeze" --color="#ece8e0" --padding="0" ariaLabel="Main navigation button" --layer-width="35px" --layer-height="2px" --layer-spacing="6px" bind:open />
  <div class="menu-container" class:open={open}>
    <!-- {#if open} -->
      <ul class="navigation-menu-items">
        <li><a href="#Our Belief" on:click={() => open = false}>Our Belief</a></li>
        <li><a href="#Our Focus" on:click={() => open = false}>Our Focus</a></li>
        <li><a href="#Leadership" on:click={() => open = false}>Leadership</a></li>
      </ul>
    <!-- {/if} -->
  </div>
  {#if isScrolledTo55VH }
    <Logo size="small" />
  {/if}
</nav>

<style>
  nav {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    transition: 0.1s;
  }

  nav.scrolled {
    top: 0;
    left: 0;
    justify-content: flex-start;
    width: 100vw;
    padding: 1rem 2rem;
    background: var(--navy);
    border: 0;
    border-radius: 0;
  }
  .menu-container {
    max-width: 1px;
    height: 2rem;
    margin: 0 0 0 2rem;
    /* border-right: 1px solid transparent; */
    overflow: hidden;
    transition: 0.1s;
  }
  .menu-container.open {
    max-width: 500rem;
  }
  nav.scrolled .menu-container {
    border-right: 1px solid var(--light-gold);
  }

  .navigation-menu-items {
    display: flex;
    max-width: 1px;
    height: 2rem;
    margin: 0;
    padding: 0;
    list-style: none;
    white-space: nowrap;
    overflow: hidden;
    transition: 1s;
  }
  .menu-container.open .navigation-menu-items {
    max-width: 50rem;
  }
  .navigation-menu-items li {
    padding-right: 2rem;
  }
  .navigation-menu-items a {
    color: var(--paper);
    text-decoration: none;
  }
  .navigation-menu-items a:visited {
    color: var(--paper);
  }

  /* Mobile */
  @media screen and (max-width: 1200px) {
    nav {
      top: 0;
      left: 0;
      flex-wrap: wrap;
      width: 100vw;
      padding: 1.2rem 2rem;
      justify-content: flex-start;
    }
    nav.open {
      background: var(--navy);
      border-bottom: 1px solid var(--light-gold);
    }
    nav .menu-container, nav.scrolled .menu-container {
      flex: 1 1 100%;
      max-height: 0rem;
      order: 2;
      width: 100%;
      height: 100%;
      max-width: none;
      margin: 0;
      border: 0;
    }
    nav .menu-container.open {
      max-height: 50rem;
    }
    .navigation-menu-items {
      flex-direction: column;
      width: 100%;
      height: 100%;
      max-width: none;
      margin: 2rem 0;
      font-size: 1.5rem;
    }
    .navigation-menu-items li {
      padding: 1.2rem 0;
    }
    nav .waypoint-logo {
      
    } 
  }
</style>