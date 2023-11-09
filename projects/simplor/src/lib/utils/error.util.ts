/** Error object specific for Simplor. */
export class SplError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(`SPL_ERROR: ${message.toString()}`, options);
  }
}
