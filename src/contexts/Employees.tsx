import React, { createContext, useEffect, useMemo, useState } from 'react'
//import fetch from node-fetch //TODO: install the package and its type definitions

export interface Employee {
    id: string
    employee_name: string
    employee_salary: string
    employee_age: string
    profile_image?: string
}

interface EmployeeContextState {
    employees: Employee[]
}

export const EmployeeContext = createContext<EmployeeContextState>({ employees: [] })

const EmployeeProvider: React.FunctionComponent<any> = props => {
    const [employees, setEmployees] = useState<EmployeeContextState['employees']>([])

    useEffect(() => {
        // TODO: fetch and papulate the employees array from:
            // Added: fetch and papulate the employees array from: dummy url
            fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => res.json())
        .then((data) => {
          setEmployees(data);
        
        })
        .catch(console.log)
        }, [])

    // TODO: replace the 'div' element with the context Provider
    // component with a memoized object with a value for the employees array
    // that is only recalculated when the local employees state array changes

    // Added: replaced the 'div' element with the Employee context Provider
    // employees array with memorized data and recalculated when local employees is updated
    return <EmployeeContext.Provider value ={{employees}}>{props.children}</EmployeeContext.Provider>
}

export default EmployeeProvider