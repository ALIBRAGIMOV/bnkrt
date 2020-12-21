<template>
  <div>
    <el-form  label-width="120px"
              style="max-width: 1200px; margin: auto; justify-content: center; "

    >
      <NameInput />
      <ZonePicker/>
      <TimePickers/>
      <DeliverySwitch/>
      <ActivityType/>
      <ResourcesRadio/>
      <ActivityFormInput/>
      <el-form-item>
        <CreateButton/>
        <CancelButton/>
        <ResetButton/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import NameInput from "@/components/FormInputs/NameInput";
import ZonePicker from "@/components/FormInputs/ZonePicker";
import TimePickers from "@/components/FormInputs/TimePickers";
import DeliverySwitch from "@/components/FormInputs/DeliverySwitch";
import ActivityType from "@/components/FormInputs/ActivityType";
import ResourcesRadio from "@/components/FormInputs/ResourcesRadio";
import ActivityFormInput from "@/components/FormInputs/ActivityFormInput";
import CreateButton from "@/components/FormInputs/CreateButton";
import CancelButton from "@/components/FormInputs/CancelButton";
import ResetButton from "@/components/FormInputs/ResetButton";
export default {
  name: "Forms",
  components: {
    ResetButton,
    CancelButton,
    CreateButton,
    ActivityFormInput,
    ResourcesRadio,
    ActivityType,
    DeliverySwitch,
    TimePickers,
    ZonePicker,
    NameInput},
}



</script>