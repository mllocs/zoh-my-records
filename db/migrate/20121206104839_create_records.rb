class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.string :title
      t.string :artist
      t.string :cover_url
      t.string :spotify_uri

      t.timestamps
    end
  end
end
