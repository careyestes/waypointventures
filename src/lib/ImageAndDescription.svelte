<script>
  export let imageURL;
  export let alt;
  export let heading;
  export let title;
  export let description;
  export let small = false;
</script>

<div class="flex align-start container">
  {#if imageURL}
    <div class="flexed-item image">
      <img src={imageURL} alt={alt}>
    </div>
  {/if}
  <div class="flexed-item">
    <h3 class="heading-4">{heading}</h3>
    {#if title}
      <h4>{title}</h4>
    {/if}
    {#if small}
      <small>{@html description}</small>
    {:else}
      {@html description}
    {/if}
  </div>
</div>

<style>
  h4 {
    font-size: var(--fluid-0);
    font-style: italic;
  }
  .image {
    display: flex;
    align-items: center;
    flex: 0 0 20rem;
    width: 20rem;
    height: 20rem;
    margin-right: 4rem;
    border: 5px solid var(--brass);
    border-radius: 50%;
    overflow: hidden;  }
  @media screen and (max-width: 1200px) {
    .image {
      flex: 0 0 20rem;
      width: 20rem;
      height: 20rem;
      margin: 0;
    }
    .container {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }
</style>