class Api::V1::FollowController < ApplicationController
  before_action :authenticate, only: [:create, :destroy]

  def create
    user = User.find(params[:followed_id])
    follow = Follow.new({
      follower_id: @current_user.id,
      followed_id: user.id
    })
    if follow.save
      render json: follow, status: :created
    else
      render json: { errors: follow.errors }
    end
  end

  def destroy
    follow = @current_user.active_follows.find_by(followed_id: params[:followed_id])
    follow.destroy
    render json: {}, status: :no_content
  end
end
