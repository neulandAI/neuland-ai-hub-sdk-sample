import { getServiceToken } from "@/app/actions";
import ApiTester from "./ApiTester";

async function HomePage() {
    const serviceTokenResponse = await getServiceToken();
    
    if (!serviceTokenResponse) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-xl font-medium text-destructive mb-2">Authentication Error</h1>
                    <p className="text-muted-foreground">Failed to get service token. Please login again.</p>
                </div>
            </div>
        );
    }
    
    return (
        <div className="w-full h-full flex flex-col">
            <ApiTester serviceToken={serviceTokenResponse} />
        </div>
    );
}

export default HomePage;
