export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product name',
    },
    {
      name: 'image',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Product description',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Product price',
    },
    {
      name: 'price_id',
      type: 'string',
      title: 'Stripe Price ID',
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Product category',
      to: [{type: 'category'}],
    },
  ],
}
