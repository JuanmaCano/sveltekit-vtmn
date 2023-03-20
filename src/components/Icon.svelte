<script>
  //export let color = "green"
  export let icon = ""
  export let width = ""
  export let height = ""
</script>

<!-- External img: all works !!  -->

<img
  src={`/node_modules/@vtmn/icons/dist/vitamix/svg/${icon}.svg`}
  alt={icon}
  {width}
  {height}
/>