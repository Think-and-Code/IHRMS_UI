import { render, screen } from '@testing-library/react';
import Footer from '../../src/components/Footer';
import React from 'react';
import { describe, expect, it } from 'vitest';

describe('Footer Component', () => {

    it('should render the button with the correct label', () => {
        render(<Footer />);
        const footer = screen.getByText('Think&Code™');
        expect(footer).toBeInTheDocument();
    });
});