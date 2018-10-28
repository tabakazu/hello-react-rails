class Api::V1::LikeController < ApplicationController
  before_action :authenticate, only: [:create, :destroy]

  def create
    micropost = Micropost.find(params[:micropost_id])
    like = Like.new({
      user_id: @current_user.id,
      micropost_id: micropost.id
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
