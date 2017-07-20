Feature: Artwork Component
  As as user

Background:
  Given The server is running

Scenario:
  When I open the url "http://localhost:3000"
  When there is a number of active elements
  When I click on an active element
  Then there should one element less active element in the list
