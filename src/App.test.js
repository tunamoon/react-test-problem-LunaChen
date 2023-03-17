import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
// Form.test.js

import { InvalidForm } from './App.test.js'; //

// Add your tests here

it('Checks if Button Initially displays "click me" ', () => {
  const { getByTestId, getByText } = render(<InvalidForm {...InvalidForm.args} />);

  getByText('click me');

  const isFormValid = getByTestId('invalid-form');
  expect(isFormValid).toBeInTheDocument();
});

it('Checks if clicking button changes its text to "thanks" ', () => {
  const { getByTestId, getByText } = render(<InvalidForm {...InvalidForm.args} />);

  fireEvent.click(getByText('Submit'));

  const isFormValid = getByTestId('invalid-form');
  expect(isFormValid).toBeInTheDocument();
});


// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

