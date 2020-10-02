module Api
  class HomeController < BaseController
    def index
      render json: { ok: true }
    end
  end
end
