class Microposts::LikeController < ApplicationController
  before_action :set_micropost, only: [:likes]

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
