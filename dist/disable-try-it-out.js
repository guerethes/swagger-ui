bplist00�_WebMainResource�	
_WebResourceData_WebResourceMIMEType_WebResourceTextEncodingName^WebResourceURL_WebResourceFrameNameO	E<html><head></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">"use strict";

function _typeof(obj) { if (typeof Symbol === "function" &amp;&amp; typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj &amp;&amp; typeof Symbol === "function" &amp;&amp; obj.constructor === Symbol &amp;&amp; obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// From: https://raw.githubusercontent.com/chilts/umd-template/master/template.js
;

(function (f) {
  // module name and requires
  var name = 'DisableTryItOutWithoutServersPlugin';
  var requires = []; // CommonJS

  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" &amp;&amp; typeof module !== "undefined") {
    module.exports = f.apply(null, requires.map(function (r) {
      return require(r);
    })); // RequireJS
  } else if (typeof define === "function" &amp;&amp; define.amd) {
    define(requires, f); // &lt;script&gt;
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      // works providing we're not in "use strict";
      // needed for Java 8 Nashorn
      // seee https://github.com/facebook/react/issues/3037
      g = this;
    }

    g[name] = f.apply(null, requires.map(function (r) {
      return g[r];
    }));
  }
})(function () {
  // Module source
  return function (system) {
    return {
      statePlugins: {
        spec: {
          wrapSelectors: {
            allowTryItOutFor: function allowTryItOutFor(ori) {
              return function () {
                console.log("yo yo");

                if (!system.specSelectors.isOAS3()) {
                  // If we aren't looking at an OAS3 definition, allow it
                  return ori.apply(void 0, arguments);
                }

                var spec = system.specSelectors.specJson();
                var servers = spec.get("servers");
                var serversExist = !!servers &amp;&amp; servers.size &gt; 0;
                return serversExist ? ori.apply(void 0, arguments) : false;
              };
            }
          }
        }
      }
    };
  };
});</pre></body></html>_application/javascriptUUTF-8_chttps://unpkg.com/swagger-ui-plugin-disable-try-it-out-without-servers@0.0.1-alpha.2/build/index.jsP    ( : P n } �	�	�	�
b                           
c