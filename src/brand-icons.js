// Logos are bundled in public/icons/devicon so the site does not depend on a CDN.
const devicon = (name, file = `${name}-original.svg`) => `/icons/devicon/${file}`;
const simple = (slug, color) => `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ''}`;

// Colored Devicon artwork is preferred for developer technologies. Simple Icons
// fills the gaps for products and deployment platforms that Devicon does not cover.
export const brandIconSources = {
  'REST APIs': ['https://api.iconify.design/mdi/api.svg?color=%2364558A'],
  'WDD330 API': ['https://api.iconify.design/mdi/api.svg?color=%2364558A'],
  HTML: [devicon('html5')],
  CSS: [devicon('css3')],
  JavaScript: [devicon('javascript')],
  React: [devicon('react')],
  'Node.js': [devicon('nodejs')],
  // Official Express.js glyph/wordmark assets (the compact glyph is used
  // first so it remains recognizable inside the small tool icon box).
  Express: ['https://expressjs.com/images/logos/logo-white.svg', 'https://expressjs.com/images/logos/logo-express-black.svg'],
  'Express.js': ['https://expressjs.com/images/logos/logo-white.svg', 'https://expressjs.com/images/logos/logo-express-black.svg'],
  Python: [devicon('python')],
  'C#': [devicon('csharp')],
  'Next.js': [devicon('nextjs'), simple('nextdotjs', '000000')],
  'Tailwind CSS': [devicon('tailwindcss')],
  Vite: [devicon('vitejs')],
  Blazor: [devicon('blazor')],
  'Chart.js': [devicon('chartjs')],
  '.NET': [devicon('dotnetcore'), simple('dotnet', '512BD4')],
  'ASP.NET Core': [devicon('dotnetcore'), simple('dotnet', '512BD4')],
  GraphQL: [devicon('graphql', 'graphql-plain.svg')],
  'Swagger / OpenAPI': [devicon('swagger')],
  Supabase: [devicon('supabase'), simple('supabase', '3ECF8E')],
  MongoDB: [devicon('mongodb')],
  'MongoDB Atlas': [devicon('mongodb')],
  PostgreSQL: [devicon('postgresql')],
  MySQL: [devicon('mysql')],
  Neo4j: [devicon('neo4j')],
  Shopify: [simple('shopify', '7AB55C')],
  WordPress: [devicon('wordpress')],
  Elementor: [simple('elementor', '92003B')],
  Wix: [simple('wix', '0C6EFC')],
  Figma: [devicon('figma')],
  Git: [devicon('git')],
  GitHub: [devicon('github'), simple('github', '181717')],
  GitLab: [devicon('gitlab')],
  Docker: [devicon('docker')],
  'Docker Desktop': [devicon('docker')],
  DataGrip: [simple('datagrip', '000000')],
  'Visual Studio': [devicon('visualstudio'), simple('visualstudio', '5C2D91')],
  Render: [simple('render', '46E3B7')],
  Netlify: [simple('netlify', '00C7B7')],
  Vercel: [simple('vercel', '000000')],
  'Claude Code': ['https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg', simple('anthropic', 'D97757')],
  Claude: ['https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg', simple('anthropic', 'D97757')],
  'FirstCode.AI': ['https://firstcode.ai/favicon.ico'],
  ChatGPT: ['https://unpkg.com/@lobehub/icons-static-svg@latest/icons/openai.svg', simple('openai', '000000')],
  Codex: ['https://unpkg.com/@lobehub/icons-static-svg@latest/icons/codex-color.svg'],
  Lovable: ['https://lovable.dev/favicon.svg', simple('lovable', 'FF64B4')],
  'Systeme.io': ['https://d1yei2z3i6k35z.cloudfront.net/161/68f241caada76_Logo5.svg'],
  'AI-assisted tools': [simple('openai', '000000')],
  'Web app maintenance': ['https://api.iconify.design/mdi/application-cog-outline.svg?color=%2364558A'],
  'Business integrations': ['https://api.iconify.design/mdi/connection.svg?color=%2364558A'],
  'VS Code': [devicon('vscode')],
  MCP: ['https://api.iconify.design/mdi/transit-connection-variant.svg?color=%2364558A'],
  Capawesome: [simple('capacitor', '119EFF')],
  'App Store Connect': [simple('appstore', '0D96F6')],
  'Google Play Console': [simple('googleplay', '414141')],
  'Payment setup': ['https://api.iconify.design/mdi/credit-card-check-outline.svg?color=%2364558A'],
  'Checkout improvement': ['https://api.iconify.design/mdi/cart-check.svg?color=%2364558A'],
  'Responsive optimization': ['https://api.iconify.design/mdi/responsive.svg?color=%2364558A'],
};

export function getBrandIconSources(name, slug) {
  return [...(brandIconSources[name] || []), ...(slug ? [simple(slug)] : [])].filter(Boolean);
}
