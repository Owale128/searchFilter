import { NextResponse } from "next/server";
import { Data } from "@/app/data/mockApi";


    export async function GET () {
        return NextResponse.json({data: Data.splice(0, 20)})
    }