@Amazon
Feature: Test Register Online Store

  @HappyPath
  Scenario: User registration
    Given The user enters the website
    When The user is directed to register on the website
    And The user is on the registration page
    Then The user begins to register on the site "Renato", "Cabezas Antezana", "renato@gmail.com"
    Then The user registers his address "Calle Miraflores 120", "Lima", "Peru", "Lima", "15029"
    Then The user registers his login "RenatoCA", "renato001", "renato001"
    Then The user select newsletter "Yes"
    Then The user click continue