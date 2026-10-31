import React from 'react';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { StudioAnalytics } from './components/Analytics';

function StudioLayout(props: any) {
  return (
    <>
      <StudioAnalytics />
      {props.renderDefault(props)}
    </>
  );
}

export default defineConfig({
  name: 'default',
  title: 'Hire Desi Marketer Studio',

  projectId: 'zabzj0uf',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      layout: StudioLayout,
    },
  },
});
