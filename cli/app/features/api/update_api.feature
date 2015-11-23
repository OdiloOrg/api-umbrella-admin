Feature: Create API

  As Administration
  I want to update an API to Gateway

  Background:
    Given API Gateway Admin is available

  Scenario Outline: Successful Create API
    Given I want to update <name>
    And with protocol <protocol> with frontendHost <frontendHost> with backendHost <backendHost>
    When I call to update it
    Then I check that it has been updated

    Examples:
      | name     | protocol | frontendHost   | backendHost   |
      | 'google' | 'http'   | '/google' | 'backendHost' |
