Rails.application.routes.draw do

  root to: 'application#index'

  namespace :api, :defaults => { :format => 'json' } do
    resources :posts
  end

  match "*path", to: "application#index", format: false, via: :get
end
