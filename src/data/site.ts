// Everything the site says lives here. Change names, numbers, prices, towns and reviews
// in this file and every page picks it up.

export const site = {
  name: "Halvorsen Plumbing & Drain",
  shortName: "Halvorsen",
  tagline: "Plumbing and drain repair in Marlow County",
  description:
    "Family plumbing and drain company serving Marlow County, Minnesota since 1998. Emergency repairs around the clock, water heaters, drains, repipes and sewer camera inspections, with prices published up front.",
  phone: "(612) 555-0148",
  phoneHref: "tel:+16125550148",
  emergencyNote: "Answered by a plumber, day or night",
  email: "office@halvorsenplumbing.example",
  address: {
    street: "2210 Mill Road",
    city: "Aldersgate",
    region: "MN",
    postal: "55390",
    country: "US",
  },
  // Sample license number. Replace with your own before going live.
  license: "MN Plumbing Contractor PC-0000000 (sample)",
  insured: "Bonded and insured, $2M general liability",
  since: 1998,
  hours: [
    { days: "Monday to Friday", time: "7:00 am to 6:00 pm" },
    { days: "Saturday", time: "8:00 am to 2:00 pm" },
    { days: "Emergencies", time: "24 hours, every day" },
  ],
  nav: [
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/areas", label: "Areas" },
    { href: "/reviews", label: "Reviews" },
  ],
  quoteTopics: ["Drain or sewer", "Water heater", "Leak or repipe", "Fixture install", "Camera inspection", "Something else"],
  urgency: ["Emergency, water is running now", "In the next day or two", "This week", "Planning ahead"],
};

export type Service = {
  slug: string;
  name: string;
  summary: string;
  jobs: string[];
  from: number;
  time: string;
};

export const services: Service[] = [
  {
    slug: "drains",
    name: "Drain cleaning",
    summary:
      "Kitchen, bath and floor drains cleared with the right cable for the pipe, then run with hot water so you can see it flows before we leave.",
    jobs: ["Sink, tub and shower clogs", "Main line backups", "Floor drains and laundry standpipes", "Hydro jetting for grease and roots"],
    from: 145,
    time: "Most clogs cleared in under an hour",
  },
  {
    slug: "water-heaters",
    name: "Water heaters",
    summary:
      "Tank and tankless heaters repaired or replaced, hauled away and permitted. We carry the common 40 and 50 gallon tanks on the truck.",
    jobs: ["Same-day tank replacement", "Tankless installs and descaling", "Pilot, thermocouple and element repairs", "Expansion tanks and code updates"],
    from: 1650,
    time: "Same-day replacement on most tanks",
  },
  {
    slug: "leaks",
    name: "Leaks and repipes",
    summary:
      "From a weeping fitting under the sink to a whole-house repipe in PEX or copper. We find the leak first and show you before we cut.",
    jobs: ["Burst and frozen pipes", "Slab and wall leak location", "Whole-house PEX repipes", "Main shutoff valve replacement"],
    from: 185,
    time: "Leak located on the first visit",
  },
  {
    slug: "fixtures",
    name: "Fixtures",
    summary:
      "Faucets, toilets, disposals, sump pumps and outdoor spigots fitted level and sealed, with the old ones taken away.",
    jobs: ["Toilet repair and replacement", "Faucets and disposals", "Sump pumps and battery backups", "Frost-free outdoor spigots"],
    from: 165,
    time: "Bring your own fixture or pick from ours",
  },
  {
    slug: "camera",
    name: "Sewer camera inspection",
    summary:
      "A camera down the line shows roots, bellies and breaks before you dig. You get the recording and a marked-up report the same day.",
    jobs: ["Pre-purchase home inspections", "Recurring backups", "Locating and depth marking", "Recording and written report"],
    from: 295,
    time: "Report and video the same day",
  },
];

// Pricing guide. Ranges are what most jobs land in; we confirm a fixed price before starting.
export const pricing = {
  callOut: { label: "Service call (waived if we do the work)", price: 89 },
  hourly: { label: "Labor, per hour after the first", price: 128 },
  afterHours: { label: "Nights, weekends and holidays", note: "Labor at 1.5 times the standard rate, no extra call-out fee" },
  jobs: [
    { job: "Clear a sink, tub or shower drain", from: 145, to: 260 },
    { job: "Clear a main sewer line", from: 295, to: 545 },
    { job: "Replace a toilet (fixture supplied by you)", from: 240, to: 380 },
    { job: "Replace a kitchen faucet", from: 195, to: 320 },
    { job: "Replace a 50 gallon gas water heater", from: 1650, to: 2400 },
    { job: "Install a tankless water heater", from: 3800, to: 5600 },
    { job: "Replace the main shutoff valve", from: 360, to: 640 },
    { job: "Sewer camera inspection with report", from: 295, to: 395 },
    { job: "Repipe a two-bath house in PEX", from: 6800, to: 9900 },
  ],
  notes: [
    "Every price is fixed and agreed before we start. If the job grows, we stop and ask.",
    "Parts are included in the ranges above unless noted.",
    "Permits are pulled and included where the county requires them.",
  ],
};

export const areas = [
  { town: "Aldersgate", zips: ["55390", "55391"], note: "Our shop is here" },
  { town: "Birch Falls", zips: ["55384"] },
  { town: "Cold Spring Lake", zips: ["55387", "55388"] },
  { town: "Dunmore", zips: ["55395"] },
  { town: "Elk Prairie", zips: ["55396"] },
  { town: "Fenwick", zips: ["55397", "55398"] },
  { town: "Harlow Junction", zips: ["55381"] },
  { town: "Lindqvist", zips: ["55382"] },
  { town: "North Marlow", zips: ["55385"] },
  { town: "Osler", zips: ["55386"] },
  { town: "Pine Ridge Township", zips: ["55389"] },
  { town: "Thorsby", zips: ["55399"] },
];

export const areaNote =
  "No trip charge anywhere in Marlow County. Just outside it? Call and ask, we often go a few miles further.";

// Sample reviews written for this template. Replace them with real ones from your customers.
export const reviews = [
  {
    name: "Dana K.",
    town: "Birch Falls",
    job: "Water heater",
    date: "October 2026",
    text: "Our tank let go on a Sunday night. Erik was here by 9:40, had the water off and a new heater in by noon Monday. The price was the one he quoted on the phone.",
  },
  {
    name: "Marcus T.",
    town: "Aldersgate",
    job: "Main line",
    date: "September 2026",
    text: "They ran a camera after clearing the line and showed us the roots at the property line. No pressure to dig. We got the video emailed the same afternoon.",
  },
  {
    name: "Priya and Sam R.",
    town: "Cold Spring Lake",
    job: "Repipe",
    date: "August 2026",
    text: "Whole house repiped in three days. They put drop cloths everywhere, patched the access holes neatly and walked us through every shutoff at the end.",
  },
  {
    name: "Helen O.",
    town: "Fenwick",
    job: "Leak",
    date: "July 2026",
    text: "Found a pinhole leak behind the shower wall without opening the whole wall. One small hole, fixed and capped. Fair price and on time.",
  },
  {
    name: "Ray B.",
    town: "Thorsby",
    job: "Sump pump",
    date: "June 2026",
    text: "Replaced our sump pump and added a battery backup before the spring rains. Clear explanation of both options and what each one cost.",
  },
  {
    name: "Ingrid L.",
    town: "Lindqvist",
    job: "Faucet",
    date: "May 2026",
    text: "Small job, a kitchen faucet, and they still showed up in the window they gave me and cleaned up after. Will call again.",
  },
];

export const promises = [
  { title: "A plumber answers", text: "Call any hour and you talk to one of us, not a call center." },
  { title: "Price before work", text: "You agree a fixed price before we pick up a tool." },
  { title: "Two-year labor warranty", text: "If our work fails, we come back and fix it at no charge." },
];

export const formatPrice = (n: number) => `$${n.toLocaleString("en-US")}`;
