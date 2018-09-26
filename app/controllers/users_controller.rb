class UsersController < ApplicationController
  before_action :set_user, only: [:show]

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # GET /users/1
  def show
    @microposts = Micropost.where(user_id: @user.id)
    render json: { user: { id: @user.id, microposts: @microposts }}
  end

  # POST /users/token
  def token
    user = User.find_by(email: user_params[:email])
    payload = { user: { id: user.id }}

    if user && user.authenticate(user_params[:password])
      auth_token = JWT.encode(payload, nil, 'none')
      render json: { auth_token: auth_token }, status: :ok
    else
      render json: { error: 'Invalid username / password' }, status: :unauthorized
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
end
