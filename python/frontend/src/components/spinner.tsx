"use client";

import { SpinnerGapIcon } from "@phosphor-icons/react";

function Spinner() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <SpinnerGapIcon size={24} weight="bold" className="animate-spin" />
        </div>
    );
}

export default Spinner;
