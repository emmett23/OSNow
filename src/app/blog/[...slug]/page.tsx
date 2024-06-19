import React from "react";
import { Card, Image, Text, Title, Box, Badge } from "@mantine/core";
import { blogPosts } from "~/app/_components/data/blogpost";
import Container from "~/app/_components/custom-components/container";

const Page = () => {
  // Fetching the first blog post - demo
  const post = blogPosts[0];

  if (!post) {
    return (
      <Container className="min-h-screen w-full pt-[130px] text-black">
        No posts available
      </Container>
    );
  }

  return (
    <Box className="container mx-auto py-8 min-h-screen w-full pt-[130px] text-black">
      <Card shadow="sm" p="lg">
        {post.imageUrl && (
          <Image src={post.imageUrl} alt={post.title} className="mb-4" />
        )}
        <Title order={1} className="mb-2">
          {post.title}
        </Title>
        {post.minutesRead && (
          <Badge color="teal" className="mb-4">
            {post.minutesRead} min read
          </Badge>
        )}
        <Text size="sm" color="dimmed" className="mb-2">
          {post.date}
        </Text>
        <div className="mb-4">
          {post.tags.map((tag, index) => (
            <Badge key={index} color="blue" variant="light" className="mr-2">
              {tag}
            </Badge>
          ))}
        </div>
        <Text className="mb-6">{post.excerpt}</Text>
        {post.content && (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        )}
      </Card>
    </Box>
  );
};

export default Page;
