class Api::V1::Users::TimelinesController < ApplicationController
  before_action :set_user, only: [:index]

  # GET /users/1/timelines
  def index
    following_ids = @user.following.map { |follow| follow.id }
    microposts = Micropost.where(user_id: following_ids)
    timelines = microposts.map { |micropost|
      {
        :id => micropost.id,
        :content => micropost.content,
        :user_name => micropost.user.name,
        :created_at => micropost.created_at,
        :updated_at => micropost.updated_at
      }
    }
    render json: timelines
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
