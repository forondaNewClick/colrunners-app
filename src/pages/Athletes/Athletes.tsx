import { Card } from "../../styled-component/Form/Form";
import TableAthlete from "./TableAthlete";

const Athletes = () => {
  return (
    <Card height="55vh" borderRadius="16px" className="mt-5">
      <h3>Atletas</h3>
      <TableAthlete />
    </Card>
  );
};
export default Athletes;
