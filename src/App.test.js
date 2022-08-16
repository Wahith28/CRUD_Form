import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "./App";

describe("MyComponent", () => {
   const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Shows "Hello world!"', () => {
    store = mockStore(initialState);
    const { getByText = jest.fn() } = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText("Hello World!")).not.toBeNull();
  });
});
