class Record < ActiveRecord::Base
  attr_accessible :artist, :title, :cover_url, :spotify_uri
  validates :artist, presence: true
  validates :title, presence: true
end
