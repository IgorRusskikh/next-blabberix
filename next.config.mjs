/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // Опционально: для добавления слэша в конце URL
  images: {
    unoptimized: true, // Не оптимизировать изображения
  },
};

export default nextConfig;
