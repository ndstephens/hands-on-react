import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CellState } from '@/helpers/Field';

import { Cell } from './Cell';

export default {
  title: 'Grid/Cell',
  component: Cell,
  argTypes: {
    coords: { defaultValue: [1, 1] },
  },
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const CellClosed = Template.bind({});
CellClosed.args = {
  children: CellState.hidden,
};

export const CellIsEmpty = Template.bind({});
CellIsEmpty.args = {
  children: CellState.empty,
};

export const CellHasBomb = Template.bind({});
CellHasBomb.args = {
  children: CellState.bomb,
};

export const CellHasFlag = Template.bind({});
CellHasFlag.args = {
  children: CellState.flag,
};

export const CellHasWeakFlag = Template.bind({});
CellHasWeakFlag.args = {
  children: CellState.weakFlag,
};

export const CellHas1BombNearby = Template.bind({});
CellHas1BombNearby.args = {
  children: 1,
};

export const CellHas3BombsNearby = Template.bind({});
CellHas3BombsNearby.args = {
  children: 3,
};

export const CellHas5BombsNearby = Template.bind({});
CellHas5BombsNearby.args = {
  children: 5,
};

export const CellHas8BombsNearby = Template.bind({});
CellHas8BombsNearby.args = {
  children: 8,
};
