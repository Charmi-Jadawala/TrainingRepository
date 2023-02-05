<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  helpers,
} from "@vuelidate/validators";

export default {
  data() {
    return {
      FullName: "",
      Email: "",
      Subject: "",
      Message: "",
      errorMessage: "",
      submitted: false,
    };
  },
  validations: {
    FullName: {
      required: helpers.withMessage("This field is required", required),
      minLength: helpers.withMessage(
        "Full name must be 3 character long",
        minLength(3)
      ),
      maxLength: helpers.withMessage(
        "Full name must not be 50 character long",
        maxLength(50)
      ),
    },
    Subject: {
      required: helpers.withMessage("This field is required", required),
    },
    Message: {
      required: helpers.withMessage("This field is required", required),
    },
    Email: {
      required: helpers.withMessage("This field is required", required),
      email: helpers.withMessage("Please Enter correct Email Id.", email),
    },
  },
  methods: {
    handleSubmit: async function (e) {
      e.preventDefault();
      try {
        this.submitted = true;
        this.v$.$touch();
        if (this.v$.$invalid) {
          return;
        } else {
          try {
            const response = await axios
              .post("http://localhost:1339/api/generic-leads", {
                data: {
                  FullName: this.FullName,
                  Email: this.Email,
                  Message: this.Message,
                  Subject: this.Subject,
                },
              })
              .then((response) => {
                this.$tezRouter.push("/thank-you");
              });
          } catch (error) {
            window.alert("Something went wrong !!! \nPlease try again later.");
          }
        }
      } catch (error) {
        window.alert(err);
      }
    },
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  mounted() {
    console.log(this.$tezRouter.currentUrl);
  },
};
</script>
<template>
  <section class="section py-10">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <div
            class="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left md:justify-between"
          >
            <div class="mb-6">
              <h1 class="text-base font-medium mb-2">Email Address</h1>
              <a
                class="text-gray-400 text-sm font-medium"
                href="mailto:support.yourdomain@email.com"
                >support.yourdomain@email.com</a
              >
            </div>

            <div class="mb-6">
              <h1 class="text-base font-medium mb-2">Telephone</h1>
              <a
                class="text-gray-400 text-sm font-medium"
                href="tel:+(123) 456-7890"
                >+(123) 456-7890</a
              >
            </div>

            <div class="mb-6">
              <h1 class="text-base font-medium mb-2">Address</h1>
              <h1 class="text-gray-400 text-sm">
                09 Design Street, Downtown Victoria, Australia
              </h1>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2">
          <form
            method="post"
            v-on:submit="handleSubmit"
            name="contact"
            id="contactForm"
          >
            <p id="error-msg"></p>
            <div id="simple-msg"></div>
            <div class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name Input -->
                <div>
                  <input
                    type="text"
                    v-model="FullName"
                    name="name"
                    id="name"
                    class="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                    placeholder="Your Name"
                    maxlength="80"
                    v-model.trim="FullName"
                    @blur.native="v$.FullName.$touch()"
                    required
                  />
                  <div class="error mt-2">
                    <span
                      class="text-red-500 mt-2 text-sm"
                      v-if="v$.FullName.$errors.length !== 0"
                    >
                      {{ v$.FullName.$errors[0].$message }}
                    </span>
                  </div>
                </div>
                <!-- Email ID Input -->
                <div>
                  <input
                    type="email"
                    v-model="Email"
                    class="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    maxlength="100"
                    v-model.trim="Email"
                    @blur.native="v$.Email.$touch()"
                    required
                  />
                  <div class="error mt-2">
                    <span
                      class="text-red-500 mt-2 text-sm"
                      v-if="v$.Email.$errors.length !== 0"
                    >
                      {{ v$.Email.$errors[0].$message }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Subject Input -->
              <div>
                <input
                  type="text"
                  v-model="Subject"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  class="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                  maxlength="200"
                  v-model.trim="Subject"
                  @blur.native="v$.Subject.$touch()"
                />
                <div class="error mt-2">
                  <span
                    class="text-red-500 mt-2 text-sm"
                    v-if="v$.Subject.$errors.length !== 0"
                  >
                    {{ v$.Subject.$errors[0].$message }}
                  </span>
                </div>
              </div>

              <!-- Message Textarea Input -->
              <div>
                <textarea
                  class="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                  placeholder="Your Message"
                  v-model="Message"
                  name="comments"
                  id="comments"
                  rows="3"
                  spellcheck="false"
                  maxlength="2000"
                  v-model.trim="Message"
                  @blur.native="v$.Message.$touch()"
                ></textarea>
                <div class="error mt-2">
                  <span
                    class="text-red-500 mt-2 text-sm"
                    v-if="v$.Message.$errors.length !== 0"
                  >
                    {{ v$.Message.$errors[0].$message }}
                  </span>
                </div>
              </div>

              <!-- Form Submit Button -->
              <div class="text-right">
                <input
                  type="submit"
                  id="submit"
                  name="send"
                  class="py-4 px-6 rounded-full uppercase cursor-pointer text-sm transition-all bg-slate-800 hover:bg-black text-white"
                  value="Send Message"
                />
              </div>
            </div>
          </form>
          <!--end form-->
        </div>
      </div>
    </div>
  </section>
</template>
