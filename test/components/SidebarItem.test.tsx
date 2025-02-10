import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SidebarItem from '../../src/components/SidebarItem';
import { describe, expect, it } from 'vitest';
import React from 'react';

describe('SidebarItem Component', () => {

  it('calls navigate on click with correct path', () => {
    render(
      <BrowserRouter>
        <SidebarItem icon="bi bi-house-door-fill" label="Home" isSidebarOpen={false} />
      </BrowserRouter>
    );
    const sidebarItem = screen.getByRole('button');
    fireEvent.click(sidebarItem);
    expect(window.location.pathname).toBe('/home');
  }),

    it('calls navigate on click with correct path', () => {
      render(
        <BrowserRouter>
          <SidebarItem icon="bi bi-house-door-fill" label="Attendance" isSidebarOpen={false} />
        </BrowserRouter>
      );
      const sidebarItem = screen.getByRole('button');
      fireEvent.click(sidebarItem);
      expect(window.location.pathname).toBe('/attendance');
    }),

    it('calls navigate on click with correct path', () => {
      render(
        <BrowserRouter>
          <SidebarItem icon="bi bi-house-door-fill" label="Team" isSidebarOpen={false} />
        </BrowserRouter>
      );
      const sidebarItem = screen.getByRole('button');
      fireEvent.click(sidebarItem);
      expect(window.location.pathname).toBe('/team');
    }),

    it('calls navigate on click with correct path', () => {
      render(
        <BrowserRouter>
          <SidebarItem icon="bi bi-house-door-fill" label="Schedule" isSidebarOpen={false} />
        </BrowserRouter>
      );
      const sidebarItem = screen.getByRole('button');
      fireEvent.click(sidebarItem);
      expect(window.location.pathname).toBe('/schedule');
    }),

    it('calls navigate on click with correct path', () => {
      render(
        <BrowserRouter>
          <SidebarItem icon="bi bi-house-door-fill" label="Settings" isSidebarOpen={false} />
        </BrowserRouter>
      );
      const sidebarItem = screen.getByRole('button');
      fireEvent.click(sidebarItem);
      expect(window.location.pathname).toBe('/settings');
    });

});
