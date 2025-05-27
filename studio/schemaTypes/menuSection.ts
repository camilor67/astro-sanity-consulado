import { defineField, defineType } from 'sanity'
import { MenuIcon } from '@sanity/icons'
import { SECTION_BASE_FIELDS, SECTION_BASE_GROUPS } from './sectionBase'

export default defineType({
  name: 'menuSection',
  title: 'Sección de Menú',
  type: 'object',
  icon: MenuIcon,
  groups: SECTION_BASE_GROUPS,
  fields: [
    defineField({
      name: 'heading',
      title: 'Título de la Sección',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Descripción',
      type: 'markdown',
      group: 'content',
    }),
    defineField({
      name: 'dishes',
      title: 'Platos',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
      validation: (Rule) => Rule.required().min(1),
      group: 'content',
    }),
    ...SECTION_BASE_FIELDS,
    defineField({
      name: 'columns',
      title: 'Columnas',
      type: 'string',
      options: {
        list: [
          {title: '1', value: 'one'},
          {title: '2', value: 'two'},
          {title: '3', value: 'three'},
        ],
      },
      initialValue: 'three',
      group: 'styles',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      body: 'body',
    },
    prepare(selection) {
      return {
        title: `${selection.heading || selection.body || ''}`,
        subtitle: 'Sección de Menú',
      }
    },
  },
}) 