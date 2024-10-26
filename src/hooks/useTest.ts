import { useState } from 'react';

export function useTest() {
  const [number, setNumber] = useState(0);
  return {
    test: { number, setNumber },
  };
}
