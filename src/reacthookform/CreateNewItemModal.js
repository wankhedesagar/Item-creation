import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
    Box,
    Modal,
    IconButton,
  } from "@mui/material";
  import React, { useEffect } from "react";
  import { Controller, useForm } from "react-hook-form";
  import { yupResolver } from "@hookform/resolvers/yup";
  import * as yup from "yup";
  import HighlightOffIcon from "@mui/icons-material/HighlightOff";
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
  };
  
  const schema = yup
    .object({
      itemName: yup.string().required("Item Name is required"),
      itemCode: yup.string().required("Item Code is required"),
      isActive: yup.boolean(),
    })
    .required();
  
  export default function CreateNewItemModal({
    openItemCreationModal,
    handleClose,
    tableDataList,
    setTableDataList,
    selectedRow,
    setSelectedRow,
  }) {
    const defaultValues = {
      itemName: "",
      itemCode: "",
      isActive: true,
    };
  
    const {
      control,
      watch,
      reset,
      setValue,
      register,
      handleSubmit,
      formState: { errors, isValid },
    } = useForm({
      mode: "onChange",
      resolver: yupResolver(schema),
      defaultValues,
    });
    console.log('itemCode',isValid)
  
    const onSubmit = (data) => {
      if (selectedRow && typeof selectedRow.index === "number") {
        // Update existing item
        const updatedList = tableDataList.map((item, idx) =>
          idx === selectedRow.index ? data : item
        );
        setTableDataList(updatedList);
      } else {
        // Add new item
        setTableDataList([...tableDataList, data]);
      }
      console.log("Form Data Submitted:", data);
      handleCloseModal();
    };
  
    const handleCloseModal = () => {
      handleClose();
      setSelectedRow(null);
      reset(defaultValues);
    };
  
    useEffect(() => {
      if (selectedRow && typeof selectedRow.index === "number") {
        setValue("itemName", selectedRow.itemName);
        setValue("itemCode", selectedRow.itemCode);
        setValue("isActive", selectedRow.isActive);
      } else {
        reset(defaultValues);
      }
    }, [selectedRow, setValue, reset]);
  
    return (
      <Modal
        open={openItemCreationModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-semibold text-lg">
              {selectedRow ? "Edit Item" : "Create New Item"}
            </h1>
            <IconButton onClick={handleCloseModal}>
              <HighlightOffIcon color="error" />
            </IconButton>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4">
              <TextField
                id="item-name"
                label="Item Name"
                variant="outlined"
                size="small"
                fullWidth
                {...register("itemName")}
                error={!!errors.itemName}
                helperText={errors.itemName?.message}
              />
              <TextField
                id="item-code"
                label="Item Code"
                variant="outlined"
                size="small"
                fullWidth
                {...register("itemCode")}
                error={!!errors.itemCode}
                helperText={errors.itemCode?.message}
              />
              <Controller
                name="isActive"
                control={control}
                render={({ field }) => (
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...field}
                          checked={field.value}
                          onChange={(e) => field.onChange(e.target.checked)}
                        />
                      }
                      label="Active"
                    />
                  </FormGroup>
                )}
              />
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <button
                type="button"
                className="border border-red-600 text-red-600 px-4 py-2 rounded hover:bg-red-600 hover:text-white transition-colors duration-200"
                onClick={() => {
                  reset(defaultValues);
                  setSelectedRow(null);
                }}
              >
                Reset
              </button>
              {isValid && (
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
                >
                  Save
                </button>
              )}
            </div>
          </form>
        </Box>
      </Modal>
    );
  }
  