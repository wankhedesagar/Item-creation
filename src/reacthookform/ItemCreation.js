import React, { useEffect, useState } from "react";
import CreateNewItemModal from "./CreateNewItemModal";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  IconButton,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function ItemCreation() {
  const [openItemCreationModal, setOpenItemCreationModal] = useState(false);
  const [tableDataList, setTableDataList] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchByName, setSearchByName] = useState("");

  // Function to handle deletion of an item
  const handleDelete = (index) => {
    const updatedList = tableDataList.filter((_, i) => i !== index);
    setTableDataList(updatedList);
  };

  // Compute the filtered list based on search input
  const filteredTableDataList = tableDataList.filter((item) =>
    iitem.itemName.toLowerCase().includes(searchByName.toLowerCase()) ||
    item.itemCode.toLowerCase().includes(searchByName.toLowerCase())
  );

  return (
    <div className="mt-24 px-4">
      <h1 className="text-center font-semibold text-xl">Item Creation</h1>
      <div className="flex justify-between my-4">
        <div className="w-5/12">
          <TextField
            name="searchByItemName"
            label="Search By Item Name / Item Code"
            fullWidth
            size="small"
            value={searchByName}
            onChange={(e) => {
              setSearchByName(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-end mr-2">
          <button
            type="button"
            onClick={() => {
              setSelectedRow(null); // Ensure no row is selected when adding a new item
              setOpenItemCreationModal(true);
            }}
            className="border border-indigo-900 text-indigo-900 rounded px-3 py-1 hover:bg-indigo-900 hover:text-white transition-colors duration-200"
          >
            + Add New
          </button>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="item table">
          <TableHead>
            <TableRow>
              <TableCell>Actions</TableCell>
              <TableCell>Sr.No</TableCell>
              <TableCell>Item Name</TableCell>
              <TableCell>Item Code</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTableDataList.length > 0 ? (
              filteredTableDataList.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    sx={{
                      paddingY: "2px",
                    }}
                  >
                    <div className="flex space-x-2">
                      <IconButton
                        color="primary"
                        onClick={() => {
                          setSelectedRow({ ...row, index });
                          setOpenItemCreationModal(true);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </TableCell>
                  <TableCell
                    sx={{
                      paddingY: "2px",
                    }}
                  >
                    {index + 1}
                  </TableCell>
                  <TableCell
                    sx={{
                      paddingY: "2px",
                    }}
                  >
                    {row.itemName}
                  </TableCell>
                  <TableCell
                    sx={{
                      paddingY: "2px",
                    }}
                  >
                    {row.itemCode}
                  </TableCell>
                  <TableCell>
                    {row.isActive ? (
                      <span className="text-green-600">Active</span>
                    ) : (
                      <span className="text-red-600">Inactive</span>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No items found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {openItemCreationModal && (
        <CreateNewItemModal
          openItemCreationModal={openItemCreationModal}
          handleClose={() => setOpenItemCreationModal(false)}
          tableDataList={tableDataList}
          setTableDataList={setTableDataList}
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
        />
      )}
    </div>
  );
}

export default ItemCreation;
