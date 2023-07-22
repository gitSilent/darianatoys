import { NavigateFunction, useNavigate } from "react-router-dom";

export function NavigateFunc(navLink: string) {
    const navigate = useNavigate();
    navigate(navLink)
}