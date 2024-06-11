// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withEdgio } = require("@edgio/next/config");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = () => withEdgio(nextConfig);
