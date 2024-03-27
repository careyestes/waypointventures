<script>
  export let title;
</script>

<h2 id={title} class="heading-1 section-header-divider">{title}</h2>

<style>
  
  .section-header-divider {
    position: relative;
    margin-top: 6rem;
    padding: 6rem 0 0 10%;
  }
  .section-header-divider::before {
    content: '';
    position: absolute;
    top: 8.1rem;
    left: 0;
    right: 0;
    height: 10px; /* This sets the thickness of the lines. Adjust as needed */
    border-top: 4px double var(--light-gold);
    z-index: -1;
    transform: translateY(3px);
  }
</style>