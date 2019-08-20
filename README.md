# Rails + Vue Template

A simple template using a Vue SPA inside Rails, with a Rails API.

The Rails API lives in an `api` route namespace, and everything else is delegated to the Vue Router.

### Uses

- VueJS
- Rails
- Axios
- Vue Router

### Structure

There is a single Rails ERB file, which is the entrypoint into Vue. It lives in `app/views/application/index.html.erb`. All other view rendering is handled by Vue.

Inside that ERB file, we load `app/javascript/packs/application.js`, which loads Vue, and delegates all routing to Vue Router, with all the routes being defined in `app/javascript/routes.js`.
