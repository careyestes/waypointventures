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
	$: focusSectionTextHTML = data && data.focusSectionText ? documentToHtmlString(data.focusSectionText.json) : '';
	$: experienceSectionTextHTML = data && data.experienceSectionText ? documentToHtmlString(data.experienceSectionText.json) : '';
	$: innovateSectionTextHTML = data && data.innovateSectionText ? documentToHtmlString(data.innovateSectionText.json) : '';
	$: advisorsTextHTML = data && data.advisors ? documentToHtmlString(data.advisors.json) : '';

	let sortedFAQ = [];
	let sortedLeadership = [];
	let isOpen = false;
	let expandedIndex = null;

	onMount(() => {
    sortedFAQ = data.faqs.sort((a, b) => a.order - b.order);
    sortedLeadership = data.leadership.sort((a, b) => a.order - b.order);
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
	<img src={compass} class="compass-illustration" alt="A compass with directional lines eminating from it." />
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
	{@html focusSectionTextHTML}
</section>

<SectionDivider title="Proven adaptability to complex and dynamic challenges." />

<section class="small">
	{@html experienceSectionTextHTML}
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
{/if}

{#if sortedLeadership.length > 0}
	<section class="large">
		<SectionTitle title="Leadership" />
	</section>
	<br />
	<section class="medium">
		<div class="flex direcion-column gap-4">

			{#each sortedLeadership as leader}
				<ImageAndDescription small={true} imageURL={leader.image?.url} alt="" heading={leader.name} title={leader.title} description={documentToHtmlString(leader.bio?.json)} />
			{/each}
		
			<div>
				{@html advisorsTextHTML}
			</div>

		</div>
	</section>
{/if}


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
		max-width: 80rem;
		margin: 0 auto;
		padding: 2rem 4rem 4rem;
		background: var(--paper);
		transform: translateY(-8rem);
		border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to bottom, var(--navy), rgba(3, 19, 36, 0)) 1 100%;
		border-radius: 6rem 6rem 0 0;
	}
	.first-section h2 {
		margin: 0 0 1rem;
		font-size: var(--fluid-6);
		line-height: calc(var(--fluid-6) * 1.1);
	}

	.compass-container {
		transform: translateY(-8rem);
	}
	.compass-container .compass-illustration {
		margin: 0 0 2rem;
	}
	@media screen and (max-width: 1200px) {
		.first-section {
			padding: 2rem 2rem 4rem;
			border-radius: 3rem 3rem 0 0;
		}
		.first-section h2 {
			font-size: var(--fluid-5);
			line-height: calc(var(--fluid-6) / 1.2);
		}
		.small {
			padding: 0 2rem;
		}
		.medium {
			padding: 0 2rem;
		}
	}

	.faq-section {
		margin: 4rem auto 0;
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
