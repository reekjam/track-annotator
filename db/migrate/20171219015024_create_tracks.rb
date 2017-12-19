class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string  :name
      t.string  :artist
      t.string  :spotify_uri
      t.string  :spotify_id
      t.integer :user_id

      t.timestamps
    end
  end
end
