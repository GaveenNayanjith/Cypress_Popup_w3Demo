/// <reference types="cypress" />

it('Handling alert in Cypress', function (){
  // launch url
  cy.visit("https://www.w3schools.com/js/tryit.asp?filename=tryjs_alert");
  
  //Running the the code snippet to generate the Popup button
  cy.get('#runbtn').click();

  //Accessing the popup button iframe and clicking the popup activation button
  cy.xpath('//iframe[@id="iframeResult"]').its('0.contentDocument.body').then(cy.wrap).xpath('//button[text()="Try it"]').click();
});