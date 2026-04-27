"use server";

import { cookies } from "next/headers";

export const getServiceToken = async () => {
    const appId = process.env.NEXT_PUBLIC_AI_APP_ID;

    try {
        const cookieStore = await cookies();
        const accessToken = cookieStore.get("access-token")?.value;
        const response = await fetch(`${process.env.NEXT_PUBLIC_HUB_FRONTEND_URL}/api/hub/auth/exchange/token?app_id=${appId}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ app_id: appId }),
        });
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const getUserProfile = async () => {
    try {
        const serviceToken = await getServiceToken();
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${serviceToken}`,
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            console.error(`API error: ${response.status} ${response.statusText}`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}