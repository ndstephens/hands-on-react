import { Scoreboard } from '@/components/Scoreboard';
import { Top } from '@/components/Top';

export default function App() {
  return (
    <>
      <Top
        name="minesweeper"
        feature="Flag"
        firstAction="ctrl"
        secondAction="click"
      />
      <Scoreboard
        time="000"
        levels={['beginner', 'intermediate', 'expert']}
        mines="010"
        onReset={() => null}
      />
    </>
  );
}
