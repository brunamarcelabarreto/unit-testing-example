import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App Component', () => {
  it('should render list items', () => {
    const { getByText } = render(<App />)

    expect(getByText('Bruna')).toBeInTheDocument()
    expect(getByText('Diego')).toBeInTheDocument()
    expect(getByText('João')).toBeInTheDocument()
  });

  it('should be able to add new item to the list', async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<App />)

    const inputElement = getByPlaceholderText('New Item');
    const addButton = getByText('Adicionar');

    userEvent.type(inputElement, 'New')
    userEvent.click(addButton);

    await waitFor(() => {
      expect(findByText('New')).toBeInTheDocument();
    })
  })
})