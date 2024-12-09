import { lexicalEditor } from '@payloadcms/richtext-lexical'
import {
  HeadingFeature,
  BlocksFeature,
  LinkFeature,
  ParagraphFeature,
  FixedToolbarFeature,
} from '@payloadcms/richtext-lexical'

export const Editor = lexicalEditor({
  features: ({ defaultFeatures }) => [
    ...defaultFeatures,
    HeadingFeature({
      enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'],
    }),
    BlocksFeature({}),
    LinkFeature({}),
    ParagraphFeature(),
    FixedToolbarFeature(),
  ],
})
