const FAKE_DELAY_MS = 300;
const FAILURE_RATE = 0.1; // 10% chance of failure

/**
 * Simulates a network request with a fake delay and potential for error.
 * In a real application, this module would contain a fetch wrapper
 * responsible for setting headers (e.g., Authorization), handling
 * response codes, and parsing JSON.
 *
 * @param data The data to be returned on success.
 * @returns A promise that resolves with the provided data or rejects with an error.
 */
export function request<T>(data: T): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < FAILURE_RATE) {
        reject(new Error('A simulated network error occurred.'));
      } else {
        resolve(data);
      }
    }, FAKE_DELAY_MS);
  });
}
