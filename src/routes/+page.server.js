import { error } from '@sveltejs/kit'
import contentfulFetch from '$lib/contentful-fetch'

const introQuery = `
{
	sectionsCollection(where: {sectionTitle: "Introduction"}) {
    items{
      sectionText {
        json
      }
    }
  }
}
`

const beliefQuery = `
{
  sectionsCollection(where: {sectionTitle: "Our Belief"}) {
    items{
      sectionTitle,
      sectionHeader,
      sectionText {
        json
      }
    }
  }
}
`
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
  innovationDivider: dividersCollection(where: {title: "Innovation"}) {
    items {
      dividerText 
    }
  }
  leadership: leadershipCollection {
    items {
      name,
      image {
        url
      },
      bio {
        json
      } 
    }
  }
  advisors: sectionsCollection(where: {sectionTitle: "Advisors"}) {
    items {
      sectionText {
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
  const innovationDividersItems = data.innovationDivider.items[0];
  const leadershipItems = data.leadership.items;
  const advisorsItems = data.advisors.items[0];
  
  return {
    beliefSectionTitle: beliefSectionItems.sectionTitle,
    beliefSectionHeader: beliefSectionItems.sectionHeader,
    beliefSectionText: beliefSectionItems.sectionText,
    introSectionText: introSectionItems.sectionText,
    innovateSectionHeader: innovationSectionItems.sectionHeader,
    innovateSectionText: innovationSectionItems.sectionText,
    innovationDivider: innovationDividersItems.dividerText,
    leadership: leadershipItems,
    advisors: advisorsItems.sectionText,
  };
}
