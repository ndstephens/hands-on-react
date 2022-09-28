import { render } from '@testing-library/react';

// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { Scoreboard, ScoreboardProps } from './Scoreboard';

describe('Scoreboard test cases', () => {
  // Default props
  const props: ScoreboardProps = {
    time: '000',
    levels: ['beginner', 'intermediate', 'expert'],
    mines: '010',
    onReset: () => null,
    // onChangeLevel={() => null}
  };

  it('Scoreboard renders correctly', () => {
    const { asFragment } = render(<Scoreboard {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  // it('Scoreboard select level handler check', () => {
  //   const onChange = jest.fn();

  //   render(
  //     <Scoreboard
  //       time="000"
  //       levels={['beginner', 'intermediate', 'expert']}
  //       bombs="010"
  //       onReset={() => null}
  //       onChangeLevel={onChange}
  //     />
  //   );

  //   userEvent.selectOptions(screen.getByRole('combobox'), 'expert');

  //   expect(screen.getByRole('option', { name: 'expert' })).toBeEnabled();

  //   expect(onChange).toHaveBeenCalled();
  // });
});
