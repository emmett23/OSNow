"use client";

import Container from "../_components/custom-components/container";
import { Grid, Image, Title, Text } from "@mantine/core";

const partners = [
  "https://via.placeholder.com/70?text=Walmart",
  "https://via.placeholder.com/70?text=Whirlpool",
  "https://via.placeholder.com/70?text=Electrolux",
  "https://via.placeholder.com/70?text=Novolex",
  "https://via.placeholder.com/70?text=Macy's",
  "https://via.placeholder.com/70?text=PaperWorks",
  "https://via.placeholder.com/70?text=Hendrickson",
  "https://via.placeholder.com/70?text=Walmart",
  "https://via.placeholder.com/70?text=Whirlpool",
  "https://via.placeholder.com/70?text=Electrolux",
  "https://via.placeholder.com/70?text=Novolex",
  "https://via.placeholder.com/70?text=Macy's",
];

const page = () => {
  return (
    <Container className="min-h-screen pt-[120px] text-gray-800">
      <Title mt="xl" mb="md">
        We work with these partners
      </Title>
      <Grid justify="center" align="center">
        {partners.slice(0, 6).map((partner, index) => (
          <Grid.Col key={index} span={2}>
            <Image
              src={partner}
              alt={`Partner ${index + 1}`}
              width={70}
              height={70}
            />
          </Grid.Col>
        ))}
        {partners.slice(6, 12).map((partner, index) => (
          <Grid.Col key={index} span={2}>
            <Image
              src={partner}
              alt={`Partner ${index + 7}`}
              width={70}
              height={70}
            />
          </Grid.Col>
        ))}
      </Grid>

      <div className="py-4">
        <Title className="text-5xl" mt="xl" mb="md">
          Accelerate your professional <br /> growth with <br /> Open Source Now
        </Title>
        <div className="flex items-center gap-2">
          <Text className="text-center" mb="xl">
            We work with
          </Text>
          <Grid justify="center" align="center">
            {partners.slice(0, 6).map((partner, index) => (
              <Grid.Col key={index} span={2}>
                <Image
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  width={5}
                  height={5}
                />
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default page;
