'use client';

import { useSearchParams } from "next/navigation";

export default function OAuth() {
    const searchParams = useSearchParams();

    return (
        <div>
            OAUTH
            <p>{searchParams.toString()}</p>
        </div>
    )
}