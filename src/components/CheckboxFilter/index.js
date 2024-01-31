import { toCamelCase } from "@/helpers/format";
import { getStatusColor } from "@/helpers/getStatusColor";
import { CheckBoxOutlined } from "@mui/icons-material";
import { Checkbox, FormControl, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";
import styles from "../AdvancedFilters/AdvancedFilters.module.scss";

const CheckboxFilter = ({
    state,
    handleChange,
    options,
    principalCheckboxLabel,
    statusLabel = false
}) => {
    const [stateCheckbox, setStateCheckbox] = useState(false);

    const handleChangeStateCheckbox = () => {
        setStateCheckbox(!stateCheckbox);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                margin: 10,
            }}
        >
            <div style={{ marginRight: "70px" }}>
                {" "}
                <FormControlLabel
                    control={
                        <Checkbox
                            checkedIcon={<CheckBoxOutlined />}
                            style={{
                                color: '#00828966'
                            }}
                            checked={stateCheckbox}
                            onChange={handleChangeStateCheckbox}
                        />
                    }
                    label={
                        <div className={styles.containerCheckState}>
                            {principalCheckboxLabel}
                        </div>
                    }
                />
            </div>

            {stateCheckbox && (
                <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                    <FormControl component="fieldset" variant="standard">
                        <FormGroup>
                            {options.map((option) => (
                                <FormControlLabel
                                    key={option.name}
                                    control={
                                        <Checkbox
                                            checkedIcon={<CheckBoxOutlined />}
                                            style={{
                                                color: '#00828966'
                                            }}
                                            checked={state[option.name]}
                                            onChange={handleChange}
                                            name={option.name}
                                        />
                                    }
                                    label={
                                        <div className={styles.containerCheckState}>
                                            {statusLabel && (
                                                <div
                                                    className={styles.statusCircle}
                                                    style={{ backgroundColor: getStatusColor(option.name) }}
                                                />
                                            )}
                                            {toCamelCase(option.label)}
                                        </div>
                                    }
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                </div>
            )}
        </div>
    );
};

export default CheckboxFilter