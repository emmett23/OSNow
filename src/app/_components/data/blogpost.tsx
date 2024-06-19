interface BlogPostProps {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  imageUrl?: string;
  content?: string;
  minutesRead?: number;
}

const categories: string[] = [
  "Technology",
  "Health",
  "Lifestyle",
  "Business",
  "Education",
  "Travel",
];

const blogPosts: BlogPostProps[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "June 18, 2024",
    tags: ["Next.js", "JavaScript"],
    excerpt: "A beginner's guide to setting up a Next.js project from scratch.",
    imageUrl: "https://via.placeholder.com/300x100",
    content: `
      Next.js is a powerful React framework that enables server-side rendering and static site generation. It is built on top of React and provides many features that make it easy to build web applications. In this guide, we will go through the steps to get started with a new Next.js project.
  
      ## Step 1: Setting Up the Project
      To create a new Next.js project, you can use the following command:
      \`\`\`bash
      npx create-next-app@latest
      \`\`\`
      This command will prompt you to enter a name for your project and ask if you want to use TypeScript and other features. Once the setup is complete, navigate to your project directory:
      \`\`\`bash
      cd your-project-name
      \`\`\`
  
      ## Step 2: Running the Development Server
      To start the development server, run:
      \`\`\`bash
      npm run dev
      \`\`\`
      This will start the development server at \`http://localhost:3000\`.
  
      ## Step 3: Creating Your First Page
      Next.js uses a file-based routing system. Create a new file in the \`pages\` directory:
      \`\`\`jsx
      // pages/index.js
      import React from 'react';
  
      const HomePage = () => {
        return (
          <div>
            <h1>Welcome to Next.js!</h1>
            <p>This is your first Next.js page.</p>
          </div>
        );
      };
  
      export default HomePage;
      \`\`\`
      Now, visit \`http://localhost:3000\` to see your new page.
  
      With these steps, you have successfully set up a new Next.js project and created your first page. Explore more of Next.js's features to build powerful web applications!
    `,
    minutesRead: 5,
  },
  {
    slug: "building-a-blog-with-nextjs-and-markdown",
    title: "Building a Blog with Next.js and Markdown",
    date: "June 17, 2024",
    tags: ["Next.js", "Markdown"],
    excerpt:
      "Learn how to create a blog using Next.js and Markdown for content management.",
    imageUrl: "https://via.placeholder.com/800x400",
  },
  {
    slug: "optimizing-performance-in-nextjs",
    title: "Optimizing Performance in Next.js",
    date: "June 16, 2024",
    tags: ["Next.js", "Performance"],
    excerpt:
      "Tips and techniques for optimizing the performance of your Next.js applications.",
  },
  {
    slug: "introduction-to-server-side-rendering-with-nextjs",
    title: "Introduction to Server-Side Rendering with Next.js",
    date: "June 15, 2024",
    tags: ["Next.js", "SSR"],
    excerpt:
      "Understand the basics of server-side rendering and how to implement it in Next.js.",
  },
  {
    slug: "using-react-hooks-in-nextjs-projects",
    title: "Using React Hooks in Next.js Projects",
    date: "June 14, 2024",
    tags: ["Next.js", "React Hooks"],
    excerpt:
      "Explore how to use React Hooks effectively within your Next.js applications.",
  },
  {
    slug: "deploying-nextjs-applications-on-vercel",
    title: "Deploying Next.js Applications on Vercel",
    date: "June 13, 2024",
    tags: ["Next.js", "Vercel"],
    excerpt:
      "A step-by-step guide to deploying your Next.js projects on Vercel.",
  },
  {
    slug: "building-a-custom-api-with-nextjs-api-routes",
    title: "Building a Custom API with Next.js API Routes",
    date: "June 12, 2024",
    tags: ["Next.js", "API"],
    excerpt:
      "Learn how to create custom API routes in your Next.js application.",
  },
  {
    slug: "styling-nextjs-applications-with-tailwind-css",
    title: "Styling Next.js Applications with Tailwind CSS",
    date: "June 11, 2024",
    tags: ["Next.js", "Tailwind CSS"],
    excerpt:
      "A comprehensive guide to styling your Next.js projects using Tailwind CSS.",
  },
  {
    slug: "authentication-in-nextjs-with-nextauth",
    title: "Authentication in Next.js with NextAuth",
    date: "June 10, 2024",
    tags: ["Next.js", "Authentication"],
    excerpt:
      "Implement authentication in your Next.js applications using NextAuth.",
  },
  {
    slug: "creating-a-dynamic-sitemap-in-nextjs",
    title: "Creating a Dynamic Sitemap in Next.js",
    date: "June 9, 2024",
    tags: ["Next.js", "SEO"],
    excerpt:
      "Learn how to generate a dynamic sitemap for your Next.js application.",
  },
];

export { categories, blogPosts };
