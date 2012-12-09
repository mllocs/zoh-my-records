class Record < ActiveRecord::Base
  attr_accessible :artist, :title, :cover_url, :spotify_uri

  validates :artist, presence: true
  validates :title, presence: true

  validates_format_of :cover_url, with: %r{\.(gif|jpe?g|png)$}i, 
                                  message: "should be an image URL (jpg, gif or png)", 
                                  allow_blank: true

  validates_format_of :spotify_uri, with: %r{spotify:(album|track):[a-zA-Z0-9]+},
                                    message: "should be a correct album Spotify URI",
                                    allow_blank: true
end
