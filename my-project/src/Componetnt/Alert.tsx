import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Alert = ({ children }: Props) => {
  return (
    <section>
      <div className="alert alert-primary">{children}</div>
    </section>
  );
};
export default Alert;
