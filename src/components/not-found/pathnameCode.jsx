"use client"

import { usePathname } from 'next/navigation'

export default function PathnameCode() {
  const pathname = usePathname()

  return (
    <code>{ pathname }</code>
  );
}