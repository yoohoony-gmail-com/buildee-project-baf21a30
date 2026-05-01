import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders the main heading and description', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: /미래를 위한 지식 허브/i, level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/강의를 효율적으로 관리하고/i)).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    render(<HomePage />);
    expect(screen.getByRole('button', { name: '지금 바로 시작하기' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '강의 둘러보기' })).toBeInTheDocument();
  });

  it('renders feature highlights', () => {
    render(<HomePage />);
    expect(screen.getByText('10K+')).toBeInTheDocument();
  });
});
