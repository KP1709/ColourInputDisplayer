export default ({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    testIsolation: false,
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
