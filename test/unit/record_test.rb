require 'test_helper'

class RecordTest < ActiveSupport::TestCase

  test "should not save record without title" do
    record = Record.new(artist: "Dave Brubeck")
    assert !record.save
  end

  test "should not save record without artist" do
    record = Record.new(title: "Take Five")
    assert !record.save
  end

  test "should not save record with an incorrect cover_url" do
    record = Record.new(title: "Take Five", artist: "Dave Brubeck", cover_url: "Not a valid image URL")
    assert !record.save
  end

  test "should not save record with an incorrect spotify_url" do
    record = Record.new(title: "Take Five", artist: "Dave Brubeck", spotify_uri: "Not a valid spotify URI")
    assert !record.save
  end

end
