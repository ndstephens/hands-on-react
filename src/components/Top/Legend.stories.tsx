import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Legend } from './Legend';

export default {
  title: 'Top/Legend',
  component: Legend,
} as ComponentMeta<typeof Legend>;

const Template: ComponentStory<typeof Legend> = (args) => <Legend {...args} />;

export const GameLegend = Template.bind({});
GameLegend.args = {
  feature: 'Flag',
  firstAction: 'ctrl',
  secondAction: 'click',
};
