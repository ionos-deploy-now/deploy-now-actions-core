import { Context } from '@actions/github/lib/context';
import * as github from '@actions/github';

export default class BuildContext {
  required<K extends keyof Context>(key: K): Context[K] {
    if (github.context[key] === undefined) {
      throw new Error('Could not get context value ' + key);
    }
    return github.context[key];
  }

  optional<K extends keyof Context>(key: K): Context[K] | null {
    if (github.context[key] === undefined) {
      return null;
    }
    return github.context[key];
  }
}
