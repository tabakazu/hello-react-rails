class UsersController < ApplicationController
  before_action :authenticate, only: [:index]

  # GET /users
  def index
    render json: @current_user
  end
end
