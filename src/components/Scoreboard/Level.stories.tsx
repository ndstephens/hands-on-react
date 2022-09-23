import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Level } from './Level';

export default {
  title: 'Scoreboard/Level',
  component: Level,
} as ComponentMeta<typeof Level>;

const Template: ComponentStory<typeof Level> = (args) => <Level {...args} />;

export const LevelExample = Template.bind({});
LevelExample.args = {
  children: ['beginner', 'intermediate', 'expert'],
};
