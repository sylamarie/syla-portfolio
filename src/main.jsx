import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Check, Copy, GraduationCap, BriefcaseBusiness, Code2, HardDrive, Mail, Moon, Send, Sun, UserRound, Home, MapPin, Download, ChevronDown, ChevronLeft, ChevronRight, Layers, Images, X } from 'lucide-react';
import './styles.css';
import './reference.css';
import { CredentialsPage, ToolsSection, portfolioProjects, toolGroups } from './portfolio-content';
import { getBrandIconSources } from './brand-icons';
import './quality.css';

const tools = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Next.js', 'Python', 'C#', '.NET', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'MySQL', 'Shopify', 'WordPress', 'Systeme.io', 'Supabase', 'Git', 'GitHub', 'GitLab', 'Docker Desktop', 'DataGrip', 'Visual Studio', 'Neo4j', 'GraphQL', 'Vercel', 'Render', 'Netlify', 'Claude Code', 'Codex'];
const serviceOffers = [
  { number: '01', title: 'Web application development', description: 'Dashboards, portals, SaaS products, and internal tools that make complex work feel simple.', tags: ['Frontend', 'Auth', 'APIs', 'Data'], tools: [['HTML', 'html5'], ['CSS', 'css3'], ['JavaScript', 'javascript'], ['React', 'react'], ['Next.js', 'nextdotjs'], ['Node.js', 'nodedotjs'], ['Express.js', 'express'], ['C#', 'csharp'], ['.NET', 'dotnet'], ['MongoDB', 'mongodb'], ['PostgreSQL', 'postgresql'], ['GraphQL', 'graphql'], ['Docker', 'docker'], ['Render', 'render']] },
  { number: '02', title: 'Websites & e-commerce', description: 'Responsive websites and online stores designed to explain your value and help customers take action.', tags: ['Websites', 'Shopify', 'WordPress', 'Conversion'], tools: [['HTML', 'html5'], ['CSS', 'css3'], ['JavaScript', 'javascript'], ['React', 'react'], ['Next.js', 'nextdotjs'], ['Shopify', 'shopify'], ['WordPress', 'wordpress'], ['Elementor', 'elementor'], ['Systeme.io', null], ['Wix', 'wix'], ['Figma', 'figma'], ['GitHub', 'github'], ['Netlify', 'netlify']] },
  { number: '03', title: 'Mobile-first apps & publishing support', description: 'Mobile-first product experiences that stay clear across phones, tablets, and desktop, plus hands-on help preparing apps for Google Play and the App Store.', tags: ['Mobile UI', 'Responsive', 'Google Play', 'App Store prep'], tools: [['HTML', 'html5'], ['CSS', 'css3'], ['JavaScript', 'javascript'], ['React', 'react'], ['Vite', 'vite'], ['Tailwind CSS', 'tailwindcss'], ['REST APIs', null], ['Figma', 'figma'], ['GitHub', 'github']] },
  { number: '04', title: 'UI implementation & product development', description: 'Figma designs and product ideas turned into polished interfaces, components, and working features.', tags: ['Figma to code', 'Components', 'Interactions', 'API integration'], tools: [['Figma', 'figma'], ['HTML', 'html5'], ['CSS', 'css3'], ['JavaScript', 'javascript'], ['React', 'react'], ['Tailwind CSS', 'tailwindcss'], ['Vite', 'vite'], ['GitHub', 'github']] },
  { number: '05', title: 'AI & modern development tools', description: 'Practical AI integrations and automation that improve the product without adding unnecessary complexity.', tags: ['AI features', 'Automation', 'Workflows', 'AI-assisted'], tools: [['Claude', null], ['Codex', null], ['ChatGPT', 'openai'], ['Lovable', null], ['REST APIs', null], ['GraphQL', 'graphql'], ['GitHub', 'github'], ['Cursor', 'cursor']] },
  { number: '06', title: 'Existing project development & improvement', description: 'A reliable development partner for bug fixes, new features, UI improvements, integrations, and production readiness.', tags: ['Maintenance', 'Features', 'Bug fixing', 'Deployment'], tools: [['Git', 'git'], ['GitHub', 'github'], ['GitLab', 'gitlab'], ['Docker', 'docker'], ['Visual Studio', 'visualstudio'], ['DataGrip', null], ['React', 'react'], ['.NET', 'dotnet'], ['MongoDB', 'mongodb'], ['Render', 'render'], ['Netlify', 'netlify']] },
];
const workExperiences = [
  { number: '01', title: 'Tech Engineer / App Builder Maintenance', company: 'Best Life AI', period: 'Jul 2026 — Present', description: 'Owned the maintenance and improvement of Callira, Easy Chater, and Remote Buddy, handling updates, fixes, integrations, testing, and mobile publishing.', overview: 'Owned the ongoing maintenance and improvement of Callira, Remote Buddy, and Easy Chater. Independently handled feature updates, UI/UX improvements, bug fixes, integrations, testing, and mobile publishing support.', responsibilityLabel: 'Core responsibilities', responsibilities: ['Maintained and improved the UI/UX of Callira, Remote Buddy, and Easy Chater.', 'Delivered feature updates and resolved UI, responsive-layout, and application issues.', 'Troubleshot integrations across the apps and maintained reliable business workflows.', 'Used GitHub for pull changes, review updates, testing, and release support.'], accomplishments: ['Helped prepare Callira, Remote Buddy, and Easy Chater for iOS/App Store publishing.', 'Worked with App Store Connect and Capawesome during the preparation and publishing process.', 'Successfully helped publish Callira on Google Play.'], products: ['Callira', 'Remote Buddy', 'Easy Chater'], platforms: ['GitHub', 'Business-system integrations', 'AI-assisted development'], tools: [['GitHub', 'github'], ['AI-assisted tools', null], ['Web app maintenance', null], ['Business integrations', null]], workflowTools: ['VS Code', 'Codex', 'MCP', 'GitHub', 'Lovable', 'Capawesome', 'App Store Connect', 'Google Play Console'], mobilePublishing: ['Prepared Callira, Remote Buddy, and Easy Chater for iOS/App Store publishing.', 'Used App Store Connect and Capawesome during preparation and publishing.', 'Helped successfully publish Callira on Google Play.'], previews: [{ name: 'Callira', src: '/work-experience/callira.png', alt: 'Full-page Callira web app screenshot' }, { name: 'Remote Buddy', src: '/work-experience/remote-buddy.png', alt: 'Full-page Remote Buddy web app screenshot' }, { name: 'Easy Chater', src: '/work-experience/easy-chater.png', alt: 'Full-page Easy Chater web app screenshot' }], links: [] },
  { number: '02', title: 'Full-Stack Software Developer', company: 'First Code Solutions', period: 'Jun — Jul 2026', description: 'Worked as a Full-Stack Developer on BarkBuildings, contributing to frontend and backend improvements with my Tech Lead through tickets coordinated by our Project Manager.', detailKind: 'barkbuildings', overview: 'Worked as a Full-Stack Developer on BarkBuildings, a property-management platform for pet-friendly residential communities. I contributed to frontend and backend improvements with my Tech Lead, following development tickets coordinated by our Project Manager.', projectAbout: 'BarkBuildings is a property-management platform for pet-friendly residential communities. It helps teams manage pet applications, maintenance tickets, notifications, and synchronized tenant and property information.', contributions: ['Worked across both the frontend and backend of BarkBuildings.', 'Improved existing application features and implemented changes from assigned development tickets.', 'Worked closely with my Tech Lead while developing, testing, and reviewing changes.', 'Followed tickets and tasks organized with the Project Manager and the team development workflow.', 'Worked with the React frontend and .NET/backend services.', 'Worked with GraphQL APIs and the application data layer.', 'Used Neo4j with the application’s graph-based data.', 'Used DataGrip for database inspection and development-related database work.', 'Used GitLab for source control, branches, merge requests, and the team workflow.', 'Used Docker Desktop while running the application services locally.', 'Used Visual Studio for backend/.NET development.', 'Used MCP with Claude as part of the AI-assisted development workflow.', 'Used FirstCode.AI as part of the team’s development and ticket workflow.', 'Performed QA checks on assigned changes and verified fixes before review or merge.'], workflow: ['Project Manager / ticket', 'Development', 'Tech Lead collaboration / review', 'GitLab branch / merge request', 'QA / test & validate'], technicalGroups: [{ label: 'Frontend', tools: [['React', 'react'], ['TypeScript', 'typescript'], ['GraphQL / Apollo', 'graphql']] }, { label: 'Backend', tools: [['.NET / C#', 'dotnet'], ['GraphQL', 'graphql'], ['gRPC', null]] }, { label: 'Data', tools: [['Neo4j', 'neo4j'], ['PostgreSQL', 'postgresql'], ['Redis', 'redis']] }, { label: 'Development & workflow', tools: [['GitLab', 'gitlab'], ['Docker Desktop', 'docker'], ['Visual Studio', 'visualstudio'], ['DataGrip', 'datagrip'], ['Claude', null], ['MCP', null], ['FirstCode.AI', null]] }], architecture: ['React SPA frontend', 'API gateway', 'Authentication service', 'Core API service', 'Notification service', 'GraphQL / gRPC communication', 'Neo4j / PostgreSQL / Redis data layer'], projectShowcase: { name: 'BarkBuildings', meta: 'Property Management · Full-Stack Web Application', tags: ['React', 'GraphQL', '.NET', 'Neo4j'] }, responsibilities: ['Developed and tested full-stack features with React and C#/.NET.', 'Connected product flows to GraphQL and Neo4j data services.', 'Collaborated through Git and GitLab branches, merge requests, and reviews.'], accomplishments: ['Improved the BarkBuildings experience with production-minded feature work.', 'Contributed to a review and testing workflow that kept changes easier to validate.'], products: ['BarkBuildings website'], platforms: ['Git', 'GitLab', 'GraphQL API', 'Neo4j'], tools: [['React', 'react'], ['C#', 'csharp'], ['.NET', 'dotnet'], ['GraphQL', 'graphql'], ['Neo4j', 'neo4j'], ['GitLab', 'gitlab']], links: [] },
  { number: '03', title: 'Freelance Web Designer & Developer', company: 'Independent', period: '2024 — 2026', description: 'Edited and built client websites with WordPress, Elementor, Systeme.io, and Wix, including responsive landing pages and sales funnels shaped around each client’s content and goals.', overview: 'Designed and built focused web experiences for clients who needed clear content, responsive layouts, and practical conversion paths.', responsibilities: ['Planned page structure and translated client goals into usable web flows.', 'Built and edited responsive pages with WordPress, Elementor, Systeme.io, and Wix.', 'Shaped landing pages and sales funnels around each client’s content and audience.'], accomplishments: ['Delivered flexible website sections that clients could continue updating.', 'Balanced visual polish with readable, conversion-focused content structure.'], products: ['Client websites', 'Responsive landing pages', 'Sales funnels'], platforms: ['WordPress', 'Elementor', 'Systeme.io', 'Wix'], tools: [['WordPress', 'wordpress'], ['Elementor', 'elementor'], ['Systeme.io', null], ['Wix', 'wix'], ['HTML', 'html5'], ['CSS', 'css3']], links: [{ href: '#projects', label: 'See client work', project: 'WordPress Client Websites' }] },
  { number: '04', title: 'Shopify E-Commerce Web Developer', company: 'Freelance client', period: 'Sep 2024 — Sep 2025', description: 'Edited and maintained a Shopify e-commerce website, improving navigation, mobile responsiveness, performance, payment setup, and the checkout experience.', overview: 'Maintained a Shopify storefront with a focus on making product discovery, purchasing, and mobile use feel dependable.', responsibilities: ['Edited storefront content and improved navigation between products and collections.', 'Refined responsive behavior and performance across mobile and desktop layouts.', 'Supported payment setup, checkout improvements, and day-to-day e-commerce maintenance.'], accomplishments: ['Made the storefront easier to navigate and more consistent on smaller screens.', 'Improved the purchasing flow while preserving the existing Shopify setup.'], products: ['Shopify e-commerce website', 'Product catalogue', 'Checkout experience'], platforms: ['Shopify', 'Payment setup', 'E-commerce admin'], tools: [['Shopify', 'shopify'], ['Payment setup', null], ['Checkout improvement', null], ['Responsive optimization', null]], links: [] },
];
// Home stats: own/team projects vs. client websites (a grouped card holds several sites).
const isClientWork = project => project.category === 'Freelance client work';
const ownProjectCount = portfolioProjects.filter(project => !isClientWork(project)).length;
const clientSiteCount = portfolioProjects.filter(isClientWork).reduce((total, project) => total + (Array.isArray(project.screenshots?.[0]) ? project.screenshots.length : 1), 0);
// Keep the Services marquee synchronized with every tool listed in About.
const serviceMarqueeTools = Object.values(toolGroups).flat();
const serviceFallbackIcons = { LocalStorage: HardDrive };
function ServiceTechIcon({ name, slug }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const sources = getBrandIconSources(name, slug);
  const source = sources[sourceIndex];
  const FallbackIcon = serviceFallbackIcons[name] || Code2;
  const isNeutralConcept = !slug && !sources.length;
  return <span className="service-tech-mark" aria-hidden="true">{source ? <img src={source} alt="" onError={() => setSourceIndex(index => index + 1)} /> : isNeutralConcept ? <FallbackIcon size={12} strokeWidth={2}/> : null}</span>;
}
const experienceToolCategories = new Set(['AI-assisted tools', 'Web app maintenance', 'Business integrations']);
function getExperienceToolEntries(experience) {
  const primaryTools = (experience.tools || []).filter(([name]) => !experienceToolCategories.has(name));
  const workflowTools = (experience.workflowTools || []).map(name => [name, null]);
  const seen = new Set();
  return [...primaryTools, ...workflowTools].filter(([name]) => {
    if (seen.has(name)) return false;
    seen.add(name);
    return true;
  });
}
const experienceBulletHighlights = [
  'App Store Connect', 'Google Play', 'C#/.NET', 'mobile, tablet, and desktop',
  'mobile and desktop layouts', 'responsive-layout', 'full-stack features',
  'application code', 'web applications', 'live versions', 'product catalogue',
  'purchasing flow', 'payment setup', 'checkout improvements', 'mobile responsiveness',
  'responsive pages', 'landing pages', 'sales funnels', 'page structure', 'web flows',
  'UI/UX', 'Callira', 'Remote Buddy', 'Easy Chater', 'MCP', 'Codex', 'VS Code',
  'Lovable', 'GitHub', 'iOS/App Store', 'Capawesome', 'features', 'integrations',
  'BarkBuildings', 'frontend and backend', 'development tickets', 'Tech Lead', 'Project Manager', 'QA checks',
  'React frontend', '.NET/backend services', 'GraphQL APIs', 'data layer', 'graph-based data',
  'database inspection', 'Docker Desktop', 'Visual Studio', 'FirstCode.AI', 'Claude',
  'React', 'TypeScript', 'C#', '.NET', 'GraphQL', 'Neo4j', 'Git', 'GitLab',
  'review and testing workflow', 'WordPress', 'Elementor', 'Systeme.io', 'Wix', 'Shopify',
  'navigation', 'performance', 'storefront', 'product discovery', 'conversion-focused',
  'HTML', 'CSS', 'client goals', 'visual polish'
];
const experienceBulletHighlightPattern = new RegExp(
  `(${experienceBulletHighlights.slice().sort((a, b) => b.length - a.length).map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
  'gi'
);
function ExperienceBullet({ text }) {
  const parts = text.split(experienceBulletHighlightPattern);
  return parts.map((part, index) => {
    const isHighlight = experienceBulletHighlights.some(term => term.toLowerCase() === part.toLowerCase());
    return isHighlight ? <strong key={`${part}-${index}`}>{part}</strong> : <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
  });
}
function ExperiencePreview({ preview }) {
  const [imageFailed, setImageFailed] = useState(false);
  // Hide the preview entirely until its screenshot is added to public/work-experience/.
  if (imageFailed) return null;
  return <figure className="experience-preview">
    <div className="experience-preview-screen">
      <img src={preview.src} alt={preview.alt} onError={() => setImageFailed(true)} loading="lazy" />
    </div>
    <figcaption>{preview.name}</figcaption>
  </figure>;
}
function ExperienceToolBadge({ name, slug }) {
  return <span className="experience-tool experience-fullstack-tool-icon" title={name}>
    <ServiceTechIcon name={name} slug={slug}/><span className="experience-tool-name">{name}</span>
  </span>;
}
function BarkBuildingsProjectShowcase({ project }) {
  return <article className="experience-project-showcase">
    <ExperiencePreview preview={{ name: project.name, src: '/work-experience/barkbuildings.png', alt: 'Full-page BarkBuildings web app screenshot' }}/>
    <div className="experience-project-showcase-meta"><div><strong>{project.name}</strong><span>{project.meta}</span></div><div className="experience-project-tags" aria-label="BarkBuildings technologies">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
  </article>;
}
function BarkBuildingsDetails({ experience }) {
  const technicalTools = [...new Map(experience.technicalGroups.flatMap(group => group.tools).map(([name, slug]) => [name, [name, slug]])).values()];
  const roleOverview = 'Worked across BarkBuildings’ React frontend and .NET backend, delivering and validating ticket-based feature improvements with my Tech Lead and Project Manager.';
  const contributionItems = experience.contributions;
  const workflowItems = experience.workflow;
  return <div className="experience-detail-barkbuildings">
    <section className="experience-detail-section"><p className="experience-detail-label">Overview</p><p className="experience-detail-description">{roleOverview}</p></section>
    <section className="experience-detail-section experience-fullstack-tools"><p className="experience-detail-label">Technologies &amp; tools</p><div className="experience-detail-tools experience-tool-line experience-fullstack-tool-line" aria-label="Technologies and tools used">{technicalTools.map(([name, slug]) => <ExperienceToolBadge key={name} name={name} slug={slug}/>)}</div></section>
    <section className="experience-detail-section"><p className="experience-detail-label">Projects &amp; web apps</p><BarkBuildingsProjectShowcase project={experience.projectShowcase}/></section>
    <section className="experience-detail-section experience-project-about"><p className="experience-detail-label">About the project</p><div className="experience-project-about-card"><h5>BarkBuildings</h5><p>{experience.projectAbout}</p></div></section>
    <section className="experience-detail-section"><p className="experience-detail-label">My contributions</p><ul className="experience-detail-list">{contributionItems.map(item => <li key={item}><ExperienceBullet text={item}/></li>)}</ul></section>
    <section className="experience-detail-section experience-workflow-section"><p className="experience-detail-label">Development workflow</p><ol className="experience-workflow" aria-label="Development workflow">{workflowItems.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>)}</ol></section>
    <section className="experience-detail-section"><details className="experience-architecture"><summary>View technical architecture <ChevronDown size={15}/></summary><ul>{experience.architecture.map(item => <li key={item}>{item}</li>)}</ul></details></section>
  </div>;
}
function GithubMark() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .3"/></svg>;
}
function LeftNavigation({ activePage, dark, setDark }) {
  const nav = [
    ['Home', '#home', Home], ['Projects', '#projects', BriefcaseBusiness], ['Services', '#services', Code2], ['About', '#about', UserRound], ['Contact', '#contact', Mail],
  ];
  return <aside className="rail" aria-label="Main navigation">
    <nav>{nav.map(([name, href, Icon]) => <a aria-label={name} aria-current={activePage === href.slice(1) ? 'page' : undefined} className={activePage === href.slice(1) ? 'active' : ''} href={href} key={name}><Icon size={19} strokeWidth={1.8}/><span>{name}</span></a>)}</nav>
    <div className="rail-bottom"><div className={`theme-switch ${dark ? 'is-dark' : 'is-light'}`} role="group" aria-label="Color theme"><button type="button" className="theme-option theme-option-dark" data-theme-choice="dark" aria-pressed={dark} aria-label="Dark mode" onClick={() => setDark(true)}><Moon size={18} aria-hidden="true"/></button><span className="theme-thumb" aria-hidden="true"/><button type="button" className="theme-option theme-option-light" data-theme-choice="light" aria-pressed={!dark} aria-label="Light mode" onClick={() => setDark(false)}><Sun size={18} aria-hidden="true"/></button></div></div>
  </aside>;
}

// Fanned thumbnails that show a grouped project contains several websites.
function ProjectStack({ project }) {
  const covers = project.screenshots.map(site => site[0]);
  return <span className="project-stack" aria-hidden="true">
    <span className="project-stack-cards">{covers.map((source, index) => <img key={source} src={`/projects/${source}`} alt="" style={{'--stack-index': index}} loading="lazy" />)}</span>
    <span className="project-stack-badge"><Layers size={14}/> {covers.length} websites</span>
  </span>;
}

function ProjectShowcase() {
  const CAROUSEL_DURATION = 560;
  const [active, setActive] = useState(0);
  const [sliding, setSliding] = useState(null);
  const [slidePhase, setSlidePhase] = useState(null);
  const [previewProject, setPreviewProject] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(0);
  const pointerStart = useRef(null);
  const previewDialog = useRef(null);
  const current = portfolioProjects[active];
  const isLifeBudget = project => project.title === 'LifeBudget';
  const getPreviewSrc = project => `/projects/${project.image}`;
  const getScreenshotSources = project => project.screenshots?.length ? project.screenshots : [project.image];
  const getScreenshotLabel = (project, index) => project.screenshotLabels?.[index] || `Project screenshot ${index + 1}`;
  // A screenshot entry can be a list of images: one website shown as a single continuous scroll.
  const isSiteGroup = project => Array.isArray(project.screenshots?.[0]);
  const getScreenshotCount = project => `${getScreenshotSources(project).length} ${isSiteGroup(project) ? 'websites' : 'screenshots'}`;
  const previewScroll = useRef(null);
  useEffect(() => { previewScroll.current?.scrollTo(0, 0); }, [previewIndex, previewProject]);
  const openPreview = project => { setPreviewProject(project); setPreviewIndex(0); };
  const closePreview = () => { previewDialog.current?.close(); setPreviewProject(null); setPreviewIndex(0); };
  const selectProject = (index) => {
    if (index === active || sliding) return;
    const length = portfolioProjects.length;
    const forwardDistance = (index - active + length) % length;
    if (forwardDistance !== 1 && forwardDistance !== length - 1) {
      setActive(index);
      return;
    }
    const direction = forwardDistance === 1 ? 'next' : 'prev';
    setSliding(direction);
    setSlidePhase('from');
    window.requestAnimationFrame(() => window.requestAnimationFrame(() => setSlidePhase('to')));
    window.setTimeout(() => { setActive(index); setSliding(null); setSlidePhase(null); }, CAROUSEL_DURATION + 80);
  };
  const move = (direction) => selectProject((active + direction + portfolioProjects.length) % portfolioProjects.length);
  useEffect(() => { portfolioProjects.forEach(project => { if (project.image || isLifeBudget(project)) { const image = new Image(); image.src = getPreviewSrc(project); } }); }, []);
  useEffect(() => { if (previewProject && previewDialog.current && !previewDialog.current.open) previewDialog.current.showModal(); }, [previewProject]);
  // Other pages (e.g. the freelance role on About) can jump straight to a project.
  useEffect(() => {
    const onShow = event => { const index = portfolioProjects.findIndex(project => project.title === event.detail); if (index >= 0) setActive(index); };
    window.addEventListener('show-project', onShow);
    return () => window.removeEventListener('show-project', onShow);
  }, []);
  useEffect(() => {
    const onKey = event => { if (window.location.hash !== '#projects' || previewProject || event.target.closest?.('input, textarea, select, [contenteditable]')) return; if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); } if (event.key === 'ArrowRight') { event.preventDefault(); move(1); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, sliding, previewProject]);
  const onPointerDown = event => { if (!sliding) pointerStart.current = event.clientX; };
  const onPointerUp = event => { if (pointerStart.current === null) return; const delta = event.clientX - pointerStart.current; pointerStart.current = null; if (Math.abs(delta) > 48) move(delta < 0 ? 1 : -1); };
  const projectAt = index => portfolioProjects[(index + portfolioProjects.length) % portfolioProjects.length];
  const cards = sliding === 'next'
    ? [
        { project: projectAt(active - 1), role: 'slide-next-exit-left' },
        { project: projectAt(active), role: 'slide-next-move-left' },
        { project: projectAt(active + 1), role: 'slide-next-move-center' },
        { project: projectAt(active + 2), role: 'slide-next-enter-right' },
      ]
    : sliding === 'prev'
      ? [
          { project: projectAt(active - 2), role: 'slide-prev-enter-left' },
          { project: projectAt(active - 1), role: 'slide-prev-move-center' },
          { project: projectAt(active), role: 'slide-prev-move-right' },
          { project: projectAt(active + 1), role: 'slide-prev-exit-right' },
        ]
      : [
          { project: projectAt(active - 1), role: 'is-left' },
          { project: projectAt(active), role: 'is-active' },
          { project: projectAt(active + 1), role: 'is-right' },
        ];
  return <div className="project-showcase" role="region" aria-roledescription="carousel" aria-label="Selected projects" style={{'--showcase-image': `url('${getPreviewSrc(current)}')`}}>
    <div className="showcase-browser" aria-hidden="true"><span className="browser-dots"><i/><i/><i/></span><span className="browser-address">⌕&nbsp;&nbsp; syla.dev / {current.title.toLowerCase().replaceAll(' ', '-')}</span></div>
    <p className="sr-only" aria-live="polite" role="status">Project {active + 1} of {portfolioProjects.length}: {current.title}</p>
    <div className={`showcase-stage ${sliding ? `is-sliding-${sliding}` : ''} ${slidePhase ? `is-slide-${slidePhase}` : ''}`} onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerCancel={() => { pointerStart.current = null; }}>
      {cards.map(({ project, role }) => <article className={`showcase-card ${role}`} key={project.number}>
        {role === 'is-active' ? <button type="button" className="showcase-image-link" onClick={() => openPreview(project)} aria-label={`View ${project.title} screenshots`}>
          <div className="showcase-image"><img className={isLifeBudget(project) ? 'lifebudget-preview-image' : undefined} src={getPreviewSrc(project)} alt={`${project.title} project preview — click to view screenshots`} loading="eager" decoding="async" /><span className="showcase-image-hint"><Images size={16}/><span>View screenshots</span><small>{getScreenshotCount(project)}</small></span>{project.stackPreview && <ProjectStack project={project}/>}</div>
        </button> : <div className="showcase-image"><img className={isLifeBudget(project) ? 'lifebudget-preview-image' : undefined} src={getPreviewSrc(project)} alt={`${project.title} project preview`} loading="eager" decoding="async" /></div>}
        <span className="showcase-index">{project.number}</span>
      </article>)}
    </div>
    <div className="showcase-side-controls" aria-label="Desktop project navigation"><span className="showcase-side-zone showcase-side-zone-left"><button type="button" onClick={() => move(-1)} aria-label="Previous project" disabled={Boolean(sliding)}><ChevronLeft/></button></span><span className="showcase-side-zone showcase-side-zone-right"><button type="button" onClick={() => move(1)} aria-label="Next project" disabled={Boolean(sliding)}><ChevronRight/></button></span></div>
    <div className="showcase-footer"><div><p className="eyebrow"><span/> <b className="project-category">{current.category}</b> {current.type}</p><h3>{current.title}</h3><p>{current.text}</p><p className="showcase-stack-label">Project stack</p><div className="showcase-stack-groups" aria-label={`${current.title} technology stack`}>{Object.entries(current.stackDetails || {}).map(([category, values]) => <div className="showcase-stack-group" key={category}><span>{category}</span><strong>{values.join(' · ')}</strong></div>)}</div>{current.url?.includes('onrender.com') && <p className="showcase-note">Hosted on a free plan, so the live site may take about 30 seconds to wake up.</p>}</div>{current.url ? <a className="showcase-link" href={current.url} target="_blank" rel="noreferrer">Visit live site</a> : <button type="button" className="showcase-link" onClick={() => openPreview(current)}>View screenshots <Images size={18}/></button>}</div>
    <div className="showcase-controls"><div>{portfolioProjects.map((project, index) => <button className={index === active ? 'is-active' : ''} key={project.number} onClick={() => selectProject(index)} aria-label={`Show ${project.title}`} aria-current={index === active ? 'true' : undefined} disabled={Boolean(sliding)}/>)}</div></div>
    <dialog ref={previewDialog} className="project-preview-dialog" aria-label={previewProject ? `${previewProject.title} screenshots` : 'Project screenshots'} onCancel={event => { event.preventDefault(); closePreview(); }} onClick={event => { if (event.target === event.currentTarget) closePreview(); }}>
      <button type="button" className="preview-close" onClick={closePreview} aria-label="Close screenshot viewer"><X/></button>
      {previewProject && <>
        <div className="project-preview-heading"><div><p className="eyebrow"><span/> {previewProject.category} · {previewProject.type}</p><h2>{previewProject.title}</h2></div><div className="project-preview-meta">{isSiteGroup(previewProject) ? <span className="preview-counter">Website {previewIndex + 1} of {getScreenshotSources(previewProject).length}</span> : <><strong>{getScreenshotLabel(previewProject, previewIndex)}</strong><span className="preview-counter">{previewIndex + 1} / {getScreenshotSources(previewProject).length}</span></>}</div></div>
        <div className="project-preview-image-wrap" ref={previewScroll}>{[].concat(getScreenshotSources(previewProject)[previewIndex]).map((source, part) => <img key={source} src={`/projects/${source}`} alt={`${getScreenshotLabel(previewProject, previewIndex)}, part ${part + 1}`} />)}</div>
        {getScreenshotSources(previewProject).length > 1 && <div className="project-preview-controls"><button type="button" onClick={() => setPreviewIndex(index => (index - 1 + getScreenshotSources(previewProject).length) % getScreenshotSources(previewProject).length)} aria-label="Previous screenshot"><ChevronLeft/></button><div>{getScreenshotSources(previewProject).map((source, index) => <button type="button" key={source} className={index === previewIndex ? 'is-active' : ''} onClick={() => setPreviewIndex(index)} aria-label={`View ${getScreenshotLabel(previewProject, index)}`} aria-current={index === previewIndex ? 'true' : undefined}/>)}</div><button type="button" onClick={() => setPreviewIndex(index => (index + 1) % getScreenshotSources(previewProject).length)} aria-label="Next screenshot"><ChevronRight/></button></div>}
      </>}
    </dialog>
  </div>;
}

function PageScrollbar({ page }) {
  const [metrics, setMetrics] = useState({ visible: false, top: 0, height: 0 });
  const scrollerRef = useRef(null);
  const dragRef = useRef(null);
  const selectors = { home: '.reference-hero', projects: '#projects>.page-scroll', services: '#services>.page-scroll', about: '#about>.about-scroll-content', credentials: '#credentials>.credential-scroll', contact: '#contact>.page-scroll' };
  useEffect(() => {
    const scroller = document.querySelector(selectors[page]);
    scrollerRef.current = scroller;
    if (!scroller) { setMetrics({ visible: false, top: 0, height: 0 }); return undefined; }
    const update = () => {
      const maxScroll = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
      const trackHeight = Math.max(1, window.innerHeight - 36);
      const thumbHeight = Math.max(42, Math.min(trackHeight, trackHeight * (scroller.clientHeight / Math.max(scroller.scrollHeight, 1))));
      const maxTop = Math.max(0, trackHeight - thumbHeight);
      setMetrics({ visible: maxScroll > 1, top: maxScroll ? (scroller.scrollTop / maxScroll) * maxTop : 0, height: thumbHeight });
    };
    update();
    scroller.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { scroller.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [page]);
  const scrollFromPointer = clientY => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const trackHeight = Math.max(1, window.innerHeight - 36);
    const thumbHeight = metrics.height || 42;
    const maxTop = Math.max(1, trackHeight - thumbHeight);
    const ratio = Math.min(1, Math.max(0, (clientY - 18 - thumbHeight / 2) / maxTop));
    scroller.scrollTop = ratio * (scroller.scrollHeight - scroller.clientHeight);
  };
  const onPointerDown = event => {
    event.preventDefault();
    if (event.currentTarget.setPointerCapture) event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { pointerId: event.pointerId, startY: event.clientY, startTop: metrics.top };
    if (event.target === event.currentTarget) scrollFromPointer(event.clientY);
  };
  const onPointerMove = event => {
    if (!dragRef.current) return;
    const trackHeight = Math.max(1, window.innerHeight - 36);
    const maxTop = Math.max(1, trackHeight - (metrics.height || 42));
    const nextTop = Math.min(maxTop, Math.max(0, dragRef.current.startTop + event.clientY - dragRef.current.startY));
    const scroller = scrollerRef.current;
    if (scroller) scroller.scrollTop = (nextTop / maxTop) * (scroller.scrollHeight - scroller.clientHeight);
  };
  const stopDrag = () => { dragRef.current = null; };
  return <div className={`page-scrollbar ${metrics.visible ? '' : 'is-hidden'}`} aria-hidden="true" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={stopDrag} onPointerCancel={stopDrag}><span className="page-scrollbar-thumb" style={{ height: metrics.height, transform: `translateY(${metrics.top}px)` }}/></div>;
}

function App() {
  const [dark, setDark] = useState(() => { const saved = window.localStorage.getItem('syla-theme'); return saved ? saved === 'dark' : window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false; });
  const [page, setPage] = useState(() => window.location.hash.replace('#', '') || 'home');
  const [selectedExperience, setSelectedExperience] = useState(() => {
    const saved = window.localStorage.getItem('syla-selected-experience');
    if (saved === null) return 0;
    const index = Number(saved);
    return Number.isInteger(index) && index >= 0 && index < workExperiences.length ? index : null;
  });
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText('sylamariecumuyog@outlook.com'); setCopied(true); window.setTimeout(() => setCopied(false), 2200); }
    catch { window.location.href = 'mailto:sylamariecumuyog@outlook.com'; }
  };
  const experienceListRef = useRef(null);
  const experienceListScrollRef = useRef(null);
  const experienceDetailRef = useRef(null);
  const [experiencePointerY, setExperiencePointerY] = useState(null);
  useEffect(() => {
    const names = {home:'Home', projects:'Projects', services:'Services', about:'About', credentials:'Education & Credentials', contact:'Contact'};
    if (!names[page]) { window.location.hash = 'home'; return; }
    document.title = `${names[page]} | Syla Marie Cumuyog — Software Developer`;
    const stage = document.getElementById(page);
    stage?.setAttribute('tabindex', '-1');
    const scroll = stage?.querySelector('.page-scroll, .about-scroll-content, .credential-scroll') || stage;
    scroll?.scrollTo(0, 0);
    stage?.focus({preventScroll:true});
    const targets = stage?.querySelectorAll('.project, .about-experience li, .credential-card') || [];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), {threshold:0.1});
    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, [page]);
  useEffect(() => {
    const onHash = () => {
      const nextPage = window.location.hash.replace('#', '') || 'home';
      setPage(nextPage);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  useEffect(() => { window.localStorage.setItem('syla-theme', dark ? 'dark' : 'light'); document.documentElement.dataset.theme = dark ? 'dark' : 'light'; const themes = { home: dark ? '#718394' : '#aebdca', projects: dark ? '#716d82' : '#b9b5c9', services: dark ? '#707583' : '#b6bac7', about: dark ? '#777268' : '#bdb9ad', credentials: dark ? '#625d70' : '#b9b5c9', contact: dark ? '#665d6e' : '#aaa0b0' }; document.documentElement.style.setProperty('--page-backdrop', themes[page] || themes.home); }, [page, dark]);
  useEffect(() => {
    if (selectedExperience === null) window.localStorage.removeItem('syla-selected-experience');
    else window.localStorage.setItem('syla-selected-experience', String(selectedExperience));
  }, [selectedExperience]);
  useLayoutEffect(() => {
    const list = experienceListRef.current;
    const listScroll = experienceListScrollRef.current;
    const detail = experienceDetailRef.current;
    const row = selectedExperience === null ? null : list?.querySelector('.is-selected');
    if (!list || !listScroll || !detail || !row || window.innerWidth <= 900) { setExperiencePointerY(null); return undefined; }
    const updatePointer = () => {
      const detailRect = detail.getBoundingClientRect();
      const rowRect = row.getBoundingClientRect();
      setExperiencePointerY(rowRect.top + rowRect.height / 2 - detailRect.top);
    };
    updatePointer();
    const observer = new ResizeObserver(updatePointer);
    observer.observe(list);
    observer.observe(listScroll);
    observer.observe(detail);
    observer.observe(row);
    listScroll.addEventListener('scroll', updatePointer, { passive: true });
    window.addEventListener('resize', updatePointer);
    return () => { observer.disconnect(); listScroll.removeEventListener('scroll', updatePointer); window.removeEventListener('resize', updatePointer); };
  }, [selectedExperience, page]);
  const selected = selectedExperience === null ? null : workExperiences[selectedExperience];
  // On phones the detail sits below the list, so bring it into view after a pick.
  const scrollAfterPick = useRef(false);
  const chooseExperience = index => {
    scrollAfterPick.current = window.innerWidth <= 900;
    setSelectedExperience(index);
  };
  useEffect(() => {
    if (!scrollAfterPick.current) return;
    scrollAfterPick.current = false;
    experienceDetailRef.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }, [selectedExperience]);
  const backToRoles = () => experienceListRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return <main className={`${dark ? 'site night' : 'site'} page-${page}`}>
    <a className="skip-link" href={'#'+page} onClick={e=>{e.preventDefault();document.getElementById(page)?.focus();}}>Skip to portfolio content</a>
    <div className="grain" aria-hidden="true" />
    <div className="frame-outline" aria-hidden="true" />
    <header className="topbar">
      <a className="top-pill" href="#projects">My work</a>
      <div className="top-inset"><a href="#about"><MapPin/><span><small>Location</small>Philippines</span></a><a href="#services"><BriefcaseBusiness/><span><small>Expertise</small>Full-stack</span></a><a href="#contact"><Code2/><span><small>Let’s build</small>Your next idea</span></a></div>
      <a className="top-pill" href="#contact">Let’s talk</a>
    </header>
    <LeftNavigation activePage={page} dark={dark} setDark={setDark} />
    <PageScrollbar page={page} />
    <section className="reference-hero" id="home">
    <section className="hero">
      <div className="hero-copy">
        <h1>Full-Stack<br/>Developer</h1>
        <p className="intro">I’m Syla, a developer who turns clear ideas into responsive websites, e-commerce experiences, and reliable product features.</p>
      </div>
      <article className="intro-card"><h2>Make your next idea real</h2><p>From polished websites to full-stack applications, I build responsive digital experiences that are clear, useful, and ready to grow.</p><div className="intro-card-bottom"><div><strong>{ownProjectCount + clientSiteCount}</strong><span>Total works</span><small className="intro-card-breakdown">{ownProjectCount} projects · {clientSiteCount} client sites</small></div><a className="text-button" href="#projects">View projects</a></div></article>
      <article className="glass-card"><div className="glass-heading"><div><h2>Syla Marie Cumuyog</h2><p><MapPin size={14}/> Developer · Philippines</p><span className="availability-chip"><i aria-hidden="true"/> Open to new roles &amp; freelance</span></div><a className="text-button" href="#about">About me</a></div><p>I bring ideas to life through clean code and thoughtful design. From responsive websites to full-stack applications, I build experiences that work beautifully.</p><div className="skill-details"><span><Code2 size={15}/> React & .NET</span><span><Layers size={15}/> Web & e-commerce</span></div></article>
      <a className="brand-orb" href="#contact" aria-label="Start a project with Syla">s</a>
      <div className="social-card"><a href="https://github.com/sylamarie" target="_blank" rel="noreferrer"><GithubMark/><span>GitHub</span></a><a href="mailto:sylamariecumuyog@outlook.com"><Send/><span>Email</span></a></div>
    </section>
    </section>

    <section className="toolbelt" aria-label="Technologies I work with"><p>TOOLS I WORK WITH</p><div className="marquee"><div>{[...tools, ...tools].map((tool, i) => <span key={i}>{tool}<b>✦</b></span>)}</div></div></section>
    <section className="section projects" id="projects"><div className="page-scroll" tabIndex={0} aria-label="Projects">
      <div className="section-heading"><p className="eyebrow"><span/> Selected work</p><h2>Built with care.<br/><i>Made to perform.</i></h2><p>From conversion-focused storefronts to production application features, I build digital work that puts people first.</p></div>
      <ProjectShowcase/>
    </div></section>

    <section className="section services" id="services"><div className="page-scroll" tabIndex={0} aria-label="Services"><p className="eyebrow"><span/> What I can build</p><div className="service-layout"><div className="services-intro"><div className="services-intro-copy"><h2>Build the right thing.<br/><i>With the right tools.</i></h2><p className="services-lead">I turn ideas, designs, and existing code into useful digital products. Here’s where I can help—from the first interface to the final production detail.</p><a className="services-cta" href="#contact">Tell me what you’re building</a><p className="services-flex-note">Have a preferred stack or an existing codebase? I can work with it when it is the right fit.</p></div><div className="services-intro-rail"><div className="services-marquee" aria-label="Tools I can work with"><div className="services-marquee-track">{[...serviceMarqueeTools, ...serviceMarqueeTools].map(([name, slug], index) => <span className="services-marquee-item" key={`${name}-${index}`} title={name} aria-label={name}><ServiceTechIcon name={name} slug={slug}/></span>)}</div></div><div className="services-proof" aria-label="How I help"><div><span>01</span><strong>Shape the product</strong><small>Clarify the experience and the right technical path.</small></div><div><span>02</span><strong>Build the experience</strong><small>Make it responsive, accessible, and easy to use.</small></div><div><span>03</span><strong>Ship with confidence</strong><small>Connect the data, polish the details, and prepare for production.</small></div></div></div></div><div className="services-list">{serviceOffers.map(service => <article className="service" key={service.number}><span>{service.number}</span><div><h3>{service.title}</h3><p>{service.description}</p><div className="service-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="service-tools" aria-label={`${service.title} example tools`}><span className="service-tools-label">Built with</span><div className="service-tools-icons">{service.tools.map(([name, slug]) => <span className="service-tool" key={name} title={name} aria-label={name}><ServiceTechIcon name={name} slug={slug}/></span>)}</div></div></div></article>)}</div></div></div></section>

    <section className="about" id="about">
      <div className="about-scroll-content" tabIndex={0} aria-label="About Syla, experience and tools">
        <div className="about-stamp"><img src="/favicon.svg" alt="Syla Marie Cumuyog logo"/></div>
        <div className="about-intro">
          <p className="eyebrow"><span/> About me</p>
          <h2>Equal parts <i>curious</i><br/>and practical.</h2>
          <p>I’m a software developer with experience across e-commerce, client web design, and full-stack product development. I enjoy the sweet spot where useful technology meets a polished, welcoming experience.</p>
          <div className="about-actions"><a className="text-button" href="#credentials">Education &amp; credentials</a><a className="text-button" href="mailto:sylamariecumuyog@outlook.com">Email me</a></div>
        </div>
        <div className="about-experience">
          <div className="experience-list-panel" ref={experienceListRef}>
            <p className="eyebrow"><span/> Work experience</p>
            <h3>Building useful things, thoughtfully.</h3>
            <div className="experience-list-scroll" ref={experienceListScrollRef}>
              <ol className="about-experience-list">
                {workExperiences.map((experience, index) => <li
                  key={experience.number}
                  className={selectedExperience === index ? 'is-selected' : ''}
                >
                  <button type="button" className="experience-select" aria-pressed={selectedExperience === index} aria-controls="experience-detail-panel" onClick={() => chooseExperience(index)}>
                    <div><strong>{experience.title}</strong><span>{experience.company}</span><p>{experience.description}</p></div>
                    <time>{experience.period}</time>
                  </button>
                </li>)}
              </ol>
            </div>
          </div>
          <article id="experience-detail-panel" ref={experienceDetailRef} key={selected?.number || 'empty'} className={`experience-detail ${selected ? 'has-selection' : 'is-empty'}`} style={experiencePointerY === null ? undefined : {'--experience-pointer-y': `${experiencePointerY}px`}} aria-live="polite">
            <div className="experience-detail-scroll">
              {selected ? <>
                <div className="experience-detail-topbar">
                  <p className="eyebrow"><span/> Role {selectedExperience + 1} of {workExperiences.length}</p>
                  <button type="button" className="experience-back" onClick={backToRoles}><ChevronLeft size={15}/> All roles</button>
                </div>
                <h4>{selected.title}</h4>
                <p className="experience-detail-company">{selected.company} · {selected.period}</p>
                {selected.detailKind === 'barkbuildings' ? <BarkBuildingsDetails experience={selected}/> : <>
                  <section className="experience-detail-section"><p className="experience-detail-label">Overview</p><p className="experience-detail-description">{selected.overview || selected.description}</p></section>
                  <section className="experience-detail-section"><p className="experience-detail-label">Technologies &amp; tools</p><div className="experience-detail-tools experience-tool-line" aria-label="Technologies and tools used">{getExperienceToolEntries(selected).map(([name, slug]) => <span className="experience-tool" key={name} title={name}><ServiceTechIcon name={name} slug={slug}/><span className="experience-tool-name">{name}</span></span>)}</div></section>
                  {selected.previews?.length ? <section className="experience-detail-section experience-projects"><p className="experience-detail-label">Projects &amp; web apps</p><div className="experience-detail-chips">{selected.products.map(product => <span key={product}>{product}</span>)}</div><div className="experience-detail-previews">{selected.previews.map(preview => <ExperiencePreview key={preview.name} preview={preview}/>)}</div></section> : <section className="experience-detail-section"><p className="experience-detail-label">Projects &amp; web apps</p><div className="experience-detail-chips">{selected.products.map(product => <span key={product}>{product}</span>)}</div></section>}
                  <section className="experience-detail-section"><p className="experience-detail-label">Platforms &amp; workflow</p><div className="experience-detail-chips">{selected.platforms.map(platform => <span key={platform}>{platform}</span>)}</div></section>
                  <section className="experience-detail-section"><p className="experience-detail-label">{selected.responsibilityLabel || 'Key responsibilities'}</p><ul className="experience-detail-list">{selected.responsibilities.map(item => <li key={item}><ExperienceBullet text={item}/></li>)}</ul></section>
                  {selected.mobilePublishing?.length ? <section className="experience-detail-section experience-publishing"><p className="experience-detail-label">Mobile app publishing</p><ul className="experience-detail-list">{selected.mobilePublishing.map(item => <li key={item}><ExperienceBullet text={item}/></li>)}</ul></section> : null}
                  <section className="experience-detail-section"><p className="experience-detail-label">Key accomplishments</p><ul className="experience-detail-list is-accomplishments">{selected.accomplishments.map(item => <li key={item}><ExperienceBullet text={item}/></li>)}</ul></section>
                  {selected.links?.length ? <section className="experience-detail-section"><p className="experience-detail-label">Links</p><div className="experience-detail-links">{selected.links.map(link => link.href.startsWith('#') ? <a key={link.href} href={link.href} onClick={() => link.project && window.dispatchEvent(new CustomEvent('show-project', { detail: link.project }))}>{link.label}</a> : <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div></section> : null}
                </>}
              </> : <div className="experience-empty">
                <span className="experience-empty-icon"><ChevronLeft size={22}/></span>
                <p className="eyebrow"><span/> Explore my experience</p>
                <h4>Select a role to view the full story.</h4>
                <p>Select an experience from the list to explore the projects, responsibilities, technologies, and work I contributed.</p>
              </div>}
            </div>
            {selected && <div className="experience-detail-footer">
              <nav className="experience-stepper" aria-label="Browse roles">
                <button type="button" onClick={() => chooseExperience(selectedExperience - 1)} disabled={selectedExperience === 0}><ChevronLeft size={16}/><span><small>Previous</small>{workExperiences[selectedExperience - 1]?.company || ''}</span></button>
                <button type="button" onClick={() => chooseExperience(selectedExperience + 1)} disabled={selectedExperience === workExperiences.length - 1}><span><small>Next</small>{workExperiences[selectedExperience + 1]?.company || ''}</span><ChevronRight size={16}/></button>
              </nav>
            </div>}
          </article>
        </div>
        <ToolsSection/>
      </div>
    </section>

    {page === 'credentials' && <CredentialsPage/>}
    <section className="contact" id="contact"><div className="page-scroll" tabIndex={0} aria-label="Contact"><div><p className="eyebrow"><span/> Get in touch</p><h2>Have a good idea?<br/><i>Let’s make it real.</i></h2></div><a className="contact-orb" href="mailto:sylamariecumuyog@outlook.com" aria-label="Email Syla"><Send size={33}/><span>START A<br/>CONVERSATION</span></a><p className="contact-note"><span className="availability-chip"><i aria-hidden="true"/> Open to new roles &amp; freelance</span><span>Based in the Philippines · UTC+8</span></p><div className="contact-email-row"><a className="email" href="mailto:sylamariecumuyog@outlook.com"><Mail size={20} aria-hidden="true"/><span>sylamariecumuyog@outlook.com</span></a><button type="button" className="copy-email" onClick={copyEmail} aria-live="polite">{copied ? <><Check size={17} aria-hidden="true"/> Copied</> : <><Copy size={17} aria-hidden="true"/> Copy email</>}</button></div><div className="contact-links"><a href="https://github.com/sylamarie" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><img className="contact-brand-logo light-logo" src="https://cdn.simpleicons.org/github/211d30" alt="" aria-hidden="true"/><img className="contact-brand-logo dark-logo" src="https://cdn.simpleicons.org/github/fbf8ff" alt="" aria-hidden="true"/><span>GitHub</span></a><a href="https://www.linkedin.com/in/syla-marie-cumuyog-b11a62284/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><img className="contact-brand-logo light-logo" src="https://cdn.simpleicons.org/linkedin/0A66C2" alt="" aria-hidden="true"/><img className="contact-brand-logo dark-logo" src="https://cdn.simpleicons.org/linkedin/dce8ff" alt="" aria-hidden="true"/><span>LinkedIn</span></a><a href="https://v2.onlinejobs.ph/jobseekers/info/3534466" target="_blank" rel="noreferrer" aria-label="OnlineJobs.ph profile" title="OnlineJobs.ph profile"><img className="contact-brand-logo onlinejobs-logo" src="/icons/onlinejobs.png" alt="" aria-hidden="true" width="22" height="22"/><span>OnlineJobs.ph</span></a></div><a className="contact-education" href="#credentials"><span className="contact-education-icon" aria-hidden="true"><GraduationCap size={22}/></span><span className="contact-education-text"><small>Education</small><strong>B.S. in Software Development</strong><span>Brigham Young University–Idaho · view degrees &amp; certificates</span></span></a></div></section>
    <footer><span>© {new Date().getFullYear()} SYLA MARIE CUMUYOG</span><a href="https://github.com/sylamarie" target="_blank" rel="noreferrer">GitHub</a><span>Designed & built with intention</span></footer>
  </main>;
}
createRoot(document.getElementById('root')).render(<App />);
