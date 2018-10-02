class UsersController < ApplicationController
  before_action :authenticate, only: [:myself]

  # GET /users/myself
  def myself
    render json: @current_user
  end
end
