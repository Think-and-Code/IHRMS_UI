import { render, screen } from '@testing-library/react';
import Footer from '../../src/components/Footer';
import React from 'react';
import { describe, expect, it } from 'vitest';

describe('Footer Component', () => {

    it('should display relavent content', () => {
        render(<Footer />);
        const name = screen.getByText('Think&Code™');
        expect(name).toBeInTheDocument();
        const about = screen.getByText('About');
        expect(about).toBeInTheDocument();
        const privacy = screen.getByText('Privacy Policy');
        expect(privacy).toBeInTheDocument();
        const licensing = screen.getByText('Licensing');
        expect(licensing).toBeInTheDocument();
        const contact = screen.getByText('Contact');
        expect(contact).toBeInTheDocument();
    });
});