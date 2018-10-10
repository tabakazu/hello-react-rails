class Microposts::LikeController < ApplicationController
  before_action :authenticate, only: [:create, :destroy]

  def create
    like = Like.new({
      micropost_id: params[:micropost_id],
      user_id: @current_user.id
    })
    if like.save
      render json: like, status: :created
    else
      render json: { errors: like.errors }
    end
  end

  def destroy
    like = @current_user.likes.find_by(micropost_id: params[:micropost_id])
    like.destroy
    render json: {}, status: :no_content
  end
end
