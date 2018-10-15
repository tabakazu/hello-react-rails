class Microposts::LikeController < ApplicationController
  before_action :authenticate, only: [:create, :destroy]
  before_action :set_micropost, only: [:likes]

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

  def likes
    render json: @micropost.likes
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_micropost
      begin
        @micropost = Micropost.find(params[:micropost_id])
      rescue
        render json: { error: 'Not found'}, status: 404
      end
    end
end
