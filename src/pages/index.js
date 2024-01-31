
import InformationRequirements from "@/components/InformationRequirements";
import BarChart from "@/Icons/BarChart";
import SideBarLayout from "@/Layouts/SideBarLayout";

export default function Component() {
    return (
        <SideBarLayout
            exportExcel={true}
            title={"Solicitudes de Información"}
            IconTitle={<BarChart iconTitle={true} />}
        >
            <InformationRequirements />
        </SideBarLayout>
    );
}
