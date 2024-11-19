import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
  } from "@mui/material";
  import Box from "@mui/material/Box";
  import Modal from "@mui/material/Modal";
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
    p: 2,
  };
  
  const schema = yup
    .object({
      itemName: yup.string().required(),
      itemCode: yup.string().required(),
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
    const deafultValues = {
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
      formState: { errors, isValid, isDirty },
    } = useForm({
      mode: "onChange",
      resolver: yupResolver(schema),
      deafultValues,
    });
  
    console.log("itemCode", isValid);
  
    const onSubmit = (data) => {
      let tempArr = [...tableDataList];
      tempArr.push(data);
      setTableDataList(tempArr);
      console.log(data);
      handleClose();
    };


  
    useEffect(() => {
      if (selectedRow !== null) {
        setValue("itemName", selectedRow?.itemName);
        setValue("itemCode", selectedRow?.itemCode);
      }
    }, [selectedRow]);
  
    console.log("tableDataList", tableDataList);
  
    return (
      <div>
        <Modal
          open={openItemCreationModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="rounded-lg">
            <div className="flex justify-between items-center py-1">
              <h1 className="font-semibold text-lg">Item Creation</h1>
              <button type="button" onClick={handleClose}>
                <HighlightOffIcon color="error" />
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Item Name"
                    variant="outlined"
                    size="small"
                    {...register("itemName")}
                    error={errors.itemName}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Item Code"
                    variant="outlined"
                    size="small"
                    {...register("itemCode")}
                    error={errors.itemCode}
                  />
                </div>
                <div>
                  <Controller
                    name="isActive"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox {...field} />}
                          label="Active"
                        />
                      </FormGroup>
                    )}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="border border-red-600 text-red-600 px-3 py-1 rounded"
                  onClick={() => {
                    reset();
                    setValue("itemName", "abcd");
                  }}
                >
                  Reset
                </button>
                {isValid && (
                  <button
                    type="sumbit"
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                )}
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    );
  }