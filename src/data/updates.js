// What's New Updates Data
// Add your latest updates here - they will automatically appear on the homepage
// Keep the most recent updates at the top

export const updates = [
  {
    title: "Cloud Platform, Redesigned",
    description: "Redesigned the Platform UI with cleaner navigation, minimalist design, and a clutter-free experience.",
    type: "Enhancement",
    badge: "updated", // "new" or "updated"
    date: "September 8, 2025",
    link: "/docs/updates/overview#cloud-platform-redefined-for-better-experience",
    category: "Cloud Platform"
  },
  {
    title: "Ccavenue Integration",
    description: "New option to generate Quick Invoice links during conversations for seamless payment collection.",
    type: "Integration",
    badge: "new",
    date: "September 5, 2025",
    link: "/docs/platform_concepts/appConfiguration/ccavenue",
    category: "Integrations"
  },
  {
    title: "MM Lite Global Setting",
    description: "WhatsApp campaigns now support MM Lite API for smarter, Meta-powered message delivery.",
    type: "Enhancement",
    badge: "new",
    date: "November 12, 2025",
    link: "/docs/updates/overview#mm-lite-global-setting",
    category: "Engage"
  },
  {
    title: "JSON Web Token (JWT) Integration",
    description: "Added support for JWT authentication to secure APIs and integrations with signed tokens.",
    type: "Integration",
    badge: "new",
    date: "November 10, 2025",
    link: "/docs/updates/overview#json-web-token-jwt-integration",
    category: "Integrations"
  },
  {
    title: "WhatsApp Consumption Report Aligned with New Pricing",
    description: "Updated WhatsApp reporting to align with Meta's new per-message pricing and free utility messages.",
    type: "Enhancement",
    badge: "updated",
    date: "July 1, 2025",
    link: "/docs/updates/overview#whatsapp-consumption-report-aligned-with-new-pricing-effective-july-1-2025",
    category: "Analytics"
  },
];

// Configuration - how many updates to show on homepage
export const config = {
  maxUpdates: 5, // Change this to show more/fewer cards
  showOnlyNew: false, // Set to true to show only "new" badge items
};

/*
USAGE GUIDE:
============

1. **Adding a New Update:**
   - Add a new object at the TOP of the updates array
   - Fill in all the fields as shown in the examples above

2. **Field Guide:**
   - title: The main headline (keep it concise)
   - description: Brief explanation (1-2 sentences)
   - type: "New Feature", "Integration", "Enhancement", "Bug Fix", "Security Update"
   - badge: "new" (green) or "updated" (blue)
   - date: Any format you prefer (e.g., "March 15, 2025" or "2025-03-15")
   - link: Relative path to your documentation page
   - category: Short category name (shows in bottom-left of card)

3. **To Update the Homepage:**
   - Just edit this file and save
   - The changes will appear immediately in development
   - No need to touch the main index.js file

4. **Examples of Different Types:**
   
   NEW FEATURE:
   {
     title: "AI-Powered Response Generation",
     description: "Automatically generate contextual responses using advanced AI models.",
     type: "New Feature",
     badge: "new",
     date: "March 20, 2025",
     link: "/docs/platform_concepts/ai-responses",
     category: "AI Features"
   }

   INTEGRATION:
   {
     title: "Slack Integration Enhanced",
     description: "New slash commands and improved thread handling for better team collaboration.",
     type: "Integration",
     badge: "updated",
     date: "March 18, 2025",
     link: "/docs/platform_concepts/integrations/slack",
     category: "Integrations"
   }

   ENHANCEMENT:
   {
     title: "Performance Improvements",
     description: "Dashboard loading times reduced by 40% with optimized queries and caching.",
     type: "Enhancement",
     badge: "updated",
     date: "March 15, 2025",
     link: "/docs/platform_concepts/performance",
     category: "Performance"
   }
*/
