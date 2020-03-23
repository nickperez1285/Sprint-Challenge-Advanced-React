import React from "react";
import Players from './Players.js'
import usePlayerCount from '../hooks/usePlayerCount'
import { useState } from "react";
import axiosMock from 'axios';
import '@testing-library/jest-dom/extend-expect';
// import 'mutationobserver-shim';
import App from '../App'
import { render, fireEvent, waitForElement } from "@testing-library/react";


test("Players components  renders", () => {
    render(<Players />);
});

test("Shows text to display how many players there are ", () => {
  const { getByText } = render(<App />);
getByText((content, element) => content.startsWith('there are'))



   
});



test("Shows players count ", () => {
  const app = render(<App />);
  expect(app.getByTestId("pcount")).toBeInTheDocument();
});
