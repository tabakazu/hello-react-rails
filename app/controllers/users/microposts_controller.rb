class Users::MicropostsController < ApplicationController
  before_action :set_user, only: [:index]

  # GET /users/1/microposts
  def index
    render json: @user.microposts
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      begin
        @user = User.find(params[:user_id])
      rescue
        render json: { error: 'Not found'}, status: 404
      end
    end  
end
