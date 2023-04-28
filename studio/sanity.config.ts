import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import * as ENV from './src/environment'

export default defineConfig({
  name: 'default',
  title: 'Portfolio Studio',

  projectId: ENV.projectId,
  dataset: ENV.dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
