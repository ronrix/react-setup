import DefaultLayout from '../layouts/default.tsx';
import { useTest } from '../hooks/useTest.ts';
import { useCounter } from '../context/useCounter.ts';
import Button from '../components/Button.tsx';

function Home() {
  const { test } = useTest();
  const { increment, decrement, counter } = useCounter((state: any) => state);
  return (
    <DefaultLayout>
      <main className="mt-10 text-center">
        <p>Home page</p>

        <p>Number: {test.number}</p>
        <Button onClick={() => test.setNumber(test.number + 1)}>This is the button</Button>

        <h3 className={'mt-10'}>This is from zustand state</h3>
        <p data-testid="counter">Number: {counter}</p>
        <Button data-testid="increment" onClick={() => increment()}>
          increment
        </Button>
        <Button data-testid="decrement" onClick={() => decrement()}>
          decrement
        </Button>
      </main>
    </DefaultLayout>
  );
}

export default Home;
