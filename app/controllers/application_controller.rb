class ApplicationController < ActionController::API
  require 'auth_token'

  private
    def authenticate
      begin
        token = request.headers['Authorization'].split(' ').last
        payload, _ = AuthToken.valid?(token)
        @current_user = User.find_by(id: payload['user_id'])
      rescue
        render json: { error: 'Authorization header not valid'}, status: :unauthorized
      end
    end
end
