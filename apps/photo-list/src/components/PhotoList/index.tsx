import { Paper, Title, Box, Image } from "@mantine/core";
import { useEffect } from "react";
import { usePhotos } from "ui";

export const PhotoList = () => {
  const { photos, addPhotos, user } = usePhotos();

  const fetchPhotos = async () => {
    const response = await fetch(
      "https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=5"
    );
    const json = await response.json();
    addPhotos(json.photos);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <Paper shadow="sm" radius="md" p="md" m="10" withBorder>
      <Title color="dark.9">Photo List</Title>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridGap: "1rem",
        }}
      >
        {photos.map((photo) => (
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
        ))}
      </Box>
    </Paper>
  );
};
