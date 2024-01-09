import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

//test('renders BoxList component', () => {
//  render(<App />);
//  const linkElement = screen.getByText('boxListTestId');
//  expect(linkElement).toBeInTheDocument();
//});


test('renders App component without crashing', () => {
  render(<App />);
});


test('matches snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders Box component without crashing', () => {
  render(<Box id="1" width="100" height="100" backgroundColor="red" removeBox={() => {}} />);
});



test('Box component matches snapshot', () => {
  const tree = renderer.create(<Box id="1" width="100" height="100" backgroundColor="red" removeBox={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});


test('form submission adds a new box', () => {
  const addBoxMock = jest.fn();
  render(<NewBoxForm addBox={addBoxMock} />);

  fireEvent.change(screen.getByLabelText(/width/i), { target: { value: '100' } });
  fireEvent.change(screen.getByLabelText(/height/i), { target: { value: '100' } });
  fireEvent.change(screen.getByLabelText(/background color/i), { target: { value: 'red' } });
  fireEvent.click(screen.getByText(/add a new box/i));

  expect(addBoxMock).toHaveBeenCalledWith(expect.objectContaining({
    width: '100',
    height: '100',
    backgroundColor: 'red'
  }));
});
