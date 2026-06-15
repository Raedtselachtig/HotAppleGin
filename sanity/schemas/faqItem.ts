import { defineField, defineType } from 'sanity';
export const faqCategoryOptions = ['What is Hot Apple Gin?', 'Taste & Ingredients', 'Alcohol & Dietary', 'How to Serve & Heat', 'Occasions & Events', 'Storage & Shelf Life', 'Orders & Shipping', 'Gifts & Gift Sets', 'Business & Wholesale', 'Brand & Story', 'Sustainability & Packaging', 'Find & Follow'];
export default defineType({ name: 'faqItem', title: 'FAQ Item', type: 'document', fields: [
  defineField({ name: 'question', type: 'string', validation: (Rule) => Rule.required() }),
  defineField({ name: 'answer', type: 'array', of: [{ type: 'block' }], validation: (Rule) => Rule.required() }),
  defineField({ name: 'category', type: 'string', options: { list: faqCategoryOptions.map((title) => ({ title, value: title })) }, validation: (Rule) => Rule.required() }),
  defineField({ name: 'active', type: 'boolean', initialValue: true }),
  defineField({ name: 'order', type: 'number' })
] });
