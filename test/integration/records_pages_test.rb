require 'test_helper'

class RecordsPagesTest < ActionDispatch::IntegrationTest

  setup do
    Capybara.default_driver = :selenium
  end

  test "basic record elements exist" do
    visit "/"
    within("h1") do
      assert page.has_content?("Zoh My Records")
    end
    within("#container") do
      assert page.has_selector?("ul#records")
      assert page.has_selector?("li.new")
    end
  end

  test "new record page exist" do
    visit "/records/new"
    within("form#new_record") do
      assert page.has_content?("Title")
      assert page.has_content?("Artist")
      assert page.has_content?("Cover URL")
      assert page.has_content?("Spotify URI")
    end
  end

  test "new record page creates elements" do
    visit "/records/new"
    fill_in "title", :with => "The Harrow And The Harvest"
    fill_in "artist", :with => "Gillian Welch"
    fill_in "cover_url", :with => "http://upload.wikimedia.org/wikipedia/en/thumb/1/18/Theharrowandtheharvest.jpg/220px-Theharrowandtheharvest.jpg"
    fill_in "spotify_uri", :with => "spotify:user:maxim.colls:playlist:0gxuTvV1XhCrnePamtPRrO"
    click_button "Add Record"

    within("ul#records") do
      assert page.has_content?("The Harrow And The Harvest")
      assert page.has_content?("Gillian Welch")
    end
  end

  test "new record page show errors" do
    visit "/records/new"
    visit "/records/new"
    fill_in "title", :with => "The Harrow And The Harvest"
    click_button "Add Record"
    assert_equal page.driver.browser.switch_to.alert.text, "artist can't be blank"
    page.driver.browser.switch_to.alert.accept
    assert_equal current_path, "/records/new"
  end

  test "new record page cancel button" do
    visit "/records/new"
    click_button "Cancel"
    assert_equal current_path, "/"
  end

end
