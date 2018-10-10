class Micropost < ApplicationRecord
  default_scope -> { order(created_at: :desc) }
  belongs_to :user
  has_many :likes, dependent: :destroy
end
