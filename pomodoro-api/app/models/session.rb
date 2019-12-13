class Session < ApplicationRecord
  has_many :notes, dependent: :destroy
end
