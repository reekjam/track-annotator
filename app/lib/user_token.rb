module UserToken
  def self.encode(payload)
    JWT.encode(payload, ENV['JWT_SECRET'], ENV['JWT_ALGORITHM'])
  end

  def self.decode(token)
    JWT.decode(token, ENV['JWT_SECRET'], ENV['JWT_ALGORITHM'])
  end
end
