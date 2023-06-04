import * as React from "react";
import {
  AppShell,
  Header,
  Title,
  Box,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { usePhotos } from "../../usePhotos";

export const CustomHeader: React.FC<
  React.PropsWithChildren<{ title: string }>
> = ({ children, title }) => {
  const { user, setUser } = usePhotos();
  const theme = useMantineTheme();

  return (
    <AppShell
      padding="md"
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={
        <Header
          height={60}
          p="xs"
          style={{
            display: "flex",
            background: theme.colors.blue[8],
          }}
        >
          <Title
            style={{
              color: "white",
            }}
          >
            {title}
          </Title>
          <Box sx={{ flexGrow: 1 }}></Box>
          {user && (
            <Box sx={{ display: "flex" }}>
              <Title
                mr="md"
                style={{
                  color: "white",
                }}
              >
                {user}
              </Title>
              <Button variant="light" onClick={() => setUser(null)}>
                Logout
              </Button>
            </Box>
          )}
          {!user && (
            <Button variant="light" onClick={() => setUser("Kevin")}>
              Login
            </Button>
          )}
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
