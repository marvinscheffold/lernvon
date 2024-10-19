import { Image } from "@mui/icons-material";
import {
  Alert,
  Button,
  FormHelperText,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

export async function TeacherCreateMandatoryInformationPage() {
  return (
    <form className="py-14 flex flex-col gap-8">
      <Typography variant="h5">Mandatory Information</Typography>
      <div className="flex gap-4">
        <div className="flex-grow basis-0">
          <TextField
            className="w-full"
            helperText="For example: John Doe"
            label="Your name"
            required
          />
        </div>
        <div className="flex-grow basis-0">
          <Alert className="w-full" severity="info" variant="outlined">
            If students know your name, they feel more comfortable writing you a
            message.
          </Alert>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-grow basis-0">
          <TextField
            className="w-full"
            helperText="For example: 45 €"
            label="Your price per hour"
            required
            slotProps={{
              input: {
                endAdornment: <InputAdornment position="end">€</InputAdornment>,
              },
            }}
            type="number"
          />
        </div>
        <div className="flex-grow basis-0">
          <Alert className="w-full" severity="info" variant="outlined">
            By entering a price per hour students can better compare you to
            other teachers. Even if you dont offer 60min lessons, try to
            calculate what the price of a 60min lesson would be. You can add
            more prices and lesson durations in the "About" section.
          </Alert>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-grow basis-0 flex flex-col gap-3">
          <div className="flex flex-col">
            <div className="w-full aspect-video rounded-3xl border border-gray-200 flex items-center justify-center">
              <Image
                style={{ width: "56px", height: "56px" }}
                className="text-gray-200 text-4xl"
              />
            </div>
            <div className="ml-[14px]">
              <FormHelperText>
                Optimal size is 1600x900px, jpg, jpeg or png.
              </FormHelperText>
            </div>
          </div>
          <div>
            <Button variant="outlined">Select Image*</Button>
          </div>
        </div>
        <div className="flex-grow basis-0">
          <Alert className="w-full" severity="info" variant="outlined">
            Students feel much more comfortable contacting teachers with an
            image. Try uploading an image that shows you in or at a pool. Show
            your face and smile.
          </Alert>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-grow basis-0">
          <TextField
            className="w-full"
            helperText="For example: john.doe@gmail.com"
            label="Enter your email"
            required
            type="email"
          />
        </div>
        <div className="flex-grow basis-0">
          <Alert className="w-full" severity="info" variant="outlined">
            Students need at least one way to contact you. Thats why email is
            mandatory.
          </Alert>
        </div>
      </div>
    </form>
  );
}
