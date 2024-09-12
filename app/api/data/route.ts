import { NextResponse } from "next/server";
import { Data } from "@/app/data/mockApi";
import { IPerson } from "@/app/model/IPerson";


    export async function GET (req: Request) {
        const { searchParams } = new URL(req.url);

        const query = searchParams.get('q') || ''

        const keys = ['first_name', 'last_name', 'email']

        const search = (data: IPerson []) => {
          return data.filter((person) => keys.some((key) => {
                const value = (person[key as keyof IPerson] as string)
                return value.toLocaleLowerCase().includes(query.toLocaleLowerCase())
              }) 
            )
        }

        const filteredData = search(Data).splice(0, 20)

        return NextResponse.json({data: filteredData})
    }