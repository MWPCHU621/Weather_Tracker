import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node'
import { CitySearchBar } from '../../Components/SearchBar';
import { render, screen } from '../test-utils';

export const handlers = [
    rest.get('https://api.openweathermap.org/data/2.5/onecall', (req, res, ctx) => {
        return res(ctx.json(fakeData), ctx.delay(150))
    })
  ]
  
  const server = setupServer(...handlers);
  
  // Enable API mocking before tests.
  beforeAll(() => server.listen())
  
  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers())
  
  // Disable API mocking after the tests are done.
  afterAll(() => server.close())

describe("Search Bar Component Test Suite", () => {

    it('can render search bar with default redux', () => {
        render(<CitySearchBar />);

        expect(screen.getByPlaceholderText("Example: toronto")).toBeVisible();
    });

    it('should have error message with invalid city', () => {
        render(<CitySearchBar />);

        const inputArea = screen.getByPlaceholderText("Example: toronto");

        userEvent.type(inputArea, "test");

        userEvent.type(inputArea, '{enter}');

        expect(screen.getByText("Invalid city or zipcode country code combination. Please enter a valid input")).toBeVisible();
    });
});