<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    menuToggle() {
      const menu = document.getElementById("menu");
      const ulMenu = document.getElementById("ulMenu");

      menu.classList.toggle("navbar-show");
    },
    activateLink(event, selected) {
      const self = this;
      self.selected = selected;
    },
  },
  mounted() {
    this.selected = this.$tezRouter.currentUrl;
    this.selected = this.selected.slice(1);
  },
};
</script>

<template>
  <div class="flex flex-col">
    <nav id="nav" class="py-8 md:border-b-0 border-b" role="navigation">
      <div
        class="container flex flex-wrap items-center md:flex-no-wrap custom-margin"
      >
        <tez-link
          to="/"
          title="Home"
          :class="{ active: selected === 'home' }"
          @click="activateLink($event, 'home')"
          class="flex"
          ><img width="46" src="@icon/icofont/icons/deer-head.svg"
        /></tez-link>
        <div class="ml-auto md:hidden">
          <button
            @click="menuToggle()"
            class="flex items-center rounded"
            type="button"
          >
            <img width="36" src="/images/menu.png" />
          </button>
        </div>
        <div
          id="menu"
          class="w-full md:w-auto h-0 transition-all ease-out duration-300 md:transition-none md:flex-grow md:flex md:items-center opacity-0 md:opacity-100"
        >
          <ul
            id="ulMenu"
            class="flex flex-col duration-300 ease-out sm:transition-none md:flex-row ml-auto mt-5 md:mt-0"
          >
            <li>
              <tez-link
                to="/"
                title="Home"
                :class="{ active: selected === 'home' }"
                @click="activateLink($event, 'home')"
                class="lg:px-6 font-medium font-secondary block text-black/70 hover:text-blue-500 p-3 uppercase text-sm"
                >Home</tez-link
              >
            </li>
            <li>
              <tez-link
                to="/about"
                title="About"
                :class="{ active: selected === 'about' }"
                @click="activateLink($event, 'about')"
                class="lg:px-6 font-medium font-secondary block text-black/70 hover:text-blue-500 p-3 uppercase text-sm"
                >About</tez-link
              >
            </li>
            <li>
              <tez-link
                to="/service"
                title="Service"
                :class="{ active: selected === 'service' }"
                @click="activateLink($event, 'service')"
                class="lg:px-6 font-medium font-secondary block text-black/70 hover:text-blue-500 p-3 uppercase text-sm"
                >Service</tez-link
              >
            </li>
            <li>
              <tez-link
                to="/work"
                title="Work"
                :class="{ active: selected === 'work' }"
                @click="activateLink($event, 'work')"
                class="lg:px-6 font-medium font-secondary block text-black/70 hover:text-blue-500 p-3 uppercase text-sm"
                >Work</tez-link
              >
            </li>
            <li>
              <tez-link
                to="/blog"
                title="Blog"
                :class="{ active: selected === 'blog' }"
                @click="activateLink($event, 'blog')"
                class="lg:px-6 font-medium font-secondary block text-black/70 hover:text-blue-500 p-3 uppercase text-sm"
                >Blog</tez-link
              >
            </li>
            <li>
              <tez-link
                to="/contact"
                title="Contact"
                :class="{ active: selected === 'contact' }"
                @click="activateLink($event, 'contact')"
                class="lg:px-6 font-medium font-secondary block text-black/70 hover:text-blue-500 p-3 uppercase text-sm"
                >Contact</tez-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style lang="css">
.toggle-menu:checked ~ div {
  display: block !important;
}
.custom-margin {
  width: 1200px;
  margin: 0 auto;
}
.navbar-show {
  height: 15.75rem !important;
  opacity: 1 !important;
}
.active {
  --tw-text-opacity: 1 !important;
  color: rgb(59 130 246 / var(--tw-text-opacity)) !important;
}
</style>