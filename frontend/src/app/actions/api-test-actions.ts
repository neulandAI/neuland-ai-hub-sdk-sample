"use server";

export const getUserProfile = async (serviceToken: string) => {
    try {
        const response = await fetch("http://localhost:9999/users/me", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${serviceToken}`,
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            return {
                success: false,
                error: `Error ${response.status}: ${errorText}`
            };
        }

        const data = await response.json();
        return {
            success: true,
            data
        };
    } catch (error) {
        return {
            success: false,
            error: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`
        };
    }
};

export const getLlmModels = async (serviceToken: string) => {
    try {
        const response = await fetch("http://localhost:9999/llm/models", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${serviceToken}`,
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            return {
                success: false,
                error: `Error ${response.status}: ${errorText}`
            };
        }

        const data = await response.json();
        return {
            success: true,
            data
        };
    } catch (error) {
        return {
            success: false,
            error: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`
        };
    }
};

export const createAssistant = async (
    serviceToken: string,
    name: string,
    provider: string,
    model: string,
    description?: string
) => {
    try {
        const payload: any = { name, provider, model };
        if (description) {
            payload.description = description;
        }

        const response = await fetch("http://localhost:9999/assistants", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${serviceToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorText = await response.text();
            return {
                success: false,
                error: `Error ${response.status}: ${errorText}`
            };
        }

        const data = await response.json();
        return {
            success: true,
            data
        };
    } catch (error) {
        return {
            success: false,
            error: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`
        };
    }
};
