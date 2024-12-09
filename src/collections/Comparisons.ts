import { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import {
  HeadingFeature,
  BlocksFeature,
  LinkFeature,
  FixedToolbarFeature,
} from '@payloadcms/richtext-lexical'
import { Editor } from '@/blocks/editor'

export const Comparisons: CollectionConfig = {
  slug: 'comparisons',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'languages',
      type: 'relationship',
      relationTo: 'languages',
      hasMany: true,
      required: true,
    },
    {
      name: 'sections',
      type: 'array',
      fields: [
        {
          name: 'type',
          type: 'select',
          options: [{ label: 'Code Comparison', value: 'code' }],
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          editor: Editor,
        },
        {
          name: 'firstLanguageContent',
          type: 'group',
          fields: [
            {
              name: 'code',
              type: 'textarea',
            },
            {
              name: 'explanation',
              type: 'richText',
              editor: Editor,
            },
          ],
        },
        {
          name: 'secondLanguageContent',
          type: 'group',
          fields: [
            {
              name: 'code',
              type: 'textarea',
            },
            {
              name: 'explanation',
              type: 'richText',
              editor: Editor,
            },
          ],
        },
      ],
    },
  ],
}
