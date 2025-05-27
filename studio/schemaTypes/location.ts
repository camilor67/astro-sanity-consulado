import { defineField, defineType } from 'sanity'
import { PinIcon } from '@sanity/icons'

export default defineType({
  name: 'location',
  title: 'Ubicación',
  type: 'document',
  icon: PinIcon,
  groups: [
    {
      name: 'content',
      title: 'Contenido',
      default: true,
    },
    {
      name: 'map',
      title: 'Mapa',
    },
  ],
  fields: [
    defineField({
      name: 'heading',
      title: 'Título',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Descripción',
      type: 'text',
      group: 'content',
    }),
    // defineField({
    //   name: 'placeId',
    //   title: 'ID del Lugar en Google',
    //   description: 'El ID del lugar en Google Business. Puedes encontrarlo en la URL de tu perfil de Google Business.',
    //   type: 'string',
    //   validation: (Rule) => Rule.required(),
    //   group: 'map',
    // }),
    defineField({
      name: 'address',
      title: 'Dirección',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'map',
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'email',
      title: 'Correo Electrónico',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'hours',
      title: 'Horario',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Día',
              type: 'string',
              options: {
                list: [
                  { title: 'Lunes', value: 'monday' },
                  { title: 'Martes', value: 'tuesday' },
                  { title: 'Miércoles', value: 'wednesday' },
                  { title: 'Jueves', value: 'thursday' },
                  { title: 'Viernes', value: 'friday' },
                  { title: 'Sábado', value: 'saturday' },
                  { title: 'Domingo', value: 'sunday' },
                ],
              },
            },
            {
              name: 'hours',
              title: 'Horario',
              type: 'string',
            },
          ],
        }
      ],
      group: 'content',
    }),
    defineField({
      name: 'mapEmbed',
      title: 'Embed de Google Maps',
      type: 'text',
      description: 'Pega aquí el código iframe que te da Google Maps para insertar el mapa.',
      group: 'map',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'address',
    },
  },
}) 