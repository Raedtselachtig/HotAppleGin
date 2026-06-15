import { createClient } from 'next-sanity';
export const sanityClient = createClient({ projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'replace-me', dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', apiVersion: '2026-06-04', useCdn: false, perspective: 'published' });
