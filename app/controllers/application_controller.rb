class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  def current_user
    authenticate_or_request_with_http_token do |jwt_token, options|
      payload = JWT.decode(jwt_token, ENV['JWT_SECRET'])
      @current_user ||= User.find_by username: payload[0]['username']
    end
  end

  def logged_in?
    current_user != nil
  end

  def authenticate_user!
    head :unauthorized unless logged_in?
  end
end
