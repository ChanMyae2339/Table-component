thurain123-table-component
thurain123-table-component is a customizable React table component with advanced features such as global search, filtering, sorting, server-side pagination, and expandable rows. It is built with React Table (TanStack Table) and Framer Motion, and is designed to be highly flexible for displaying data in various formats.

✨ Features
Global Search: Includes a search box that allows searching all data in the table. (Prepared for server-side search)

Filtering: Ability to filter data by gender and age.

Sorting: Ability to sort data in ascending or descending order by clicking column headers.

Server-Side Pagination: Capable of displaying data in pages fetched from the API when data volume is large.

Expandable Rows: Allows expanding individual rows in the table to view detailed information.

Customizable Columns: Headers, accessors, and rendering styles of columns can be customized.

Hiding Priority: Automatically hides specified columns based on a priority list.

Animations: Smooth animations for rows appearing and disappearing in the table.

🚀 Installation
To install thurain123-table-component into your React project, use npm or yarn.

# If using npm
npm install thurain123-table-component

# Or if using yarn
yarn add thurain123-table-component

Peer Dependencies
thurain123-table-component relies on the following libraries. You must ensure they are also installed in your project for the component to function correctly.

# If using npm
npm install react react-dom @tanstack/react-table framer-motion react-icons

# Or if using yarn
yarn add react react-dom @tanstack/react-table framer-motion react-icons

💡 Usage
You can easily use thurain123-table-component within your React components. Its main component, SearchboxComponent, accepts apiUrl, columns, and hidingPriority props.

Using JSON Server:

You need to have JSON Server running on your machine with a db.json file. For example, db.json (to store user data):

// db.json
{
  "users": [
    { "id": "1", "firstName": "Alice", "lastName": "Smith", "age": 30, "gender": "female", "email": "alice@example.com", "ip_address": "192.168.1.1", "visits": 120, "status": "Active" },
    { "id": "2", "firstName": "Bob", "lastName": "Johnson", "age": 24, "gender": "male", "email": "bob@example.com", "ip_address": "192.168.1.2", "visits": 50, "status": "Inactive" },
    { "id": "3", "firstName": "Charlie", "lastName": "Brown", "age": 35, "gender": "male", "email": "charlie@example.com", "ip_address": "192.168.1.3", "visits": 200, "status": "Active" }
    // ... your data
  ]
}

To run JSON Server (in the folder where your db.json is located):

json-server --watch db.json --port 3000

src/App.jsx Example

import React from 'react';
import SearchboxComponent from 'thurain123-table-component'; // Import your library

function App() {
  // Column definitions for the table
  const columns = React.useMemo(
    () => [
      { accessorKey: 'id', header: 'ID' },
      { accessorKey: 'firstName', header: 'First Name' },
      { accessorKey: 'lastName', header: 'Last Name' },
      { accessorKey: 'age', header: 'Age' },
      { accessorKey: 'gender', header: 'Gender' },
      { accessorKey: 'email', header: 'Email' },
      { accessorKey: 'ip_address', header: 'IP Address' },
      { accessorKey: 'visits', header: 'Visits' },
      { accessorKey: 'status', header: 'Status' },
    ],
    []
  );

  // Keys of columns to hide (e.g., if you want to hide email and ip_address)
  const columnsToHide = ["email", "ip_address"];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Data Table Example</h1>
      <SearchboxComponent
        apiUrl="http://localhost:3000/users" // Provide your JSON Server API URL
        columns={columns}                  // Pass your table columns
        hidingPriority={columnsToHide}     // (Optional) Pass columns to hide
        searchPlaceholder="Search by name or email..." // (Optional) Custom placeholder for search input
      />
    </div>
  );
}

export default App;

⚙️ Props
SearchboxComponent accepts the following props:

apiUrl: string - The URL path of the API from which to fetch data. Should be a JSON Server URL. (Required)

Example: "http://localhost:3000/users"

columns: Array<Object> - Definitions for table columns. Must include at least accessorKey and header. (Required)

Example: [{ accessorKey: 'name', header: 'Name' }, { accessorKey: 'age', header: 'Age' }]

hidingPriority: Array<string> - (Optional) Provide a list of accessorKeys for columns to hide. If not provided, the default value (["email", "ip_address", "age", "gender", "last_name"]) will be used.

Example: ["email", "phone_number"]

searchPlaceholder: string - (Optional) Placeholder text for the search input. (Default: "Search all columns...")

customSearchFunction: (query: string, data: Array<Object>) => Array<Object> - (Optional) Provide a function if you wish to use custom client-side search logic. (Note that server-side search uses the API's q parameter.)

Column Definition
For the columns prop, each column can be defined with the following properties:

{
  accessorKey: 'dataKey', // Key to retrieve the value for this column from the data object
  header: 'Column Header', // Text to display in the table header
  // cell: info => info.getValue(), // (Optional) Defines how cell content should be rendered, e.g., for formatting
  // enableSorting: true, // (Optional) Indicates if this column can be used for sorting (Default: true)
  // size: 150, // (Optional) Width of the column (for styling)
}

➕ Extending / Customizing
ExpandableComponent: You can customize the information displayed in the expanded row by modifying the src/Table/ExpandableComponent.jsx file.

Styling: This library is styled with Tailwind CSS. If your project includes Tailwind CSS, you can override the library's styling as needed.

Search Logic: By providing the customSearchFunction prop, you can implement your own client-side search functionality. (Note that server-side search uses the API's q parameter.)

🤝 Contributing
If you are interested in contributing to this project, you can do so by submitting Pull Requests.

Fork this repository.

Create your feature branch (git checkout -b feature/your-new-feature).

Commit your changes (git commit -m 'feat: Add a new awesome feature').

Push to the branch (git push origin feature/your-new-feature).

Open a Pull Request.

📝 License
This project is licensed under the MIT License. See the LICENSE file for details.

🙏 Acknowledgements
TanStack Table (React Table v8)

Framer Motion

React Icons

Rollup

Babel

JSON Server
