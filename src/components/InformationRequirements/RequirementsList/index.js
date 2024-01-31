import React, { useEffect, useState } from "react";
import styles from "./RequirementsList.module.scss";
import cx from "classnames";
import { normalizeString, toCamelCase } from "@/helpers/format";
import MessageEmpty from "@/components/MessangeEmpty";
import FiltersGenerals from "@/components/FiltersGenerals/Filters";
import InputSearch from "@/components/InputSearch";
import AdvancedFilters from "@/components/AdvancedFilters";
import FilterTags from "@/components/FilterTags";
import RequirementsTable from "./RequirementsTable";

const RequirementsList = ({ data, viewsRender }) => {
  const [localdata, setLocaldata] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [rubroState, setRubroState] = useState({});
  const [estadoState, setEstadoState] = useState({});

  useEffect(() => {
    setLocaldata(data);
  }, [data]);
  
  const handleChangeSearch = (value) => {
    setSearchTerm(normalizeString(value));
  };

  return (
    <>
      <div className={styles.observationsFieldContainer}>
        <FiltersGenerals
          data={data}
          setData={setLocaldata}
          searchTerm={searchTerm}
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
            data={localdata}
            setData={setLocaldata}
            setEstadoState={setEstadoState}
            setRubroState={setRubroState}
            estadoState={estadoState}
            rubroState={rubroState}
          />
        </div>

        {viewsRender()}
      </div>
      <FilterTags
        estadoState={estadoState}
        rubroState={rubroState}
        setEstadoState={setEstadoState}
        setRubroState={setRubroState}
      />
      <RequirementsTable data={localdata} />
      {localdata?.length === 0 && (
        <MessageEmpty title={"No se encontró información."} />
      )}
    </>
  );
};

export default RequirementsList;
