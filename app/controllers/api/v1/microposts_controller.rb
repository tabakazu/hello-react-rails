class Api::V1::MicropostsController < ApplicationController
  before_action :authenticate, only: [:create]
  before_action :set_micropost, only: [:show]

  # POST /microposts
  def create
    micropost = Micropost.new(micropost_param)
    micropost.user_id = @current_user.id
    if micropost.save
      render json: micropost, status: :created
    else
      render json: { errors: micropost.errors }
    end
  end

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

    # Only allow a trusted parameter "white list" through.
    def micropost_param
      params.require(:micropost).permit(:content)
    end
end
