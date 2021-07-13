// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { CitySearchBar } from '../Components/SearchBar';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Provider store={store}>
            <CitySearchBar />,
        </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});