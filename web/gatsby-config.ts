import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";
import { IPluginRefOptions } from "gatsby";
import path from "path";
import fs from "fs";

const srcDirs = fs.readdirSync(path.resolve(__dirname, "src"));

const rootDirsConfig: IPluginRefOptions = {};

srcDirs.forEach((srcDir) => {
  rootDirsConfig[srcDir] = path.resolve(__dirname, "src", srcDir);
});

dotenv.config({ path: __dirname + `/.env.${process.env.NODE_ENV}` });

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Portfolio - Dariusz Rodzewicz",
        short_name: "Portfolio DaRo",
        start_url: "/",
        icon: "src/assets/images/computer-image.png",
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: rootDirsConfig,
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_STUDIO_PROJECT_ID,
        dataset: process.env.SANITY_STUDIO_DATASET,
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        projectId: process.env.SANITY_STUDIO_PROJECT_ID,
        dataset: process.env.SANITY_STUDIO_DATASET,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swapp`,
          },
        ],
      },
    },

    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
  ],
};

export default config;
