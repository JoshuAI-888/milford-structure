/* Milford Asset Management — structure dataset
 * Every `sources` entry is a public page. Nothing here is drawn from private
 * knowledge. Fields marked basis:"inferred" are reasoned assumptions, not fact.
 * Last research pass: 2026-08-28
 */
const MILFORD = {
  meta: {
    researched: "28 August 2026",
    firm: "Milford Asset Management",
    facts: [
      { label: "Funds under management", value: "$34bn+", src: "https://milfordasset.com.au/about-us/" },
      { label: "People", value: "180+", src: "https://milfordasset.com.au/about-us/" },
      { label: "Clients", value: "200,000+", src: "https://milfordasset.com/about-us/careers" },
      { label: "Offices", value: "Auckland · Christchurch · Wanaka · Sydney", src: "https://milfordasset.com.au/contact-us/" }
    ],
    note: "Milford's Australian site also references teams in Melbourne and Brisbane. An older public figure of \"more than 70\" staff still circulates; the 180+ figure is the current one on Milford's Australian about page."
  },

  units: {
    board:      { name: "Board",                  color: "#303C42", blurb: "Governance, audit &amp; risk, remuneration and investment oversight." },
    exec:       { name: "Group Executive",        color: "#E47126", blurb: "Milford's executive team, reporting to the Chief Executive." },
    investment: { name: "Investment",             color: "#B4551A", blurb: "Portfolio management, research, dealing and sustainable investment." },
    client:     { name: "Client &amp; Distribution", color: "#7A8A93", blurb: "KiwiSaver &amp; retail, institutional, private wealth and advice." }
  },

  people: [
    /* ---------------- BOARD ---------------- */
    {
      slug: "anthony-quirk", name: "Anthony Quirk", title: "Chair &amp; Non-Executive Director",
      unit: "board", location: "Auckland, NZ", reportsTo: null, reportsToBasis: "evidenced",
      linkedin: "https://nz.linkedin.com/in/anthony-quirk-b7b3a553",
      profile: "https://milfordasset.com.au/team-member/anthony-quirk/",
      summary: "Non-Executive Director with over 30 years' executive experience in the investment and financial services industry, including serving as Milford's Managing Director from 2007 to 2016. Took the chair in March 2024 following Gavin Walker's departure.",
      responsibilities: [
        "Chairs the Milford Asset Management board",
        "Member of the Board Audit &amp; Risk Committee",
        "Member of the Board Remuneration &amp; Nominations Committee",
        "Member of the Board Investment Committee"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Funds management governance", "NZ financial services regulation", "Executive succession", "Investment committee oversight"],
      sources: [
        { t: "Milford — Anthony Quirk profile", u: "https://milfordasset.com.au/team-member/anthony-quirk/" },
        { t: "BusinessDesk — Walker replaced by Anthony Quirk as Milford's chair", u: "https://businessdesk.co.nz/article/news-in-brief/walker-replaced-by-anthony-quirk-as-milfords-chair" },
        { t: "LinkedIn", u: "https://nz.linkedin.com/in/anthony-quirk-b7b3a553" }
      ]
    },
    {
      slug: "lindsay-wright", name: "Lindsay Wright", title: "Independent Non-Executive Director",
      unit: "board", location: "Auckland, NZ", reportsTo: "anthony-quirk", reportsToBasis: "mixed",
      linkedin: null,
      profile: "https://milfordasset.com.au/team-member/lindsay-wright/",
      summary: "Independent Non-Executive Director of Milford Asset Management Limited and several Milford subsidiary entities, and Chair of the Board Audit &amp; Risk Committee. Over 30 years in financial services across Auckland, Sydney, Hong Kong, Tokyo, Singapore and New York, principally in asset management; most recently Chief Executive Officer of Sun Hung Kai Capital Partners in Hong Kong.",
      responsibilities: [
        "Chairs the Board Audit &amp; Risk Committee",
        "Director on Milford's private equity entities",
        "Independent oversight of financial reporting, audit and risk"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Asset management leadership", "Cross-border regulatory oversight", "Audit &amp; risk governance", "Private markets structures"],
      sources: [
        { t: "Milford — Lindsay Wright profile", u: "https://milfordasset.com.au/team-member/lindsay-wright/" },
        { t: "NBR — Milford appoints Lindsay Wright to its board", u: "https://www.nbr.co.nz/comings-and-goings/milford-appoints-lindsay-wright-to-its-board/" }
      ]
    },
    {
      slug: "bowen-pan", name: "Bowen Pan", title: "Independent Non-Executive Director",
      unit: "board", location: "Auckland, NZ", reportsTo: "anthony-quirk", reportsToBasis: "mixed",
      linkedin: null,
      profile: "https://www.hobsonleavy.com/bowen-pan-appointed-as-non-executive-director-to-the-board-of-milford-asset-management/",
      summary: "Independent Non-Executive Director and member of the Remuneration &amp; Nominations Committee. Held senior leadership roles at Meta (Facebook), Stripe and Common Room, and led the product creation and launch of Facebook Marketplace, growing it from concept to more than 800 million monthly users across 70+ countries.",
      responsibilities: [
        "Member of the Remuneration &amp; Nominations Committee",
        "Brings consumer-technology and product perspective to board strategy"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Consumer product strategy", "Marketplace &amp; platform scaling", "Fintech / payments", "Digital growth"],
      sources: [
        { t: "Hobson Leavy — Bowen Pan appointed as Non-Executive Director", u: "https://www.hobsonleavy.com/bowen-pan-appointed-as-non-executive-director-to-the-board-of-milford-asset-management/" },
        { t: "Milford on LinkedIn — appointment announcement", u: "https://www.linkedin.com/posts/milford-asset-management_milford-is-delighted-to-announce-the-appointment-activity-7436534378920304640-kUM4" }
      ]
    },

    /* ---------------- GROUP EXECUTIVE ---------------- */
    {
      slug: "blair-turnbull", name: "Blair Turnbull", title: "Chief Executive Officer",
      unit: "exec", location: "Auckland, NZ", joined: "March 2025", reportsTo: "anthony-quirk", reportsToBasis: "evidenced",
      linkedin: "https://nz.linkedin.com/in/blair-turnbull-8435481b",
      profile: "https://milfordasset.com.au/team-member/blair-turnbull/",
      summary: "Joined Milford as Chief Executive Officer in March 2025, succeeding Mark Ryland. Over 20 years in financial services across New Zealand, Asia Pacific and the UK, with a track record in large-scale digital and data innovation. Previously CEO of Tower Insurance NZ (from 2020), before that six years at Aviva in the UK including Managing Director for Digital and Retail, UK &amp; International, and ASB Executive General Manager Wealth &amp; Insurance. BCom (Accounting, Finance, Law, Marketing), University of Otago.",
      responsibilities: [
        "Overall leadership of Milford across New Zealand and Australia",
        "Group strategy and execution; accountable to the Board",
        "Digital and data-led transformation of the client proposition",
        "Culture, and the firm's significant staff-ownership model"
      ],
      responsibilitiesBasis: "mixed",
      skills: ["Digital transformation", "Data &amp; analytics strategy", "Direct-to-consumer distribution", "P&amp;L leadership", "Insurance &amp; wealth"],
      sources: [
        { t: "Milford — Blair Turnbull profile", u: "https://milfordasset.com.au/team-member/blair-turnbull/" },
        { t: "BusinessDesk — Blair Turnbull named CEO of Milford Asset Management", u: "https://businessdesk.co.nz/article/markets/blair-turnbull-named-ceo-of-milford-asset-management" },
        { t: "InvestorDaily — Milford AM names CEO", u: "https://www.investordaily.com.au/appointments/56544-milford-am-names-ceo" },
        { t: "LinkedIn", u: "https://nz.linkedin.com/in/blair-turnbull-8435481b" }
      ]
    },
    {
      slug: "wayne-gentle", name: "Wayne Gentle", title: "Chief Investment Officer &amp; Head of Australian Investments",
      unit: "exec", location: "Sydney, AU", reportsTo: "blair-turnbull", reportsToBasis: "inferred",
      linkedin: "https://au.linkedin.com/in/wayne-gentle-a5169639",
      profile: "https://milfordasset.com.au/team-member/wayne-gentle/",
      summary: "Chief Investment Officer and Head of Australian Investments, and Portfolio Manager of the Australian Absolute Growth Fund. More than 25 years managing Australian equities portfolios. Previously Deputy Head of Australian Equities at Colonial First State Global Asset Management, and Senior Analyst / Deputy Head of Research roles at Allianz Global Investors and JP Morgan. BEc (Sydney), Postgraduate Diploma in Applied Finance and Investment, GAICD.",
      responsibilities: [
        "Leads Milford's investment function across New Zealand and Australia",
        "Heads Australian investments from the Sydney office",
        "Portfolio Manager, Australian Absolute Growth Fund",
        "Announced the July 2026 appointments of the heads of private markets, global equities and wealth portfolios"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Australian equities", "Portfolio construction", "Investment team leadership", "Absolute-return strategies", "Equity research"],
      sources: [
        { t: "Milford — Wayne Gentle profile", u: "https://milfordasset.com.au/team-member/wayne-gentle/" },
        { t: "Money Management — Milford appoints three investment heads", u: "https://www.moneymanagement.com.au/milford-appoints-three-investment-heads" },
        { t: "LinkedIn", u: "https://au.linkedin.com/in/wayne-gentle-a5169639" }
      ]
    },
    {
      slug: "james-bourke", name: "James Bourke", title: "Chief Financial &amp; Operating Officer",
      unit: "exec", location: "Auckland, NZ", joined: "January 2019", reportsTo: "blair-turnbull", reportsToBasis: "inferred",
      linkedin: "https://nz.linkedin.com/in/james-bourke-b52a0661",
      profile: "https://milfordasset.com.au/team-member/james-bourke/",
      summary: "Joined Milford as Chief Financial Officer in January 2019; now Chief Financial &amp; Operating Officer. More than 14 years in financial services before Milford, primarily Auckland and London — General Manager Management Information and General Manager Financial Information &amp; Control at ASB Bank, and earlier Treasury roles at Investec Bank (London and Sydney) and Morgan Stanley (London). Chartered Management Accountant (ACMA, CGMA); BCA (First Class Hons) Victoria University of Wellington.",
      responsibilities: [
        "Group finance, financial control and management reporting",
        "Operations — the combined CFO/COO mandate",
        "Treasury and capital management",
        "Regulatory financial reporting for Milford's licensed entities"
      ],
      responsibilitiesBasis: "mixed",
      skills: ["Financial control", "Management information &amp; BI", "Treasury", "Fund operations", "Regulatory reporting"],
      sources: [
        { t: "Milford — James Bourke profile", u: "https://milfordasset.com.au/team-member/james-bourke/" },
        { t: "LinkedIn", u: "https://nz.linkedin.com/in/james-bourke-b52a0661" }
      ]
    },
    {
      slug: "renee-hector", name: "Renee Hector", title: "Chief Technology, Data &amp; Transformation Officer",
      unit: "exec", location: "Auckland, NZ", joined: "November 2022", reportsTo: "blair-turnbull", reportsToBasis: "inferred",
      linkedin: "https://www.linkedin.com/in/renee-h-61939615/",
      profile: "https://milfordasset.com.au/team-member/renee-hector/",
      summary: "Joined Milford in November 2022, responsible for driving the digital technology strategy to deliver innovative digital experiences for clients. Over 15 years in senior technology roles across New Zealand and Australia spanning insurance, mining and engineering. Previously Head of Application Delivery at nib NZ, leading digital product delivery and software engineering. BInfSci (University of Newcastle, Australia); Master of Technological Futures (AcademyEX, Auckland).",
      responsibilities: [
        "Digital technology strategy across Milford",
        "Data platform and data governance",
        "Transformation programme delivery",
        "Software engineering and application delivery"
      ],
      responsibilitiesBasis: "mixed",
      skills: ["Application delivery leadership", "Cloud platforms", "Data engineering &amp; governance", "Agile delivery", "Digital client experience", "Technology strategy"],
      sources: [
        { t: "Milford — Renee Hector profile", u: "https://milfordasset.com.au/team-member/renee-hector/" },
        { t: "LinkedIn", u: "https://www.linkedin.com/in/renee-h-61939615/" }
      ]
    },
    {
      slug: "john-paull", name: "John Paull", title: "Chief Product Solutions Officer",
      unit: "exec", location: "Auckland, NZ", joined: "2015", reportsTo: "blair-turnbull", reportsToBasis: "inferred", isNew: true,
      linkedin: null,
      profile: "https://milfordasset.com.au/team-member/john-paull/",
      summary: "Appointed Chief Product Solutions Officer in June 2026, responsible for Milford's Product and Digital Client Experience across Australia and New Zealand. Over 25 years of funds management experience. Joined Milford in 2015 and has since held Chief Operating Officer (2019 to early 2024, covering Operations, Product, IT, Risk and Client Services) and Chief Client Officer (from May 2024).",
      responsibilities: [
        "Product strategy and the product shelf across NZ and Australia",
        "Digital client experience",
        "Trans-Tasman product governance"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Product management", "Funds management operations", "Digital CX", "KiwiSaver &amp; managed funds product", "Operating model design"],
      sources: [
        { t: "Milford — John Paull profile", u: "https://milfordasset.com.au/team-member/john-paull/" },
        { t: "Milford — Group Executives", u: "https://milfordasset.com.au/insights/department/group-executives/" }
      ]
    },
    {
      slug: "philip-morgan-rees", name: "Philip Morgan Rees", title: "Distribution, Client Service &amp; Advisory",
      unit: "exec", location: "Auckland, NZ", joined: "August 2017", reportsTo: "blair-turnbull", reportsToBasis: "inferred", isNew: true,
      linkedin: null,
      profile: "https://milfordasset.com/documents/philip-morgan-rees-primary-disclosure-statement",
      summary: "Appointed in June 2026 with responsibility for Milford's Distribution, Client Service and Advisory teams and Milford's Advice ecosystem. Almost forty years across distribution, banking, funds management, financial markets and financial advice in New Zealand and the UK. Previously General Manager, Wealth Management and Advice at Milford, and joined in August 2017 to lead the Private Wealth business.",
      responsibilities: [
        "Distribution across retail, adviser and institutional channels",
        "Client service",
        "Advisory teams and Milford's Advice ecosystem"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Financial advice regulation (FSLAA)", "Wealth distribution", "Adviser networks", "Client service operating models", "Private wealth"],
      sources: [
        { t: "Milford — Primary Disclosure Statement", u: "https://milfordasset.com/documents/philip-morgan-rees-primary-disclosure-statement" },
        { t: "Milford Foundation — Philip Morgan Rees", u: "https://milfordfoundation.co.nz/team_members/philip-morgan-rees/" },
        { t: "Milford — Group Executives", u: "https://milfordasset.com.au/insights/department/group-executives/" }
      ]
    },
    {
      slug: "michelle-corse-scott", name: "Michelle Corse-Scott", title: "Chief Risk Officer &amp; General Counsel",
      unit: "exec", location: "Auckland, NZ", joined: "2017", reportsTo: "blair-turnbull", reportsToBasis: "inferred",
      linkedin: "https://www.linkedin.com/in/michelle-corse-scott-85199615/",
      profile: "https://milfordasset.com.au/team-member/michelle-corse-scott/",
      summary: "Joined Milford in 2017 and is responsible for Milford's legal, risk and compliance matters across New Zealand and Australia. Over 20 years' experience in financial services law, governance and risk management. Previously held a senior legal position at Westpac New Zealand advising on regulatory compliance, corporate and treasury matters, and strategic initiatives.",
      responsibilities: [
        "Legal, risk and compliance across NZ and Australia",
        "Licence obligations with the FMA and ASIC",
        "Risk framework and enterprise risk reporting",
        "Supports the Board Audit &amp; Risk Committee"
      ],
      responsibilitiesBasis: "mixed",
      skills: ["Financial services law", "FMA / ASIC licensing", "AML/CFT", "Enterprise risk management", "Governance"],
      sources: [
        { t: "Milford — Michelle Corse-Scott profile", u: "https://milfordasset.com.au/team-member/michelle-corse-scott/" },
        { t: "LinkedIn", u: "https://www.linkedin.com/in/michelle-corse-scott-85199615/" }
      ]
    },
    {
      slug: "sarah-mitchell", name: "Sarah Mitchell", title: "Chief, Strategy &amp; Planning",
      unit: "exec", location: "Auckland, NZ", reportsTo: "blair-turnbull", reportsToBasis: "inferred",
      linkedin: "https://nz.linkedin.com/in/sarah-mitchell-9623a912",
      profile: null,
      summary: "Chief, Strategy &amp; Planning at Milford, per her LinkedIn headline. Public detail on the role is thin — the responsibilities below are inferred from the title rather than evidenced.",
      responsibilities: [
        "Group strategy development and refresh",
        "Business planning and portfolio of change",
        "Strategic performance reporting to the executive and Board"
      ],
      responsibilitiesBasis: "inferred",
      skills: ["Corporate strategy", "Business planning", "Change portfolio management", "Financial services strategy"],
      sources: [
        { t: "LinkedIn — Sarah Mitchell, Chief, Strategy &amp; Planning at Milford", u: "https://nz.linkedin.com/in/sarah-mitchell-9623a912" }
      ]
    },

    /* ---------------- INVESTMENT ---------------- */
    {
      slug: "jonathan-windust", name: "Jonathan Windust", title: "Deputy Chief Investment Officer &amp; Portfolio Manager",
      unit: "investment", location: "Auckland, NZ", joined: "2008", reportsTo: "wayne-gentle", reportsToBasis: "mixed",
      linkedin: "https://www.linkedin.com/in/windust-jonathan-8a505522/",
      profile: "https://milfordasset.com.au/team-member/jonathan-windust/",
      summary: "Deputy Chief Investment Officer, Portfolio Manager of the Milford Active Growth Funds (Investment Funds &amp; KiwiSaver) and Co-Manager of the Aggressive Funds. Joined Milford in 2008 from Gartmore Investment Management in London, where he was Portfolio Manager for the Royal Bank of Scotland Pension Scheme (assets in excess of NZ$25bn). CFA Charterholder.",
      responsibilities: [
        "Deputy leadership of the investment team",
        "Portfolio Manager, Active Growth Fund (Investment Funds &amp; KiwiSaver)",
        "Co-Manager, Aggressive Funds (Investment Funds &amp; KiwiSaver)"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Multi-asset portfolio management", "Asset allocation", "CFA", "Pension &amp; KiwiSaver mandates", "Equity selection"],
      sources: [
        { t: "Milford — Jonathan Windust profile", u: "https://milfordasset.com.au/team-member/jonathan-windust/" },
        { t: "Milford — Active Growth Fund (KiwiSaver)", u: "https://milfordasset.com/funds-performance/kiwisaver-active-growth-fund" },
        { t: "LinkedIn", u: "https://www.linkedin.com/in/windust-jonathan-8a505522/" }
      ]
    },
    {
      slug: "paul-morris", name: "Paul Morris", title: "Deputy Chief Investment Officer &amp; Portfolio Manager",
      unit: "investment", location: "Auckland, NZ", joined: "February 2016", reportsTo: "wayne-gentle", reportsToBasis: "mixed",
      linkedin: null,
      profile: "https://milfordasset.com.au/team-member/paul-morris/",
      summary: "Deputy Chief Investment Officer and Portfolio Manager of a number of Milford funds. Joined in February 2016 with more than 25 years' experience in global and Australasian financial markets, including senior fixed income roles at Merrill Lynch and ABN AMRO in London. Also a co-manager of the trans-Tasman wholesale bond fund.",
      responsibilities: [
        "Deputy leadership of the investment team",
        "Portfolio Manager across a number of Milford funds",
        "Fixed income and credit strategy"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Fixed income", "Credit research", "Rates &amp; duration management", "Multi-asset income", "Global macro"],
      sources: [
        { t: "Milford — Paul Morris profile", u: "https://milfordasset.com.au/team-member/paul-morris/" },
        { t: "Investment News NZ — Heads up for Milford", u: "https://investmentnews.co.nz/investment-news/heads-up-for-milford/" }
      ]
    },
    {
      slug: "rupert-horrocks", name: "Rupert Horrocks", title: "Head of Private Markets",
      unit: "investment", location: "Auckland, NZ", joined: "2026", reportsTo: "wayne-gentle", reportsToBasis: "mixed", isNew: true,
      linkedin: null, profile: null,
      summary: "Appointed Head of Private Markets in 2026, announced alongside two other senior investment heads. Based in Auckland. Milford has been building a wholesale private markets capability, including a private equity fund structure with dedicated Milford private equity entities.",
      responsibilities: [
        "Leads Milford's private markets capability",
        "Private equity and unlisted asset strategy"
      ],
      responsibilitiesBasis: "mixed",
      skills: ["Private equity", "Unlisted asset valuation", "Deal origination", "Fund structuring", "Direct investment"],
      sources: [
        { t: "Good Returns — Milford Asset Management confirms three senior hires", u: "https://www.goodreturns.co.nz/article/976525669/milford-asset-management-confirms-three-senior-hires.html" },
        { t: "BusinessDesk — Milford boosts firepower with three marquee hires", u: "https://businessdesk.co.nz/article/finance/milford-boosts-firepower-with-three-marquee-hires" },
        { t: "Money Management — Milford appoints three investment heads", u: "https://www.moneymanagement.com.au/milford-appoints-three-investment-heads" }
      ]
    },
    {
      slug: "rick-mercado", name: "Richard (Rick) Mercado", title: "Head of Global Equities",
      unit: "investment", location: "Sydney, AU", joined: "1 September 2026", reportsTo: "wayne-gentle", reportsToBasis: "mixed", isNew: true,
      linkedin: null, profile: null,
      summary: "Appointed Head of Global Equities, based in Milford's Sydney office from 1 September 2026. Joins from Rest Super, where he built the fund's internal global equities capability to $1.5 billion in assets under management.",
      responsibilities: [
        "Leads Milford's global equities capability",
        "Global equity research and portfolio construction",
        "Building out internal global equity resourcing"
      ],
      responsibilitiesBasis: "mixed",
      skills: ["Global equities", "Internalised investment capability build-out", "Superannuation mandates", "Portfolio construction", "Equity research"],
      sources: [
        { t: "Money Management — Milford appoints three investment heads", u: "https://www.moneymanagement.com.au/milford-appoints-three-investment-heads" },
        { t: "Good Returns — Milford Asset Management confirms three senior hires", u: "https://www.goodreturns.co.nz/article/976525669/milford-asset-management-confirms-three-senior-hires.html" }
      ]
    },
    {
      slug: "david-lewis", name: "David Lewis", title: "Head of Wealth Portfolios",
      unit: "investment", location: "Auckland, NZ", joined: "2026", reportsTo: "wayne-gentle", reportsToBasis: "mixed", isNew: true,
      linkedin: null,
      profile: "https://milfordasset.com.au/about-us/our-team/investment-team/",
      summary: "Appointed Head of Wealth Portfolios in 2026, marking a return to Milford after five years away. Based in Auckland. Responsible for the portfolio construction, management and ongoing development of Milford's Wealth Management portfolios.",
      responsibilities: [
        "Portfolio construction for Milford's Wealth Management portfolios",
        "Ongoing management and development of wealth portfolios",
        "Bridging the investment team and the private wealth / advice business"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Portfolio construction", "Model portfolios", "Multi-asset investing", "Wealth management", "Manager selection"],
      sources: [
        { t: "Money Management — Milford appoints three investment heads", u: "https://www.moneymanagement.com.au/milford-appoints-three-investment-heads" },
        { t: "Investment News NZ — Alvarium loses CIO back to Milford", u: "https://investmentnews.co.nz/investment-news/mjw-welcomes-home-new-investment-consultant-alvarium-loses-cio-back-to-milford/" }
      ]
    },
    {
      slug: "frances-sweetman", name: "Frances Sweetman", title: "Head of Sustainable Investment &amp; Portfolio Manager",
      unit: "investment", location: "Auckland, NZ", joined: "early 2017", reportsTo: "wayne-gentle", reportsToBasis: "inferred",
      linkedin: null,
      profile: "https://milfordasset.com.au/team-member/frances-sweetman/",
      summary: "Head of Sustainable Investment and a Portfolio Manager. Joined Milford in early 2017 as a Senior Analyst focused on New Zealand equities.",
      responsibilities: [
        "Leads Milford's sustainable investment approach",
        "Portfolio management responsibilities",
        "ESG integration across the investment process"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["ESG integration", "Responsible investment frameworks (RIAA)", "NZ equities research", "Stewardship &amp; engagement", "Climate reporting"],
      sources: [
        { t: "Milford — Frances Sweetman profile", u: "https://milfordasset.com.au/team-member/frances-sweetman/" },
        { t: "Milford — Sustainable Investing", u: "https://milfordasset.com/about-us/sustainable-investing" }
      ]
    },
    {
      slug: "mark-riggall", name: "Mark Riggall", title: "Portfolio Manager &amp; Head of Central Dealing Desk",
      unit: "investment", location: "Auckland, NZ", reportsTo: "jonathan-windust", reportsToBasis: "inferred",
      linkedin: null,
      profile: "https://milfordasset.com.au/team-member/mark-riggall/",
      summary: "Portfolio Manager of a number of Milford funds, with additional responsibility for managing the Central Dealing Desk.",
      responsibilities: [
        "Portfolio management across a number of Milford funds",
        "Runs the Central Dealing Desk — trade execution across asset classes",
        "Regular market commentary for Milford's client channels"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Trade execution &amp; best execution", "Derivatives &amp; FX hedging", "Order management systems", "Multi-asset portfolio management", "Market commentary"],
      sources: [
        { t: "Milford — Mark Riggall profile", u: "https://milfordasset.com.au/team-member/mark-riggall/" }
      ]
    },
    {
      slug: "william-curtayne", name: "William Curtayne", title: "Portfolio Manager",
      unit: "investment", location: "Auckland, NZ", joined: "2010", reportsTo: "wayne-gentle", reportsToBasis: "inferred",
      linkedin: null,
      profile: "https://milfordasset.com.au/team-member/william-curtayne/",
      summary: "Joined Milford in 2010 and is primarily based in Auckland. Focuses mainly on Australian equities as Portfolio Manager of the Milford Australian Absolute Growth Funds and the Milford Dynamic Funds.",
      responsibilities: [
        "Portfolio Manager, Milford Australian Absolute Growth Funds",
        "Portfolio Manager, Milford Dynamic Funds",
        "Australian equities research"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Australian equities", "Small &amp; mid-cap research", "Absolute-return strategies", "Company analysis"],
      sources: [
        { t: "Milford — William Curtayne profile", u: "https://milfordasset.com.au/team-member/william-curtayne/" }
      ]
    },
    {
      slug: "jason-kururangi", name: "Jason Kururangi", title: "Portfolio Manager",
      unit: "investment", location: "Sydney, AU", reportsTo: "wayne-gentle", reportsToBasis: "inferred",
      linkedin: null,
      profile: "https://milfordasset.com.au/team-member/jason-kururangi/",
      summary: "Portfolio Manager based in Milford's Sydney office. Portfolio Manager of the Australian Equities Wholesale Fund and Co-Portfolio Manager of the Australian Absolute Growth Funds.",
      responsibilities: [
        "Portfolio Manager, Australian Equities Wholesale Fund",
        "Co-Portfolio Manager, Australian Absolute Growth Funds"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Australian equities", "Wholesale fund management", "Fundamental research", "Absolute-return strategies"],
      sources: [
        { t: "Milford — Jason Kururangi profile", u: "https://milfordasset.com.au/team-member/jason-kururangi/" }
      ]
    },
    {
      slug: "stephen-johnston", name: "Stephen Johnston", title: "Portfolio Manager",
      unit: "investment", location: "Auckland, NZ", reportsTo: "jonathan-windust", reportsToBasis: "inferred",
      linkedin: null,
      profile: "https://milfordasset.com.au/team-member/stephen-johnston/",
      summary: "Portfolio Manager of the Aggressive Funds (KiwiSaver and Investment Funds), the Milford Global Equity Fund, and the Global Opportunities Fund (New Zealand Wholesale and Australia).",
      responsibilities: [
        "Portfolio Manager, Aggressive Funds (KiwiSaver &amp; Investment Funds)",
        "Portfolio Manager, Milford Global Equity Fund",
        "Portfolio Manager, Global Opportunities Fund (NZ Wholesale &amp; Australia)"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Global equities", "High-growth strategies", "Thematic research", "Portfolio construction"],
      sources: [
        { t: "Milford — Stephen Johnston profile", u: "https://milfordasset.com.au/team-member/stephen-johnston/" },
        { t: "Milford — Aggressive Fund", u: "https://milfordasset.com/funds-performance/aggressive-fund" }
      ]
    },
    {
      slug: "felix-fok", name: "Felix Fok", title: "Portfolio Manager",
      unit: "investment", location: "Auckland, NZ", reportsTo: "rick-mercado", reportsToBasis: "inferred",
      linkedin: null,
      profile: "https://milfordasset.com.au/team-member/felix-fok/",
      summary: "Portfolio Manager of the Milford Global Equity Fund.",
      responsibilities: [
        "Portfolio Manager, Milford Global Equity Fund",
        "Global equity stock selection and research"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Global equities", "Fundamental research", "Sector analysis", "Valuation modelling"],
      sources: [
        { t: "Milford — Felix Fok profile", u: "https://milfordasset.com.au/team-member/felix-fok/" }
      ]
    },
    {
      slug: "sam-trethewey", name: "Sam Trethewey", title: "Portfolio Manager",
      unit: "investment", location: "Auckland, NZ", reportsTo: "wayne-gentle", reportsToBasis: "inferred",
      linkedin: null,
      profile: "https://milfordasset.com.au/team-member/sam-trethewey/",
      summary: "Portfolio Manager of the Trans-Tasman Equity Fund and the Milford New Zealand Equities Wholesale Fund.",
      responsibilities: [
        "Portfolio Manager, Trans-Tasman Equity Fund",
        "Portfolio Manager, Milford New Zealand Equities Wholesale Fund"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["NZ equities", "Trans-Tasman research", "Wholesale mandates", "Company engagement"],
      sources: [
        { t: "Milford — Sam Trethewey profile", u: "https://milfordasset.com.au/team-member/sam-trethewey/" }
      ]
    },
    {
      slug: "ian-robertson", name: "Ian Robertson", title: "Senior Analyst &amp; Co-Portfolio Manager, Fixed Income",
      unit: "investment", location: "Auckland, NZ", joined: "2017", reportsTo: "paul-morris", reportsToBasis: "inferred",
      linkedin: null,
      profile: "https://milfordasset.com.au/team-member/ian-robertson/",
      summary: "Joined Milford in 2017 as a Senior Analyst focused on fixed income investments. Co-Portfolio Manager of the Trans-Tasman Bond Fund and the Global Corporate Bond Funds.",
      responsibilities: [
        "Co-Portfolio Manager, Trans-Tasman Bond Fund",
        "Co-Portfolio Manager, Global Corporate Bond Funds",
        "Fixed income credit research"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Credit analysis", "Corporate bonds", "Duration &amp; yield curve positioning", "Fixed income modelling"],
      sources: [
        { t: "Milford — Ian Robertson profile", u: "https://milfordasset.com.au/team-member/ian-robertson/" }
      ]
    },
    {
      slug: "katlyn-parker", name: "Katlyn Parker", title: "Investment Analyst &amp; Portfolio Manager, Cash Funds",
      unit: "investment", location: "Auckland, NZ", reportsTo: "paul-morris", reportsToBasis: "inferred",
      linkedin: null,
      profile: "https://milfordasset.com.au/team-member/katlyn-parker/",
      summary: "Investment Analyst and Portfolio Manager of the Milford Cash Funds. Primary role is fixed income research, focused on corporate bond markets.",
      responsibilities: [
        "Portfolio Manager, Milford Cash Funds",
        "Fixed income research with a corporate bond focus"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Corporate credit research", "Money markets &amp; liquidity management", "Fixed income analytics"],
      sources: [
        { t: "Milford — Katlyn Parker profile", u: "https://milfordasset.com.au/team-member/katlyn-parker/" }
      ]
    },
    {
      slug: "roland-houghton", name: "Roland Houghton", title: "Investment Analyst",
      unit: "investment", location: "Auckland, NZ", joined: "May 2016", reportsTo: "jonathan-windust", reportsToBasis: "inferred",
      linkedin: null,
      profile: "https://milfordasset.com.au/team-member/roland-houghton/",
      summary: "Joined Milford in May 2016 as an Investment Analyst. His role is to research, meet and analyse a range of companies to identify potential opportunities.",
      responsibilities: [
        "Company research and management meetings",
        "Idea generation for Milford's portfolios"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Equity research", "Financial modelling", "Company due diligence", "Sector coverage"],
      sources: [
        { t: "Milford — Roland Houghton profile", u: "https://milfordasset.com.au/team-member/roland-houghton/" }
      ]
    },
    {
      slug: "nick-morgan", name: "Nick Morgan", title: "Sustainable Investment Analyst",
      unit: "investment", location: "Auckland, NZ", joined: "April 2020", reportsTo: "frances-sweetman", reportsToBasis: "inferred",
      linkedin: null,
      profile: "https://milfordasset.com.au/team-member/nick-morgan/",
      summary: "Joined Milford in April 2020 as an Associate in the Private Wealth team and later moved to the Investment Team as a Sustainable Investment Analyst, based in the Auckland office.",
      responsibilities: [
        "Sustainable investment research and ESG analysis",
        "Supports Milford's responsible investment reporting"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["ESG data &amp; ratings", "Sustainability reporting", "Engagement research", "Equity analysis"],
      sources: [
        { t: "Milford — Nick Morgan profile", u: "https://milfordasset.com.au/team-member/nick-morgan/" }
      ]
    },

    /* ---------------- CLIENT & DISTRIBUTION ---------------- */
    {
      slug: "murray-harris", name: "Murray Harris", title: "Head of KiwiSaver &amp; Retail",
      unit: "client", location: "Auckland, NZ", reportsTo: "philip-morgan-rees", reportsToBasis: "inferred",
      linkedin: "https://nz.linkedin.com/in/murray-harris-sf-fin-52186532",
      profile: null,
      summary: "Head of KiwiSaver &amp; Retail at Milford, per his LinkedIn headline (SF Fin). A frequent public commentator on KiwiSaver for Milford in New Zealand media.",
      responsibilities: [
        "Leads the KiwiSaver scheme proposition and retail channel",
        "Retail member growth and retention",
        "Public and media commentary on KiwiSaver"
      ],
      responsibilitiesBasis: "mixed",
      skills: ["KiwiSaver scheme management", "Retail distribution", "Financial services marketing", "Media &amp; public commentary"],
      sources: [
        { t: "LinkedIn — Murray Harris, Head of KiwiSaver &amp; Retail", u: "https://nz.linkedin.com/in/murray-harris-sf-fin-52186532" },
        { t: "Milford — Talking KiwiSaver on The AM Show", u: "https://milfordasset.com/insights/talking-kiwisaver-on-the-am-show-on-three" }
      ]
    },
    {
      slug: "mike-cruickshank", name: "Mike Cruickshank", title: "Head of Institutional Clients",
      unit: "client", location: "Auckland, NZ", joined: "2014", reportsTo: "philip-morgan-rees", reportsToBasis: "inferred",
      linkedin: "https://nz.linkedin.com/in/mike-cruickshank-21337913",
      profile: "https://milfordfoundation.co.nz/team_members/mike-cruickshank/",
      summary: "Joined Milford in 2014 and is responsible for Milford's institutional clients including charitable trusts, community trusts, foundations and Iwi. BMS (Hons) in Finance, University of Waikato.",
      responsibilities: [
        "Institutional client relationships",
        "Charitable trusts, community trusts, foundations and Iwi mandates",
        "Wholesale offering to institutional investors"
      ],
      responsibilitiesBasis: "evidenced",
      skills: ["Institutional relationship management", "Wholesale mandates", "Investment policy statements", "Iwi &amp; not-for-profit investing"],
      sources: [
        { t: "LinkedIn", u: "https://nz.linkedin.com/in/mike-cruickshank-21337913" },
        { t: "Milford — Wholesale", u: "https://milfordasset.com/what-we-offer/wholesale" },
        { t: "Milford Foundation — Mike Cruickshank", u: "https://milfordfoundation.co.nz/team_members/mike-cruickshank/" }
      ]
    },
    {
      slug: "jonathan-cullinane", name: "Jonathan Cullinane", title: "Private Wealth Adviser",
      unit: "client", location: "Auckland, NZ", reportsTo: "philip-morgan-rees", reportsToBasis: "inferred",
      linkedin: "https://www.linkedin.com/in/jonathan-cullinane-1495a12/",
      profile: null,
      summary: "Private Wealth Adviser at Milford, based in Auckland. Part of the Private Wealth arm that sits within the Distribution, Client Service and Advisory group.",
      responsibilities: [
        "Advises private wealth clients on portfolios and financial planning",
        "Client relationship management"
      ],
      responsibilitiesBasis: "mixed",
      skills: ["Financial advice (FSLAA regime)", "Portfolio advice", "Client relationship management", "Retirement planning"],
      sources: [
        { t: "LinkedIn", u: "https://www.linkedin.com/in/jonathan-cullinane-1495a12/" }
      ]
    }
  ],

  timeline: [
    { date: "1 Sep 2026", who: "Richard (Rick) Mercado", what: "Starts as Head of Global Equities in the Sydney office, joining from Rest Super where he built an internal global equities capability to $1.5bn FUM.", tag: "New hire",
      src: [{ t: "Money Management", u: "https://www.moneymanagement.com.au/milford-appoints-three-investment-heads" }] },
    { date: "Jul 2026", who: "Rupert Horrocks · Rick Mercado · David Lewis", what: "Milford confirms three senior investment appointments — Head of Private Markets, Head of Global Equities and Head of Wealth Portfolios. CIO Wayne Gentle called it \"a significant step in the continued evolution of Milford's investment capability\".", tag: "New hires",
      src: [{ t: "Good Returns", u: "https://www.goodreturns.co.nz/article/976525669/milford-asset-management-confirms-three-senior-hires.html" }, { t: "BusinessDesk", u: "https://businessdesk.co.nz/article/finance/milford-boosts-firepower-with-three-marquee-hires" }] },
    { date: "Jul 2026", who: "David Lewis", what: "Returns to Milford after five years away, as Head of Wealth Portfolios in Auckland.", tag: "Returning hire",
      src: [{ t: "Investment News NZ", u: "https://investmentnews.co.nz/investment-news/mjw-welcomes-home-new-investment-consultant-alvarium-loses-cio-back-to-milford/" }] },
    { date: "Jun 2026", who: "John Paull", what: "Appointed Chief Product Solutions Officer, responsible for Product and Digital Client Experience across Australia and New Zealand.", tag: "Promotion",
      src: [{ t: "Milford — Group Executives", u: "https://milfordasset.com.au/insights/department/group-executives/" }] },
    { date: "Jun 2026", who: "Philip Morgan Rees", what: "Appointed to lead Distribution, Client Service and Advisory teams and Milford's Advice ecosystem, moving up from General Manager, Wealth Management and Advice.", tag: "Promotion",
      src: [{ t: "Milford — Group Executives", u: "https://milfordasset.com.au/insights/department/group-executives/" }] },
    { date: "Mar 2025", who: "Blair Turnbull", what: "Joins as Chief Executive Officer from Tower Insurance NZ, succeeding Mark Ryland. Announced January 2025.", tag: "New hire",
      src: [{ t: "BusinessDesk", u: "https://businessdesk.co.nz/article/markets/blair-turnbull-named-ceo-of-milford-asset-management" }, { t: "Investment News NZ", u: "https://investmentnews.co.nz/investment-news/milford-finds-new-chief-in-tower/" }] },
    { date: "Mar 2024", who: "Gavin Walker → Anthony Quirk", what: "Gavin Walker steps down as chair to spend more time on personal affairs; Anthony Quirk, Milford's Managing Director from 2007 to 2016, takes the chair.", tag: "Board change",
      src: [{ t: "BusinessDesk", u: "https://businessdesk.co.nz/article/news-in-brief/walker-replaced-by-anthony-quirk-as-milfords-chair" }] },
    { date: "Recent", who: "Bowen Pan", what: "Appointed Independent Non-Executive Director and member of the Remuneration &amp; Nominations Committee, bringing Meta, Stripe and Common Room product experience to the board.", tag: "Board change",
      src: [{ t: "Hobson Leavy", u: "https://www.hobsonleavy.com/bowen-pan-appointed-as-non-executive-director-to-the-board-of-milford-asset-management/" }] },
    { date: "Recent", who: "Lindsay Wright", what: "Appointed Independent Non-Executive Director and Chair of the Board Audit &amp; Risk Committee, previously CEO of Sun Hung Kai Capital Partners in Hong Kong.", tag: "Board change",
      src: [{ t: "NBR", u: "https://www.nbr.co.nz/comings-and-goings/milford-appoints-lindsay-wright-to-its-board/" }] },
    { date: "Nov 2022", who: "Renee Hector", what: "Joins as Chief Technology, Data &amp; Transformation Officer from nib NZ, where she was Head of Application Delivery.", tag: "New hire",
      src: [{ t: "Milford — Renee Hector", u: "https://milfordasset.com.au/team-member/renee-hector/" }] }
  ]
};
if (typeof module !== "undefined") { module.exports = MILFORD; }
