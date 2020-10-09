# Rails + Vue.js SPA-ish Template

A simple template for creating a Vue.js single page application inside Rails using Webpacker along with a Rails API.

Mainly used for my own personal projects, so please remove/adapt things as you need.

### Why not a "real" SPA?

For me, having a single application to deploy and maintain reduces the complexity a lot. You get most of the benefits of running an SPA this way, plus the power of Rails for your API.

### Technology Used

- Rails
- RSpec
- ESLint
- Axios
- Vue.js
- Vue Router
- Typescript
- Tailwind CSS

### Also sets up

- An example Dockerfile, based on alpine to keep the size down
- Dependabot for Bundler and Yarn
- Github actions
  - Run RSpec
  - Run ESLint
  - Build Docker image
  - Push Docker image to Github Container Registry (Optional - See below)

#### Github Container Registry

By default, this repo will just build the Docker image in Github Actions, but it will not push it anywhere.

To push these images to the Github Container Registry, please do the following:

- Head over to [Personal access tokens](https://github.com/settings/tokens), and create a token with `write:packages` permissions.
- Edit this repository, and got to Secrets
- Add the token from step one with the key `GHCR_TOKEN`
- Now each time you push to master, an image will be built, tagged with that commit hash, and pushed to Github Container Registry.

### Structure

There is a single Rails ERB file, which is the entrypoint into Vue.js. It lives in [`app/views/application/index.html.erb`](https://github.com/scottrobertson/rails-vue-template/blob/master/app/views/application/index.html.erb). All other view rendering is handled by Vue.js.

Inside that ERB file, we load [`app/javascript/packs/application.ts`](https://github.com/scottrobertson/rails-vue-template/blob/master/app/javascript/packs/application.ts), which loads Vue.js, and delegates all routing to vue-router, with all the routes being defined in [`app/javascript/routes.ts`](https://github.com/scottrobertson/rails-vue-template/blob/master/app/javascript/routes.ts).

The Rails API lives in an `api` route namespace, and everything else is [delegated to vue-router](https://github.com/scottrobertson/rails-vue-template/blob/master/config/routes.rb#L10). This allows you to build a full single page application, while having the power of Rails available for your API etc.
