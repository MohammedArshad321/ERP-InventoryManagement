# ERP Inventory Management

A React-based inventory and employee management frontend for ERP systems.

## Overview

This repository contains a Create React App frontend for managing products, customers, employees, and sales orders. The app includes:

- Dashboard and employee screens
- Profile tab navigation
- Protected routes and authenticated access
- Modern layout and responsive UI

## Requirements

- Node.js 16 or newer
- npm 8 or newer

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open the app in your browser:

   ```text
   http://localhost:3000
   ```

## Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode.
- `npm build` - Builds the app for production to the `build` folder.
- `npm test` - Launches the test runner.
- `npm eject` - Ejects the Create React App configuration.

## Project Structure

- `src/` - Main application source code
- `src/components/` - Reusable UI components
- `src/pages/` - Page screens and routes
- `public/` - Static public assets

## Notes

- Authentication status is stored in `sessionStorage`.
- Routing uses `react-router-dom` v6.
- API requests use Axios from `src/services/api.js`.

## Git Workflow

- Branch-based feature development is recommended.
- Push changes to `employee_screen` or feature branches before opening a pull request.
- Compare changes against the default branch `main` when ready for review.

