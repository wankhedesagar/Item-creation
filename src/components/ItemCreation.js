import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateNewItemModal from "./CreateNewItemModel";

function ItemCreation() {
  const [openItemCreationModal, setOpenItemCreationModal] = useState(false);
  const [tableDataList, setTableDataList] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchByName, setSearchByName] = useState("");


    // Function to handle deletion of an item
    // const handleDelete = (index) => {
    //     const updatedList = tableDataList.filter((_, i) => i !== index);
    //     setTableDataList(updatedList);
    //   };

    const handleDelete = (index) => {
      let updateList = [...tableDataList]
      updateList.splice(index,1)
      setTableDataList(updateList)
    }

  useEffect(() => {
    let tempArr = tableDataList.filter(
      (list) => list.itemName === searchByName
    );
    if (tempArr.length > 0) {
      console.log("searchByName", tempArr);

      setTableDataList(tempArr)
    }
  }, [searchByName]);

  return (
    <div className="mt-24 px-4">
      <h1 className="text-center font-semibold text-xl">Item Craetion</h1>
      <div className="flex justify-between">
        <div className="w-5/12">
          <TextField
            name="searchByItemName"
            label="Search By Item Name / Item Code"
            fullWidth
            size="small"
            onChange={(e) => {
              setSearchByName(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-end mr-2">
          <button
            type="button"
            onClick={() => setOpenItemCreationModal(true)}
            className="border border-indigo-900 text-indigo-900 rounded px-3 py-1"
          >
            + Add New
          </button>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Actions</TableCell>
              <TableCell>Sr.No</TableCell>
              <TableCell>Item Name</TableCell>
              <TableCell>Item Code</TableCell>
              <>Status</ >
            </TableRow>
          </TableHead>
          <TableBody>
            {tableDataList.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    paddingY: "2px",
                  }}
                >
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedRow(row);
                        setOpenItemCreationModal(true);
                      }}
                    >
                      <EditIcon color="primary" />
                    </button>
                    <button type="button"  onClick={() => handleDelete(index)} >
                    <DeleteIcon color="error"/>
                    </button>
                  </div>
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    paddingY: "2px",
                  }}
                >
                  {index + 1}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    paddingY: "2px",
                  }}
                >
                  {row.itemName}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    paddingY: "2px",
                  }}
                >
                  {row.itemCode}
                </TableCell>
                <TableCell>
                  {row.isActive === true ? (
                    <span className="text-green-600">Active</span>
                  ) : (
                    <span className="text-red-600">InActive</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
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