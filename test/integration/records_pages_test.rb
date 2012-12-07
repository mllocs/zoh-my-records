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

end
