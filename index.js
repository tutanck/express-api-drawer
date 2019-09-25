const config = function(app) {
  app.draw = function(map, verbose = true, route) {
    route = route || "";
    for (var key in map) {
      switch (typeof map[key]) {
        // { '/path': { ... }}
        case "object":
          app.draw(map[key], verbose, route + key);
          break;
        // get: function(){ ... }
        case "function":
          if (verbose) console.log("* %s %s", key, route);
          app[key](route, map[key]);
          break;
      }
    }
  };
};

module.exports = config;
