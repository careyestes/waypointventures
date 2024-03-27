import { error } from '@sveltejs/kit'
import contentfulFetch from '$lib/contentful-fetch'

const combinedQuery = `
{
  introSection: sectionsCollection(where: {sectionTitle: "Introduction"}) {
    items {
      sectionText {
        json
      }
    }
  }
  beliefSection: sectionsCollection(where: {sectionTitle: "Our Belief"}) {
    items {
      sectionTitle,
      sectionHeader,
      sectionText {
        json
      }
    }
  }
  innovationSection: sectionsCollection(where: {sectionTitle: "Innovation"}) {
    items {
      sectionHeader,
      sectionText {
        json
      }
    }
  }
  focusSection: sectionsCollection(where: {sectionTitle: "Our Focus"}) {
    items {
      sectionHeader,
      sectionText {
        json
      }
    }
  }
  experienceSection: sectionsCollection(where: {sectionTitle: "Experience"}) {
    items {
      sectionHeader,
      sectionText {
        json
      }
    }
  }
  innovationDivider: dividersCollection(where: {title: "Innovation"}) {
    items {
      dividerText 
    }
  }
  leadership: leadershipCollection {
    items {
      name,
      title,
      image {
        url
      },
      bio {
        json
      },
      order 
    }
  }
  advisors: sectionsCollection(where: {sectionTitle: "Advisors"}) {
    items {
      sectionText {
        json
      }
    }
  }
  faq: faqCollection {
    items {
      question,
      order,
      answer {
        json
      } 
    }
  }
}
`

export async function load() {
  const response = await contentfulFetch(combinedQuery)
  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    })
  }
  const { data } = await response.json();
  
  const beliefSectionItems = data.beliefSection.items[0];
  const introSectionItems = data.introSection.items[0];
  const innovationSectionItems = data.innovationSection.items[0];
  const focusSectionItems = data.focusSection.items[0];
  const experienceSectionItems = data.experienceSection.items[0];
  const innovationDividersItems = data.innovationDivider.items[0];
  const leadershipItems = data.leadership.items;
  const advisorsItems = data.advisors.items[0];
  const faqItems = data.faq.items;
  
  return {
    beliefSectionTitle: beliefSectionItems.sectionTitle,
    beliefSectionHeader: beliefSectionItems.sectionHeader,
    beliefSectionText: beliefSectionItems.sectionText,
    introSectionText: introSectionItems.sectionText,
    innovateSectionHeader: innovationSectionItems.sectionHeader,
    focusSectionText: focusSectionItems.sectionText,
    experienceSectionText: experienceSectionItems.sectionText,
    innovateSectionText: innovationSectionItems.sectionText,
    innovationDivider: innovationDividersItems.dividerText,
    leadership: leadershipItems,
    faqs: faqItems,
    advisors: advisorsItems.sectionText,
  };
}
