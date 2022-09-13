import { useMemo, useRef, useState } from "react";
import { useFetchStatsList } from "../../hooks/useFetchStatsList";
import { AgGridReact } from "ag-grid-react";
import { DateRangePicker } from "react-date-range";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./TableContainer.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  ChurnRenderer,
  DateRenderer,
  InstallPlateFormRenderer,
  UnInstallPlateFormRenderer,
} from "./Renderers";
import { MenuItem } from "../../components/sidemenu/MenuItem";

export const TableContainer = () => {
  const gridRef = useRef(null);
  const columnDefs = useMemo(
    () => [
      { headerName: "Date", field: "created_At", cellRenderer: DateRenderer },
      { headerName: "Day Installs", field: "totalinstall" },
      {
        headerName: "Plateform",
        cellRenderer: InstallPlateFormRenderer,
      },
      { headerName: "Day Uninstalls", field: "totaluninstall" },
      { headerName: "Plateforms", cellRenderer: UnInstallPlateFormRenderer },
      { headerName: "Churn Rate", field: "totalchurn" },
      {
        headerName: "Churn Plateforms",
        cellRenderer: ChurnRenderer,
      },
    ],
    []
  );
  const onPageSizeChanged = (e) => {
    gridRef.current.api.paginationSetPageSize(Number(e.target.value));
  };
  const handleSelect = (date) => {
    setSelectionrange([date.selection]);
  };

  const [selectionRange, setSelectionrange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [showCalender, setShowCalender] = useState(false);

  const [data] = useFetchStatsList({ ...range[0] });

  const handleShowCalender = () => {
    setShowCalender(true);
  };
  const closeCalendar = () => {
    setShowCalender(false);
  };
  const handleApply = () => {
    setRange(selectionRange);
    setShowCalender(false);
  };
  return (
    <section>
      <div className="filters">
        <div className="page-size-filter">
          <span>Show</span>
          <select onChange={onPageSizeChanged} id="page-size">
            <option value="10">10</option>
            <option value="50" selected={true}>
              50
            </option>
            <option value="100">100</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
          </select>
          <span>Entries</span>
        </div>
        <div className={`date-range-filter ${showCalender ? "show" : ""}`}>
          <input
            type="text"
            value="Select Duration"
            onFocus={handleShowCalender}
          />
          <div className="rdrDateRangePicker">
            <div>
              <span>Select Duration</span>
              <MenuItem icon="GrFormClose" onClick={closeCalendar} />
            </div>
            <DateRangePicker ranges={selectionRange} onChange={handleSelect} />
            <div className="actions">
              <button className="btn primary" onClick={handleApply}>
                Apply
              </button>
              <button className="btn" onClick={closeCalendar}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="ag-theme-alpine">
        <AgGridReact
          ref={gridRef}
          rowData={data}
          columnDefs={columnDefs}
          domLayout={"autoHeight"}
          defaultColDef={{
            suppressMovable: true,
          }}
          rowHeight={40}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </section>
  );
};
