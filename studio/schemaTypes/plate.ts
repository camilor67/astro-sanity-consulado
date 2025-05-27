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
          { title: 'Entrada', value: 'appetizer' },
          { title: 'Plato fuerte', value: 'mainCourse' },
          { title: 'Bebida', value: 'drink' },
          { title: 'Postre', value: 'dessert' },
        ],
      },
      group: 'content',
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