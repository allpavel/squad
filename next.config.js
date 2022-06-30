/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["tranquil-gorge-86376.herokuapp.com", "res.cloudinary.com"],
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
};

module.exports = nextConfig;
