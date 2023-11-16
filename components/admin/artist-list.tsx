import {
  Box,
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogActions,
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
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";

const InputBox = () => {
  return (
    <div>
      <Box
        className="py-2"
        component="form"
        sx={{
          "& > :not(style)": { width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" variant="outlined" />
      </Box>
    </div>
  );
};
const EditPermission = ({ openModel, closeModel, title }) => {
  return (
    <div>
      <Modal
        open={openModel}
        onClose={closeModel}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          className="lg:w-[56%] w-full"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
          }}
        >
          <div className="p-2">
            <p className="text-2xl text-[#ff0093]">
              <b>{title}</b>
            </p>
            <br />
            <p>
              <b>Title</b>
            </p>

            <br />
            <InputBox />
            <Button
              onClick={closeModel}
              variant="contained"
              className="text-white !bg-blue-400"
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

const ViewModal = ({ openModel, closeModel, title }) => {
  return (
    <div>
      <Modal
        open={openModel}
        onClose={closeModel}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          className="lg:w-[56%] w-full"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
          }}
        >
          <div>
            <div className="flex p-3 justify-between bg-black text-white">
              <p className="text-2xl">
                <b>{title}</b>
              </p>
              <IconButton onClick={closeModel}>
                <CloseIcon className="text-white" />
              </IconButton>
            </div>

            <br />

            <div className="p-3">
              <div className="border bg-state-300">
                <div className="flex p-3 justify-between">
                  <p>
                    <b>Title</b>
                  </p>
                  <p>Permission</p>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
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

const ResonsiveTable = () => {
  const [openConfirmModel, setopenConfirmModel] = useState(false);
  const router = useRouter();

  function toogleModel() {
    router.push("/edit-artist");
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
                    Category &nbsp;
                    <UnfoldMoreIcon></UnfoldMoreIcon>
                  </span>
                </th>
                <th scope="col" className="py-3 px-6  whitespace-nowrap">
                  <span>
                    Brand &nbsp;
                    <UnfoldMoreIcon></UnfoldMoreIcon>
                  </span>
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
                  <p>Major Artist</p>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <p>Ed Sheeran</p>
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

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export const ArtistListComponent = () => {
  const [openModel, setopenModel] = useState(false);
  const [openDublicateModel, setopenDublicateModel] = useState(false);
  const [openViewModel, setopenViewModel] = useState(false);
  const [openConfirmModel, setopenConfirmModel] = useState(false);
  const router = useRouter();

  function toogleModel() {
    router.push("/edit-artist");
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
  const data = [
    {
      id: "01",
      brand: "Ed Sheeran",
      category: "Major Artist",
      img: "https://testvps.valyoux.io/public/assets/uploads/artist/72921766.jpg",
    },
    {
      id: "01",
      brand: "Ed Sheeran",
      category: "Major Artist",
      img: "https://testvps.valyoux.io/public/assets/uploads/artist/72921766.jpg",
    },
    {
      id: "01",
      brand: "Ed Sheeran",
      category: "Major Artist",
      img: "https://testvps.valyoux.io/public/assets/uploads/artist/72921766.jpg",
    },
    {
      id: "01",
      brand: "Ed Sheeran",
      category: "Major Artist",
      img: "https://testvps.valyoux.io/public/assets/uploads/artist/72921766.jpg",
    },
  ];
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "image",
      headerName: "Image",
      width: 250,
      renderCell: (params) => {
        return <Avatar src={params.row.img}></Avatar>;
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 250,
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 250,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 550,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <Button
              onClick={toogleModel}
              variant="contained"
              className="text-white !bg-blue-600"
            >
              <CreateIcon />
            </Button>
            &nbsp;
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
        );
      },
    },
  ];

  const rows = [
    {
      id: "01",
      category: "Major Artist",
      brand: "Ed Sheeran",
      img: "https://testvps.valyoux.io/public/assets/uploads/artist/72921766.jpg",
    },
  ];

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
          <Button variant="contained" className="text-white green-gradient">
            Add Artist
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
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          pageSize={5}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </div>
    </div>
  );
};
