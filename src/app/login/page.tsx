'use client';
import Button from "@/components/Button";
import Card from "@/components/Card";
import Link from "next/link";

export default function Login() {
    return (
        // <Card>
        //     <p>prueba</p>
        //     <Form
        //         fields={
        //             [
        //                 {
        //                     name: 'Primer input',
        //                     type: FieldTypes.password
        //                 }
        //             ]
        //         }
        //     />
        // </Card>
        <Card>
            <Link href={`https://facebook.com/v${process.env.NEXT_PUBLIC_VERSION}.0/dialog/oauth?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_FRONT_URL}oauth&scope=whatsapp_business_messaging,whatsapp_business_management&response_type=code&response_mode=query&state=m0boobvza0c&nonce=9fs96dpwxif`}>
                <Button onClick={() => null}>Logear con facebook</Button>
            </Link>
        </Card>
    )
}