import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Reset } from './Reset';

export default {
  title: 'Reset',
  component: Reset,
} as ComponentMeta<typeof Reset>;

const Template: ComponentStory<typeof Reset> = (args) => <Reset {...args} />;

export const ResetExample = Template.bind({});
