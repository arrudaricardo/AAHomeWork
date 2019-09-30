# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'bcrypt'
class User < ApplicationRecord
    include BCrypt
    attr_reader :password

    validates :username, :session_token, presence: true
    validates :password, presence: true, length: {minimum:6}, allow_nil: true

    before_validation :ensure_session_token

    def self.find_by_credentials(username, password)
        user = self.find_by_username(username)
        password_hash = Password.create(password)
        return user if password == user.password_digest 
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        if self.session_token.nil? 
            self.session_token = User.generate_session_token
            self.save!
        end
        session_token
    end

    def password=(new_password)
        @password = new_password
        self.password_digest = Password.create(new_password)
    end
    
end
