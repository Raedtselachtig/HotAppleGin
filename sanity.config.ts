'use client';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';
import { faqCategoryOptions } from './sanity/schemas/faqItem';

export default defineConfig({
  name: 'hot-apple-gin',
  title: 'Hot Apple Gin',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'replace-me',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  schema: { types: schemaTypes },
  plugins: [structureTool({ structure: (S) => S.list().title('Content').items([
    S.documentTypeListItem('cocktail').title('🍸 Cocktails'),
    S.documentTypeListItem('recipe').title('📖 Recepten & Guides'),
    S.listItem().title('❓ FAQ').child(S.list().title('FAQ').items(faqCategoryOptions.map((category) => S.listItem().title(category).child(S.documentList().title(category).filter('_type == "faqItem" && category == $category').params({ category }))))),
    S.documentTypeListItem('pageImages').title('🖼️ Pagina-afbeeldingen'),
    S.documentTypeListItem('product').title('Products')
  ]) }), visionTool()]
});
