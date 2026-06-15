import { defineField, defineType } from 'sanity';
const pages = ['home', 'collection', 'our-story', 'serve', 'recipes', 'faq', 'partnerships', 'where-we-blend-in'];
export default defineType({ name: 'pageImages', title: 'Page Images', type: 'document', fields: [
  defineField({ name: 'page', type: 'string', options: { list: pages.map((title) => ({ title, value: title })) }, validation: (Rule) => Rule.required() }),
  defineField({ name: 'slot', type: 'string', validation: (Rule) => Rule.required() }),
  defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
  defineField({ name: 'alt', type: 'string' }),
  defineField({ name: 'active', type: 'boolean', initialValue: true })
] });
