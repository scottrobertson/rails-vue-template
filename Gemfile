source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.2'

gem 'rails', '~> 6.1.1'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 5'
gem "webpacker", '6.0.0.rc.6'

gem 'bootsnap', '>= 1.4.2', require: false

group :development do
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

group :development, :test do
  gem 'prettier'
  gem 'rspec-rails'
end

group :test do
  gem 'database_cleaner-active_record'
  gem 'database_cleaner-redis'
end
