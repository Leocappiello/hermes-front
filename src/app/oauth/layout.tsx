import { Suspense } from "react";

export default function OAuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return(
        <div>
            <Suspense>{children}</Suspense>
        </div>
    )
}