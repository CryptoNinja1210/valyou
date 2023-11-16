import {
  Button,
  TextField,
  TextareaAutosize,
  Chip,
  InputAdornment,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Modal,
} from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import { useAutocomplete, AutocompleteGetTagProps } from "@mui/base";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";

const Root = styled("div")(
  ({ theme }) => `
  color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)"
  };
  font-size: 14px;
`
);

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled("div")(
  ({ theme }) => `
  width: 100%;
  height: 100px;
  border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
  }

  &.focused {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}

function Tag(props: TagProps) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

const StyledTag = styled(Tag)<TagProps>(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#fafafa"
  };
  border: 1px solid ${theme.palette.mode === "dark" ? "#303030" : "#e8e8e8"};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`
);

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);

const permissions = [
  { title: "user_management", year: 1994 },
  { title: "permission_create", year: 1972 },
  { title: "permission_edit", year: 1974 },
  { title: "permission_show", year: 2008 },
  { title: "permission_delete", year: 1957 },
  { title: "permission_access", year: 1993 },
  { title: "role_create", year: 1994 },
  {
    title: "role_edit",
    year: 2003,
  },
  { title: "role_show", year: 1966 },
  { title: "role_delete", year: 1999 },
  {
    title: "role_access",
    year: 2001,
  },
  {
    title: "user_create",
    year: 2001,
  },
  {
    title: "user_edit",
    year: 2001,
  },
  {
    title: "user_show",
    year: 2001,
  },
  {
    title: "user_delete",
    year: 2001,
  },
  {
    title: "user_access",
    year: 2001,
  },
  {
    title: "artist_access",
    year: 2001,
  },
  {
    title: "music_fan_access",
    year: 2001,
  },
  {
    title: "business_access",
    year: 2001,
  },
  {
    title: "admin_access",
    year: 2001,
  },
  {
    title: "artist_create",
    year: 2001,
  },
  {
    title: "artist_edit",
    year: 2001,
  },
  {
    title: "artist_show",
    year: 2001,
  },
  {
    title: "artist_delete",
    year: 2001,
  },
  {
    title: "business_create",
    year: 2001,
  },
  {
    title: "business_edit",
    year: 2001,
  },
  {
    title: "business_show",
    year: 2001,
  },
  {
    title: "business_delete",
    year: 2001,
  },
  {
    title: "permission",
    year: 2001,
  },
];

const InputBox = ({ value }) => {
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
        <TextField value={value} id="outlined-basic" variant="outlined" />
      </Box>
    </div>
  );
};

const EditPermission = ({ openModel, closeModel, title }) => {
  const [data, setData] = useState([]);
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [permissions[1]],
    multiple: true,
    options: permissions,
    // getOptionLabel: (option) => option.title,
  });

  useEffect(() => {
    setData(value);
  }, [value]);

  const selectAll = () => {
    setData([...permissions]);
  };

  const deselectAll = () => {
    setData([]);
  };
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
            // width:"56%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
          }}
        >
          <div className="p-2">
            <p className="text-2xl text-[#ff0093]">
              <b>Create Role</b>
            </p>
            <br />
            <p>
              <b>Title</b>
            </p>

            <br />
            <InputBox value={title} />
            <br />
            <p>
              <b>Select Permission</b>
            </p>
            <div className="sm:flex px-2 justify-between">
              <Button
                onClick={selectAll}
                variant="contained"
                className="text-white !bg-blue-400"
              >
                Select All
              </Button>
              <Button
                onClick={deselectAll}
                variant="contained"
                className="text-white !bg-blue-400"
              >
                DeSelect All
              </Button>
            </div>
            <br />

            <div className="p-2">
              <Root>
                <div {...getRootProps()}>
                  <InputWrapper
                    ref={setAnchorEl}
                    className={focused ? "focused" : ""}
                  >
                    {data.map((option: any, index: number) => (
                      <StyledTag
                        key={index}
                        label={option.title}
                        {...getTagProps({ index })}
                      />
                    ))}
                    <input {...getInputProps()} />
                  </InputWrapper>
                </div>
                {groupedOptions.length > 0 ? (
                  <Listbox {...getListboxProps()}>
                    {(groupedOptions as typeof permissions).map(
                      (option, index) => (
                        <li key={index} {...getOptionProps({ option, index })}>
                          <span>{option.title}</span>
                          <CheckIcon fontSize="small" />
                        </li>
                      )
                    )}
                  </Listbox>
                ) : null}
              </Root>
            </div>

            <br />
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

const DuplicatePermission = ({ openModel, closeModel, title }) => {
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
            // width:"56%",
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
            <InputBox value={title} />
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
            // width:"56%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
          }}
        >
          <div>
            <div className="flex p-3 justify-between bg-black text-white">
              <p className="text-2xl">
                <b>View</b>
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
                  <p>{title}</p>
                </div>
              </div>
              <br />
              <div className="border bg-state-300">
                <div className="flex p-3 justify-between">
                  <p>
                    <b>Permissions</b>
                  </p>
                  <div>
                    <Chip color="primary" label="business_access" />
                    <Chip color="primary" label="business_create" />
                    <Chip color="primary" label="business_edit" />
                  </div>
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

const AddPermission = ({ openModel, closeModel, title }) => {
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
            // width:"56%",
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
            <InputBox value={title} />
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

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export const RoleComponent = () => {
  const [openModel, setopenModel] = useState(false);
  const [openDublicateModel, setopenDublicateModel] = useState(false);
  const [openViewModel, setopenViewModel] = useState(false);
  const [openConfirmModel, setopenConfirmModel] = useState(false);
  const [openAddPermissionModel, setopenAddPermissionModel] = useState(false);
  const [data, setData] = useState({ title: "" });

  function toogleModel(e, rowData) {
    e?.preventDefault();
    e?.stopPropagation();
    setopenModel((openModel) => !openModel);
    setData(rowData);
  }
  function toogleDuplicateModel() {
    setopenDublicateModel((openDublicateModel) => !openDublicateModel);
  }
  function toogleViewModel(e, rowData) {
    e?.preventDefault();
    e?.stopPropagation();
    setopenViewModel((openViewModel) => !openViewModel);
    setData(rowData);
  }
  function toogleConfirmModel(e) {
    e?.preventDefault();
    e?.stopPropagation();
    setopenConfirmModel((openConfirmModel) => !openConfirmModel);
  }
  function toogleAddPermission() {
    setopenAddPermissionModel(
      (openAddPermissionModel) => !openAddPermissionModel
    );
  }
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "title",
      headerName: "Title",
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
              onClick={(e) => toogleModel(e, params.row)}
              variant="contained"
              className="text-white !bg-blue-600"
            >
              <CreateIcon />
            </Button>
            {/* <EditPermission
              title={params.row.title}
              openModel={openModel}
              closeModel={toogleModel}
            /> */}
            &nbsp;
            <Button
              onClick={(e) => toogleModel(e, params.row)}
              variant="contained"
              className="text-white green-gradient"
            >
              <ContentCopyIcon />
            </Button>
            {/* <EditPermission
              title={params.row.title}
              openModel={openDublicateModel}
              closeModel={toogleDuplicateModel}
            /> */}
            &nbsp;
            <Button
              onClick={(e) => toogleViewModel(e, params.row)}
              variant="contained"
              className="text-white !bg-blue-500"
            >
              <VisibilityIcon />
            </Button>
            {/* <ViewModal
              title={params.row.title}
              openModel={openViewModel}
              closeModel={toogleViewModel}
            /> */}
            &nbsp;
            <Button
              onClick={toogleConfirmModel}
              variant="contained"
              className="text-white pinkGradient"
            >
              <DeleteIcon />
            </Button>
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      id: "01",
      title: "Business",
    },
    {
      id: "02",
      title: "Music Fan (Investor)",
    },
    {
      id: "03",
      title: "Artist",
    },
    {
      id: "04",
      title: "Admin",
    },
  ];

  return (
    <>
      <EditPermission
        title={data.title}
        openModel={openModel}
        closeModel={toogleModel}
      />
      <ViewModal
        title={data.title}
        openModel={openViewModel}
        closeModel={toogleViewModel}
      />
      <ConfirmModal
        title="Confirmation"
        openModel={openConfirmModel}
        closeModel={toogleConfirmModel}
      />
      <div className="p-2">
        <div className="lg:flex justify-between items-center">
          <div className="flex p-1">
            {/* <Button variant="contained" className="!bg-black text-white">
            Copy
          </Button>
          <Button variant="contained" className="!bg-black text-white">
            CSV
          </Button> */}
            {/* <Button variant="contained" className="!bg-black text-white">
            Excel
          </Button>
          <Button variant="contained" className="!bg-black text-white">
            PDF
          </Button> */}
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
              Add
            </Button>
            <EditPermission
              title=""
              openModel={openAddPermissionModel}
              closeModel={toogleAddPermission}
            />
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
    </>
  );
};
