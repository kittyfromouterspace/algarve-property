/**
 * PROPERTY DATA
 * =============
 * Edit this file to update all property details on the site.
 * Images: replace the placeholder URLs with your own files in /public/images/
 * e.g. change "https://images.unsplash.com/..." to "/images/hero.jpg"
 */

export const property = {
  // Basic info
  name: "Serra do Caldeirão Estate",
  tagline: "Your New Life in the Algarve — Ready and Waiting",
  location: "Algarve Backcountry, Portugal",
  price: "Price on Request", // or e.g. "€795,000"

  // Hero section
  hero: {
    image: "/algarve-property/images/drone-aerial-new.jpg",
    alt: "Aerial view of the estate on the Algarve hilltop",
  },

  // Property overview
  overview: {
    landSize: "2.5 hectares (25,000 m²)",
    mainHouses: 2,
    pool: true,
    additionalBuildings: [
      "Meditation house",
      "Laundry house",
      "Bar",
      "Sleepout",
      "Storage buildings",
    ],
    factoryBuilding: "~700 m² (currently workshops & storage)",
    furnished: true,
    carIncluded: true,
    views: "Unobstructed panoramic views from the 2nd highest mountain range in the Algarve, overlooking the hills down to the coastline",
  },

  // Description paragraphs
  description: [
    "Perched on the second-highest mountain range in the Algarve, this extraordinary 2.5-hectare estate offers something rare: a complete, ready-to-live life in one of Europe's most desirable regions.",
    "Two fully furnished houses, a swimming pool, a meditation house, a bar, and multiple outbuildings sit among terraced gardens with unobstructed views stretching from the rolling hills of the Serra do Caldeirão all the way down to the Atlantic coastline.",
    "For the entrepreneur or creative, there's a remarkable ~700 m² former factory building — currently used for workshops and storage — waiting to become whatever you dream: a retreat center, artist studios, co-working space, or boutique production facility.",
    "This is not just a property. It's an entire lifestyle, ready for someone who wants to arrive with a suitcase and start living. Fully furnished, right down to a car included in the sale.",
  ],

  // Gallery images
  gallery: [
    {
      src: "/algarve-property/images/landscape.jpg",
      alt: "Panoramic view of the Algarve hills",
      caption: "The View",
    },
    {
      src: "/algarve-property/images/house-exterior.jpg",
      alt: "Main house exterior",
      caption: "Main House",
    },
    {
      src: "/algarve-property/images/pool-sunset.jpg",
      alt: "Swimming pool at sunset",
      caption: "Pool at Golden Hour",
    },
    {
      src: "/algarve-property/images/terrace.jpg",
      alt: "Terrace with outdoor seating",
      caption: "Terrace",
    },
    {
      src: "/algarve-property/images/garden.jpg",
      alt: "Garden and landscaping",
      caption: "Gardens",
    },
    {
      src: "/algarve-property/images/meditation.jpg",
      alt: "Meditation house",
      caption: "Meditation House",
    },
  ],

  // Video placeholder
  // REPLACE: Add your video URL (YouTube embed, Vimeo, or self-hosted mp4)
  video: {
    // Set to null to hide the video section, or add a URL when ready
    url: null as string | null, // e.g. "https://www.youtube.com/embed/VIDEO_ID" or "/video/walkthrough.mp4"
    poster: "/algarve-property/images/pool-sunset.jpg",
  },

  // Key features for the highlights section
  highlights: [
    { icon: "house", title: "2 Houses", description: "Fully furnished and move-in ready" },
    { icon: "pool", title: "Swimming Pool", description: "Private pool with panoramic views" },
    { icon: "factory", title: "700 m² Building", description: "Former factory — endless potential" },
    { icon: "meditation", title: "Meditation House", description: "Dedicated space for mindfulness" },
    { icon: "bar", title: "Bar & Sleepout", description: "Entertainment ready" },
    { icon: "car", title: "Car Included", description: "Hit the ground running" },
    { icon: "views", title: "Stunning Views", description: "Hills to coastline, unobstructed" },
    { icon: "land", title: "2.5 Hectares", description: "Space to breathe and grow" },
  ],

  // Lifestyle / ideal buyer section
  idealFor: [
    {
      title: "Expats Starting Fresh",
      description: "Everything is in place — furnished homes, car, infrastructure. Arrive and begin your Portuguese chapter immediately.",
    },
    {
      title: "Retreat & Wellness",
      description: "Meditation house, pool, panoramic serenity, and space for groups. A natural wellness destination.",
    },
    {
      title: "Creative Entrepreneurs",
      description: "The 700 m² factory building is a blank canvas for studios, workshops, co-working, or small-scale production.",
    },
    {
      title: "Rural Tourism",
      description: "Portugal's turismo rural sector is booming. Multiple buildings, stunning location, and existing infrastructure.",
    },
  ],

  // Location details
  location_details: {
    region: "Serra do Caldeirão, Algarve",
    nearestTown: "TBD", // Update with actual nearest town
    airport: "Faro Airport — approx. 45 minutes",
    coast: "Approx. 40 minutes to the nearest beach",
    supermarket: "Approx. 15 minutes to the nearest supermarket",
    description: "The Algarve backcountry is a world apart from the busy coastal resorts. Rolling hills, cork oak forests, traditional villages, and a pace of life that lets you breathe. Yet the beaches, restaurants, and international airport are just a short drive away. The property's central location makes the entire Algarve your playground — from the dramatic wild west coast to the calm eastern beaches near the Spanish border. Fancy a day trip? Both Lisbon and Sevilla are only about 2.5 hours by car, putting two of Iberia's most vibrant cities within easy reach.",
  },

  // Contact info
  contact: {
    name: "Lenz", // or however you want to appear
    email: "TBD@example.com", // REPLACE with actual email
    phone: null as string | null, // REPLACE if you want to show a phone number
    whatsapp: null as string | null, // REPLACE with WhatsApp number if desired
  },
};
