<template>
  <Form :validation-schema="schema" @submit="onSubmit">
      <div class="profile__edit-input">
        <p>نام</p>
        <Field name="name" type="text" placeholder="نام" />
        <ErrorMessage name="name" class="text-danger" />
      </div>
      <div class="profile__edit-input">
        <p>ایمیل</p>
        <Field name="email" type="email" placeholder="ایمیل" />
        <ErrorMessage name="email" class="text-danger" />
      </div>
      <div class="profile__edit-input">
        <p>تلفن همراه</p>
        <Field name="phone" type="text" placeholder="تلفن همراه" />
        <ErrorMessage name="phone" class="text-danger" />
      </div>

      <div class="profile__edit-input">
        <button type="submit" class="os-btn os-btn-black w-100">بروزرسانی</button>
      </div>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field, Form, ErrorMessage, } from "vee-validate";
import * as yup from "yup";

export default defineComponent({
  components: { Field, Form, ErrorMessage },
  setup() {
    const schema = yup.object({
      name: yup.string().required().label("Name"),
      email: yup.string().required().email().label("Email"),
      phone: yup.string().required().min(11).label("Phone"),
     });

    function onSubmit(values: object,{resetForm}: {resetForm: () => void}) {
      alert(JSON.stringify(values, null, 2));
      resetForm()
    }
    return { schema, onSubmit };
  },
});
</script>

