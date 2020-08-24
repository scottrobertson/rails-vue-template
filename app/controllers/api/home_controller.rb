module Api
  class HomeController < Api::ApplicationController
    def index
      render json: { ok: true }
    end
  end
end
