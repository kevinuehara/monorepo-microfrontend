// components/CustomHeader/index.tsx
import {
  AppShell,
  Header,
  Title,
  Box,
  Button,
  useMantineTheme
} from "@mantine/core";

// usePhotos.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
var usePhotos = create()(
  persist(
    (set) => ({
      user: null,
      photos: [],
      setUser: (user) => set(() => ({ user })),
      addPhotos: (photos) => set(() => ({ photos }))
    }),
    {
      name: "app-photo"
    }
  )
);

// components/CustomHeader/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var CustomHeader = ({ children, title }) => {
  const { user, setUser } = usePhotos();
  const theme = useMantineTheme();
  return /* @__PURE__ */ jsx(
    AppShell,
    {
      padding: "md",
      styles: {
        main: {
          background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
        }
      },
      header: /* @__PURE__ */ jsxs(
        Header,
        {
          height: 60,
          p: "xs",
          style: {
            display: "flex",
            background: theme.colors.blue[8]
          },
          children: [
            /* @__PURE__ */ jsx(
              Title,
              {
                style: {
                  color: "white"
                },
                children: title
              }
            ),
            /* @__PURE__ */ jsx(Box, { sx: { flexGrow: 1 } }),
            user && /* @__PURE__ */ jsxs(Box, { sx: { display: "flex" }, children: [
              /* @__PURE__ */ jsx(
                Title,
                {
                  mr: "md",
                  style: {
                    color: "white"
                  },
                  children: user
                }
              ),
              /* @__PURE__ */ jsx(Button, { variant: "light", onClick: () => setUser(null), children: "Logout" })
            ] }),
            !user && /* @__PURE__ */ jsx(Button, { variant: "light", onClick: () => setUser("Kevin"), children: "Login" })
          ]
        }
      ),
      children
    }
  );
};
export {
  CustomHeader,
  usePhotos
};
