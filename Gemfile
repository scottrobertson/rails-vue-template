source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.2'

gem 'rails', '~> 6.1.1'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 5'
gem "webpacker", github: "rails/webpacker", tag: 'b6c21802bfd4968c6e22d6faf69a45ee1ff3eb19'

gem 'bootsnap', '>= 1.4.2', require: false

group :development do
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

group :development, :test do
  gem 'rspec-rails'
  gem 'rubocop-rails'
  gem 'rubocop-performance'
  gem 'rubocop-rspec'
end

group :test do
  gem 'database_cleaner-active_record'
  gem 'database_cleaner-redis'
end
