import { render, screen, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', function () {
    render(<BoxList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

test('adding a box by submitting the form', () => {
    render(<BoxList />);

    // Get the input fields
    const widthInput = screen.getByLabelText(/Width:/i);
    const heightInput = screen.getByLabelText(/Height:/i);
    const colorInput = screen.getByLabelText(/Color:/i);

    // Simulate user input
    fireEvent.change(widthInput, { target: { value: '200' } });
    fireEvent.change(heightInput, { target: { value: '150' } });
    fireEvent.change(colorInput, { target: { value: 'red' } });

    // Submit the form
    const createButton = screen.getByText(/Create Box!/i);
    fireEvent.click(createButton);

    // Verify if the box is added to the DOM
    const boxElement = screen.getByTestId('box-element');
    expect(boxElement).toBeInTheDocument();
});