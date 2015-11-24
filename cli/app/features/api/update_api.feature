Feature: Update API

  As Administration
  I want to update an API to Gateway

  Background:
    Given API Gateway Admin is available

  Scenario: Successful Update API
    Given It exists an API with name "google"
    When I call to update its name to "amazon"
    Then I receive that it has been updated
    And I check that it its new name is "amazon"


