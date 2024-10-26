import DefaultLayout from '../layouts/default.tsx';
import { useTest } from '../hooks/useTest.ts';
import { useCounter } from '../context/useCounter.ts';
import Button from '../components/Button.tsx';

function Home() {
  const { test } = useTest();
  const increment = useCounter((state: any) => state.increment);
  const decrement = useCounter((state: any) => state.decrement);
  const counter = useCounter((state: any) => state.counter);
  return (
    <DefaultLayout>
      <main className="mt-10 text-center">
        <p>Home page</p>

        <p>Number: {test.number}</p>
        <Button onClick={() => test.setNumber(test.number + 1)}>This is the button</Button>

        <h3 className={'mt-10'}>This is from zustand state</h3>
        <p>Number: {counter}</p>
        <Button onClick={() => increment()}>increment</Button>
        <Button onClick={() => decrement()}>decrement</Button>
      </main>
    </DefaultLayout>
  );
}

export default Home;
