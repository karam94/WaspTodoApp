import { RouteComponentProps } from "react-router-dom";

const HealthPage = (props: RouteComponentProps<{ name?: string }>) => {
  return (
    <div>
      {props.match.params.name
        ? `Hello ${props.match.params.name}!`
        : "Hello World"}
      !
    </div>
  );
};

export default HealthPage;
