class Track < ApplicationRecord
  belongs_to :user
  validates_uniqueness_of :spotify_id, scope: :user_id, message: "track has already been saved"
end
