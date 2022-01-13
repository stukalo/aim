interface Operation {
  (): Promise<any>;
}

export const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const retry = (
  operation: Operation,
  delay: number,
  retries: number
): Promise<any> =>
  new Promise((resolve, reject) => {
    operation()
      .then(resolve)
      .catch((reason) => {
        if (retries > 0) {
          wait(delay)
            .then(retry.bind(null, operation, delay, retries - 1))
            .then(resolve)
            .catch(reject);
        } else {
          reject(reason);
        }
      });
  });
