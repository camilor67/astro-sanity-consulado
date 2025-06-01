import { defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

export default defineType({
  name: 'dish',
  title: 'Plato del Menú',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'content',
      title: 'Contenido',
      default: true,
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Plato',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'number',
      validation: (Rule) => Rule.min(0),
      group: 'content',
    }),
    defineField({
      name: 'image',
      title: 'Imagen del Plato',
      type: 'customImage',
      group: 'content',
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Plato principal', value: 'plato_principal' },
          { title: 'Comida rápida', value: 'comida_rapida' },
          { title: 'Burguers', value: 'burguers' },
          { title: 'Antojos', value: 'antojos' },
          { title: 'Bebidas', value: 'bebidas' },
          { title: 'Snaks', value: 'snaks' },
        ],
      },
      group: 'content',
    }),
    defineField({
      name: 'subcategory',
      title: 'Subcategoría',
      type: 'string',
      options: {
        list: [
          { title: 'Internacionales', value: 'internacionales' },
          { title: 'Nacionales', value: 'nacionales' },
          { title: 'Bebidas calientes', value: 'bebidas_calientes' }
        ]
      },
      group: 'content'
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image.image.asset',
    },
  },
})