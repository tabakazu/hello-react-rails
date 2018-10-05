class AuthController < ApplicationController
  # POST /auth/register
  def register
    user = User.new(user_params)
    if user.save
      token = AuthToken.issue_token({ user_id: user.id })
      render json: { user: user, token: token }
    else
      render json: { errors: user.errors }
    end
  end

  # POST /auth/token
  def token
    user = User.find_by(email: user_params[:email])

    if user && user.authenticate(user_params[:password])
      token = AuthToken.issue_token({ user_id: user.id })
      render json: { token: token }
    else
      render json: { error: "Invalid email/password combination" }, status: :unauthorized
    end
  end

  private
    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
end
