var bs = require("browser-sync").create();

bs.init({
    server: "./",
    https: {
        key: "key.pem",
        cert: "cert.pem"
    },
    files: ["*.*"]
});