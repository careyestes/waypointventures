<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
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
	export let data;

	$: beliefSectionTextHTML = data && data.beliefSectionText ? documentToHtmlString(data.beliefSectionText.json) : '';
	$: introSectionTextHTML = data && data.introSectionText ? documentToHtmlString(data.introSectionText.json) : '';
	$: innovateSectionTextHTML = data && data.innovateSectionText ? documentToHtmlString(data.innovateSectionText.json) : '';
	$: advisorsTextHTML = data && data.advisors ? documentToHtmlString(data.advisors.json) : '';

	let sortedFAQ = [];
	let isOpen = false;
	let expandedIndex = null;

	onMount(() => {
    sortedFAQ = data.faqs.sort((a, b) => a.order - b.order);
  });

	const dispatch = createEventDispatcher();

	function toggleAccordion(index) {
			isOpen = !isOpen;
			expandedIndex = expandedIndex === index ? null : index;

			dispatch('toggle', { isOpen });
	}

</script>

<Hero />

<section class="medium first-section">
	<h2 class="heading-1">Charting the Course to Innovation</h2>
</section>


<section class="small compass-container">
	<img src={compass} alt="A compass with directional lines eminating from it." />
	{@html introSectionTextHTML}
</section>

<Tiles />

<section class="large">
	<SectionTitle title={data.beliefSectionTitle} />
</section>
<br />
<section class="small">
	<ImageAndDescription imageURL="" alt="" heading={data.beliefSectionHeader} description={beliefSectionTextHTML} />
</section>

<SectionDivider title={data.innovationDivider} />

<section class="small">
	<h4 class="heading-4">{data.innovateSectionHeader}</h4>
	
	{@html innovateSectionTextHTML}

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

{#if sortedFAQ.length > 0}
	 <section class="small faq-section">
		<h3 class="heading-4">Frequently Asked Questions</h3>
		{#each sortedFAQ as faq, index}
			<div class="faq-container">
				<button
					class="question"
					on:click={() => toggleAccordion(index)} 
					aria-expanded={expandedIndex === index} 
					aria-controls={`content-${index}`}
				>
					<span class="text">{faq.question}</span>
					<span class="icon" aria-label={expandedIndex === index ? 'Collapse Icon' : 'Expand Icon'}>
						{expandedIndex === index ? ' – ' : '+'}
					</span>
				</button>
				{#if expandedIndex === index} 
					<div 
						class="answer {expandedIndex === index ? 'expanded' : 'collapsed'}"
						id={`content-${index}`}
						role="region"
						aria-labelledby={`content-${index}`}
						transition:slide
					>
						{@html documentToHtmlString(faq.answer?.json)}
					</div>
				{/if}
			</div>
		{/each}
		 
	 </section>
{/if}}

<section class="large">
	<SectionTitle title="Leadership" />
</section>
<br />
<section class="small">
	<div class="flex direcion-column gap-4">

		{#each data.leadership as leader}
			<ImageAndDescription small={true} imageURL={leader.image?.url} alt="" heading={leader.name} description={documentToHtmlString(leader.bio?.json)} />
		{/each}
	
		<div>
			<h3 class="heading-4" align="center">Advisors</h3>
			{@html advisorsTextHTML}
		</div>

	</div>
</section>


<style>
	
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

	.faq-section {
		margin: 4rem auto;
		padding: 1rem 0;
	}
	.faq-container {
		border-bottom: 1px solid var(--light-gold);
	}

	.faq-section .question {
		display: flex;
		width: 100%;
		padding: 1.4rem 1rem;
		background: transparent;
		border: 0;
		font-weight: 800;
		text-align: left;
		cursor: pointer;
	}
	.faq-section .question .text {
		flex: 1 1 auto;
	}
	.faq-section .question .icon {
		flex: 0 0 auto;
		font-size: var(--fluid-2);
		color: var(--royal);
	}
	.faq-section .answer {
		padding: 0 1rem 1.5rem;
	}

</style>
