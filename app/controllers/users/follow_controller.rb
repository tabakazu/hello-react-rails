class Users::FollowController < ApplicationController
  before_action :authenticate, only: [:create, :destroy]
  before_action :set_user, only: [:following, :followers]

  def create
    follow = Follow.new({
      follower_id: @current_user.id,
      followed_id: params[:user_id]
    })
    if follow.save
      render json: follow, status: :created
    else
      render json: { errors: follow.errors }
    end
  end

  def destroy
    follow = @current_user.active_follows.find_by(followed_id: params[:user_id])
    follow.destroy
    render json: {}, status: :no_content
  end

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
