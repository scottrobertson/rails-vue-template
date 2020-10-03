FROM ruby:2.7.1-alpine as base
WORKDIR /app
RUN apk update
RUN apk add yarn git build-base postgresql-dev tzdata
RUN gem install bundler:2.1.4
RUN echo 'IRB.conf[:USE_MULTILINE] = false' > ~/.irbrc

FROM base as bundle
ADD Gemfile* /app/
RUN bundle config set no-cache 'true'
RUN bundle config set without 'development test'
RUN bundle install --jobs 4 --retry 2 && rm -rf /usr/local/bundle/cache

FROM base
COPY --from=bundle /usr/local/bundle/ /usr/local/bundle/
ADD yarn.lock package.json /app/
RUN yarn install
ADD . /app
RUN NODE_ENV=production RAILS_ENV=production SECRET_KEY_BASE=$(rails secret) rails assets:precompile
