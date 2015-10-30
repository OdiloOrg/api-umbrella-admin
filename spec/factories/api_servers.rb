# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :api_server, :class => 'Api::Server' do
    host "example.com"
    port 80
  end
end
