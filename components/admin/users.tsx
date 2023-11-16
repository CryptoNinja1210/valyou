import {
  Box,
  Button,
  Checkbox,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import Card from "@mui/material/Card";
import CreateIcon from "@mui/icons-material/Create";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

const ResonsiveTable = () => {
  const [openModel, setopenModel] = useState(false);
  const [openDublicateModel, setopenDublicateModel] = useState(false);
  const [openViewModel, setopenViewModel] = useState(false);
  const [openConfirmModel, setopenConfirmModel] = useState(false);

  function toogleModel() {
    setopenModel((openModel) => !openModel);
  }
  function toogleDuplicateModel() {
    setopenDublicateModel((openDublicateModel) => !openDublicateModel);
  }
  function toogleViewModel() {
    setopenViewModel((openViewModel) => !openViewModel);
  }
  function toogleConfirmModel() {
    setopenConfirmModel((openConfirmModel) => !openConfirmModel);
  }

  return (
    <div>
      <Card
        sx={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)" }}
        variant="outlined"
      >
        <div className="overflow-x-auto relative p-4">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="bg-white rounded-lg border border-gray-200 shadow-md">
              <tr>
                <th scope="col" className="py-3 px-6 whitespace-nowrap">
                  <Checkbox />
                </th>
                <th scope="col" className="py-3 px-6 whitespace-nowrap">
                  <span>
                    {" "}
                    Id &nbsp;
                    <UnfoldMoreIcon></UnfoldMoreIcon>
                  </span>
                </th>
                <th scope="col" className="py-3 px-6  whitespace-nowrap">
                  <span>Image &nbsp;</span>
                </th>
                <th scope="col" className="py-3 px-6  whitespace-nowrap">
                  <span>
                    First Name &nbsp;
                    <UnfoldMoreIcon></UnfoldMoreIcon>
                  </span>
                </th>
                <th scope="col" className="py-3 px-6  whitespace-nowrap">
                  <span>
                    Last Name &nbsp;
                    <UnfoldMoreIcon></UnfoldMoreIcon>
                  </span>
                </th>
                <th scope="col" className="py-3 px-6  whitespace-nowrap">
                  <span>Email</span>
                </th>
                <th scope="col" className="py-3 px-6  whitespace-nowrap">
                  <span>Dob</span>
                </th>
                <th scope="col" className="py-3 px-6  whitespace-nowrap">
                  <span>Role</span>
                </th>
                <th scope="col" className="py-3 px-6  whitespace-nowrap">
                  <span>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <br />
              <tr className="border border-gray-200 shadow-md whitespace-nowrap">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  <Checkbox />
                </th>
                <td className="py-4 px-6 whitespace-nowrap">01 </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <Avatar src="https://testvps.valyoux.io/public/assets/uploads/artist/72921766.jpg"></Avatar>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <p>Baqar</p>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <p>Butt</p>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <p>baqarcit@gmail.com </p>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <p>1994-01-05 </p>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <span className="p-2 rounded-xl bg-blue-400 text-white font-bold">Music Fan (Investor)</span>
                </td>
                <td className="py-4 px-6  whitespace-nowrap">
                  <div className="flex items-center">
                    <Button
                      onClick={toogleModel}
                      variant="contained"
                      className="text-white !bg-blue-600"
                    >
                      <CreateIcon />
                    </Button>
                    &nbsp;
                    {/* <Button
                      onClick={toogleViewModel}
                      variant="contained"
                      className="text-white !bg-blue-500"
                    >
                      <VisibilityIcon />
                    </Button>
                    <ViewModal
                      title="View"
                      openModel={openViewModel}
                      closeModel={toogleViewModel}
                    />
                    &nbsp; */}
                    <Button
                      onClick={toogleConfirmModel}
                      variant="contained"
                      className="text-white pinkGradient"
                    >
                      <DeleteIcon />
                    </Button>
                    <ConfirmModal
                      title="Confirmation"
                      openModel={openConfirmModel}
                      closeModel={toogleConfirmModel}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center p-4">
          <Pagination count={10} shape="rounded" color="primary" />
        </div>
      </Card>
    </div>
  );
};

const ConfirmModal = ({ openModel, closeModel, title }) => {
  return (
    <div>
      <Dialog
        open={openModel}
        onClose={closeModel}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div className="flex justify-between">
            <p className="text-2xl">
              <b>{title}</b>
            </p>
            <IconButton onClick={closeModel}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="text-center">
              <p className="text-2xl">
                <b>Are you sure you want to delete this ?</b>
              </p>
            </div>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={closeModel}>Delete</Button>
          <Button onClick={closeModel} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export const UserComponent = () => {
  const [openModel, setopenModel] = useState(false);
  const [openDublicateModel, setopenDublicateModel] = useState(false);
  const [openViewModel, setopenViewModel] = useState(false);
  const [openConfirmModel, setopenConfirmModel] = useState(false);
  const [openAddPermissionModel, setopenAddPermissionModel] = useState(false);

  function toogleModel() {
    setopenModel((openModel) => !openModel);
  }
  function toogleDuplicateModel() {
    setopenDublicateModel((openDublicateModel) => !openDublicateModel);
  }
  function toogleViewModel() {
    setopenViewModel((openViewModel) => !openViewModel);
  }
  function toogleConfirmModel() {
    setopenConfirmModel((openConfirmModel) => !openConfirmModel);
  }
  function toogleAddPermission() {
    setopenAddPermissionModel(
      (openAddPermissionModel) => !openAddPermissionModel
    );
  }

  return (
    <div className="p-2">
      <div className="lg:flex justify-between items-center">
        <div className="flex p-1">
          <Button variant="contained" className="!bg-black text-white">
            Copy
          </Button>
          <Button variant="contained" className="!bg-black text-white">
            CSV
          </Button>
          <Button variant="contained" className="!bg-black text-white">
            Excel
          </Button>
          <Button variant="contained" className="!bg-black text-white">
            PDF
          </Button>
        </div>
        <div className="flex p-2">
          <Button variant="contained" className="text-white pinkGradient">
            Delete Selected
          </Button>
          &nbsp;
          <Button
            onClick={toogleAddPermission}
            variant="contained"
            className="text-white green-gradient"
          >
            Add User
          </Button>
       
        </div>
      </div>
      <div className="lg:flex justify-between">
        <div className="flex items-center">
          <p>Show</p>
          &nbsp;&nbsp;
          <select
            id="countries"
            className="bg-gray-50 p-1 border w-[58px] h-[30px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option selected>10</option>
            <option value="US">20</option>
            <option value="CA">30</option>
            <option value="FR">40</option>
            <option value="DE">50</option>
          </select>
          &nbsp;&nbsp;
          <p>Enteries</p>
        </div>
        <TextField
          size="small"
          className="lg:w-96 w-full inputRounded m-0 p-0"
          placeholder="Search"
          sx={{ my: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {" "}
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      {/* <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={12}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </div> */}
      <ResonsiveTable />
    </div>
  );
};
