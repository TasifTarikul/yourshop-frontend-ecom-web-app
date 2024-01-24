import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import TopNav from "./TopNav";
import { act } from 'react-dom/test-utils';

describe("TopNav Test", () => {
  test("renders TopNav", async () => {
    act(() => renderWithProviders(<TopNav />));
    // renderWithProviders(<TopNav />);
    await waitFor(() => {
      expect(screen.getByText('Categories')).toBeInTheDocument();
    })
  });
});
