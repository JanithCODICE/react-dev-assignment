import React, { useEffect, useState } from "react";
import CustomDatagrid from "../../shared-components/organisms/Datagrid";
import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { userService } from "../../services/api/UserService";
import { useAppDispatch } from "../../store/hooks";
import { setNotification } from "../../store/reducers/notification.slice";
import { Col, Row } from "reactstrap";
import CustomCard from "../../shared-components/atoms/Card/Card";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 250 },
  { field: "name", headerName: "Name", width: 250 },
  { field: "email", headerName: "Email", width: 250 },
  {
    field: "status",
    headerName: "Status",
    width: 250,
    valueGetter: (params) => (params ? "Active" : "Inactive"),
  },
];

const Users: React.FC = () => {
  const dispatch = useAppDispatch();
  const [rows, setRows] = useState<GridRowsProp>([]);
  const [totalRowCount, setTotalRowCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (page: number) => {
    // Replace with your data fetching logic
    try {
      setLoading(true);
      const response = await userService.getUsers({ page });
      if (response.data) {
        setRows(response.data.entities);
        setTotalRowCount(response.data.pagination.totalRowCount);
      }
    } catch (error: any) {
      dispatch(
        setNotification({
          type: "error",
          message: error.message ?? "Error while retrieving users",
          visibility: true,
        })
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(0);
  }, []);

  return (
    <>
      <Row>
        <Col md={12}>
          <h3>Users</h3>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <CustomCard>
            <CustomDatagrid
              columns={columns}
              rows={rows}
              totalRowCount={totalRowCount}
              fetchData={fetchData}
              loading={loading}
            />
          </CustomCard>
        </Col>
      </Row>
    </>
  );
};

export default Users;
