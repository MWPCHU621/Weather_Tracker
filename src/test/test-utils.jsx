import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import WeatherInfoSlice from '../Reducers/WeatherInfoSlice'

function render(
    ui,
    {
        preloadedState,
        store = configureStore({ reducer: { weatherInfo: WeatherInfoSlice }, preloadedState }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }