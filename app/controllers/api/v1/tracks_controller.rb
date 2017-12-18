class Api::V1::TracksController < ApplicationController
  before_action :authenticate_user!
  
end
