module AuthToken
  def self.issue_token(payload)
    JWT.encode(payload, nil, 'none')
  end

  def self.valid?(token)
    begin
      JWT.decode(token, nil, false)
    rescue
      false
    end
  end
end