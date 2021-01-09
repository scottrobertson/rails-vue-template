FROM ruby:2.7.2-alpine as base
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

FROM bundle as webpack
WORKDIR /app
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install --frozen-lockfile
ADD . /app
ENV RAILS_ENV='production'
ENV SECRET_KEY_BASE='blank'
RUN bundle exec rake webpacker:compile

FROM base as runtime
COPY --from=bundle /usr/local/bundle/ /usr/local/bundle/
COPY --from=webpack /app/public/packs /app/public/packs
ADD . /app
RUN mkdir -p tmp/pids
RUN bundle exec bootsnap precompile --gemfile app/ lib/

CMD ["bundle", "exec", "puma"]
