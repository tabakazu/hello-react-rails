class MicropostsController < ApplicationController
  before_action :set_micropost, only: [:show]

  # GET /microposts/1
  def show
    render json: @micropost
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_micropost
      begin
        @micropost = Micropost.find(params[:id])
      rescue
        render json: { error: 'Not found'}, status: 404
      end
    end
end
