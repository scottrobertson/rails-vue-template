# Rails + Vue Template

A simple template using a Vue.js single page application inside Rails using Webpacker along with a Rails API.

Mainly used for my own personal projects, so please remove/adapt things as you need.

The Rails API lives in an `api` route namespace, and everything else is delegated to vue-router. This allows you to build a full single page application, while having the power of Rails available for your API etc.

### Why not a "real" SPA?

For me, having a single application to deploy and maintain reduces the complexity a lot. You get most of the benefits of running an SPA this way, plus the power of Rails for your API.

### Uses

- Vue.js
- Rails
- Axios
- Vue Router
- Tailwind CSS

### Structure

There is a single Rails ERB file, which is the entrypoint into Vue.js. It lives in `app/views/application/index.html.erb`. All other view rendering is handled by Vue.js.

Inside that ERB file, we load `app/javascript/packs/application.js`, which loads Vue.js, and delegates all routing to vue-router, with all the routes being defined in `app/javascript/routes.js`.
