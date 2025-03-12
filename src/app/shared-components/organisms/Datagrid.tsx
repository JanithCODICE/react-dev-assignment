import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

export interface DatagridProps {
  columns: GridColDef[];
  rows: GridRowsProp;
  totalRowCount: number;
  fetchData: (page: number) => void;
  loading: boolean;
}

const CustomDatagrid: React.FC<DatagridProps> = ({ totalRowCount, rows, columns, fetchData, loading }) => {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });
  
  const rowCountRef = React.useRef(totalRowCount || 0);

  const rowCount = React.useMemo(() => {
    if (totalRowCount !== undefined) {
      rowCountRef.current = totalRowCount;
    }
    return rowCountRef.current;
  }, [totalRowCount]);

  React.useEffect(() => {
    fetchData(paginationModel.page);
  }, [paginationModel]);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      rowCount={rowCount}
      pageSizeOptions={[5]}
      paginationMode="server"
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
      loading={loading}
      sx={{
        borderRadius: "12px",
        backgroundColor: "white",
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#F3F4F6",
          fontWeight: "bold",
          fontSize: "14px",
        },
        "& .MuiDataGrid-row": {
          fontSize: "14px",
          borderBottom: "1px solid #E5E7EB",
        },
        "& .MuiDataGrid-cell": {
          padding: "12px",
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "1px solid #E5E7EB",
          backgroundColor: "#F9FAFB",
        },
      }}
    />
  );
};

export default CustomDatagrid;
