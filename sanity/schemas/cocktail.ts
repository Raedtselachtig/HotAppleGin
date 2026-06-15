import { defineField, defineType } from 'sanity';
const categories = ['warm', 'cold', 'non-alcoholic', 'winter', 'autumn', 'summer', 'spring', 'festive', 'apres-ski', 'terrace', 'indoor'];
export default defineType({ name: 'cocktail', title: 'Cocktail', type: 'document', fields: [
  defineField({ name: 'name', type: 'string', validation: (Rule) => Rule.required() }),
  defineField({ name: 'slug', type: 'slug', options: { source: 'name' }, validation: (Rule) => Rule.required() }),
  defineField({ name: 'active', type: 'boolean', initialValue: true }),
  defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
  defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
  defineField({ name: 'categories', type: 'array', of: [{ type: 'string', options: { list: categories.map((title) => ({ title, value: title })) } }] }),
  defineField({ name: 'order', type: 'number' })
] });
