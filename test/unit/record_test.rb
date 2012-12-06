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

end
