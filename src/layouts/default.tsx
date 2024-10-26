import { Link } from 'react-router-dom';
import React from 'react';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center p-2">
      <nav className="flex items-center gap-3">
        <Link to="/">Home</Link>
        <Link className="active" to="/about">
          About
        </Link>
      </nav>
      {children}
    </div>
  );
}
