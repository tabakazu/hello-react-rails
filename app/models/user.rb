class User < ApplicationRecord
  has_secure_password
  has_many :microposts, dependent: :destroy
  has_many :likes, dependent: :destroy
end
