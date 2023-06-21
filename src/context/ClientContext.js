import { createContext } from "react";
import Client from "../client/client";


export const ClientContext = createContext(new Client());
