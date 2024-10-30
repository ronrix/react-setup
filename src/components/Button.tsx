import React from 'react';

export interface IProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button(props: IProp) {
  return (
    <button data-testid="button" {...props} className="rounded border bg-neutral-100 p-2">
      {props.children}
    </button>
  );
}
