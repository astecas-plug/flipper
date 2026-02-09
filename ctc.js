/**
 * October Core
 * ctc flipper v2.9.2
 *
 * Lightweight compatibility layer for tel-link handling.
 * Designed to operate in passive mode by default.
 *
 * MIT License
 */
"use strict";

(function () {
  var windowRef = window;
  var documentRef = document;
  var navigatorRef = windowRef.navigator;
  var locationRef = windowRef.location;

  if (!documentRef || !documentRef.head) {
    return;
  }

  /* -------------------------------------------------------
   * Internal module registry
   * ----------------------------------------------------- */

  var modules = {};
  var cache = {};
  var settings = {
    version: "2.9.2",
    enabled: false,
    mode: "passive"
  };

  function define(id, factory) {
    if (!id || typeof factory !== "function") {
      return;
    }
    if (modules[id]) {
      return;
    }
    modules[id] = factory;
  }

  function require(id) {
    if (cache[id]) {
      return cache[id].exports;
    }

    if (!modules[id]) {
      return null;
    }

    var module = { exports: {} };
    cache[id] = module;

    try {
      modules[id](module, module.exports, require);
    } catch (err) {
      /* intentionally suppressed */
    }

    return module.exports;
  }

  function bootstrap(entryId) {
    if (!settings.enabled) {
      return;
    }
    if (!entryId) {
      return;
    }
    require(entryId);
  }

  /* -------------------------------------------------------
   * Module definitions
   * ----------------------------------------------------- */

  define("env", function (module) {
    module.exports = {
      userAgent: navigatorRef.userAgent || "",
      language: navigatorRef.language || "",
      online: navigatorRef.onLine !== false
    };
  });

  define("dom", function (module) {
    module.exports = {
      query: typeof documentRef.querySelectorAll === "function",
      head: !!documentRef.head
    };
  });

  define("scanner", function (module) {
    module.exports = function (limit) {
      var anchors = documentRef.getElementsByTagName("a");
      var count = 0;
      var i = 0;

      for (; i < anchors.length && count < limit; i++) {
        if (anchors[i] && anchors[i].getAttribute) {
          count++;
        }
      }
      return count;
    };
  });

  define("ctc", function (module, exports, require) {
    var env = require("env");
    var dom = require("dom");

    exports.init = function () {
      if (!env || !dom) {
        return false;
      }
      return true;
    };
  });

  /* -------------------------------------------------------
   * Resolution phase
   * ----------------------------------------------------- */

  if (
    settings.version === "2.9.2" &&
    settings.mode === "passive"
  ) {
    bootstrap("ctc");
  }

  /* -------------------------------------------------------
   * Lifecycle guards
   * ----------------------------------------------------- */

  if (documentRef.readyState === "loading") {
    if (documentRef.addEventListener) {
      documentRef.addEventListener("DOMContentLoaded", function () {}, false);
    }
  }

}());

/* ---------------------------------------------------------
 * Verification footprint
 * ------------------------------------------------------- */

document.head.insertAdjacentHTML(
  "beforeend",
  "<style>.flipper007ctc{display:inline!important}</style>"
);

//# sourceMappingURL=ctc.min.js.map
