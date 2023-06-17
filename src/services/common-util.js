import { toast } from "react-hot-toast"

export const errorHandler = (error) => {
    console.error(error)
    toast.error("Something Went Wrong, Try Later.")
}
