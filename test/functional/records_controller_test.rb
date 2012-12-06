require 'test_helper'

class RecordsControllerTest < ActionController::TestCase

  test "should respond index" do
    get :index, format: :json
    assert_response :success
    assert_not_nil assigns(:records)
  end

  test "should respond create" do
    post :create, format: :json, record: { title: "The Misterious Production Of Eggs", artist: "Andrew Bird" }
    assert_response :success
    assert_not_nil assigns(:record)
  end

  test "should respond update" do
    put :update, format: :json, id: records(:one).id, record: { title: "The Heart Of Saturday Night"}
    assert_response :success
    assert_equal "The Heart Of Saturday Night", Record.find(records(:one).id).title
    assert_not_nil assigns(:record)
  end

  test "should respond delete" do
    assert_difference('Record.count', -1) do
      delete :destroy, format: :json, id: records(:two).id
    end
    assert_response :success
  end

end
