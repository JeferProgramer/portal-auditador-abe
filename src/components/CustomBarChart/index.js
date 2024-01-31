import LinkExternal from '@/Icons/LinkExternal';
import styles from '../InformationRequirements/RequirementsPercentage/RequirementsPercentage.module.scss'

const CustomBarChart = ({ data, onBarClick }) => {
    function hexToRgb(hex) {
        hex = hex.replace(/^#/, "");
        let bigint = parseInt(hex, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return { r, g, b };
    }

    return (
        <div className={styles.verticalBarChart}>
            <div className={styles.gridLines}>
                {[...Array(11)].map((_, index) => (
                    <>
                        <div key={index} className={styles.gridLine} />
                        <div
                            style={{
                                position: "relative",
                                left: -10,
                                top: -10,
                                width: "2.5vw",
                                backgroundColor: "white",
                            }}
                        >
                            {" "}
                            <div> {(11 - (index + 1)) * 10}%</div>
                        </div>
                    </>
                ))}
            </div>

            {data?.map((item, index) => {
                const rgbColor = hexToRgb(item.color || "0000FF");
                return (
                    <>
                        <div
                            key={index}
                            className={`${styles.verticalBar} ${styles.slideAnimation}`}
                            onClick={() => onBarClick(item)}
                            style={{
                                height: `${(item.value / 11) * 10}%`,
                                width: "8vw",
                                backgroundColor: `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`,
                            }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    top: `${(-item.value / 11) * 6.5}vh`,
                                    width: 0,
                                    left: -60,
                                    margin: 10,
                                }}
                            >
                                {" "}
                                <div
                                    style={{
                                        backgroundColor: "WHITE",
                                        width: "120px",
                                        height: 30,
                                        borderRadius: 6,
                                        border: `1px solid #A6D04F `,
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    <div
                                        style={{
                                            backgroundColor: `${item.indicatorColor} `,
                                            width: 12,
                                            height: 12,
                                            borderRadius: 100,
                                            margin: "auto 10px",
                                        }}
                                    />
                                    <div
                                        style={{
                                            margin: "6px 0px",
                                        }}
                                    >
                                        {" "}
                                        {`${item.count} (${item.value}%)`}{" "}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.barLabel}>
                                {item.label} 
                               <LinkExternal/>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
};

export default CustomBarChart