import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Button, Box, TextField } from "@mui/material";

export function Form()
{
//   const {
//     refineCore: { onFinish, formLoading, query },
//     register,
//     handleSubmit,
//     saveButtonProps,
//   } = useForm({
//     refineCoreProps: {
//       resource: "people",
//       action: "create",
//     },
//   });

    return (
        <Edit>
            <Box component={"form"}>
                <TextField
                    name="name"
                    label = "Name"
                >
                </TextField>
                <TextField
                    name="number"
                    label = "Nunber"
                >
                </TextField>
            </Box>
        </Edit>
    )
}