class User < ApplicationRecord
  has_secure_password
  has_many :microposts, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :active_follows, class_name: 'Follow', foreign_key: "follower_id", dependent: :destroy
  has_many :passive_follows, class_name: 'Follow', foreign_key: "followed_id", dependent: :destroy
  has_many :following, through: :active_follows, source: :followed
  has_many :followers, through: :passive_follows, source: :follower
end
