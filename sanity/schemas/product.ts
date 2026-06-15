import { defineField, defineType } from 'sanity';
export default defineType({ name: 'product', title: 'Product', type: 'document', fields: [
  defineField({ name: 'name', type: 'string', validation: (Rule) => Rule.required() }),
  defineField({ name: 'slug', type: 'slug', options: { source: 'name' }, validation: (Rule) => Rule.required() }),
  defineField({ name: 'active', type: 'boolean', initialValue: true }),
  defineField({ name: 'stripePriceId', type: 'string' }),
  defineField({ name: 'channelDockSku', type: 'string' }),
  defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
  defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
  defineField({ name: 'order', type: 'number' })
] });
