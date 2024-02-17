<script>
  export let imageURL;
  export let alt;
  export let heading;
  export let description;
  export let small = false;
</script>

<div class="flex align-center container">
  <div class="flexed-item image">
    <img src={imageURL} alt={alt}>
  </div>
  <div class="flexed-item">
    <h3 class="heading-4">{heading}</h3>
    {#if small}
      <p><small>{description}</small></p>
    {:else}
      <p>{description}</p>
    {/if}
  </div>
</div>

<style>
  h3 {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 1200px) {
    .container {
      flex-direction: column;
      gap: 2rem;
    }
  }
</style>