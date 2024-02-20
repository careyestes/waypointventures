<script>
	import Hero from '../lib/Hero.svelte';
	import Tiles from '../lib/Tiles.svelte';
	import SectionTitle from '../lib/SectionTitle.svelte';
	import ImageAndDescription from '../lib/ImageAndDescription.svelte';
	import SectionDivider from '../lib/SectionDivider.svelte';
	import SectionCircle from '../lib/SectionCircle.svelte';

	import compass from '../assets/compass.png'
	import leader from '../assets/leader-1.jpg'
	import navCompass from '../assets/nav-compass.png'
	import telescope from '../assets/telescope.png'
	// export let data;
</script>

<Hero />

<section class="medium first-section">
	<h2 class="heading-1">Charting the Course to Innovation</h2>
</section>

<section class="small compass-container">
	<img src={compass} alt="A compass with directional lines eminating from it." />
	<p>In the start-up economy, the final destination is largely unknown but intermediary steps are often very clear.  At Waypoint Ventures, we act as an intermediary step, a waypoint, for start-up companies, providing capital and strategic guidance to ensure they are on the proper path to their final destination.  We endeavor to see each company we touch flourish to their final destination and are humbled to be a point along their path to success.</p>
</section>

<Tiles />

<section class="large">
	<SectionTitle title="Our Belief" />
	<ImageAndDescription imageURL={leader} alt="A woman syanding in fron of a whiteboard" heading="In the dynamic landscape of startups, where uncertainty and rapid change are the norm, effective leadership emerges as the cornerstone for success." description="Leadership matters most in a startup environment due to its pivotal role in fostering innovation, navigating ambiguity, and building a cohesive team. At the heart of every successful startup is a leader with a compelling vision. A startup leader must not only articulate a clear and inspiring vision but also possess the ability to communicate it effectively to the team. This vision serves as a guiding light, aligning the efforts of individuals towards a common goal. In the absence of strong leadership, the lack of direction can lead to confusion and inefficiency." />
</section>

<SectionDivider title="Innovation is the lifeblood of startups." />

<section class="small">
	<h4 class="heading-4">Innovation and strong leadership encourages a culture of creativity and risk-taking.</h4>
	
	<p>The leader sets the tone for experimentation and ensures that failures are viewed as valuable learning experiences rather than setbacks. This resilience and openness to innovation are critical for startups to adapt to changing market conditions and stay ahead of the curve.</p>

	<p>Navigating ambiguity is an inherent part of the startup journey. Leaders must make crucial decisions with limited information, and their ability to make sound judgments becomes a linchpin. A skilled leader remains adaptable, embraces uncertainty, and provides a steady hand to guide the team through turbulent times.</p>

</section>

<SectionCircle imageURL={navCompass} alt="Navigation Compass" title="Building a cohesive team is essential for a startup's success." description="A leader must be adept at assembling a diverse group of individuals, fostering collaboration, and nurturing a positive work culture. Team cohesion is the bedrock upon which a startup can weather challenges, celebrate successes, and sustain long-term growth." />

<section class="large">
	<SectionTitle title="Our Focus" />
</section>

<section class="small">
	<img src={telescope} alt="An illustration of a telescope looking up at the stars with a ship in the background." />
	<p>At Waypoint, we also believe US Service academy graduates possess a unique set of qualities that make them exceptionally well-suited for the role of startup executives. The rigorous training and discipline instilled in these individuals during their time at service academies translate into strong leadership skills, resilience, and a commitment to excellence.</p>
</section>

<SectionDivider title="Proven adaptability to complex and dynamic challenges." />

<section class="small">
	<p>Their experience in collaborative team settings, combined with a results-oriented mindset, fosters effective communication and problem-solving, essential attributes for leading a startup. The strong ethical foundation instilled during their service academy education aligns with the increasing demand for socially responsible and ethical business practices.</p>
	
	<p>Startups led by service academy graduates are likely to prioritize integrity, accountability, and a culture of responsibility, enhancing long-term sustainability. By investing in these graduates, we intend to tap into a pool of leaders known for adaptability, resilience, and a results-oriented mindset, contributing to the success and ethical standing of the businesses they lead.</p>
	
	<p>Leadership is paramount in the success of a business especially early-stage companies. It shapes the vision, encourages innovation, navigates uncertainty, and builds a resilient and cohesive team. As such, we are raising our initial fund, Waypoint 1, to back the strong leaders produced at our nation's service academies. </p>
</section>

<section class="large">
	<SectionTitle title="Leadership" />
	<div class="flex direcion-column gap-4">
		
		<ImageAndDescription small={true} imageURL="" alt="" heading="Jeff Chapman" description='Jeff Chapman is a renowned CEO, entrepreneur, and philanthropist with accolades such as a Global Fellow at the Wilson Center and being named one of Goldman Sachs "100 Most Intriguing Entrepreneurs." His journey is marked by substantial entrepreneurial achievements, including founding and leading Babel Street to notable growth and a successful acquisition. With a rich background spanning executive roles at the United States Department of the Treasury, Acxiom Corporation, and IBM, Jeff&apos;s extensive education from the United States Naval Academy, Harvard University, and the University of Virginia complements his practical leadership experience, cementing his reputation for making a significant impact in both technology and philanthropy.' />
	
		<ImageAndDescription small={true} imageURL="" alt="" heading="Jeff Walker" description='Most recently, Jeff bought, operated and sold multiple retail, restaurant and real estate ventures. Prior to entrepreneurship, he worked for almost a decade in investment banking and corporate finance after transitioning from the U.S. Navy as a Surface Warfare Officer.  Jeff is an alumnus of USNA and also holds an MBA in Finance from Old Dominion University.' />
		
		<ImageAndDescription small={true} imageURL="" alt="" heading="Billy Hurley" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mi mauris, viverra at lorem a, volutpat vestibulum urna. Vivamus sit amet enim maximus, eleifend ligula eu, lacinia neque. Nulla at ex eu diam sodales luctus. Phasellus posuere tortor mauris, et lacinia dolor luctus in. Ut sem nulla, eleifend sed risus nec, egestas tincidunt urna. Sed fringilla, enim ut imperdiet scelerisque, dui odio maximus enim, eu consectetur metus elit id lacus. Donec at tortor sed tortor cursus tempus. Morbi sit amet tincidunt mi. Curabitur rhoncus, massa vitae hendrerit ornare, nibh lorem fermentum urna, hendrerit rhoncus ligula ipsum sed nisl. Nullam iaculis commodo pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer a accumsan ipsum, feugiat ultrices quam. Sed a volutpat massa. Morbi condimentum sem non fringilla mollis.' />
		
		<div>
			<h3 class="heading-4" align="center">Advisors</h3>
			<p>Mason Jones, Noah Smith, Ethan Taylor, Aiden Johnson, Emma Jones, Mason Johnson, Olivia Jones, Mia Miller, Ava Jones, Ava Taylor</p>
		</div>

	</div>
</section>


<style>
	section {
		margin: 0 auto;
	}
	section p {
		padding: 1rem 0;
	}
	
	.small {
		max-width: 43.75rem;
	}

	.medium {
    max-width: 70rem;
    margin: 0 auto;
  }
	
	.large {
		width: 90%;
		max-width: 80rem;
	}
	.first-section {
		max-width: 55rem;
		margin: 0 auto;
	transform: translateY(-5.5rem);
	}
	.first-section h2 {
		margin: 0 0 1rem;
		font-size: var(--fluid-5);
		line-height: calc(var(--fluid-6) / 1.2);
	}
	
	.compass-container {
		transform: translateY(-4rem);
	}
	@media screen and (max-width: 1200px) {
		.first-section {
			margin: 0 auto;
			padding: 0 2rem;
			transform: translateY(0);
		}
		.first-section h2 {
			line-height: var(--fluid-5)
		}
		.small {
			padding: 0 2rem;
		}
		.compass-container {
			transform: translateY(0);
		}
	}

</style>
