export default {
  name: 'heroImage',
  type: 'document',
  title: 'Two Hero Images',
  fields: [
    {
      name: 'heroTitle',
      type: 'string',
      title: 'Hero Title',
    },
    {
      name: 'heroDescription',
      type: 'text',
      title: 'Hero Description',
    },
    {
      name: 'image1',
      type: 'image',
      title: 'Image #1',
    },
    {
      name: 'image2',
      type: 'image',
      title: 'Image #2',
    },
  ],
}
