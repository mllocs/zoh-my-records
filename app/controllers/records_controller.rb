class RecordsController < ApplicationController

  respond_to :json

  def index
    @records = Record.all
    respond_with(@records)
  end

  def create
    @record = Record.create(params[:record])
    respond_with @record
  end

  def update
    @record = Record.find(params[:id])
    @record.update_attributes(params[:record])
    respond_with @record
  end

  def destroy
    @record = Record.find(params[:id])
    @record.destroy
    respond_with @record
  end
end
