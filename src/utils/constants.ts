export const COMPANY = {
  name: 'OURTECH Information Technology Solutions',
  shortName: 'OURTECH',
  tagline: 'Smart. Secure. Future-Ready Technology for Modern Organizations',
  valueProposition: 'Technology Built for Performance. Solutions Built for Longevity.',
  established: 2022,
  headquarters: 'Baguio City, Philippines',
  operations: 'Pangasinan',
  registration: 'DTI-registered MSME, BIR compliant',
  commitment:
    'To ensure that technology empowers your operations—consistently, securely, and efficiently.',
  closingStatement: 'Technology that works. Solutions that last.',
} as const;

export const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'clients', label: 'Clients' },
  { id: 'why-partner', label: 'Why Us' },
  { id: 'contact', label: 'Contact' },
] as const;

export const SERVICES = [
  {
    title: 'Network & Infrastructure Engineering',
    description:
      'Mission-critical connectivity — fiber optic testing, structured cabling, enterprise surveillance, and campus network integration.',
    icon: '🌐',
  },
  {
    title: 'Cybersecurity & Information Assurance',
    description:
      'Secure-by-design frameworks — firewalls, endpoint security, SIEM logging, zero-trust alignment, and compliance consulting.',
    icon: '🛡️',
  },
  {
    title: 'Emergency Communication & Public Warning Systems',
    description:
      'Reliable crisis infrastructure — decentralized networks, mobile early warning systems, industrial horns and public address.',
    icon: '📡',
  },
  {
    title: 'IoT & Smart Monitoring Technologies',
    description:
      'Sensor-driven intelligence — IoT weather monitoring, AI water level monitoring for environmental and industrial operations.',
    icon: '📊',
  },
  {
    title: 'Aerial Data & Drone Technology',
    description:
      'High-precision aerial intelligence — optical, thermal, multispectral, LiDAR systems, geospatial mapping and surveying.',
    icon: '🚁',
  },
  {
    title: 'Governance, Risk & Compliance (GRC)',
    description:
      'Practical compliance frameworks — ISO 27001:2022, ISO 20000-1:2018, gap analysis, risk assessment, and audit readiness.',
    icon: '📋',
  },
  {
    title: 'Data Privacy & NPC Compliance',
    description:
      'Privacy impact assessments, DPO coaching, privacy manuals, SOP development, and data privacy gap assessments.',
    icon: '🔒',
  },
  {
    title: 'Consulting, Training & Turnkey ICT',
    description:
      'ICT strategy advisory, customized cybersecurity training, drone operations training, and full turnkey project deployment.',
    icon: '🎓',
  },
] as const;

export const CLIENT_SECTORS = [
  { name: 'Industrial Firms', description: 'Manufacturing and industrial IT solutions' },
  { name: 'Government Units', description: 'Local and public office IT support' },
  { name: 'Security Agencies', description: 'Government security IT services' },
  { name: 'Educational Institutions', description: 'Schools and universities infrastructure' },
  { name: 'Healthcare Entities', description: 'Hospitals and clinics IT solutions' },
  { name: 'Financial Services', description: 'Banks and financial IT security' },
  { name: 'Hospitality Properties', description: 'Hotels and resorts IT systems' },
  { name: 'Residential Developments', description: 'Housing and commercial IT services' },
  { name: 'Infrastructure Projects', description: 'Engineering and utility IT integration' },
] as const;

export const PARTNERSHIP_PILLARS = [
  {
    title: 'Enterprise-Caliber Delivery',
    description: 'Solutions designed to perform reliably in mission-critical environments.',
  },
  {
    title: 'Strategic, Standards-Aligned',
    description: 'Methodologies following ISO, NIST, ITSM, NPC, and global industry frameworks.',
  },
  {
    title: 'Client-Centric Customization',
    description:
      'Each solution tailored to operational realities, financial requirements, and long-term goals.',
  },
  {
    title: 'Agility with Discipline',
    description: 'The speed of a modern tech firm with the rigor of enterprise service delivery.',
  },
  {
    title: 'Commitment to Excellence',
    description:
      'Your operational success is our foremost priority — responsive service and long-lasting solutions.',
  },
] as const;

export const TEAM_COMPOSITION = [
  'ICT Professionals',
  'Engineers',
  'Cybersecurity Practitioners',
  'Military Communication Specialists',
  'Educators',
] as const;

export const CERTIFICATION = {
  title: 'DICT - Trusted Assessment Provider (D-TAP)',
  scope: 'Information Security Management System (ISMS)',
  issuedBy: 'Department of Information and Communications Technology',
  signedBy: 'Engr. George P. Tardio',
  signerTitle: 'Officer-in-Charge, Cybersecurity Bureau',
  accreditedSince: 'May 2026',
  imageFile: '/DTAP Certifcate.jpg',
} as const;
