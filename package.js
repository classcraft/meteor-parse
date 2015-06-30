Package.describe({
  name: "classcraft:parse",
  version: "1.0.0",
  summary: "Wrapper for the npm package : parse",
  git: "https://github.com/classcraft/meteor-parse.git",
});

Npm.depends( {
  "parse": "1.4.2"
});

Package.onUse(function(api) {
  api.versionsFrom("0.9.0");
  api.addFiles("classcraft:parse.js", "server");
  if(api.export) api.export("Parse");
});
