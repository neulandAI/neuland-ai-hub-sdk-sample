import Cookies from "js-cookie";

export const getAuthToken = () => {
    return {
        service_token: Cookies.get("service-token"),
        access_token: Cookies.get("access-token"),
    };
};

export const removeAuthToken = () => {
    Cookies.remove("service-token");
    Cookies.remove("access-token");
};

export const setAuthToken = ({ service_token, access_token }: { service_token: string; access_token: string }) => {
    Cookies.set("service-token", service_token, {
        secure: true,
        sameSite: "None",
        expires: 1,
    });
    Cookies.set("access-token", access_token, {
        secure: true,
        sameSite: "None",
        expires: 1,
    });
};
