import overrides from "@/content-overrides.json";

// Copy edited through admin mode.
//
// Every editable string on the site has a stable id and a default written in
// the page itself. This file holds only the ones that have been changed, so
// the pages stay readable and an empty override file means the site reads
// exactly as it was authored.
//
// Saving in admin mode commits this file back to the repository, which is why
// edits survive: they become part of the build rather than sitting in a
// browser or a database that has to be provisioned and backed up.

const store = overrides as Record<string, string>;

export function getOverride(id: string): string | null {
  const value = store[id];
  return typeof value === "string" && value.length > 0 ? value : null;
}

export function allOverrides(): Record<string, string> {
  return { ...store };
}
