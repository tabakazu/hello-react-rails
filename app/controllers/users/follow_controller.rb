class Users::FollowController < ApplicationController
  before_action :set_user, only: [:following, :followers]

  def following
    render json: @user.following
  end

  def followers
    render json: @user.followers
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
