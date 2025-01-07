import { LangWatch } from 'langwatch';

const langwatch = new LangWatch();

export function getTrace() {
  return langwatch.getTrace();
}
