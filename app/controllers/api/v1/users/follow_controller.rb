class Api::V1::Users::FollowController < ApplicationController
  before_action :set_user, only: [:following, :followers]

  def following
    render json: @user.following.map{ |follow| follow.slice(:id, :name) }
  end

  def followers
    render json: @user.followers
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      begin
        @user = User.find_by(name: params[:user_id])
      rescue
        render json: { error: 'Not found'}, status: 404
      end
    end
end
