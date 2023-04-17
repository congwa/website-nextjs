// Remark packages
// import remarkGfm from "remark-gfm";
// import remarkFootnotes from "remark-footnotes";
// import remarkMath from "remark-math";
// // Rehype packages
// import rehypeSlug from "rehype-slug";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import nextMDX from "@next/mdx";

// import withLess from "next-with-less";

// const withMDX = nextMDX({
//   paths:{
//     "@/components/*":["app/components/*"],
//     "@/assets/*":["assets/*"],
//   },
//   extension: /\.mdx?$/,
//   options: {
//     // If you use remark-gfm, you'll need to use next.config.mjs
//     // as the package is ESM only
//     // https://github.com/remarkjs/remark-gfm#install
//     remarkPlugins: [
//       remarkMath,
//       remarkGfm,
//       [remarkFootnotes, { inlineNotes: true }],
//     ],
//     rehypePlugins: [
//       rehypeSlug,
//       rehypeAutolinkHeadings,
//     ],
//     // If you use `MDXProvider`, uncomment the following line.
//     // providerImportSource: "@mdx-js/react",
//   },
// });

// export default withLess(withMDX({
//   pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
//   reactStrictMode: true,
//   swcMinify: true,
//   experimental:{ appDir: true, mdxRs: true },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'p.ipic.vip',
//       },
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//       }
//     ],
//   },
// }));


const nextConfig = {
  reactStrictMode: true,
  experimental:{ appDir: true},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'p.ipic.vip',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
  },
};
export default nextConfig;