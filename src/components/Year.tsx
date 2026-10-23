"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Current year, resolved in the browser so the footer never goes stale between deployments. */
export function Year() {
  const year = useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => 2026);
  return <span suppressHydrationWarning>{year}</span>;
}
