RSpec.describe "api/posts", type: :request do
  describe "request list of all posts" do
    it 'returns a list of posts' do
      get '/api/posts'
      expect(response).to be_successful

      expect(json_body.size).to eq(100)
      expect(json_body.first.keys).to eq(['userId', 'id', 'title', 'body'])
    end
  end
end
