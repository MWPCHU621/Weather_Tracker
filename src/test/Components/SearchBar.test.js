// Link.react.test.js
import { render as rtlRender, screen } from '@testing-library/react';
import userEvent, { keyboard } from '@testing-library/user-event';
import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { store } from '../../app/store';
import { CitySearchBar, searchCity } from '../../Components/SearchBar';
import citylistReducer from '../../Reducers/CityListSlice';

describe("Search Bar Component Test Suite", () => {

    const SearchBar = connect((state) => ({cityList: state.cityList}))(CitySearchBar);

    const initialReducerState = {
        citylist: [],
    }

    const reducer = citylistReducer;

    const render = (
        ui,
        {
            initialState = initialReducerState,
            store = createStore(reducer, initialState),
            ...renderOptions
        } = {},
        ) => {
            const Wrapper = ({children}) => <Provider store={store}>{children}</Provider>
            
            return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
        };

    it('can render search bar with default redux', () => {
        render(<CitySearchBar />);

        expect(screen.getByPlaceholderText("Type City Name")).toBeVisible();
    });

    it('should have error message with invalid city', () => {
        render(<CitySearchBar />);
        const inputArea = screen.getByPlaceholderText("Type City Name");

        userEvent.type(inputArea, "test");

        userEvent.type(inputArea, '{enter}');

        expect(screen.getByText("Invalid city. Please enter a valid city")).toBeVisible();
    });
});