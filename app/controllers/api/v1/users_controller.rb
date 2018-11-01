class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show]

  # GET /users/1
  def show
    render json: @user.slice(:id, :name, :email)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      begin
        @user = User.find_by(name: params[:id])
      rescue
        render json: { error: 'Not found'}, status: 404
      end
    end
end
