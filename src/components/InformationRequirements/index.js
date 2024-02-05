import React, { useEffect, useState } from "react";
import styles from "./InformationRequirements.module.scss";
import { OPTIONS } from "@/utils/InformationRequirements";
import RequirementsPercentage from "./RequirementsPercentage";
import RequirementsList from "./RequirementsList";
import RequirementsCalendar from "./RequirementsCalendar";
import cx from "classnames";
import { LineChartUp } from "@/Icons/LineChartUp";
import Menu from "@/Icons/Menu";
import CalendarDate from "@/Icons/CalendarDate";
import { getRequirements } from "@/services/RequirimientoInformacion.service";
import { getProjectIdFromURL } from "@/helpers/idProject";

const InformationRequirements = () => {
  const [activeOption, setActiveOption] = useState(OPTIONS.LISTA);
  const [data, setData] = useState(null);
  const id_proyecto = getProjectIdFromURL();

  useEffect(async () => {
    const data = await getRequirements(id_proyecto);
    setData(data.data);
  }, []);

  console.log("data",data);

  const viewsRender = () => {
    return (
      <div className={styles.optionsContainerRequirement}>
        <div className={styles.observationsFieldItem}>
          <div className={styles.observationsFieldInnerItem}>
            <div className={styles.observationsFieldText}>Observar:</div>
          </div>
        </div>
        <div className={styles.observationsFieldSubitem}>
          <div
            className={cx(styles.observationsFieldSubitemInner, {
              [styles.observationsFieldSubitemInner2]:
                activeOption === OPTIONS.PORCENTAJE,
            })}
            onClick={() => setActiveOption(OPTIONS.PORCENTAJE)}
          >
            <div className={styles.observationsFieldIconContainer}>
              <LineChartUp
                color={
                  activeOption === OPTIONS.PORCENTAJE ? "#A6D04F" : "#C7C7C7"
                }
              />
            </div>
          </div>
          <div
            className={cx(styles.observationsFieldSubitemInner, {
              [styles.observationsFieldSubitemInner2]:
                activeOption === OPTIONS.LISTA,
            })}
            onClick={() => setActiveOption(OPTIONS.LISTA)}
          >
            <div className={styles.observationsFieldIconContainer}>
              <Menu
                color={activeOption === OPTIONS.LISTA ? "#A6D04F" : "#C7C7C7"}
              />
            </div>
          </div>
          <div
            className={cx(styles.observationsFieldSubitemInner, {
              [styles.observationsFieldSubitemInner2]:
                activeOption === OPTIONS.CALENDARIO,
            })}
            onClick={() => setActiveOption(OPTIONS.CALENDARIO)}
          >
            <div className={styles.observationsFieldIconContainer}>
              <CalendarDate
                color={
                  activeOption === OPTIONS.CALENDARIO ? "#A6D04F" : "#C7C7C7"
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.containerInformationGeneral}>
      {activeOption === OPTIONS.PORCENTAJE && (
        <RequirementsPercentage data={data} viewsRender={viewsRender} />
      )}
      {activeOption === OPTIONS.LISTA && (
        <RequirementsList
          data={data}
          activeOption={activeOption}
          setActiveOption={setActiveOption}
          viewsRender={viewsRender}
        />
      )}
      {activeOption === OPTIONS.CALENDARIO && (
        <RequirementsCalendar data={data} viewsRender={viewsRender} />
      )}
    </div>
  );
};

export default InformationRequirements;
