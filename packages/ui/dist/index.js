"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var ui_exports = {};
__export(ui_exports, {
  CustomHeader: () => CustomHeader,
  usePhotos: () => usePhotos
});
module.exports = __toCommonJS(ui_exports);

// components/CustomHeader/index.tsx
var import_core = require("@mantine/core");

// usePhotos.ts
var import_zustand = require("zustand");
var import_middleware = require("zustand/middleware");
var usePhotos = (0, import_zustand.create)()(
  (0, import_middleware.persist)(
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
var import_jsx_runtime = require("react/jsx-runtime");
var CustomHeader = ({ children, title }) => {
  const { user, setUser } = usePhotos();
  const theme = (0, import_core.useMantineTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_core.AppShell,
    {
      padding: "md",
      styles: {
        main: {
          background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
        }
      },
      header: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_core.Header,
        {
          height: 60,
          p: "xs",
          style: {
            display: "flex",
            background: theme.colors.blue[8]
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_core.Title,
              {
                style: {
                  color: "white"
                },
                children: title
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Box, { sx: { flexGrow: 1 } }),
            user && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Box, { sx: { display: "flex" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_core.Title,
                {
                  mr: "md",
                  style: {
                    color: "white"
                  },
                  children: user
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Button, { variant: "light", onClick: () => setUser(null), children: "Logout" })
            ] }),
            !user && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Button, { variant: "light", onClick: () => setUser("Kevin"), children: "Login" })
          ]
        }
      ),
      children
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CustomHeader,
  usePhotos
});
