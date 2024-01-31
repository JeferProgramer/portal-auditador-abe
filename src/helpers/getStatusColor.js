export const getStatusColor = (state) => {
  switch (state) {
    case "PENDIENTE":
      return "yellow";
    case "DEVUELTO":
      return "orange";
    case "APROVADO":
      return "#A6D04F";
    case "ENTREGADO":
      return "#15a8fa";
    case "VENCIDO":
      return "red";
    default:
      return "grey";
  }
};
