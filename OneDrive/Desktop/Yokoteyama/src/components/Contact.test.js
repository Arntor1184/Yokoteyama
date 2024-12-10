import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';  // Path to your Contact component

test('dropdown menu works and options can be selected', () => {
  render(<Contact />);  // Renders the Contact component
  
  // Find the dropdown by label
  const dropdown = screen.getByLabelText(/Reason for Contact:/i);
  
  // Verify the dropdown is in the document
  expect(dropdown).toBeInTheDocument();
  
  // Simulate selecting an option (for example, "Tournament Entry")
  fireEvent.change(dropdown, { target: { value: 'tournament-entry' } });

  // Check if the correct option is selected
  expect(dropdown.value).toBe('tournament-entry');
});
