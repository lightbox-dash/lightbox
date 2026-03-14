ldc.register("sitecfg", [], function () {
  return {
    i18n: {
      placeholder: true,
      cfg: {
        supportedLng: ["zh-TW", "en"],
        fallbackLng: "zh-TW"
      }
    }
  };
});
