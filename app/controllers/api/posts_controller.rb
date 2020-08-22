module Api
  class PostsController < ApplicationController
    def index
      net = Net::HTTP.new("jsonplaceholder.typicode.com", 443)
      net.use_ssl = true
      response = net.get("/posts")

      posts = JSON.parse(response.response.body).shuffle

      render json: posts
    end
  end
end
