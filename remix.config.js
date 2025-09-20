/** @type {import('@remix-run/dev').AppConfig} */
export default {
  vite:
    process.env.NODE_ENV === 'production'
      ? { plugins: [] }
      : undefined,
};
