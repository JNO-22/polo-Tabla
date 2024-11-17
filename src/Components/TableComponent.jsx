import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TableComponent = (mockData) => {
  return (
    <TableContainer
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "2em",
        maxWidth: "80%",
        scrollbarColor: "#7f5af0 #242629",
        borderRadius: "5px",
      }}
    >
      <Table
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <TableHead
          sx={{
            "& th": { textAlign: "center", color: "#fff" },
            backgroundColor: "#242629",
          }}
        >
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            "& td": { textAlign: "center" },
            "& tr:hover": { cursor: "pointer", backgroundColor: "#94a1b242" },
          }}
        >
          {mockData.mockData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.nombre}</TableCell>
              <TableCell>{item.categoria}</TableCell>
              <TableCell>
                <p
                  style={{
                    color: "#fff",
                    backgroundColor: "#7f5af0",
                    borderRadius: "5px",
                    padding: "5px 0",
                    fontWeight: "bold",
                  }}
                >
                  ${item.precio}
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
