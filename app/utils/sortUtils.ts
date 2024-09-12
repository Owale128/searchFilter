import { IPerson } from "../model/IPerson";

export const sortDataByFirstName = (data: IPerson[], asc: boolean) => {

        return [...data].sort((a, b) => {
            return asc ? a.first_name.localeCompare(b.first_name) : b.first_name.localeCompare(a.first_name)
        })
}