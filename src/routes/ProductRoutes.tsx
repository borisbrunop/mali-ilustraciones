import { Route, Navigate } from "react-router-dom";
import useMainContext from "../hook/useMainContext";

interface Props {
    children: JSX.Element[] | JSX.Element,
    exact: boolean,
    path: string
  }

export default function ProductRoutes({ children, ...rest }: Props) {
    const c = useMainContext()
  return (
    <Route
        {...rest}
        element={c.states.country ? children : <Navigate to="/products" replace />}
    />
  );
}