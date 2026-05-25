export interface InfoCard {
  title: string;
  text: string;
}

export interface InfoPage {
  slug: string;
  parentSlug?: string;
  eyebrow: string;
  title: string;
  summary: string;
  intro: string[];
  cards: InfoCard[];
  supportTitle: string;
  supportText: string;
  ctaLabel: string;
  ctaHref: string;
  childSlugs?: string[];
}

export const publicPages: Record<string, InfoPage> = {
  "seller-services": {
    slug: "seller-services",
    eyebrow: "Seller services",
    title: "Data Before You Decide.",
    summary: "A BPO-informed selling process helps owners evaluate as-is value, repair options, rental feasibility, and market positioning before choosing a path.",
    intro: [
      "Most sellers start with a guess: what they want, what a neighbor sold for, or what an online estimate suggests. The problem is that buyers react to the real property in front of them, not the seller's hope.",
      "Seller services use market data and property condition analysis to help owners understand what the market is likely to reward, resist, or discount."
    ],
    cards: [
      { title: "Sell as-is", text: "Understand current condition value and the buyer pool most likely to respond." },
      { title: "Repair before listing", text: "Evaluate whether targeted repairs are likely to improve net proceeds." },
      { title: "Hold or rent", text: "Compare sale value against rental feasibility and ongoing ownership risk." },
      { title: "Price with confidence", text: "Use condition-aware market evidence to reduce wasted time and weak negotiations." }
    ],
    supportTitle: "Match the message to the market.",
    supportText: "A valuation support report helps shape realistic pricing, marketing language, buyer expectations, and negotiation strategy.",
    ctaLabel: "Explore seller situations",
    ctaHref: "/seller-services/distressed-property-sellers",
    childSlugs: ["distressed-property-sellers", "mortgage-default", "inherited-property", "private-transactions"]
  },
  "distressed-property-sellers": {
    slug: "distressed-property-sellers",
    parentSlug: "seller-services",
    eyebrow: "Distressed property sellers",
    title: "Don't Guess on Price.",
    summary: "Distressed properties need direct market evidence because condition, financing limits, and buyer perception can punish hopeful pricing.",
    intro: [
      "Testing the market can backfire when a property needs work. Longer days on market, stalled activity, and repeated price reductions can weaken leverage.",
      "A Broker Price Opinion helps cut through uncertainty by showing where the property fits today and what options may be realistic."
    ],
    cards: [
      { title: "Understand market habits", text: "See how buyers respond to properties with similar condition, location, and repair needs." },
      { title: "Estimate repairs", text: "Identify visible work that may affect buyer demand, financing, or pricing." },
      { title: "Assess repair feasibility", text: "Decide whether improvement is likely to pay off before spending money." },
      { title: "Assess rental feasibility", text: "Compare selling now against holding and renting where that option exists." }
    ],
    supportTitle: "Stop testing. Start knowing.",
    supportText: "A condition-based BPO can help you decide how to price, whether to repair, and what buyer audience is realistic.",
    ctaLabel: "Review seller services",
    ctaHref: "/seller-services"
  },
  "mortgage-default": {
    slug: "mortgage-default",
    parentSlug: "seller-services",
    eyebrow: "Mortgage default",
    title: "Life Happens. Don't Rely on Hope.",
    summary: "When mortgage trouble appears, reliable information helps owners respond proactively instead of negotiating in the dark.",
    intro: [
      "The first step is to contact the mortgage provider or servicer immediately. Then gather facts that help legal, financial, and real estate professionals understand the situation.",
      "An independent BPO gives the owner a market-based view of value instead of relying only on estimates ordered by a bank or servicer."
    ],
    cards: [
      { title: "Order a title report", text: "Understand liens, ownership issues, and other legal context with professional help." },
      { title: "Order a BPO", text: "Clarify market value and sale feasibility based on condition and current demand." },
      { title: "Consult a lawyer", text: "Use the title report and valuation support to get better legal guidance." },
      { title: "Prepare if selling becomes necessary", text: "Give the listing strategy stronger support before negotiating with a lender or buyer." }
    ],
    supportTitle: "Get the facts first.",
    supportText: "A BPO does not replace legal advice, but it can help you and your advisors understand the real estate side of the decision.",
    ctaLabel: "Back to seller services",
    ctaHref: "/seller-services"
  },
  "inherited-property": {
    slug: "inherited-property",
    parentSlug: "seller-services",
    eyebrow: "Inherited property",
    title: "Navigating an Inherited Property.",
    summary: "Inherited homes often involve emotion, family expectations, repairs, and timing. A neutral valuation process helps everyone see the facts.",
    intro: [
      "A BPO is not just about a number. It is a fact-finding exercise that documents condition, market position, and likely buyer response.",
      "That clarity can help families decide whether to sell as-is, renovate for sale, rent, transfer, or hold."
    ],
    cards: [
      { title: "Sell as-is", text: "Price the property accurately for its current condition and reduce family effort." },
      { title: "Renovate for sale", text: "Compare repair costs against the likely lift in value and buyer demand." },
      { title: "Keep or transfer", text: "Support buyout, rental, or family distribution discussions with neutral market context." },
      { title: "Reduce conflict", text: "Give heirs a shared factual foundation for the next decision." }
    ],
    supportTitle: "Clarity for the whole family.",
    supportText: "A neutral BPO can help families discuss options with less guesswork and more shared understanding.",
    ctaLabel: "Back to seller services",
    ctaHref: "/seller-services"
  },
  "private-transactions": {
    slug: "private-transactions",
    parentSlug: "seller-services",
    eyebrow: "Private transactions",
    title: "Transacting Privately? Know the Risks.",
    summary: "Off-market deals can still carry market, condition, legal, and emotional risk. Valuation support helps both sides understand fairness.",
    intro: [
      "Private transactions often feel simpler because there is no public listing, but the money, risk, and emotion are still real.",
      "A BPO-focused advisor can provide independent market context, repair awareness, and pricing logic without turning the arrangement into a traditional listing process."
    ],
    cards: [
      { title: "Landlord-to-tenant sales", text: "Evaluate whether the agreed price reflects current condition and market alternatives." },
      { title: "Unsolicited offers", text: "Check whether a fast cash offer is worth the discount being demanded." },
      { title: "Family or neighbor transactions", text: "Support fair dealing where the parties want a private but informed agreement." },
      { title: "Escrow and compliance awareness", text: "Keep the transaction grounded in proper process and professional guidance." }
    ],
    supportTitle: "Don't transact in the dark.",
    supportText: "Before accepting or making a private offer, use valuation support to understand what the property is likely worth and why.",
    ctaLabel: "Back to seller services",
    ctaHref: "/seller-services"
  },
  "buyer-services": {
    slug: "buyer-services",
    eyebrow: "Buyer services",
    title: "The Traditional Buying Process is Emotion-Based.",
    summary: "Buyer services help purchasers and investors bring due diligence forward before inspections, loan costs, or renovation assumptions pile up.",
    intro: [
      "Many buyers fall in love first and investigate later. That order can make it harder to see repair risk, resale limits, rental assumptions, or market overpricing clearly.",
      "A BPO-supported due diligence process helps buyers ask better questions before commitment increases."
    ],
    cards: [
      { title: "For homebuyers", text: "Evaluate price, condition, repair feasibility, and comparable sales before leaning only on emotion." },
      { title: "For investors", text: "Test rent, repair budget, resale assumptions, and exit strategy before buying." },
      { title: "Fact-check first", text: "Use market and condition evidence before moving into costly inspections or loan steps." },
      { title: "Buy with clearer expectations", text: "Understand how the market is likely to view the property today and later." }
    ],
    supportTitle: "Start your due diligence.",
    supportText: "A BPO-informed review helps buyers decide whether the deal is worth pursuing before the process becomes expensive.",
    ctaLabel: "Explore buyer strategies",
    ctaHref: "/buyer-services/value-focused-buyers",
    childSlugs: ["value-focused-buyers", "short-term-investors", "long-term-investors", "lot-development"]
  },
  "value-focused-buyers": {
    slug: "value-focused-buyers",
    parentSlug: "buyer-services",
    eyebrow: "Value-focused buyers",
    title: "Build Wealth, Don't Just Wait for It.",
    summary: "Value-focused buyers look for equity through condition, renovation, or market mismatch, but the discount has to be real.",
    intro: [
      "A value-focused buyer is willing to consider imperfect property if the numbers support the risk and effort.",
      "The question is whether the as-is value, repair budget, and after-repair value actually create opportunity."
    ],
    cards: [
      { title: "As-is value", text: "Confirm whether the property is genuinely discounted for its current condition." },
      { title: "After-repair value", text: "Estimate the likely market ceiling after repairs are complete." },
      { title: "Repair feasibility", text: "Compare budget assumptions against the visible work and market expectations." },
      { title: "Financing awareness", text: "Support FHA 203(k) and renovation planning discussions with market-grounded numbers." }
    ],
    supportTitle: "Verify your sweat equity deal.",
    supportText: "A BPO can help confirm whether the opportunity is real before you commit to purchase and renovation costs.",
    ctaLabel: "Back to buyer services",
    ctaHref: "/buyer-services"
  },
  "short-term-investors": {
    slug: "short-term-investors",
    parentSlug: "buyer-services",
    eyebrow: "Short-term investors",
    title: "Don't Let Ambition Blind You.",
    summary: "Short-term investment deals need fast but disciplined validation of value, repairs, and after-repair market demand.",
    intro: [
      "Sellers and wholesalers can create urgency that pushes investors to skip due diligence. That is where bad assumptions become expensive.",
      "A BPO validates the deal by separating current value, repair scope, and ARV from sales pressure."
    ],
    cards: [
      { title: "Current market value", text: "Understand what the property is worth before repairs." },
      { title: "Repair scope", text: "Identify visible work that affects feasibility, timeline, and risk." },
      { title: "After-repair value", text: "Estimate resale potential in repaired condition using comparable evidence." },
      { title: "In-house analyst support", text: "Use an as-needed local market analyst before committing capital." }
    ],
    supportTitle: "Verify before you buy.",
    supportText: "A BPO helps short-term investors test whether ambition is supported by market facts.",
    ctaLabel: "Back to buyer services",
    ctaHref: "/buyer-services"
  },
  "long-term-investors": {
    slug: "long-term-investors",
    parentSlug: "buyer-services",
    eyebrow: "Long-term investors",
    title: "Secure Your Cash Flow.",
    summary: "Long-term investors need more than a purchase price. They need a view of condition, rent potential, repairs, and exit strategy.",
    intro: [
      "A bad long-term deal does not just lose money once. It can drain capital for years through repairs, vacancy, weak rent, or poor resale prospects.",
      "A rental-focused BPO stress-tests the investment with real market data before you commit."
    ],
    cards: [
      { title: "Current value", text: "Confirm whether the acquisition price is supported by market behavior." },
      { title: "Rental trends", text: "Compare rent assumptions against local demand and competing inventory." },
      { title: "Repair estimates", text: "Identify condition issues that may affect cash flow or tenant readiness." },
      { title: "Exit strategy", text: "Consider resale potential before locking into a long holding period." }
    ],
    supportTitle: "Plan for the long term.",
    supportText: "A BPO bridges the gap between financial projections and the physical property.",
    ctaLabel: "Back to buyer services",
    ctaHref: "/buyer-services"
  },
  "lot-development": {
    slug: "lot-development",
    parentSlug: "buyer-services",
    eyebrow: "Lot development",
    title: "Don't Overlook the Dirt.",
    summary: "Vacant lots can hide opportunity, but the value depends on build feasibility, end value, and the spread between cost and market demand.",
    intro: [
      "Land is easy to underestimate because there is no house to inspect. But zoning, utilities, access, build costs, and buyer demand all affect viability.",
      "A BPO framework can help assess whether a lot supports a realistic new construction or development strategy."
    ],
    cards: [
      { title: "Lot valuation", text: "Estimate current land value based on local market behavior and constraints." },
      { title: "End value", text: "Evaluate likely value after a feasible new build or improvement plan." },
      { title: "The spread", text: "Compare land cost, development cost, and end value before committing." },
      { title: "New-build benchmark", text: "Use modern construction alternatives and buyer expectations as part of the analysis." }
    ],
    supportTitle: "Is it time to build?",
    supportText: "A lot-development BPO can clarify whether the dirt supports the plan before you buy.",
    ctaLabel: "Back to buyer services",
    ctaHref: "/buyer-services"
  },
  "valuation-support-services": {
    slug: "valuation-support-services",
    eyebrow: "Valuation support services",
    title: "Valuation Support for Professionals.",
    summary: "Fast, client-ready market clarity for professionals who need defensible support in complex or high-stakes real estate situations.",
    intro: [
      "Professionals often need market context, condition documentation, and pricing logic to support client communication and strategy.",
      "The role is support, not substitution: BPO, PCR, and MAR reports can strengthen advisory work without replacing licensed appraisal, legal, lending, or tax functions."
    ],
    cards: [
      { title: "Defensible value", text: "Clear value ranges supported by comparable evidence and current market behavior." },
      { title: "Client narrative", text: "Condition-to-price explanations that help professionals communicate the issue plainly." },
      { title: "PDF packages", text: "Organized deliverables for files, review, or client communication." },
      { title: "Role clarity", text: "Support independent decisions without stepping into regulated valuation requirements." }
    ],
    supportTitle: "Professional support, not substitution.",
    supportText: "Valuation support helps advisors organize facts, assess risk, and explain real estate decisions with more clarity.",
    ctaLabel: "Explore support segments",
    ctaHref: "/valuation-support-services/bank-amc-valuation-support",
    childSlugs: ["bank-amc-valuation-support", "appraiser-support-services", "agent-support-services", "professional-support-services"]
  },
  "bank-amc-valuation-support": {
    slug: "bank-amc-valuation-support",
    parentSlug: "valuation-support-services",
    eyebrow: "Bank / AMC valuation support",
    title: "Market Intelligence & Valuation Support.",
    summary: "Localized property and market intelligence can help AMCs and valuation teams improve documentation, turnaround, and decision support.",
    intro: [
      "Valuation workflows are increasingly modular, separating data collection, condition analysis, market support, and final valuation conclusions.",
      "A BPO-focused local agent can support non-lending valuation needs, distressed assets, portfolio pricing, and market consistency reviews."
    ],
    cards: [
      { title: "Property data collection", text: "Field-verified observations and documentation for review-friendly files." },
      { title: "Condition and repair assessment", text: "Clear differentiation between repairable and non-repairable issues." },
      { title: "Local market analysis", text: "Market-supported explanations for pricing variance and buyer behavior." },
      { title: "BPO reports", text: "Condition-based value ranges for non-lending valuation support needs." }
    ],
    supportTitle: "Strengthen your valuation process.",
    supportText: "I am not competition. I am valuation support: a bridge between raw property data and clearer valuation workflows.",
    ctaLabel: "Back to valuation support",
    ctaHref: "/valuation-support-services"
  },
  "appraiser-support-services": {
    slug: "appraiser-support-services",
    parentSlug: "valuation-support-services",
    eyebrow: "Appraiser support services",
    title: "Streamline Your Appraisal Workflow.",
    summary: "BPO-focused agents can support appraisers with local data collection, condition observations, and market legwork while appraisers retain independent judgment.",
    intro: [
      "Appraisers face increasing scrutiny, tighter timelines, and more pressure on margins. Trusted local support can help with time-intensive field and market tasks.",
      "The goal is to support the appraiser's workflow without encroaching on valuation independence."
    ],
    cards: [
      { title: "Natural subcontractor", text: "Licensed local market expertise already familiar with property condition and comparable selection." },
      { title: "Property observations", text: "Detailed on-the-ground notes, photos, and condition context." },
      { title: "Market research support", text: "MLS and public record reconciliation, comparable deep-dives, and local trend context." },
      { title: "Trusted network", text: "Build a small, quality support network to reduce friction and improve capacity." }
    ],
    supportTitle: "Build your trusted network.",
    supportText: "A BPO-focused agent can be your eyes in the field while you remain responsible for appraisal analysis and conclusions.",
    ctaLabel: "Back to valuation support",
    ctaHref: "/valuation-support-services"
  },
  "agent-support-services": {
    slug: "agent-support-services",
    parentSlug: "valuation-support-services",
    eyebrow: "Agent support services",
    title: "Support, Not Competition.",
    summary: "Real estate agents handling complex properties can use BPO-focused support to strengthen client advice without replacing the agent of record.",
    intro: [
      "Some transactions need deeper valuation support than a standard CMA. Distressed assets, repair-heavy properties, and investor-facing listings require stronger condition-to-price logic.",
      "A BPO-focused agent works alongside the agent of record to supply data, market analysis, and report support."
    ],
    cards: [
      { title: "Data collection", text: "Detailed property condition reports and repair assessments." },
      { title: "Market analysis", text: "Localized trend analysis specific to property condition and buyer behavior." },
      { title: "Full BPO", text: "Objective, condition-based valuation reports for client strategy." },
      { title: "Seamless integration", text: "Support can stand alone or fit into the existing agent workflow." }
    ],
    supportTitle: "Strengthen your transaction.",
    supportText: "Collaboration helps the primary agent serve the client with clearer valuation evidence where risk is highest.",
    ctaLabel: "Back to valuation support",
    ctaHref: "/valuation-support-services"
  },
  "professional-support-services": {
    slug: "professional-support-services",
    parentSlug: "valuation-support-services",
    eyebrow: "Professional support services",
    title: "Support Client Decisions with Market Clarity.",
    summary: "Attorneys, financial advisors, lenders, fiduciaries, and consultants often need market context without needing a formal appraisal.",
    intro: [
      "BPO, PCR, and MAR reports can support planning, negotiation, settlement discussions, risk review, and internal analysis.",
      "They are best suited for independent decision-making and client communication, not lending, tax appeals, or statutory appraisal requirements."
    ],
    cards: [
      { title: "Legal professionals", text: "Market context for estate, probate, divorce, settlement, and transactional discussions." },
      { title: "Financial and tax advisors", text: "Realistic value ranges and repair impact for broader planning conversations." },
      { title: "Private lenders and capital", text: "Early-stage condition and exit strategy review before full appraisal costs." },
      { title: "Developers and fiduciaries", text: "Independent market insight and documentation supporting reasonable care." }
    ],
    supportTitle: "Technical support for your advisory.",
    supportText: "Valuation support packages help professionals explain real estate decisions with clearer assumptions, limitations, and market evidence.",
    ctaLabel: "Back to valuation support",
    ctaHref: "/valuation-support-services"
  },
  "bpo-agents": {
    slug: "bpo-agents",
    eyebrow: "BPO agents",
    title: "Stop Competing on Access. Start Competing on Value.",
    summary: "The real estate industry is changing quickly. BPO-focused agents can thrive by becoming trusted local valuation professionals instead of being seen as interchangeable transaction help.",
    intro: [
      "Technology, portals, automated valuation models, iBuyers, and low-service brokerage models are changing how consumers perceive real estate work. Tasks like opening doors, setting up searches, or filling out standard paperwork are easier to commoditize.",
      "Agents who want to thrive need a stronger professional identity. BPO skills help agents lead with market analysis, condition awareness, comparable evidence, repair feasibility, and clear client-ready reporting."
    ],
    cards: [
      { title: "The market has shifted", text: "Consumers have more tools, more data, and more options. Agents need to show judgment that software cannot fully replace." },
      { title: "Move beyond the basic CMA", text: "A BPO approach turns pricing into a deeper analysis of condition, market behavior, repair impact, and buyer demand." },
      { title: "Serve higher-value clients", text: "Investors, distressed sellers, inherited-property owners, professionals, and private transaction parties need more than generic sales advice." },
      { title: "Build a valuation practice", text: "Repeatable forms, report packages, and peer learning help agents grow as valuation support professionals." }
    ],
    supportTitle: "Why we built this service.",
    supportText: "This platform gives BPO-focused agents a structured workspace for report creation, consistent valuation support forms, professional presentation, and future training, collaboration, and network opportunities.",
    ctaLabel: "Open member tools",
    ctaHref: "/login"
  }
};

export const serviceSectionSlugs = ["seller-services", "buyer-services", "valuation-support-services"] as const;

export function getPublicPage(slug: string): InfoPage {
  const page = publicPages[slug];
  if (!page) {
    throw new Error(`Public page not found: ${slug}`);
  }
  return page;
}

export function getPageUrl(page: InfoPage): string {
  return page.parentSlug ? `/${page.parentSlug}/${page.slug}` : `/${page.slug}`;
}
