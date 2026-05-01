import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders the home page with the main heading', () => {
    // The test environment needs a router context since App uses <Routes>
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Check for the main heading from HomePage
    const headingElement = screen.getByRole('heading', {
      level: 2,
      name: /강의를 관리하고 학습할 수 있는 교육 플랫폼/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the main call-to-action button', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Check for the CTA button from HomePage
    const buttonElement = screen.getByRole('button', {
      name: /지금 시작하기/i,
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /강의/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /로그인/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /회원가입/i })).toBeInTheDocument();
  });
});