import React from 'react';
import clsx from 'clsx';

export interface LedgerRootProps {
  className?: string;
  children: React.ReactNode;
}

function LedgerRoot({ className = '', children }: LedgerRootProps) {
  return <div className={clsx('ledger', className)}>{children}</div>;
}

function Main({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx(className)}>{children}</div>;
}

function Aside({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <aside className={clsx(className)}>{children}</aside>;
}

const Ledger = Object.assign(LedgerRoot, { Main, Aside });
export default Ledger;

// Example:
// <Ledger>
//   <Ledger.Main>…main content…</Ledger.Main>
//   <Ledger.Aside>…sticky aside…</Ledger.Aside>
// </Ledger>

