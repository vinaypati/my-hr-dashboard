import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/List of Employees/i)
    expect(linkElement).toBeInTheDocument()
})

//TODO: using the '@testing-library/react' package, create additional unit test
// that test components of the exercises that you've implemented
//
// There is no required amount of tests to create, however, the more thorough - the better.
//
// (You can use the documentation for the package to aid in your implementation of the unit tests)
