Feature: Update API

  As Administration
  I want to update an API to Gateway

  Background:
    Given API Gateway Admin is available

  Scenario: Successful Update API
    When I call to update API "2f768543-03ab-47c2-aef0-e4a513651d11" from file "test_update_api.json"
    Then I receive that it has been updated
    And I check it


