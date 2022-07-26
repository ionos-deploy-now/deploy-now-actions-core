import * as core from '@actions/core';
import Input from './input';
import BuildContext from './buildContext';

export default class Action {
  static run<I extends { [key: string]: any }, O extends { [key: string]: any }>(
    action: (configuration: I) => Promise<O>,
    configurationSupplier: (input: Input, context: BuildContext) => I
  ) {
    try {
      const configuration = configurationSupplier(new Input(), new BuildContext());
      action(configuration).then((output) =>
        Object.entries(output).forEach(([key, value]) => {
          console.log(`${key}: ${value}`);
          core.setOutput(key, value);
        })
      );
    } catch (err) {
      core.setFailed((err as Error).message);
    }
  }
}
