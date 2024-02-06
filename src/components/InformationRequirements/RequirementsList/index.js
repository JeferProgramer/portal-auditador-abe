import React, { useEffect, useState } from "react";
import styles from "./RequirementsList.module.scss";
import cx from "classnames";
import { normalizeString, searchInsensitive, toCamelCase } from "@/helpers/format";
import MessageEmpty from "@/components/MessangeEmpty";
import FiltersGenerals from "@/components/FiltersGenerals/Filters";
import InputSearch from "@/components/InputSearch";
import AdvancedFilters from "@/components/AdvancedFilters";
import FilterTags from "@/components/FilterTags";
import RequirementsTable from "./RequirementsTable";
import { filterBySelection } from "@/helpers/filter";
import CreateRequest from "@/components/CreateRequest";

const RequirementsList = ({ data, viewsRender }) => {
  const [localdata, setLocaldata] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [estadoState, setEstadoState] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedVisit, setSelectedVisit] = useState(null);
  const [selectedResponsible, setSelectedResponsible] = useState(null);
  const [estadoCheckboxState, setEstadoCheckboxState] = useState({});

  useEffect(() => {
    setLocaldata(data);
  }, [data]);

  const handleChangeSearch = (value) => {
    setSearchTerm(normalizeString(value));
  };

  const handleFilterChange = (type, value) => {
    switch (type) {
      case "project":
        setSelectedProject(value);
        break;
      case "visit":
        setSelectedVisit(value);
        break;
      case "responsible":
        setSelectedResponsible(value);
        break;
      default:
        break;
    }
  };

  const handleChangeState = (event) => {
    setEstadoState({ ...estadoState, [event.target.name]: event.target.checked });
  };

  const filterData = (data, estadoState, selectedProject, selectedVisit, selectedResponsible) => {
    let filteredData = data;
    if (Object.keys(estadoState).some(key => estadoState[key])) {
      filteredData = filteredData.filter(item => estadoState[item.status]);
      setEstadoCheckboxState(estadoState)
    }
    const filteredAndSelectedData = filterBySelection(filteredData, selectedProject, selectedVisit, selectedResponsible);

    return filteredAndSelectedData;
  }

  useEffect(() => {
    const filteredData = filterData(searchInsensitive(searchTerm, data), estadoCheckboxState, selectedProject, selectedVisit, selectedResponsible);
    setLocaldata(filteredData);
    setEstadoState(estadoCheckboxState)
  }, [selectedProject, selectedVisit, selectedResponsible, searchTerm, estadoCheckboxState]);

  const handleAccept = () => {
    const filteredData = filterData(searchInsensitive(searchTerm, data), estadoState, selectedProject, selectedVisit, selectedResponsible);
    setLocaldata(filteredData);
  }

  return (
    <>
      <div className={styles.observationsFieldContainer}>
        <FiltersGenerals
          data={data}
          selectedProject={selectedProject}
          handleFilterChange={handleFilterChange}
        />
        <div
          style={{
            display: "flex",
            marginRight: "2vw",
            gap: 10,
          }}
        >
          <InputSearch handleChange={handleChangeSearch} />
          <AdvancedFilters
            originalData={data}
            setEstadoState={setEstadoState}
            estadoState={estadoState}
            handleChangeState={handleChangeState}
            handleAccept={handleAccept}
          />
        </div>
        <CreateRequest />
        {viewsRender()}
      </div>
      <FilterTags
        estadoState={estadoCheckboxState}
        setEstadoState={setEstadoCheckboxState}
      />
      <RequirementsTable data={localdata} />
      {localdata?.length === 0 && (
        <MessageEmpty title={"No se encontró información."} />
      )}
    </>
  );
};

export default RequirementsList;
