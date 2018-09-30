class ApplicationController < ActionController::API
  require 'json_web_token'

  private
    def current_user_id
      token = request.headers['Authorization'].split(' ').last
      JsonWebToken.decode(token)[0]['user']['id']
    end
end
