class Api::V1::Users::LikeController < ApplicationController
  before_action :set_user, only: [:liking]

  def liking
    render json: @user.likes
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
