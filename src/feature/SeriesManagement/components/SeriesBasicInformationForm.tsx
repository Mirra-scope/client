import { DatePickerModal, TextField } from "@/components/Form";
import Elevator from "@/components/Tags/Elevator";
import { DevTool } from "@hookform/devtools";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Control, Controller, FieldErrors, UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { SeriesCreateFieldType } from "../types";

interface SeriesBasicInformationFormProps {
  register: UseFormRegister<SeriesCreateFieldType>;
  control: Control<SeriesCreateFieldType>;
  errors: FieldErrors<SeriesCreateFieldType>;
}

export default function SeriesBasicInformationForm({ register, control, errors }: SeriesBasicInformationFormProps) {
  const { t } = useTranslation();

  return (
    <Elevator padding={4} gap={2}>
      <Typography variant="h5">{t("Feature.SeriesManagement.SeriesBasicInformationForm.addBasicInformation")}</Typography>
      <Stack direction={{ md: "row", sm: "column" }} gap={2}>
        <TextField register={register} name="mediaTitle" label={t("Feature.SeriesManagement.SeriesBasicInformationForm.title")} helperText={errors.mediaTitle?.message} error={!!errors.mediaTitle} fullWidth required />
        <Controller control={control} name="mediaReleaseDate" rules={{ required: true }} render={({ field }) => <DatePickerModal onChange={(date) => field.onChange(date?.getTime())} inputRef={field.ref} value={new Date(field.value)} label={t("Feature.SeriesManagement.SeriesBasicInformationForm.releaseDate")} views={["year", "month"]} fullWidth />} />
      </Stack>
      <TextField register={register} name="mediaPlotSummary" label={t("Feature.SeriesManagement.SeriesBasicInformationForm.plotSummary")} helperText={errors.mediaPlotSummary?.message} error={!!errors.mediaPlotSummary} multiline rows={5} fullWidth required />
      <DevTool control={control} />
    </Elevator>
  );
}
