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
    slug: 'censhaper',
    title: 'CenShaper: Shaping Proxy Traffic for Censorship Circumvention',
    shortTitle: 'CenShaper',
    pageTitle: 'CenShaper: Shaping Proxy Traffic for Censorship Circumvention',
    description:
      'CenShaper shapes each censorship circumvention proxy to look like a specific real TLS server, cutting TLS-over-TLS fingerprinting detection from over 85% to about 3%.',
    authors: ['Shabbir Hussain', 'Aaron Ortwein', 'Roya Ensafi'],
    venue: 'arXiv preprint arXiv:2611.31016',
    venueShort: 'arXiv',
    status: 'Under submission',
    year: 2026,
    date: '2026-11-23',
    arxiv: '2611.31016',
    pdf: 'https://arxiv.org/pdf/2611.31016',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2611.31016' },
      { label: 'PDF', href: 'https://arxiv.org/pdf/2611.31016' },
      { label: 'Code access', href: '/papers/censhaper/#code' },
    ],
    // Shown on the paper page. The code is shared privately while the paper is under review.
    related: `A follow-up to <a href="/papers/cenkl/">CenKL</a> (IEEE S&amp;P 2027).`,
    codeHtml: `The paper is under submission, and the code will be made public after the review process. In the meantime, if you develop a circumvention tool and would like to use CenShaper, please <a href="mailto:shabbirx@umich.edu?subject=CenShaper%20code%20access">reach out</a>. My team and I are happy to share the code and help integrate it into your tool. CenShaper runs as a sidecar alongside the proxy, so integration does not require changes to the proxy’s own code.`,
    abstract:
      'Modern commodity DPI systems are capable of analyzing packet sizes, directions, and timings to detect circumvention tools even when those tools use sophisticated obfuscation. The anti-censorship community has called for innovation in traffic shaping and built an ecosystem that facilitates the adoption of new shaping techniques. However, a fundamental gap is halting progress: what should circumvention traffic look like? Past experience with traffic shaping has underscored that effective shaping must produce traffic that looks like legitimate Internet traffic while limiting the ability of censors to identify multiple proxies through shared fingerprints. In this paper, we use our access to large-scale real-world TLS traffic at a regional ISP to analyze approximately 12 million connections, finding that individual servers differ substantially from the broader TLS population and that traffic patterns vary across services. Combining these empirical observations with past experience with traffic shaping, we build CenShaper, which shapes each proxy’s traffic to look like a selected TLS server. To reproduce these server-specific patterns, CenShaper trains a shared generative model using traffic from TLS connections to many servers and adapts it for each proxy using a small sample of recorded connections to its selected server. Our model evaluation shows that fingerprints learned from known proxies transfer poorly to proxies imitating previously unseen TLS services. In end-to-end testing, CenShaper reduces the detection rate of TLS-over-TLS fingerprinting from over 85% to approximately 3% at a 1% false positive rate. Finally, we show how running CenShaper as a sidecar process simplifies integration with existing circumvention tools, making it a practical defense against increasingly powerful traffic analysis attacks.',
    bibtex: `@misc{hussain2026censhaper,
  title         = {{CenShaper: Shaping Proxy Traffic for Censorship Circumvention}},
  author        = {Hussain, Shabbir and Ortwein, Aaron and Ensafi, Roya},
  year          = {2026},
  eprint        = {2611.31016},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CR}
}`,
  },
  {
    slug: 'cenkl',
    title: 'CenKL: Information-Theoretic Visibility into Censorship Circumvention Traffic Patterns',
    shortTitle: 'CenKL',
    pageTitle: 'CenKL: Visibility into Censorship Circumvention Traffic',
    description:
      'CenKL (IEEE S&P 2027) measures how distinguishable censorship circumvention traffic is from real-world TLS, and which packets give it away.',
    conference: 'IEEE Symposium on Security and Privacy',
    publisher: 'IEEE',
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
    html: `My first first-author paper, <a href="/papers/censhaper/">CenShaper</a>, is out on arXiv! It disguises each circumvention proxy as a different real-world TLS server, making proxies much harder to detect through traffic analysis. Tool developers interested in the code can <a href="/papers/censhaper/#code">reach out</a>.`,
  },
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
