import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Scoreboard } from './Scoreboard';

export default {
  title: 'Scoreboard/Scoreboard',
  component: Scoreboard,
} as ComponentMeta<typeof Scoreboard>;

const Template: ComponentStory<typeof Scoreboard> = (args) => (
  <Scoreboard {...args} />
);

export const ScoreboardExample = Template.bind({});
ScoreboardExample.args = {
  time: '000',
  levels: ['beginner', 'intermediate', 'expert'],
  mines: '010',
};
