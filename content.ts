export const home = {
  draft: {
    hero: {
      title: 'Hmm, need something clever here',
      body: 'blah blah blah, our product is the best!',
    },
    features: [
      { title: 'Feature 1', body: 'something dope about feature 1 here soon.' },
      { title: 'Feature 2', body: 'something dope about feature 2 here soon.' },
    ],
  },
  published: {
    hero: {
      title: 'A beautiful knowledge base for your whole team.',
      body: 'High performing teams use Known to document and record everything. Some other cool SaaS tag line here.',
    },
    features: [
      {
        title: 'Next gen editor',
        body: 'Forget about markdown and rich text. Our editor is superchared to handle any content you can throug at it.',
      },
      { title: 'Stay organized', body: 'Use folders to put your docs right where you need them when you need them.' },
      { title: 'Beautiful design', body: 'Award wining design that you will fall in love with.' },
    ],
  },
}

export const posts = {
  draft: [
    `---
title: "We're hiring"
summary: 'Will come up with summary later'
slug: 'we-are-hiring'
publishedOn: ''
---

## nice post, who dis
`,
    `---
title: Why you should write down everything
summary: Will come up with summary later
slug: why-you-should-write-down-everything
publishedOn: ''
---
## Writing is fun`,
  ],
  published: [
    `---
title: "We're hiring"
summary: Come work at a really nice company.
slug: we-are-hiring
publishedOn: '12-03-2020'
---
## Come work with us
`,
    `---
title: Why you should write down everything
summary: If you write it down, you won't forget.
slug: why-you-should-write-down-everything
publishedOn: '3-20-2020'
---
## Elon musk writes`,
  ],
}
