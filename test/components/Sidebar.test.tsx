import { render, screen } from '@testing-library/react';
import Sidebar from '../../src/components/Sidebar';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

describe('Sidebar Component', () => {

    it('should render Sidebar when open', () => {
        render(
            <BrowserRouter>
                <Sidebar isSidebarOpen={true} toggleSidebar={function (): void {
                    throw new Error('Function not implemented.');
                } } />
            </BrowserRouter>
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Attendance')).toBeInTheDocument();
        expect(screen.getByText('Team')).toBeInTheDocument();
        expect(screen.getByText('Schedule')).toBeInTheDocument();
        expect(screen.getByText('Settings')).toBeInTheDocument();
    });
});
