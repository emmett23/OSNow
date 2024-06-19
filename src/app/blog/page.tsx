"use client";

import React from "react";
import { Flex, Box, Card, Text, Title, Badge } from "@mantine/core";
import Container from "../_components/custom-components/container";
import { blogPosts, categories } from "../_components/data/blogpost";
import Link from "next/link";

const page = () => {
  return (
    <Container className="min-h-screen pt-16">
      <h1 className="pb-6 text-center text-4xl font-extrabold tracking-normal text-gray-800 sm:text-5xl lg:text-6xl">
        Blogs
      </h1>
      <Flex className="gap-8">
        <Box className="w-full md:w-1/4">
          <Card shadow="sm" p="lg">
            <Title order={2} className="mb-4">
              Categories
            </Title>
            <ul className="list-none pl-0">
              {categories.map((category, index) => (
                <li key={index} className="mb-2">
                  <Link href="/blog">{category}</Link>
                </li>
              ))}
            </ul>
          </Card>
        </Box>
        <Box className="w-full md:w-3/4">
          <Flex className="flex-wrap gap-6">
            {blogPosts.map((post, index) => (
              <Box key={index} className="w-full">
                <Card shadow="sm" p="lg" className="mb-4 bg-gray-700">
                  <Text size="sm" color="dimmed" className="mb-2">
                    {post.date}
                  </Text>
                  <Link href={`/blog/${post.slug}`}>
                    <Title order={3} className="mb-2">
                      {post.title}
                    </Title>
                  </Link>
                  <Flex className="mb-2 flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex}>{tag}</Badge>
                    ))}
                  </Flex>
                  <Text>{post.excerpt}</Text>
                </Card>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default page;
