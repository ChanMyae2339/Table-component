import React from "react";
import ReactTable from "./ReactTable.jsx";
import PaginationComponent from "./PaginationComponent.jsx";

const DataTable = ({
  dataRows = [],
  dataColumns = [],
  hidingPriority,
  page,
  setPage,
  limit,
  setLimit,
  totalItems,
}) => {

  return (
    <div>
    <ReactTable
  dataRows={dataRows}
  dataColumns={dataColumns}
  hidingPriority={hidingPriority}
 
/>

      <PaginationComponent
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
        totalItems={totalItems}
      />
    </div>
  );
};

export default DataTable;
