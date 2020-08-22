RSpec.describe "api/posts", type: :request do
  describe "request list of all posts" do
    it 'returns a list of posts' do
      get '/api/posts'
      expect(response).to be_successful

      parsed_body = JSON.parse(response.body)
      expect(parsed_body.size).to eq(100)
    end

  end
end
