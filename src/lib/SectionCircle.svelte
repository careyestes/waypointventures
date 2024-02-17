<script>
  export let imageURL
  export let alt
  export let title
  export let description
</script>

<section class="medium circle-section">
	<div class="circle-container">
		<div class="content">
			<img src={imageURL} alt={alt} class="image"/>
			<h3 class="heading-4">{title}</h3>
			<p>{description}</p>
		</div>
	</div>
</section>

<style>
  .circle-section {
    max-width: 60rem;
    margin: 0 auto;
    padding: 4rem;
  }
  .circle-container {
    position: relative;
    width: 100%;
    padding-top: 100%;
    border-radius: 50%;
    background: url('../assets/build-2.jpg') no-repeat center center;
    background-size: cover;
    overflow: hidden;
    border: solid 5px var(--brass);
  }
  .circle-container:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background: var(--royal);
    mix-blend-mode: multiply;
  }
  .content {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 60%;
    transform: translate(-50%, -55%);
    color: var(--paper);
  }
  .image {
    width: 60%;
  }

  @media screen and (max-width: 1200px) {
    .circle-section {
      padding: 4rem 0 0;
    }
    .circle-container {
      border: 0;
      border-radius: 0;
    }
    .content {
      width: 80%;
    }
    .image {
      width: 40%;
    }
  }
</style>