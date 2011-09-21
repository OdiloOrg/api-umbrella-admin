class ApiUser
  include Mongoid::Document
  include Mongoid::Timestamps

  field :api_key
  field :first_name
  field :last_name
  field :email
  field :website
  field :use_description
  field :unthrottled, :type => Boolean
  field :throttle_hourly_limit, :type => Integer
  field :throttle_daily_limit, :type => Integer
  field :throttle_by_ip, :type => Boolean
  field :disabled_at, :type => Time

  field :roles, :type => Array

  index :api_key, :unique => true

  # Validations
  #
  # Provide full sentence validation errors. This doesn't really vibe with how
  # Rails intends to do things by default, but the we're super picky about
  # wording of things on the AFDC site which uses these messages. MongoMapper
  # and ActiveResource combined don't give great flexibility for error message
  # handling, so we're stuck with full sentences and changing how the errors
  # are displayed.
  validates_uniqueness_of :api_key
  validates_presence_of :first_name,
    :message => "Provide your first name."
  validates_presence_of :last_name,
    :message => "Provide your last name."
  validates_presence_of :email,
    :message => "Provide your e-mail address."
  validates_format_of :email,
    :with => /.+@.+\..+/,
    :allow_blank => true,
    :message => "Provide a valid e-mail address."
  validates_presence_of :website,
    :message => "Provide your web site URL.",
    :unless => lambda { |user| user.no_domain_signup }
  validates_format_of :website,
    :with => /\w+\.\w+/,
    :unless => lambda { |user| user.no_domain_signup },
    :message => "Your web site must be a valid URL in the form of http://nrel.gov"
  validates_acceptance_of :terms_and_conditions,
    :message => "Check the box to agree to the terms and conditions."

  # Callbacks
  before_validation :generate_api_key, :on => :create

  attr_accessor :terms_and_conditions, :no_domain_signup

  # Protect against mass-assignment.
  attr_accessible :first_name, :last_name, :email, :website, :use_description,
    :terms_and_conditions

  # has_role? simply needs to return true or false whether a user has a role or not.  
  # It may be a good idea to have "admin" roles return true always
  def has_role?(role_in_question)
    if(self.roles.include?("admin"))
      true
    else
      self.roles.include?(role_in_question.to_s)
    end
  end

  def self.human_attribute_name(attribute)
    case(attribute.to_sym)
    when :email
      "E-mail"
    when :terms_and_conditions
      "Terms and conditions"
    when :website
      "Web site"
    else
      super
    end
  end

  def as_json(options = {})
    hash = super(options)

    if(!self.valid?)
      hash.merge!(:errors => self.errors.full_messages)
    end

    hash
  end

  private

  def generate_api_key
    unless self.api_key
      require "active_support/secure_random"
      self.api_key = SecureRandom.hex(20) # This actually generates a random key 40, not 20, characters long.
    end
  end
end