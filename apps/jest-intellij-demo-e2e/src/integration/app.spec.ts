import { getGreeting } from '../support/app.po';

describe('jest-intellij-demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to jest-intellij-demo!');
  });
});
