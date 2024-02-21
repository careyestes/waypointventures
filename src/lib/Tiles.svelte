<script>
  import anchor from '../assets/anchor.png'
	import lighthouse from '../assets/lighthouse.png'
	import shipBuilding from '../assets/ship-building.png'
</script>


<section class="large graphic-tile-container">
	<ul>
		<li>
			<img src={anchor} alt="An illustration of an anchor overlaid with two crossing swords" />
			<p>Lead</p>
		</li>
		<li>
			<img src={lighthouse} alt="An illustration of an lighthouse." />
			<p>Innovate</p>
		</li>
		<li>
			<img src={shipBuilding} alt="An illustration of a ship being built in the water." />
			<p>Build</p>
		</li>
	</ul>
</section>

<style>
  
  .medium {
    max-width: 70rem;
    margin: 0 auto;
  }

  .graphic-tile-container ul {
    display: flex;
    justify-content: space-between;
    max-width: 100rem;
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }
  .graphic-tile-container ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex: 1 1 33%;
    gap: 1rem;
  }
  .graphic-tile-container ul li img {
    max-width: 180px;
  }
  .graphic-tile-container ul li p {
    color: var(--blue);
    font-family: var(--header-font);
    font-size: var(--fluid-3);
    font-weight: 900;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1200px) {
    .graphic-tile-container ul {
      flex-direction: column;
      gap: 4rem;
    }
  }
</style>