import React,{useMemo} from 'react';
import './App.css';
import {Employee} from '../contexts/Employees';
export interface configData {
    key: string
    direction: string
}

const useSortableData = (items:any, config:configData) => {
    const [sortConfig, setSortConfig] = React.useState(config);
    const requestSort = (key:string) => {
        let direction = 'ascending';
        if (
          sortConfig &&
          sortConfig.key === key &&
          sortConfig.direction === 'ascending'
        ) {
          direction = 'descending';
        }
        setSortConfig({ key, direction });
      };
 
  const sortedItems = useMemo(() => {
    let sortableItems = items?[...items]:[];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;


  }, [items, sortConfig]);



  return { items: sortedItems, requestSort, sortConfig };


};

export const EmployeeData: React.FunctionComponent<any>  = props => { 

    // creating sorting using useSortableData in key and direction flow and here we have created the table 
  const { items, requestSort, sortConfig } =  useSortableData(props.data.data,{key:'',direction:''});
  const getClassNamesFor = (name:string) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button 
              type="button" disabled={props.disable}
              onClick={() => requestSort('id')}
              className={getClassNamesFor('id')}
            >
              Employee Id
            </button>
          </th>
          <th>
            <button
              type="button" disabled={props.disable}
              onClick={() => requestSort('employee_name')}
              className={getClassNamesFor('employee_name')}
            >
              Employee Name
            </button>
          </th>
          <th>
            <button
              type="button" disabled={props.disable}
              onClick={() => requestSort('employee_salary')}
              className={getClassNamesFor('employee_salary')}
            >
              Employee Salary
            </button>
          </th>
          <th>
            <button
              type="button" disabled={props.disable}
              onClick={() => requestSort('employee_age')}
              className={getClassNamesFor('employee_age')}
            >
              Employee Age
            </button>
          </th>
          <th>
            <button
              type="button" disabled={props.disable}
              onClick={() => requestSort('profile_image')}
              className={getClassNamesFor('profile_image')}
            >
              Profile Image
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.employee_name}</td>
            <td>{item.employee_salary}</td>
            <td>{item.employee_age}</td>
            <td>{item.profile_image}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeData;

