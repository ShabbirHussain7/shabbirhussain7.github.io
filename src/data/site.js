// All site content lives here. Edit this file to update the pages, the CV and the structured data together.

export const site = {
  url: 'https://shabbirhussain7.github.io',
  name: 'Shabbir Hussain',
  givenName: 'Shabbir',
  familyName: 'Hussain',
  role: 'PhD Student, Computer Science and Engineering',
  affiliation: 'University of Michigan',
  // Shown obfuscated on the page to keep scrapers away.
  emailDisplay: 'shabbirx [at] umich [dot] edu',
  photo: '/shabbir-hussain.jpg',
  photoWidth: 640,
  photoHeight: 623,
  cvPdf: '/Shabbir_Hussain_CV.pdf',
  description:
    "Shabbir Hussain is a Computer Science PhD student at the University of Michigan's Censored Planet lab, working on Internet security, privacy, and censorship measurement.",
  links: {
    github: 'https://github.com/ShabbirHussain7',
    linkedin: 'https://www.linkedin.com/in/shabbir-hussain27/',
    // Add when available — they are also picked up by the structured data:
    scholar: '',
    orcid: 'https://orcid.org/0009-0004-7186-1948',
  },
  topics: [
    'Network Security',
    'Internet Measurement',
    'Internet Censorship',
    'Censorship Circumvention',
    'Privacy',
    'Web Tracking',
    'Cloud Security',
    'Machine Learning for Security',
  ],
};

export const people = {
  roya: { name: 'Roya Ensafi', url: 'https://ensa.fi/' },
  lab: { name: 'Censored Planet', url: 'https://censoredplanet.org/' },
};

export const papers = [
  {
    slug: 'cenkl',
    title: 'CenKL: Information-Theoretic Visibility into Censorship Circumvention Traffic Patterns',
    shortTitle: 'CenKL',
    authors: [
      'Aaron Ortwein',
      'Armin Huremagic',
      'Shabbir Hussain',
      'Holly Bergen',
      'Joshua J. Daymude',
      'Diwen Xue',
      'Jedidiah R. Crandall',
      'Roya Ensafi',
    ],
    venue: 'IEEE Symposium on Security and Privacy (S&P)',
    venueShort: 'IEEE S&P',
    year: 2027,
    pdf: 'https://censoredplanet.org/papers/cenkl.pdf',
    links: [
      { label: 'PDF', href: 'https://censoredplanet.org/papers/cenkl.pdf' },
      { label: 'Code', href: 'https://github.com/censoredplanet/obfuscation' },
    ],
    abstract:
      'Censorship circumvention has long focused on making the contents of the TLS handshake, such as the SNI and cipher suites, appear ordinary. But recently, censors have developed powerful attacks that exploit patterns in the shape of circumvention traffic. In response, developers have designed diverse obfuscation techniques to disguise patterns in packet sizes, directions, and timings. However, the effectiveness of these defenses has been unclear. In this paper, we present CenKL, a system that evaluates how distinguishable obfuscated proxy traffic is from real-world TLS traffic using an approximation of KL divergence. Moreover, CenKL localizes the packets contributing most to distinguishability, giving developers diagnostic information to improve their tools before censors can block them. We apply CenKL to nine popular obfuscated protocols with tens of millions of users, showing that existing obfuscation techniques offer limited protection against traffic analysis. Worse yet, these protocols are distinguishable as early as the first post-handshake packet. Finally, as a proof of concept, we use CenKL to reshape the traffic of two of these protocols to better blend into real-world TLS, reducing detection effectiveness while increasing collateral damage across several classifiers.',
    bibtex: `@inproceedings{cenkl,
  title     = {{CenKL: Information-Theoretic Visibility into Censorship Circumvention Traffic Patterns}},
  author    = {Ortwein, Aaron and Huremagic, Armin and Hussain, Shabbir and Bergen, Holly and Daymude, Joshua J. and Xue, Diwen and Crandall, Jedidiah R. and Ensafi, Roya},
  booktitle = {IEEE Symposium on Security and Privacy},
  year      = {2027}
}`,
  },
];

export const news = [
  {
    date: 'Nov 2026',
    html: `Lantern's <a href="https://samizdat.lantern.io/">Samizdat</a> protocol is now using <a href="/papers/cenkl/">CenKL</a> and its proof-of-concept traffic shaping architecture, ProxyShaper!`,
  },
  {
    date: '2026',
    html: `Our work, <a href="/papers/cenkl/">CenKL</a>, has been accepted to the IEEE Symposium on Security and Privacy (S&amp;P) 2027.`,
  },
  {
    date: 'Aug 2025',
    html: `Started my PhD at the University of Michigan.`,
  },
  {
    date: 'Jun 2025',
    html: `Built the new <a href="https://censoredplanet.org/">Censored Planet website</a>.`,
  },
];

export const teaching = [
  { date: 'Spring 2024', text: 'Teaching Assistant, Machine Learning for Social Scientists, LUMS' },
  { date: 'Fall 2022', text: 'Teaching Assistant, Computational Problem Solving, LUMS' },
];

export const awards = [
  'Award of High Distinction, LUMS, 2024',
  'Dean’s Honor List, LUMS, 2020 – 2024',
];
