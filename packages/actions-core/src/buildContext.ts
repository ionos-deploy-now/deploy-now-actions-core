import { Context } from '@actions/github/lib/context';
import * as github from '@actions/github';

export default class BuildContext {
  required(key: keyof Context): string {
    if (github.context[key] === undefined) {
      throw new Error('Could not get context value ' + key);
    }
    return github.context[key].toString();
  }

  optional(key: keyof Context): string | null {
    if (github.context[key] === undefined) {
      return null;
    }
    return github.context[key].toString();
  }
}
