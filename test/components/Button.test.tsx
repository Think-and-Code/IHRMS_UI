import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../src/components/Button';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

describe('Button Component', () => {

    it('should render the button with the correct label', () => {
        render(<Button label="Click Me" />);
        const button = screen.getByText('Click Me');
        expect(button).toBeInTheDocument();
    });

    it('should call onClick when clicked', () => {
        const handleClick = vi.fn();
        render(<Button label="Click Me" onClick={handleClick} />);
        const button = screen.getByText('Click Me');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should render with default type as "button"', () => {
        render(<Button label="Click Me" />);
        const button = screen.getByText('Click Me');
        expect(button).toHaveAttribute('type', 'button');
    });

    it('should render with a custom type "submit"', () => {
        render(<Button label="Submit" type="submit" />);
        const button = screen.getByText('Submit');
        expect(button).toHaveAttribute('type', 'submit');
    });


    it('should apply secondary variant when specified', () => {
        render(<Button label="Click Me" variant="secondary" />);
        const button = screen.getByText('Click Me');
        expect(button).toHaveClass('bg-gray-600');
    });

    it('should apply danger variant when specified', () => {
        render(<Button label="Click Me" variant="danger" />);
        const button = screen.getByText('Click Me');
        expect(button).toHaveClass('bg-red-600');
    });

    it('should apply small size when specified', () => {
        render(<Button label="Click Me" size="small" />);
        const button = screen.getByText('Click Me');
        expect(button).toHaveClass('text-sm');
    });

    it('should apply medium size by default', () => {
        render(<Button label="Click Me" />);
        const button = screen.getByText('Click Me');
        expect(button).toHaveClass('text-base');
    });

    it('should apply large size when specified', () => {
        render(<Button label="Click Me" size="large" />);
        const button = screen.getByText('Click Me');
        expect(button).toHaveClass('text-lg');
    });

    it('should apply disabled styles when disabled is true', () => {
        render(<Button label="Click Me" disabled />);
        const button = screen.getByText('Click Me');
        expect(button).toHaveClass('opacity-50');
        expect(button).toHaveClass('cursor-not-allowed');
        expect(button).toBeDisabled();
    });

    it('should not apply disabled styles when disabled is false', () => {
        render(<Button label="Click Me" disabled={false} />);
        const button = screen.getByText('Click Me');
        expect(button).not.toHaveClass('opacity-50');
        expect(button).not.toHaveClass('cursor-not-allowed');
        expect(button).not.toBeDisabled();
    });

    it('should render with custom className', () => {
        render(<Button label="Click Me" className="custom-class" />);
        const button = screen.getByText('Click Me');
        expect(button).toHaveClass('custom-class');
    });

});

