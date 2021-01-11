module Api
  class PostsController < BaseController
    def index
      # An example API endpoint to return a list of posts.
      # Here we just call an external placeholder API to get some posts.
      # In reality, you would get them from your database or something.
      net = Net::HTTP.new('jsonplaceholder.typicode.com', 443)
      net.use_ssl = true
      response = net.get('/posts')
      posts = JSON.parse(response.response.body).shuffle

      render json: posts
    end
  end
end
