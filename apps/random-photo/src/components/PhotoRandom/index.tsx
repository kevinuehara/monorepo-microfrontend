import { Box, Button, Image, Loader, Paper, Title } from "@mantine/core";
import { useState } from "react";
import { usePhotos } from "ui";

export const PhotoRandom = () => {
  const { photo, addPhoto } = usePhotos();
  const [isLoading, setIsLoading] = useState(false);

  const generateNumber = (min: number, max: number) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleFetchRandomPhoto = async () => {
    setIsLoading(true);
    const number = generateNumber(1, 50);

    const response = await fetch(
      `https://api.slingacademy.com/v1/sample-data/photos/${number}`
    );

    const json = await response.json();
    addPhoto(json.photo);

    setIsLoading(false);
  };

  return (
    <Paper shadow="sm" radius="md" p="md" m="10" withBorder>
      <Title color="dark.9">Random Photo</Title>
      <Button onClick={handleFetchRandomPhoto}>Generate Photo</Button>
      {isLoading && <Loader />}
      {photo && !isLoading && (
        <div key={photo.id}>
          <Image
            maw={240}
            mx="auto"
            radius="md"
            src={photo.url}
            alt={photo.description}
            caption={photo.title}
          />
        </div>
      )}
    </Paper>
  );
};
