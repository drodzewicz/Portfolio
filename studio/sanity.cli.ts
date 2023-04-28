import {defineCliConfig} from 'sanity/cli'
import * as ENV from './src/environment'

export default defineCliConfig({
  api: {
    projectId: ENV.projectId,
    dataset: ENV.dataset,
  },
})
