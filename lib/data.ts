export interface Residence {
  id: string;
  number: string;
  name: string;
  tagline: string;
  location: string;
  country: string;
  coordinates: string;
  category: 'Coastal' | 'Desert' | 'Forest' | 'Mountain';
  price: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  image: string;
  heroImageDusk?: string;
  heroImageDay?: string;
  description: string;
  specs: {
    plot: string;
    internalArea: string;
    completion: string;
    architect: string;
    materials: string[];
  };
}

export interface FloorPlanHotspot {
  id: string;
  number: string;
  name: string;
  level: 'Ground' | 'Upper' | 'Roof';
  area: string;
  x: number; // percentage
  y: number; // percentage
  image: string;
  description: string;
}

export interface MaterialItem {
  id: string;
  code: string;
  name: string;
  origin: string;
  image: string;
  description: string;
  spec: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
  details: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  scope: string;
}

export interface LocationPin {
  id: string;
  name: string;
  region: string;
  coordinates: string;
  x: number; // map %
  y: number; // map %
  count: number;
  thumbnail: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  client: string;
  residence: string;
  location: string;
  year: string;
}

export interface JournalArticle {
  id: string;
  category: string;
  title: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
}

export const RESIDENCES: Residence[] = [
  {
    id: 'azure-cliff',
    number: '01/04',
    name: 'Azure Cliff Residence',
    tagline: 'Perched in quiet suspension above the Tyrrhenian Sea',
    location: 'Amalfi Coast',
    country: 'Italy',
    coordinates: "40°38'N 14°36'E",
    category: 'Coastal',
    price: 'From €16.8M',
    area: '640 M²',
    bedrooms: 5,
    bathrooms: 6,
    parking: 4,
    image: '/images/residence-azure.jpg',
    heroImageDusk: '/images/hero-dusk.jpg',
    heroImageDay: '/images/hero-day.jpg',
    description: 'Cantilevered white concrete and marine-grade glazing anchored directly into limestone precipice with infinity saltwater pool.',
    specs: {
      plot: '4,200 M²',
      internalArea: '640 M²',
      completion: 'Q4 2024',
      architect: 'Eleni Vane & Meridian Studio',
      materials: ['Board-formed Concrete', 'Roman Travertine', 'Weathered Bronze', 'Frameless Glass']
    }
  },
  {
    id: 'dune-house',
    number: '02/04',
    name: 'Dune House',
    tagline: 'Monolithic rammed earth carved into red canyon cliffs',
    location: 'Southern Utah',
    country: 'United States',
    coordinates: "37°12'N 109°58'W",
    category: 'Desert',
    price: 'From €12.4M',
    area: '520 M²',
    bedrooms: 4,
    bathrooms: 5,
    parking: 3,
    image: '/images/residence-dune.jpg',
    description: 'Subterranean cooling galleries and thermal mass walls engineered with native red iron oxide earth and insulated glazing.',
    specs: {
      plot: '18,500 M²',
      internalArea: '520 M²',
      completion: 'Q2 2025',
      architect: 'Marcus Sterling',
      materials: ['Rammed Earth', 'Canyon Sandstone', 'Blackened Steel', 'Low-Iron Glass']
    }
  },
  {
    id: 'cedar-pavilion',
    number: '03/04',
    name: 'Cedar Pavilion',
    tagline: 'Harmonic timber sanctuary enveloped by ancient bamboo',
    location: 'Kyoto Highlands',
    country: 'Japan',
    coordinates: "35°01'N 135°46'E",
    category: 'Forest',
    price: 'From €14.2M',
    area: '480 M²',
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    image: '/images/residence-cedar.jpg',
    description: 'Traditional joinery married with seismic steel isolation, featuring hinoki cedar screens and volcanic basalt tea chambers.',
    specs: {
      plot: '3,800 M²',
      internalArea: '480 M²',
      completion: 'Q1 2025',
      architect: 'Kenzo Moriyama & Meridian',
      materials: ['Japanese Hinoki Cedar', 'Basalt Flagstone', 'Shoji Washi Glass', 'Raw Brass']
    }
  },
  {
    id: 'tidal-line',
    number: '04/04',
    name: 'Tidal Line',
    tagline: 'Horizontal horizon living above crashing Pacific surge',
    location: 'Big Sur',
    country: 'United States',
    coordinates: "36°14'N 121°48'W",
    category: 'Coastal',
    price: 'From €19.5M',
    area: '710 M²',
    bedrooms: 5,
    bathrooms: 6,
    parking: 4,
    image: '/images/residence-tidal.jpg',
    description: 'Brutalist concrete buttresses grounding a glass cantilever 80 meters above the tide pools with geothermal sea loop heating.',
    specs: {
      plot: '6,400 M²',
      internalArea: '710 M²',
      completion: 'Q3 2025',
      architect: 'Meridian Ocean Studio',
      materials: ['Weathered Concrete', 'Bronze Fascia', 'Triple-Laminated Acoustic Glass']
    }
  },
  {
    id: 'basalt-retreat',
    number: '05/04',
    name: 'Basalt Retreat',
    tagline: 'Sculpted volcanic shelter beneath the aurora borealis',
    location: 'Reykjavik Bluff',
    country: 'Iceland',
    coordinates: "64°08'N 21°55'W",
    category: 'Mountain',
    price: 'From €11.8M',
    area: '460 M²',
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    image: '/images/residence-basalt.jpg',
    description: 'Monolithic charcoal basalt slabs with integrated geothermal floor conduits, sod insulation, and framed glacier panoramas.',
    specs: {
      plot: '24,000 M²',
      internalArea: '460 M²',
      completion: 'Q4 2025',
      architect: 'Astrid Lind',
      materials: ['Flamed Basalt Slabs', 'Triple-Glazed Argon Panels', 'Charred Larch']
    }
  }
];

export const FEATURED_RESIDENCE = {
  name: 'Azure Cliff Residence',
  subtitle: 'The Amalfi Monolith',
  location: 'Amalfi Coast · Italy',
  coordinates: "40°38'24\"N 14°36'11\"E",
  description: 'Conceived as an extrusion of the coastal cliff rather than an intrusion upon it, the Azure Cliff Residence dissolves the barrier between shelter and topography. Every line responds directly to the sun path and sea wind.',
  specs: [
    { label: 'INTERNAL AREA', value: '640 M² / 6,888 SQ FT' },
    { label: 'TERRACES & POOL DECK', value: '410 M² EXTERIOR LIVING' },
    { label: 'PLOT PARCEL', value: '4,200 M² PRIVATE CLIFF' },
    { label: 'BEDROOM SUITES', value: '5 PRIVATE SUITES' },
    { label: 'BATHROOMS', value: '6 SPA BATHROOMS' },
    { label: 'ELEVATION', value: '88M ABOVE SEA LEVEL' },
    { label: 'COMPLETION', value: 'OCTOBER 2024' },
    { label: 'LEAD ARCHITECT', value: 'ELENI VANE, MERIDIAN' }
  ],
  stories: [
    {
      number: '01',
      title: 'Arrival & The Olive Court',
      description: 'Travertine stone slabs guide entry past a century-old olive tree and a linear reflection canal, screening ocean vistas until the threshold is crossed.',
      image: '/images/featured-01-arrival.jpg',
      aspect: '3:4'
    },
    {
      number: '02',
      title: 'Sunken Living & Double-Height Glass',
      description: 'The primary pavilion drops three steps into monolithic stone seating, surrounded by frameless 4.2-meter acoustic glass facing the southern horizon.',
      image: '/images/featured-02-living.jpg',
      aspect: '3:4'
    },
    {
      number: '03',
      title: 'Internal Rainwater Courtyard',
      description: 'An open-sky contemplative void with floating basalt stepping pavers and perforated patinated brass acoustic solar shading.',
      image: '/images/featured-03-courtyard.jpg',
      aspect: '3:4'
    },
    {
      number: '04',
      title: 'Dusk Illumination & Cliff Terrace',
      description: 'Recessed 2700K warm brass downlights preserve night adaptation, framing the moonlit Tyrrhenian waters and distant coastal contours.',
      image: '/images/featured-04-night.jpg',
      aspect: '3:4'
    }
  ]
};

export const FLOOR_PLAN_HOTSPOTS: FloorPlanHotspot[] = [
  {
    id: 'hp-1',
    number: '01',
    name: 'Sunken Grand Salon',
    level: 'Ground',
    area: '118 M²',
    x: 48,
    y: 54,
    image: '/images/room-living.jpg',
    description: 'Double-height volume with monolithic fireplace, concealed acoustic soffits, and 12-meter pocketing glass facade.'
  },
  {
    id: 'hp-2',
    number: '02',
    name: 'Primary Master Suite',
    level: 'Upper',
    area: '92 M²',
    x: 74,
    y: 36,
    image: '/images/room-master.jpg',
    description: 'Cantilevered private terrace with outdoor bronze soaking tub and panoramic eastern sunrise aspect.'
  },
  {
    id: 'hp-3',
    number: '03',
    name: 'Sculpture Gallery & Library',
    level: 'Ground',
    area: '64 M²',
    x: 28,
    y: 42,
    image: '/images/room-gallery.jpg',
    description: 'Linear corridor with calibrated skylight apertures designed to showcase large-scale stone sculptures.'
  },
  {
    id: 'hp-4',
    number: '04',
    name: 'Infinity Pool & Solarium Deck',
    level: 'Ground',
    area: '240 M²',
    x: 62,
    y: 78,
    image: '/images/featured-01-arrival.jpg',
    description: 'Zero-edge heated saltwater pool cantilevered 8 meters beyond the cliff baseline into open air.'
  },
  {
    id: 'hp-5',
    number: '05',
    name: 'Roof Observational Belvedere',
    level: 'Roof',
    area: '145 M²',
    x: 52,
    y: 32,
    image: '/images/featured-04-night.jpg',
    description: 'Astronomical night terrace with flush linear brass markers aligned with true celestial meridian.'
  }
];

export const MATERIALS: MaterialItem[] = [
  {
    id: 'mat-1',
    code: 'MAT—01',
    name: 'Roman Travertine',
    origin: 'Tivoli Quarry, Italy',
    image: '/images/mat-travertine.jpg',
    description: 'Cross-cut open pore limestone, honed with beeswax to reflect daylight with velvety matte warmth.',
    spec: 'Mohs 3.5 · Compressive 72 MPa'
  },
  {
    id: 'mat-2',
    code: 'MAT—02',
    name: 'Board-Formed Concrete',
    origin: 'Cast In-Situ, High Alumina',
    image: '/images/mat-concrete.jpg',
    description: 'Poured against rough-sawn Douglas fir boards, capturing tactile wood grain in monolithic stone mass.',
    spec: 'Grade C50/60 · Micro-reinforced'
  },
  {
    id: 'mat-3',
    code: 'MAT—03',
    name: 'Smoked European Oak',
    origin: 'Spessart Forest, Germany',
    image: '/images/mat-smoked-oak.jpg',
    description: 'Slow ammonia fumed heartwood with deep charcoal patina and natural open grain oil finish.',
    spec: 'FSC Certified · 24mm Solid'
  },
  {
    id: 'mat-4',
    code: 'MAT—04',
    name: 'Brushed Architectural Brass',
    origin: 'Birmingham Foundry, UK',
    image: '/images/mat-brushed-brass.jpg',
    description: 'Unlacquered alloy 260 engineered to cultivate a warm golden-brown living patina over generations.',
    spec: '70/30 Cu-Zn · Uncoated Living'
  },
  {
    id: 'mat-5',
    code: 'MAT—05',
    name: 'Belgian Raw Linen',
    origin: 'Flanders, Belgium',
    image: '/images/mat-raw-linen.jpg',
    description: 'Unbleached natural flax woven on antique mechanical looms for acoustic wall panelling and upholstery.',
    spec: '680 g/m² · Acoustic NRC 0.75'
  },
  {
    id: 'mat-6',
    code: 'MAT—06',
    name: 'Volcanic Flamed Basalt',
    origin: 'Hekla Flow, Iceland',
    image: '/images/mat-basalt.jpg',
    description: 'Micro-crystalline igneous rock thermal flamed to yield a non-slip tactile surface of deep midnight grey.',
    spec: 'Density 2,950 kg/m³ · Zero Porosity'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Site & Listening',
    description: 'We dwell on the land across full lunar and seasonal cycles before sketching a single stroke.',
    duration: '4–6 WEEKS',
    details: 'Topographic LiDAR scans, solar azimuth charting, local stone provenance tracing, and wind aerodynamic modeling.'
  },
  {
    step: '02',
    title: 'Concept & Blueprint',
    description: 'Hand-drawn graphite studies distilled into precise dimensional geometry and spatial acoustics.',
    duration: '8–12 WEEKS',
    details: '1:20 physical plaster maquettes, 3D daylight rendering, thermal insulation analysis, and structural engineering.'
  },
  {
    step: '03',
    title: 'Craft & Monolith Build',
    description: 'Master masons and cabinetmakers execute every joint with millimeter intolerance.',
    duration: '14–22 MONTHS',
    details: 'In-situ concrete formwork, hand-chiseled stone facing, custom glass extrusion, and concealed building systems.'
  },
  {
    step: '04',
    title: 'Handover & Stewardship',
    description: 'A living archive and dedicated physical curator for the lifetime of the architecture.',
    duration: 'CONTINUOUS',
    details: 'Digital twin operational telemetry, annual material seasoning inspection, and bespoke seasonal commissioning.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    number: '01',
    title: 'Architectural Design',
    description: 'Ground-up residential masterpieces calibrated to topography, light, and private client lifestyles.',
    scope: 'Concept to Full Construction Administration'
  },
  {
    id: 'srv-2',
    number: '02',
    title: 'Interior Architecture',
    description: 'Custom millwork, bespoke bronze fixtures, and material harmony that honors architectural bone.',
    scope: 'Spatial Planning, Custom Furniture, Curation'
  },
  {
    id: 'srv-3',
    number: '03',
    title: 'Landscape & Topography',
    description: 'Rewilding native micro-ecologies, reflecting water bodies, and terraced agricultural dry-stone walls.',
    scope: 'Botanical Curation, Water Design, Hardscaping'
  },
  {
    id: 'srv-4',
    number: '04',
    title: 'Master Planning & Estates',
    description: 'Private multi-structure compounds, vineyards, and generational coastal parcels spanning acreage.',
    scope: 'Zoning Strategy, Multi-Structure Planning'
  },
  {
    id: 'srv-5',
    number: '05',
    title: 'Historic Restoration',
    description: 'Careful preservation of landmark stone structures infused with invisible modern building physics.',
    scope: 'Archaeological Conservation, Modernization'
  },
  {
    id: 'srv-6',
    number: '06',
    title: 'Private Advisory & Acquisition',
    description: 'Confidential site scouting and topographical feasibility advisory for off-market land holdings.',
    scope: 'Global Land Scouting, Feasibility Studies'
  }
];

export const LOCATIONS: LocationPin[] = [
  {
    id: 'loc-1',
    name: 'Amalfi Coast',
    region: 'Italy',
    coordinates: "40°38'N 14°36'E",
    x: 52.8,
    y: 35.6,
    count: 6,
    thumbnail: '/images/residence-azure.jpg'
  },
  {
    id: 'loc-2',
    name: 'Southern Utah',
    region: 'United States',
    coordinates: "37°12'N 109°58'W",
    x: 20.4,
    y: 36.8,
    count: 4,
    thumbnail: '/images/residence-dune.jpg'
  },
  {
    id: 'loc-3',
    name: 'Kyoto Highlands',
    region: 'Japan',
    coordinates: "35°01'N 135°46'E",
    x: 82.2,
    y: 37.4,
    count: 5,
    thumbnail: '/images/residence-cedar.jpg'
  },
  {
    id: 'loc-4',
    name: 'Big Sur Coast',
    region: 'United States',
    coordinates: "36°14'N 121°48'W",
    x: 17.5,
    y: 37.2,
    count: 3,
    thumbnail: '/images/residence-tidal.jpg'
  },
  {
    id: 'loc-5',
    name: 'Reykjavik Bluff',
    region: 'Iceland',
    coordinates: "64°08'N 21°55'W",
    x: 46.2,
    y: 20.1,
    count: 2,
    thumbnail: '/images/residence-basalt.jpg'
  },
  {
    id: 'loc-6',
    name: 'Engadin Valley',
    region: 'Switzerland',
    coordinates: "46°29'N 09°50'E",
    x: 51.4,
    y: 32.8,
    count: 4,
    thumbnail: '/images/cta-night.jpg'
  },
  {
    id: 'loc-7',
    name: 'Tramuntana Ridge',
    region: 'Mallorca',
    coordinates: "39°45'N 02°42'E",
    x: 50.1,
    y: 36.4,
    count: 3,
    thumbnail: '/images/featured-01-arrival.jpg'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote: 'MERIDIAN taught us that true luxury is not excessive ornamentation, but how morning light sculpts a single stone wall.',
    client: 'Lord & Lady Harrington',
    residence: 'Azure Cliff Residence',
    location: 'Amalfi Coast',
    year: '2024'
  },
  {
    id: 't-2',
    quote: 'In thirty years of collecting art, our greatest sculpture is the home we awaken inside every single morning.',
    client: 'Daisuke & Emi Takahashi',
    residence: 'Cedar Pavilion',
    location: 'Kyoto Highlands',
    year: '2023'
  },
  {
    id: 't-3',
    quote: 'They captured the silence of the desert so completely that the house feels as though it was born with the canyon.',
    client: 'Victoria & Julian Vance',
    residence: 'Dune House',
    location: 'Utah',
    year: '2024'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'j-1',
    category: 'ESSAY · ARCHITECTURE',
    title: 'The Geometry of Silence: Why Empty Space is the Ultimate Substance',
    readTime: '6 MIN READ',
    date: 'OCT 2026',
    image: '/images/journal-01.jpg',
    excerpt: 'An inquiry into reductive architecture, thermal stillness, and why modern luxury retreats require sensory deceleration.'
  },
  {
    id: 'j-2',
    category: 'MATERIALITY · CRAFT',
    title: 'Living Brass & Honest Stone: Sourcing from 300-Year-Old European Quarries',
    readTime: '4 MIN READ',
    date: 'SEP 2026',
    image: '/images/journal-02.jpg',
    excerpt: 'How natural oxidation in unlacquered alloys creates an ever-evolving architectural biography of touch.'
  },
  {
    id: 'j-3',
    category: 'CASE STUDY',
    title: 'Cantilevers Over Surf: Structural Physics of the Big Sur Precipice',
    readTime: '8 MIN READ',
    date: 'AUG 2026',
    image: '/images/journal-03.jpg',
    excerpt: 'Deep-drilled seismic anchoring and post-tensioned concrete technology that permits 14-meter overhangs into empty space.'
  }
];
