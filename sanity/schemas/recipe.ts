import { defineField, defineType } from 'sanity';
export default defineType({ name: 'recipe', title: 'Recipe', type: 'document', fields: [
  defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
  defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
  defineField({ name: 'active', type: 'boolean', initialValue: true }),
  defineField({ name: 'type', type: 'string', options: { list: ['recipe', 'guide', 'serve'] } }),
  defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
  defineField({ name: 'intro', type: 'array', of: [{ type: 'block' }] }),
  defineField({ name: 'sections', type: 'array', of: [{ type: 'object', fields: [defineField({ name: 'heading', type: 'string' }), defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }), defineField({ name: 'image', type: 'image', options: { hotspot: true } })] }] }),
  defineField({ name: 'cta', type: 'string' })
] });
